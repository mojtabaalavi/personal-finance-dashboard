import { Response } from 'express';
import { AuthRequest } from '../middleware/authMiddleware';
import prisma from '../utils/db';

export const getAgreements = async (req: AuthRequest, res: Response) => {
  try {
    const agreements = await prisma.rentalAgreement.findMany({
      include: { asset: true }
    });
    res.json(agreements);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch agreements' });
  }
};

export const createAgreement = async (req: AuthRequest, res: Response) => {
  try {
    const { tenantName, rentAmount, frequency, startDate, endDate, assetId, matchKeywords } = req.body;
    const agreement = await prisma.rentalAgreement.create({
      data: {
        tenantName,
        rentAmount,
        frequency,
        startDate: new Date(startDate),
        endDate: endDate ? new Date(endDate) : null,
        assetId,
        matchKeywords: matchKeywords || []
      }
    });
    res.status(201).json(agreement);
  } catch (error) {
    res.status(400).json({ error: 'Failed to create agreement' });
  }
};

export const matchRentTransactions = async (req: AuthRequest, res: Response) => {
  const { agreementId, transactions } = req.body; // transactions is an array of objects { id, description }
  
  try {
    const agreement = await prisma.rentalAgreement.findUnique({ where: { id: agreementId } });
    if (!agreement) return res.status(404).json({ error: 'Agreement not found' });

    const keywords = agreement.matchKeywords;
    const matches = transactions.filter((t: any) => 
      keywords.some(kw => t.description.toLowerCase().includes(kw.toLowerCase()))
    );

    res.json({ matches });
  } catch (error) {
    res.status(500).json({ error: 'Rent matching failed' });
  }
};
