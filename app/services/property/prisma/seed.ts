import { PrismaClient } from '../src/generated/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://admin:password123@db:5432/pfd_db?schema=property'
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🌱 Starting property database seed...');

  // Create sample assets
  const primaryResidence = await prisma.asset.upsert({
    where: { id: 'asset-1-primary-home' },
    update: {},
    create: {
      id: 'asset-1-primary-home',
      name: 'Primary Residence',
      type: 'PROPERTY_OWN',
      value: 1250000,
      owner: 'John & Jane Smith',
      address: '42 Marine Parade, St Heliers, Auckland',
    },
  });

  const investmentProperty = await prisma.asset.upsert({
    where: { id: 'asset-2-rental' },
    update: {},
    create: {
      id: 'asset-2-rental',
      name: 'Investment Property',
      type: 'PROPERTY_RENTAL',
      value: 680000,
      owner: 'John Smith',
      address: '15/88 Beach Road, Parnell, Auckland',
    },
  });

  const vehicle = await prisma.asset.upsert({
    where: { id: 'asset-3-vehicle' },
    update: {},
    create: {
      id: 'asset-3-vehicle',
      name: '2021 Toyota RAV4',
      type: 'VEHICLE',
      value: 42000,
      owner: 'Jane Smith',
      address: null,
    },
  });

  const holidayHome = await prisma.asset.upsert({
    where: { id: 'asset-4-holiday' },
    update: {},
    create: {
      id: 'asset-4-holiday',
      name: 'Holiday Home',
      type: 'PROPERTY_OWN',
      value: 890000,
      owner: 'John Smith',
      address: '127 Beach Front Drive, Whitianga, Coromandel',
    },
  });

  console.log('✅ Assets created');

  // Create liabilities
  await prisma.liability.upsert({
    where: { id: 'liability-1-primary-mortgage' },
    update: {},
    create: {
      id: 'liability-1-primary-mortgage',
      name: 'ASB Home Loan',
      type: 'MORTGAGE',
      amount: 780000,
      interestRate: 6.89,
      fixExpiry: new Date('2025-09-15'),
      assetId: primaryResidence.id,
    },
  });

  await prisma.liability.upsert({
    where: { id: 'liability-2-investment-mortgage' },
    update: {},
    create: {
      id: 'liability-2-investment-mortgage',
      name: 'ANZ Investment Loan',
      type: 'MORTGAGE',
      amount: 520000,
      interestRate: 7.15,
      fixExpiry: new Date('2024-12-01'),
      assetId: investmentProperty.id,
    },
  });

  await prisma.liability.upsert({
    where: { id: 'liability-3-car-loan' },
    update: {},
    create: {
      id: 'liability-3-car-loan',
      name: 'Toyota Finance',
      type: 'LOAN',
      amount: 18500,
      interestRate: 8.95,
      fixExpiry: new Date('2026-03-01'),
      assetId: vehicle.id,
    },
  });

  await prisma.liability.upsert({
    where: { id: 'liability-4-holiday-mortgage' },
    update: {},
    create: {
      id: 'liability-4-holiday-mortgage',
      name: 'Kiwibank Mortgage',
      type: 'MORTGAGE',
      amount: 450000,
      interestRate: 6.99,
      fixExpiry: new Date('2025-06-30'),
      assetId: holidayHome.id,
    },
  });

  console.log('✅ Liabilities created');

  // Create insurance policies
  await prisma.insurance.upsert({
    where: { id: 'insurance-1-home' },
    update: {},
    create: {
      id: 'insurance-1-home',
      provider: 'State Insurance',
      policyNumber: 'SI-2024-AK-12345',
      premium: 3200,
      coverage: 1400000,
      excess: 500,
      renewalDate: new Date('2025-04-01'),
      assetId: primaryResidence.id,
    },
  });

  await prisma.insurance.upsert({
    where: { id: 'insurance-2-rental' },
    update: {},
    create: {
      id: 'insurance-2-rental',
      provider: 'Tower Insurance',
      policyNumber: 'TW-INV-2024-9876',
      premium: 1850,
      coverage: 750000,
      excess: 1000,
      renewalDate: new Date('2025-02-15'),
      assetId: investmentProperty.id,
    },
  });

  await prisma.insurance.upsert({
    where: { id: 'insurance-3-vehicle' },
    update: {},
    create: {
      id: 'insurance-3-vehicle',
      provider: 'AA Insurance',
      policyNumber: 'AA-VEH-789012',
      premium: 1320,
      coverage: 50000,
      excess: 400,
      renewalDate: new Date('2025-01-10'),
      assetId: vehicle.id,
    },
  });

  await prisma.insurance.upsert({
    where: { id: 'insurance-4-holiday' },
    update: {},
    create: {
      id: 'insurance-4-holiday',
      provider: 'AMI Insurance',
      policyNumber: 'AMI-2024-COR-456',
      premium: 2400,
      coverage: 950000,
      excess: 750,
      renewalDate: new Date('2024-11-20'),
      assetId: holidayHome.id,
    },
  });

  console.log('✅ Insurance policies created');

  // Create rental agreement for investment property
  await prisma.rentalAgreement.upsert({
    where: { id: 'rental-1' },
    update: {},
    create: {
      id: 'rental-1',
      tenantName: 'Sarah Johnson',
      rentAmount: 650,
      frequency: 'WEEKLY',
      startDate: new Date('2023-06-01'),
      endDate: new Date('2025-05-31'),
      assetId: investmentProperty.id,
      matchKeywords: ['Sarah Johnson', 'Johnson Sarah', 'RENT PAYMENT', '15/88 Beach'],
    },
  });

  console.log('✅ Rental agreements created');

  // Create some asset history entries
  const threeMonthsAgo = new Date();
  threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);

  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

  await prisma.assetHistory.createMany({
    data: [
      {
        assetId: primaryResidence.id,
        value: 1180000,
        changedAt: sixMonthsAgo,
        changedBy: 'Property Valuation NZ',
      },
      {
        assetId: primaryResidence.id,
        value: 1220000,
        changedAt: threeMonthsAgo,
        changedBy: 'QV Valuation',
      },
      {
        assetId: investmentProperty.id,
        value: 650000,
        changedAt: sixMonthsAgo,
        changedBy: 'CoreLogic',
      },
    ],
    skipDuplicates: true,
  });

  // Create some liability history entries
  await prisma.liabilityHistory.createMany({
    data: [
      {
        liabilityId: 'liability-1-primary-mortgage',
        amount: 800000,
        interestRate: 5.99,
        changedAt: sixMonthsAgo,
        changedBy: 'ASB Bank',
      },
      {
        liabilityId: 'liability-2-investment-mortgage',
        amount: 535000,
        interestRate: 6.85,
        changedAt: threeMonthsAgo,
        changedBy: 'ANZ Bank',
      },
    ],
    skipDuplicates: true,
  });

  console.log('✅ Asset and liability history created');

  console.log('🎉 Property seed complete!');
  console.log(`
  Created:
  - 4 Assets (2 properties, 1 vehicle, 1 holiday home)
  - 4 Liabilities (3 mortgages, 1 car loan)
  - 4 Insurance policies
  - 1 Rental agreement
  - Historical valuation records
  `);
}

main()
  .catch((e) => {
    console.error('❌ Error seeding property database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await pool.end();
    await prisma.$disconnect();
  });
