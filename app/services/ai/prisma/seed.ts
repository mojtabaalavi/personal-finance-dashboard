import { PrismaClient } from '../src/generated/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://admin:password123@db:5432/pfd_db?schema=ai'
});

const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🌱 Starting AI service database seed...');

  // Use the admin user ID from auth service (we'll use a placeholder)
  const userId = 'admin-user-id-placeholder';

  // Create a sample conversation
  const conversation1 = await prisma.conversation.upsert({
    where: { id: 'conv-1-sample' },
    update: {},
    create: {
      id: 'conv-1-sample',
      userId,
      title: 'Monthly Budget Review',
      status: 'ACTIVE',
      contextAccountIds: [],
      contextPropertyIds: [],
    },
  });

  console.log('✅ Conversations created');

  // Create sample messages
  await prisma.message.createMany({
    data: [
      {
        conversationId: conversation1.id,
        role: 'ASSISTANT',
        content: 'Hello! I am your MJ Solutionss AI assistant. How can I help you with your finances today?',
        model: 'ollama/llama3',
        createdAt: new Date(Date.now() - 600000), // 10 minutes ago
      },
      {
        conversationId: conversation1.id,
        role: 'USER',
        content: 'Can you analyze my spending for this month?',
        createdAt: new Date(Date.now() - 540000), // 9 minutes ago
      },
      {
        conversationId: conversation1.id,
        role: 'ASSISTANT',
        content: "Based on your current spending patterns, you've spent $3,210 this month across various categories. Your largest expenses are:\n\n1. Food & Dining: $842\n2. Transport: $340\n3. Utilities: $285\n\nCompared to last month, your spending is down by 8%, which is great progress!",
        model: 'ollama/llama3',
        tokenCount: 156,
        processingTime: 2340,
        createdAt: new Date(Date.now() - 530000), // 8.8 minutes ago
      },
      {
        conversationId: conversation1.id,
        role: 'USER',
        content: 'What can I do to save more?',
        createdAt: new Date(Date.now() - 480000), // 8 minutes ago
      },
      {
        conversationId: conversation1.id,
        role: 'ASSISTANT',
        content: "Here are some actionable savings opportunities:\n\n1. **Reduce dining out**: You spent $342 on restaurants this month. Cooking at home 2 more times per week could save ~$150/month.\n\n2. **Review subscriptions**: I noticed Netflix ($23.99), Spotify ($18.99), and Reading Cinemas membership. Consolidating these could save $20-30/month.\n\n3. **Fuel efficiency**: Your Shell and BP transactions total $170. Consider carpooling or public transport for 1-2 days per week.\n\n**Potential monthly savings: $200-250**",
        model: 'ollama/llama3',
        tokenCount: 234,
        processingTime: 3120,
        createdAt: new Date(Date.now() - 470000), // 7.8 minutes ago
      },
    ],
    skipDuplicates: true,
  });

  console.log('✅ Messages created');

  // Create sample insights
  await prisma.insight.createMany({
    data: [
      {
        userId,
        title: 'High Dining Spend Detected',
        description: 'You spent $342 on dining out this month, which is 35% higher than your 3-month average. Consider meal planning to reduce costs.',
        category: 'SPENDING',
        priority: 'MEDIUM',
        isRead: false,
        isDismissed: false,
        relatedTransactionIds: [],
      },
      {
        userId,
        title: 'Tax Return Deadline Approaching',
        description: 'The NZ tax return deadline is in 45 days. Based on your income transactions, you may be eligible for deductions on property expenses.',
        category: 'TAX',
        priority: 'HIGH',
        isRead: false,
        isDismissed: false,
        relatedTransactionIds: [],
        expiresAt: new Date(Date.now() + 45 * 24 * 60 * 60 * 1000), // 45 days
      },
      {
        userId,
        title: 'Savings Milestone Reached',
        description: 'Congratulations! Your net worth increased by $2,800 this quarter. You are on track to reach your $50,000 savings goal by December.',
        category: 'SAVING',
        priority: 'LOW',
        isRead: true,
        isDismissed: false,
        relatedTransactionIds: [],
      },
      {
        userId,
        title: 'Subscription Review Needed',
        description: 'You have 12 active recurring subscriptions totaling $187/month. Review these to identify unused services.',
        category: 'SPENDING',
        priority: 'MEDIUM',
        isRead: false,
        isDismissed: false,
        relatedTransactionIds: [],
      },
    ],
    skipDuplicates: true,
  });

  console.log('✅ Insights created');

  // Create sample analytics cache
  await prisma.analyticsCache.upsert({
    where: {
      userId_cacheKey: {
        userId,
        cacheKey: 'monthly-spending-2024-03'
      }
    },
    update: {},
    create: {
      userId,
      cacheKey: 'monthly-spending-2024-03',
      data: {
        total: 3210,
        categories: {
          food: 842,
          transport: 340,
          utilities: 285,
          entertainment: 245,
          other: 1498,
        },
        trend: 'down',
        changePercent: -8,
      },
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
    },
  });

  console.log('✅ Analytics cache created');

  console.log('🎉 AI service seed complete!');
  console.log(`
  Created:
  - 1 Conversation
  - 5 Messages (conversation thread)
  - 4 Financial insights
  - 1 Analytics cache entry
  `);
}

main()
  .catch((e) => {
    console.error('❌ Error seeding AI database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await pool.end();
    await prisma.$disconnect();
  });
