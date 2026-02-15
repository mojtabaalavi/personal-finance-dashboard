import { Response } from 'express';
import { AuthRequest } from '../middleware/authMiddleware';
import prisma from '../utils/db';
import { parseCSV, parseXLSX } from '../utils/parsers';
import fs from 'fs';
import { categorizeTransaction } from '../services/categorizationService';

export const uploadAndPreview = async (req: AuthRequest, res: Response) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  const { bankAccountId, parserConfigId } = req.body;

  try {
    const config = await prisma.parserConfig.findUnique({ where: { id: parserConfigId } });
    if (!config) return res.status(400).json({ error: 'Invalid parser config' });

    let transactions = [];
    if (req.file.mimetype === 'text/csv' || req.file.originalname.endsWith('.csv')) {
      transactions = await parseCSV(req.file.path, config.rules);
    } else {
      transactions = parseXLSX(req.file.path, config.rules);
    }

    // De-duplication check
    const existing = await prisma.transaction.findMany({
      where: { bankAccountId },
      take: 50,
      orderBy: { date: 'desc' }
    });

    const preview = await Promise.all(transactions.map(async t => {
      const isDuplicate = existing.some(e => 
        new Date(e.date).getTime() === new Date(t.date).getTime() && 
        e.amount.toNumber() === t.amount &&
        e.description === t.description
      );

      const categoryInfo = await categorizeTransaction(t.description);

      return {
        ...t,
        isPossibleDuplicate: isDuplicate,
        categoryId: categoryInfo.categoryId,
        subCategoryId: categoryInfo.subCategoryId
      };
    }));

    res.json({ fileName: req.file.originalname, transactions: preview });
  } catch (error) {
    res.status(500).json({ error: 'Failed to process file' });
  } finally {
    if (req.file) fs.unlinkSync(req.file.path);
  }
};

export const commitImport = async (req: AuthRequest, res: Response) => {
  const { bankAccountId, transactions } = req.body;
  try {
    const created = await prisma.transaction.createMany({
      data: transactions.map((t: any) => ({
        date: new Date(t.date),
        description: t.description,
        amount: t.amount,
        bankAccountId,
        type: t.amount > 0 ? 'INCOME' : 'EXPENSE'
      }))
    });
    res.json({ message: 'Import successful', count: created.count });
  } catch (error) {
    res.status(400).json({ error: 'Failed to commit import' });
  }
};
