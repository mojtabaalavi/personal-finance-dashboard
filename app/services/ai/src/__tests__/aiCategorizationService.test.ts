import { describe, it, expect, vi, beforeEach } from 'vitest';
import * as ollamaService from '../services/ollamaService';
import { suggestCategory } from '../services/aiCategorizationService';

vi.mock('../services/ollamaService', () => ({
  generateCompletion: vi.fn(),
}));

describe('AI Categorization Service', () => {
  const dummyCategories = ['Food & Drink', 'Rent', 'Utilities', 'Uncategorized'];

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should return a suggested category', async () => {
    vi.spyOn(ollamaService, 'generateCompletion').mockResolvedValue('Food & Drink');

    const result = await suggestCategory('COUNTDOWN AUCKLAND', dummyCategories);

    expect(result).toBe('Food & Drink');
    expect(ollamaService.generateCompletion).toHaveBeenCalledWith(expect.stringContaining('COUNTDOWN AUCKLAND'));
  });

  it('should return trimmed suggestion', async () => {
    vi.spyOn(ollamaService, 'generateCompletion').mockResolvedValue('  Rent  ');

    const result = await suggestCategory('RENT PAYMENT', dummyCategories);

    expect(result).toBe('Rent');
  });
});
