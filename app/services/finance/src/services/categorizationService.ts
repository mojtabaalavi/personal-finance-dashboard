import prisma from '../utils/db';

export const categorizeTransaction = async (description: string) => {
  // Simple keyword matching for now
  // In a real app, this could call AI Service or use a complex rule engine
  const categories = await prisma.category.findMany({
    include: { subCategories: true }
  });

  const lowercaseDesc = description.toLowerCase();

  for (const category of categories) {
    if (lowercaseDesc.includes(category.name.toLowerCase())) {
      return { 
        categoryId: category.id, 
        subCategoryId: category.subCategories[0]?.id || null 
      };
    }
  }

  return { categoryId: null, subCategoryId: null };
};
