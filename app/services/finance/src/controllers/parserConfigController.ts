import { Response } from 'express';
import { AuthRequest } from '../middleware/authMiddleware';
import prisma from '../utils/db';

// List All Configs
export const getParserConfigs = async (req: AuthRequest, res: Response) => {
  try {
    const configs = await prisma.parserConfig.findMany({
      include: { bankAccount: { select: { name: true, accountNumber: true } } }
    });
    res.json(configs);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch parser configs' });
  }
};

// Create Config
export const createParserConfig = async (req: AuthRequest, res: Response) => {
  const { name, bankName, bankAccountId, rules, isActive } = req.body;
  try {
    const config = await prisma.parserConfig.create({
      data: {
        name,
        bankName,
        bankAccountId,
        rules: rules || {},
        isActive: isActive !== undefined ? isActive : true
      }
    });
    res.status(201).json(config);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create parser config' });
  }
};

// Update Config
export const updateParserConfig = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  const { name, bankName, bankAccountId, rules, isActive } = req.body;
  try {
    if (!id) {
       res.status(400).json({ error: 'ID is required' });
       return;
    }
    const config = await prisma.parserConfig.update({
      where: { id: id as string },
      data: {
        name,
        bankName,
        bankAccountId,
        rules,
        isActive
      }
    });
    res.json(config);
  } catch (error) {
    res.status(400).json({ error: 'Update failed' });
  }
};

// Delete Config
export const deleteParserConfig = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  try {
    if (!id) {
       res.status(400).json({ error: 'ID is required' });
       return;
    }
    await prisma.parserConfig.delete({ where: { id: id as string } });
    res.json({ message: 'Parser configuration deleted' });
  } catch (error) {
    res.status(400).json({ error: 'Delete failed' });
  }
};
