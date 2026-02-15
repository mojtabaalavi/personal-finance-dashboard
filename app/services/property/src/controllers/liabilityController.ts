import { Response } from 'express';
import { AuthRequest } from '../middleware/authMiddleware';
import prisma from '../utils/db';

export const getLiabilities = async (req: AuthRequest, res: Response) => {
  try {
    const liabilities = await prisma.liability.findMany({
      include: { asset: true }
    });
    res.json(liabilities);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch liabilities' });
  }
};

export const createLiability = async (req: AuthRequest, res: Response) => {
  try {
    const { name, type, amount, interestRate, fixExpiry, assetId } = req.body;
    const liability = await prisma.liability.create({
      data: { 
        name, 
        type, 
        amount, 
        interestRate, 
        fixExpiry: fixExpiry ? new Date(fixExpiry) : null,
        assetId 
      }
    });
    res.status(201).json(liability);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create liability' });
  }
};

export const updateLiability = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid ID' });

  const { amount, interestRate } = req.body;
  try {
    const old = await prisma.liability.findUnique({ where: { id } });
    if (!old) return res.status(404).json({ error: 'Liability not found' });

    // History tracking
    if (amount !== undefined && amount !== old.amount.toNumber()) {
      await prisma.liabilityHistory.create({
        data: {
          liabilityId: id,
          amount: old.amount,
          interestRate: old.interestRate,
          changedBy: req.user?.id || 'SYSTEM'
        }
      });
    }

    const updated = await prisma.liability.update({
      where: { id },
      data: { amount, interestRate }
    });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update liability' });
  }
};
