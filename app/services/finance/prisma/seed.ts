import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Account Types
  const types = ['Saving', 'Cheque', 'CreditCard', 'Loan', 'Superannuation', 'Investment'];
  for (const name of types) {
    await prisma.bankAccountType.upsert({
      where: { name },
      update: {},
      create: { name }
    });
  }

  // Categories
  const categories = [
    { name: 'Income', type: 'INCOME' as const, subs: ['Salary', 'Interest', 'Dividends', 'Rent Received'] },
    { name: 'Housing', type: 'EXPENSE' as const, subs: ['Mortgage', 'Rent', 'Rates', 'Insurance', 'Maintenance'] },
    { name: 'Food', type: 'EXPENSE' as const, subs: ['Groceries', 'Dining Out', 'Coffee'] },
    { name: 'Transport', type: 'EXPENSE' as const, subs: ['Fuel', 'Public Transport', 'Car Insurance', 'Rego'] },
    { name: 'Utilities', type: 'EXPENSE' as const, subs: ['Electricity', 'Water', 'Internet', 'Phone'] },
    { name: 'Lifestyle', type: 'EXPENSE' as const, subs: ['Entertainment', 'Shopping', 'Hobbies', 'Travel'] },
    { name: 'Finance', type: 'EXPENSE' as const, subs: ['Transfer', 'Bank Fees', 'Interest Paid', 'Tax'] }
  ];

  for (const cat of categories) {
    const created = await prisma.category.upsert({
      where: { name: cat.name },
      update: {},
      create: { 
        name: cat.name, 
        type: cat.type 
      }
    });

    for (const sub of cat.subs) {
      await prisma.subCategory.upsert({
        where: { name_categoryId: { name: sub, categoryId: created.id } },
        update: {},
        create: { name: sub, categoryId: created.id }
      });
    }
  }

  console.log('Finance seed complete');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
