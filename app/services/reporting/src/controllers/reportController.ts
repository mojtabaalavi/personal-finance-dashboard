import { Response } from 'express';
import { AuthRequest } from '../middleware/authMiddleware';
import * as dataService from '../services/dataService';
import { startOfMonth, endOfMonth, subMonths, isWithinInterval, startOfYear } from 'date-fns';

export const getDashboardKpis = async (req: AuthRequest, res: Response) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const [transactions, accounts, assets, liabilities] = await Promise.all([
      dataService.fetchTransactions(token),
      dataService.fetchAccounts(token),
      dataService.fetchAssets(token),
      dataService.fetchLiabilities(token)
    ]);

    const now = new Date();
    const currentMonth = { start: startOfMonth(now), end: endOfMonth(now) };

    const income = transactions
      .filter((t: any) => t.type === 'INCOME' && isWithinInterval(new Date(t.date), currentMonth))
      .reduce((sum: number, t: any) => sum + parseFloat(t.amount), 0);

    const expense = transactions
      .filter((t: any) => t.type === 'EXPENSE' && isWithinInterval(new Date(t.date), currentMonth))
      .reduce((sum: number, t: any) => sum + Math.abs(parseFloat(t.amount)), 0);

    const totalBalance = accounts.reduce((sum: number, a: any) => sum + parseFloat(a.balance), 0);
    const totalAssets = assets.reduce((sum: number, a: any) => sum + parseFloat(a.value), 0);
    const totalLiabilities = liabilities.reduce((sum: number, l: any) => sum + parseFloat(l.amount), 0);

    res.json({
      monthlyIncome: income,
      monthlyExpense: expense,
      savings: income - expense,
      netWorth: (totalBalance + totalAssets) - totalLiabilities,
      totalBalance,
      totalAssets,
      totalLiabilities
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to aggregate KPI data' });
  }
};

export const getIncomeExpenseTrend = async (req: AuthRequest, res: Response) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const transactions = await dataService.fetchTransactions(token);
    const months = 12;
    const trend = [];

    for (let i = months - 1; i >= 0; i--) {
      const date = subMonths(new Date(), i);
      const interval = { start: startOfMonth(date), end: endOfMonth(date) };

      const income = transactions
        .filter((t: any) => t.type === 'INCOME' && isWithinInterval(new Date(t.date), interval))
        .reduce((sum: number, t: any) => sum + parseFloat(t.amount), 0);

      const expense = transactions
        .filter((t: any) => t.type === 'EXPENSE' && isWithinInterval(new Date(t.date), interval))
        .reduce((sum: number, t: any) => sum + Math.abs(parseFloat(t.amount)), 0);

      trend.push({
        month: interval.start.toLocaleString('default', { month: 'short' }),
        income,
        expense
      });
    }

    res.json(trend);
  } catch (error) {
    res.status(500).json({ error: 'Failed to aggregate trend data' });
  }
};

export const getTaxSummary = async (req: AuthRequest, res: Response) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const [transactions, assets, agreements] = await Promise.all([
      dataService.fetchTransactions(token),
      dataService.fetchAssets(token),
      dataService.fetchRentalAgreements(token)
    ]);

    // Financial Year (1 Apr to 31 Mar)
    // Basic logic for current financial year
    const now = new Date();
    const currentYear = now.getFullYear();
    const fyStart = new Date(now.getMonth() >= 3 ? currentYear : currentYear - 1, 3, 1);
    const fyEnd = new Date(now.getMonth() >= 3 ? currentYear + 1 : currentYear, 2, 31);
    const fyInterval = { start: fyStart, end: fyEnd };

    const rentalProperties = assets.filter((a: any) => a.type === 'PROPERTY_RENTAL');
    const report = rentalProperties.map((p: any) => {
      const propertyTransactions = transactions.filter((t: any) => 
        t.linkedAssetId === p.id && isWithinInterval(new Date(t.date), fyInterval)
      );

      const income = propertyTransactions
        .filter((t: any) => t.type === 'INCOME')
        .reduce((sum: number, t: any) => sum + parseFloat(t.amount), 0);

      const expense = propertyTransactions
        .filter((t: any) => t.type === 'EXPENSE')
        .reduce((sum: number, t: any) => sum + Math.abs(parseFloat(t.amount)), 0);

      return {
        propertyName: p.name,
        address: p.address,
        grossIncome: income,
        totalExpenses: expense,
        netProfit: income - expense
      };
    });

    res.json(report);
  } catch (error) {
    res.status(500).json({ error: 'Failed to aggregate tax data' });
  }
};
