import { Response } from 'express';
import { AuthRequest } from '../middleware/authMiddleware';
import prisma from '../utils/db';

export const getTransactions = async (req: AuthRequest, res: Response) => {
  const { bankAccountId, categoryId, startDate, endDate } = req.query;
  try {
    const transactions = await prisma.transaction.findMany({
      where: {
        bankAccountId: bankAccountId as string || undefined,
        categoryId: categoryId as string || undefined,
        date: {
          gte: startDate ? new Date(startDate as string) : undefined,
          lte: endDate ? new Date(endDate as string) : undefined,
        }
      },
      include: {
        bankAccount: true,
        category: true,
        subCategory: true
      },
      orderBy: { date: 'desc' }
    });
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch transactions' });
  }
};

export const createTransaction = async (req: AuthRequest, res: Response) => {
  try {
    const { date, amount, description, type, bankAccountId, categoryId, subCategoryId } = req.body;
    const transaction = await prisma.transaction.create({
      data: {
        date: new Date(date),
        amount,
        description,
        type,
        bankAccountId,
        categoryId,
        subCategoryId
      }
    });
    res.status(201).json(transaction);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create transaction' });
  }
};

export const updateTransaction = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid ID' });

  const { categoryId, subCategoryId, amount } = req.body;
  try {
    const old = await prisma.transaction.findUnique({ where: { id } });
    if (!old) return res.status(404).json({ error: 'Transaction not found' });

    // History
    await prisma.transactionHistory.create({
      data: {
        transactionId: id,
        categoryId: old.categoryId,
        subCategoryId: old.subCategoryId,
        amount: old.amount,
        changedBy: req.user?.id || 'SYSTEM'
      }
    });

    const updated = await prisma.transaction.update({
      where: { id },
      data: { categoryId, subCategoryId, amount }
    });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update transaction' });
  }
};
