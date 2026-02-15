import { Response } from 'express';
import { AuthRequest } from '../middleware/authMiddleware';
import prisma from '../utils/db';

export const getAccountTypes = async (req: AuthRequest, res: Response) => {
  try {
    const types = await prisma.bankAccountType.findMany();
    res.json(types);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch account types' });
  }
};

export const getAccounts = async (req: AuthRequest, res: Response) => {
  try {
    const accounts = await prisma.bankAccount.findMany({
      include: { type: true }
    });
    res.json(accounts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch accounts' });
  }
};

export const createAccount = async (req: AuthRequest, res: Response) => {
  try {
    const { name, accountNumber, bankName, typeId, balance } = req.body;
    const account = await prisma.bankAccount.create({
      data: {
        name,
        accountNumber,
        bankName,
        typeId,
        balance: balance || 0
      }
    });
    res.status(201).json(account);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create account' });
  }
};

export const updateAccount = async (req: AuthRequest, res: Response) => {
  const { id } = req.params;
  if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid ID' });
  
  const { name, balance } = req.body;
  try {
    const oldAccount = await prisma.bankAccount.findUnique({ where: { id } });
    if (!oldAccount) return res.status(404).json({ error: 'Account not found' });

    // History
    if (balance !== undefined && balance !== oldAccount.balance.toNumber()) {
      await prisma.bankAccountHistory.create({
        data: {
          bankAccountId: id,
          balance: oldAccount.balance,
          changedBy: req.user?.id || 'SYSTEM'
        }
      });
    }

    const account = await prisma.bankAccount.update({
      where: { id },
      data: { name, balance }
    });
    res.json(account);
  } catch (error) {
    res.status(400).json({ error: 'Failed to update account' });
  }
};
