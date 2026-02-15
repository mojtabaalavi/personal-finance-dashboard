import { describe, it, expect, vi, beforeEach } from 'vitest';
import { parseCSV, parseXLSX } from '../utils/parsers';
import fs from 'fs';
import * as xlsx from 'xlsx';

vi.mock('fs');
vi.mock('xlsx', () => ({
  readFile: vi.fn(),
  utils: {
    sheet_to_json: vi.fn(),
  },
}));

describe('Finance Parsers', () => {
  const mockConfig = {
    hasHeader: true,
    dateColumn: 'Date',
    descriptionColumn: 'Payee',
    amountColumn: 'Amount',
  };

  describe('parseCSV', () => {
    it('should correctly parse CSV content', async () => {
      const csvData = 'Date,Payee,Amount\n2023-01-01,Supermarket,-50.00\n';
      vi.spyOn(fs, 'readFileSync').mockReturnValue(csvData);

      const result = await parseCSV('dummy.csv', mockConfig);

      expect(result).toHaveLength(1);
      expect(result[0]).toEqual({
        date: '2023-01-01',
        description: 'Supermarket',
        amount: -50.00,
        rawText: JSON.stringify({ Date: '2023-01-01', Payee: 'Supermarket', Amount: '-50.00' }),
      });
    });
  });

  describe('parseXLSX', () => {
    it('should correctly parse XLSX content', () => {
      const mockRows = [
        { Date: '2023-01-02', Payee: 'Rent', Amount: -1000.00 },
      ];
      
      (xlsx.readFile as any).mockReturnValue({
        SheetNames: ['Sheet1'],
        Sheets: { Sheet1: {} },
      });
      (xlsx.utils.sheet_to_json as any).mockReturnValue(mockRows);

      const result = parseXLSX('dummy.xlsx', mockConfig);

      expect(result).toHaveLength(1);
      expect(result[0].description).toBe('Rent');
      expect(result[0].amount).toBe(-1000.00);
    });
  });
});
