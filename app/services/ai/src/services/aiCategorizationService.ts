import { generateCompletion } from './ollamaService';

export const suggestCategory = async (description: string, categories: string[]) => {
  const prompt = `
    Analyze the following transaction description and suggest the most appropriate category from the provided list.
    Transaction: "${description}"
    Available Categories: ${categories.join(', ')}
    
    Return ONLY the category name. If none fit well, return "Uncategorized".
  `;

  const suggestion = await generateCompletion(prompt);
  return suggestion.trim();
};
