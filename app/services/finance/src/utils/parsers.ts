import Papa from 'papaparse';
import * as xlsx from 'xlsx';
import fs from 'fs';

export interface RawTransaction {
  date: string;
  description: string;
  amount: number;
  rawText?: string;
}

export const parseCSV = (filePath: string, config: any): Promise<RawTransaction[]> => {
  return new Promise((resolve, reject) => {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    Papa.parse(fileContent, {
      header: config.hasHeader,
      skipEmptyLines: true,
      complete: (results) => {
        const transactions = results.data.map((row: any) => {
          // Mapping logic based on config
          return {
            date: row[config.dateColumn],
            description: row[config.descriptionColumn],
            amount: parseFloat(row[config.amountColumn]),
            rawText: JSON.stringify(row)
          };
        });
        resolve(transactions);
      },
      error: (error: any) => reject(error)
    });
  });
};

export const parseXLSX = (filePath: string, config: any): RawTransaction[] => {
  const workbook = xlsx.readFile(filePath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const data = xlsx.utils.sheet_to_json(worksheet);

  return data.map((row: any) => ({
    date: row[config.dateColumn],
    description: row[config.descriptionColumn],
    amount: parseFloat(row[config.amountColumn]),
    rawText: JSON.stringify(row)
  }));
};
