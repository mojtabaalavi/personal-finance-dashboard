import { PrismaClient } from '../src/generated/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

const databaseUrl = process.env.DATABASE_URL || 'postgresql://admin:password123@db:5432/pfd_db?schema=finance';
const pool = new Pool({ connectionString: databaseUrl });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🌱 Starting finance database seed...');

  // 1. Account Types
  console.log('Creating account types...');
  const types = ['Saving', 'Cheque', 'CreditCard', 'Loan', 'Superannuation', 'Investment'];
  const accountTypes: any = {};
  
  for (const name of types) {
    accountTypes[name] = await prisma.bankAccountType.upsert({
      where: { name },
      update: {},
      create: { name }
    });
  }
  console.log('✅ Account types created');

  // 2. Categories and Subcategories
  console.log('Creating categories...');
  const categories = [
    { name: 'Income', type: 'INCOME' as const, subs: ['Salary', 'Interest', 'Dividends', 'Rent Received'] },
    { name: 'Housing', type: 'EXPENSE' as const, subs: ['Mortgage', 'Rent', 'Rates', 'Insurance', 'Maintenance'] },
    { name: 'Food', type: 'EXPENSE' as const, subs: ['Groceries', 'Dining Out', 'Coffee'] },
    { name: 'Transport', type: 'EXPENSE' as const, subs: ['Fuel', 'Public Transport', 'Car Insurance', 'Rego'] },
    { name: 'Utilities', type: 'EXPENSE' as const, subs: ['Electricity', 'Water', 'Internet', 'Phone'] },
    { name: 'Lifestyle', type: 'EXPENSE' as const, subs: ['Entertainment', 'Shopping', 'Hobbies', 'Travel'] },
    { name: 'Finance', type: 'EXPENSE' as const, subs: ['Transfer', 'Bank Fees', 'Interest Paid', 'Tax'] }
  ];

  const categoryMap: any = {};
  const subCategoryMap: any = {};

  for (const cat of categories) {
    const created = await prisma.category.upsert({
      where: { name: cat.name },
      update: {},
      create: { 
        name: cat.name, 
        type: cat.type 
      }
    });
    categoryMap[cat.name] = created;

    for (const sub of cat.subs) {
      const subCat = await prisma.subCategory.upsert({
        where: { name_categoryId: { name: sub, categoryId: created.id } },
        update: {},
        create: { name: sub, categoryId: created.id }
      });
      subCategoryMap[sub] = subCat;
    }
  }
  console.log('✅ Categories created');

  // 3. Sample Bank Accounts
  console.log('Creating sample bank accounts...');
  
  const savingAccount = await prisma.bankAccount.upsert({
    where: { accountNumber: '12-3057-0123456-01' },
    update: {},
    create: {
      name: 'ASB Streamline',
      accountNumber: '12-3057-0123456-01',
      bankName: 'ASB Bank',
      balance: 15420.50,
      typeId: accountTypes['Saving'].id
    }
  });

  const chequeAccount = await prisma.bankAccount.upsert({
    where: { accountNumber: '12-3637-0987654-00' },
    update: {},
    create: {
      name: 'ASB Main Account',
      accountNumber: '12-3637-0987654-00',
      bankName: 'ASB Bank',
      balance: 3240.75,
      typeId: accountTypes['Cheque'].id
    }
  });

  const creditCard = await prisma.bankAccount.upsert({
    where: { accountNumber: 'xxxx-xxxx-xxxx-1588' },
    update: {},
    create: {
      name: 'Visa Credit Card',
      accountNumber: 'xxxx-xxxx-xxxx-1588',
      bankName: 'ASB Bank',
      balance: -1250.30,
      typeId: accountTypes['CreditCard'].id
    }
  });

  console.log('✅ Bank accounts created');

  // 4. Sample Transactions
  console.log('Creating sample transactions...');
  
  const today = new Date();
  const transactions = [
    // Income transactions
    {
      date: new Date(today.getFullYear(), today.getMonth(), 15),
      amount: 3200.00,
      description: 'Salary - ABC Company',
      type: 'INCOME' as const,
      bankAccountId: savingAccount.id,
      categoryId: categoryMap['Income'].id,
      subCategoryId: subCategoryMap['Salary'].id
    },
    {
      date: new Date(today.getFullYear(), today.getMonth() - 1, 15),
      amount: 3200.00,
      description: 'Salary - ABC Company',
      type: 'INCOME' as const,
      bankAccountId: savingAccount.id,
      categoryId: categoryMap['Income'].id,
      subCategoryId: subCategoryMap['Salary'].id
    },
    
    // Housing expenses
    {
      date: new Date(today.getFullYear(), today.getMonth(), 1),
      amount: 650.00,
      description: 'Rent Payment',
      type: 'EXPENSE' as const,
      bankAccountId: chequeAccount.id,
      categoryId: categoryMap['Housing'].id,
      subCategoryId: subCategoryMap['Rent'].id
    },
    {
      date: new Date(today.getFullYear(), today.getMonth() - 1, 1),
      amount: 650.00,
      description: 'Rent Payment',
      type: 'EXPENSE' as const,
      bankAccountId: chequeAccount.id,
      categoryId: categoryMap['Housing'].id,
      subCategoryId: subCategoryMap['Rent'].id
    },
    
    // Groceries
    {
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 2),
      amount: 152.40,
      description: 'Woolworths',
      type: 'EXPENSE' as const,
      bankAccountId: creditCard.id,
      categoryId: categoryMap['Food'].id,
      subCategoryId: subCategoryMap['Groceries'].id
    },
    {
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 5),
      amount: 89.30,
      description: 'Countdown',
      type: 'EXPENSE' as const,
      bankAccountId: creditCard.id,
      categoryId: categoryMap['Food'].id,
      subCategoryId: subCategoryMap['Groceries'].id
    },
    {
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 9),
      amount: 124.75,
      description: 'Pak n Save',
      type: 'EXPENSE' as const,
      bankAccountId: chequeAccount.id,
      categoryId: categoryMap['Food'].id,
      subCategoryId: subCategoryMap['Groceries'].id
    },
    
    // Dining out
    {
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 3),
      amount: 45.50,
      description: 'Hell Pizza',
      type: 'EXPENSE' as const,
      bankAccountId: creditCard.id,
      categoryId: categoryMap['Food'].id,
      subCategoryId: subCategoryMap['Dining Out'].id
    },
    {
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7),
      amount: 32.00,
      description: 'Burger King',
      type: 'EXPENSE' as const,
      bankAccountId: chequeAccount.id,
      categoryId: categoryMap['Food'].id,
      subCategoryId: subCategoryMap['Dining Out'].id
    },
    
    // Coffee
    {
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1),
      amount: 5.50,
      description: 'Starbucks',
      type: 'EXPENSE' as const,
      bankAccountId: creditCard.id,
      categoryId: categoryMap['Food'].id,
      subCategoryId: subCategoryMap['Coffee'].id
    },
    {
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 4),
      amount: 4.80,
      description: 'Cafe on the corner',
      type: 'EXPENSE' as const,
      bankAccountId: chequeAccount.id,
      categoryId: categoryMap['Food'].id,
      subCategoryId: subCategoryMap['Coffee'].id
    },
    
    // Transport
    {
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 3),
      amount: 85.00,
      description: 'Shell Petrol',
      type: 'EXPENSE' as const,
      bankAccountId: creditCard.id,
      categoryId: categoryMap['Transport'].id,
      subCategoryId: subCategoryMap['Fuel'].id
    },
    {
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 10),
      amount: 92.30,
      description: 'BP Fuel',
      type: 'EXPENSE' as const,
      bankAccountId: creditCard.id,
      categoryId: categoryMap['Transport'].id,
      subCategoryId: subCategoryMap['Fuel'].id
    },
    
    // Utilities
    {
      date: new Date(today.getFullYear(), today.getMonth(), 5),
      amount: 120.50,
      description: 'Contact Energy',
      type: 'EXPENSE' as const,
      bankAccountId: chequeAccount.id,
      categoryId: categoryMap['Utilities'].id,
      subCategoryId: subCategoryMap['Electricity'].id
    },
    {
      date: new Date(today.getFullYear(), today.getMonth(), 8),
      amount: 89.99,
      description: 'Spark Internet',
      type: 'EXPENSE' as const,
      bankAccountId: chequeAccount.id,
      categoryId: categoryMap['Utilities'].id,
      subCategoryId: subCategoryMap['Internet'].id
    },
    {
      date: new Date(today.getFullYear(), today.getMonth(), 10),
      amount: 49.99,
      description: 'Vodafone Mobile',
      type: 'EXPENSE' as const,
      bankAccountId: creditCard.id,
      categoryId: categoryMap['Utilities'].id,
      subCategoryId: subCategoryMap['Phone'].id
    },
    
    // Entertainment
    {
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 6),
      amount: 16.99,
      description: 'Netflix',
      type: 'EXPENSE' as const,
      bankAccountId: creditCard.id,
      categoryId: categoryMap['Lifestyle'].id,
      subCategoryId: subCategoryMap['Entertainment'].id
    },
    {
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 8),
      amount: 25.00,
      description: 'Reading Cinemas',
      type: 'EXPENSE' as const,
      bankAccountId: creditCard.id,
      categoryId: categoryMap['Lifestyle'].id,
      subCategoryId: subCategoryMap['Entertainment'].id
    },
    
    // Shopping
    {
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 12),
      amount: 89.00,
      description: 'The Warehouse',
      type: 'EXPENSE' as const,
      bankAccountId: creditCard.id,
      categoryId: categoryMap['Lifestyle'].id,
      subCategoryId: subCategoryMap['Shopping'].id
    },
    {
      date: new Date(today.getFullYear(), today.getMonth(), today.getDate() - 15),
      amount: 145.50,
      description: 'Farmers',
      type: 'EXPENSE' as const,
      bankAccountId: creditCard.id,
      categoryId: categoryMap['Lifestyle'].id,
      subCategoryId: subCategoryMap['Shopping'].id
    }
  ];

  for (const tx of transactions) {
    await prisma.transaction.create({
      data: tx
    });
  }

  console.log(`✅ Created ${transactions.length} sample transactions`);
  console.log('\n🎉 Finance seed complete!');
  console.log('\nCreated:');
  console.log(`  - ${types.length} account types`);
  console.log(`  - ${categories.length} categories with subcategories`);
  console.log('  - 3 bank accounts:');
  console.log(`    • ${savingAccount.name} (${savingAccount.accountNumber})`);
  console.log(`    • ${chequeAccount.name} (${chequeAccount.accountNumber})`);
  console.log(`    • ${creditCard.name} (${creditCard.accountNumber})`);
  console.log(`  - ${transactions.length} transactions`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
