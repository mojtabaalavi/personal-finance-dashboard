import { describe, it, expect, vi, beforeEach } from 'vitest';
import { getDashboardKpis, getTaxSummary, getIncomeExpenseTrend } from '../controllers/reportController';
import * as dataService from '../services/dataService';
import { Response } from 'express';
import { AuthRequest } from '../middleware/authMiddleware';

vi.mock('../services/dataService', () => ({
  fetchTransactions: vi.fn(),
  fetchAccounts: vi.fn(),
  fetchAssets: vi.fn(),
  fetchLiabilities: vi.fn(),
  fetchRentalAgreements: vi.fn(),
}));

describe('Report Controller', () => {
  let mockRequest: Partial<AuthRequest>;
  let mockResponse: Partial<Response>;
  const mockToken = 'mock-token';

  beforeEach(() => {
    vi.clearAllMocks();
    mockRequest = {
      headers: { authorization: `Bearer ${mockToken}` }
    };
    mockResponse = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn().mockReturnThis(),
    };
  });

  describe('getDashboardKpis', () => {
    it('should aggregate KPI data correctly', async () => {
      const now = new Date();
      const transactions = [
        { date: now.toISOString(), amount: '1000', type: 'INCOME' },
        { date: now.toISOString(), amount: '500', type: 'EXPENSE' },
      ];
      const accounts = [{ balance: '5000' }];
      const assets = [{ value: '200000' }];
      const liabilities = [{ amount: '50000' }];

      vi.spyOn(dataService, 'fetchTransactions').mockResolvedValue(transactions);
      vi.spyOn(dataService, 'fetchAccounts').mockResolvedValue(accounts);
      vi.spyOn(dataService, 'fetchAssets').mockResolvedValue(assets);
      vi.spyOn(dataService, 'fetchLiabilities').mockResolvedValue(liabilities);

      await getDashboardKpis(mockRequest as AuthRequest, mockResponse as Response);

      expect(mockResponse.json).toHaveBeenCalledWith(expect.objectContaining({
        monthlyIncome: 1000,
        monthlyExpense: 500,
        netWorth: (5000 + 200000) - 50000
      }));
    });
  });

  describe('getTaxSummary', () => {
    it('should calculate rental property profit for NZ financial year', async () => {
      const now = new Date();
      // Ensure we are in a predictable date for FY logic (e.g. June)
      const testDate = new Date(now.getFullYear(), 5, 15);
      vi.useFakeTimers();
      vi.setSystemTime(testDate);

      const transactions = [
        { date: testDate.toISOString(), amount: '2000', type: 'INCOME', linkedAssetId: 'p1' },
        { date: testDate.toISOString(), amount: '500', type: 'EXPENSE', linkedAssetId: 'p1' },
      ];
      const assets = [{ id: 'p1', name: 'Rental 1', type: 'PROPERTY_RENTAL', address: '123 St' }];

      vi.spyOn(dataService, 'fetchTransactions').mockResolvedValue(transactions);
      vi.spyOn(dataService, 'fetchAssets').mockResolvedValue(assets);
      vi.spyOn(dataService, 'fetchRentalAgreements').mockResolvedValue([]);

      await getTaxSummary(mockRequest as AuthRequest, mockResponse as Response);

      expect(mockResponse.json).toHaveBeenCalledWith(expect.arrayContaining([
        expect.objectContaining({ propertyName: 'Rental 1', netProfit: 1500 })
      ]));

      vi.useRealTimers();
    });
  });
});
