import { Response } from 'express';
import { AuthRequest } from '../middleware/authMiddleware';
import prisma from '../utils/db';

export const getAssets = async (req: AuthRequest, res: Response) => {
  try {
    const assets = await prisma.asset.findMany({
      include: { liabilities: true, agreements: true, insurances: true }
    });
    res.json(assets);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch assets' });
  }
};

export const createAsset = async (req: AuthRequest, res: Response) => {
  try {
    const { name, type, value, owner, address } = req.body;
    const asset = await prisma.asset.create({
      data: { name, type, value, owner, address }
    });
    res.status(201).json(asset);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create asset' });
  }
};

export const updateAsset = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid ID' });

  const { name, value, address } = req.body;
  try {
    const old = await prisma.asset.findUnique({ where: { id } });
    if (!old) return res.status(404).json({ error: 'Asset not found' });

    // History tracking for value changes
    if (value !== undefined && value !== old.value.toNumber()) {
      await prisma.assetHistory.create({
        data: {
          assetId: id,
          value: old.value,
          changedBy: req.user?.id || 'SYSTEM'
        }
      });
    }

    const updated = await prisma.asset.update({
      where: { id: id as string },
      data: { name, value, address }
    });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update asset' });
  }
};

export const deleteAsset = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid ID' });

  try {
    await prisma.asset.delete({ where: { id: id as string } });
    res.json({ message: 'Asset deleted' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to delete asset' });
  }
};
