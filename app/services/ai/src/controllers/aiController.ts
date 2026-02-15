import { Request, Response } from 'express';
import { suggestCategory } from '../services/aiCategorizationService';
import { chatWithAI } from '../services/ollamaService';

export const categorizeTransaction = async (req: Request, res: Response) => {
  const { description, categories } = req.body;
  if (!description || !categories) {
    return res.status(400).json({ error: 'Description and categories list required' });
  }

  try {
    const suggestion = await suggestCategory(description, categories);
    res.json({ suggestion });
  } catch (error) {
    res.status(500).json({ error: 'AI Categorization failed' });
  }
};

export const chat = async (req: Request, res: Response) => {
  const { messages } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Messages array required' });
  }

  try {
    const response = await chatWithAI(messages);
    res.json({ response });
  } catch (error) {
    res.status(500).json({ error: 'AI Chat failed' });
  }
};
