// Quick database initialization using service's Prisma client
const { PrismaClient } = require('../src/generated/client');
const { PrismaPg } = require('@prisma/adapter-pg');
const { Pool } = require('pg');
const { execSync } = require('child_process');

const schema = process.argv[2] || 'auth';
const dbUrl = process.env.DATABASE_URL || `postgresql://admin:password123@db:5432/pfd_db?schema=${schema}`;

console.log(`Initializing ${schema} schema...`);

// Create tables using Prisma's introspection
try {
  execSync(`DATABASE_URL="${dbUrl}" npx prisma db push --accept-data-loss`, { 
    stdio: 'inherit',
    cwd: '/app'
  });
  console.log(`✅ ${schema} schema initialized`);
} catch (error) {
  console.error(`❌ Failed to initialize ${schema}:`, error.message);
  process.exit(1);
}
