import { PrismaClient } from '../src/generated/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import argon2 from 'argon2';

const databaseUrl = process.env.DATABASE_URL || 'postgresql://admin:password123@db:5432/pfd_db';

const pool = new Pool({ connectionString: databaseUrl });
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('Starting database seed...');

  // Create default admin user
  const adminEmail = 'admin@example.com';
  const adminPassword = 'password123';

  // Check if admin already exists
  const existingAdmin = await prisma.user.findFirst({
    where: { email: adminEmail },
  });

  if (existingAdmin) {
    console.log('Admin user already exists. Skipping...');
  } else {
    const passwordHash = await argon2.hash(adminPassword);

    const admin = await prisma.user.create({
      data: {
        email: adminEmail,
        passwordHash,
        role: 'ADMIN',
        permissions: ['manage_users', 'manage_parsers', 'view_all_data'],
      },
    });

    console.log('✅ Created admin user:');
    console.log(`   Email: ${admin.email}`);
    console.log(`   Password: ${adminPassword}`);
    console.log(`   Role: ${admin.role}`);
  }

  // Create sample regular user
  const userEmail = 'user@example.com';
  const userPassword = 'password123';

  const existingUser = await prisma.user.findFirst({
    where: { email: userEmail },
  });

  if (existingUser) {
    console.log('Regular user already exists. Skipping...');
  } else {
    const passwordHash = await argon2.hash(userPassword);

    const user = await prisma.user.create({
      data: {
        email: userEmail,
        passwordHash,
        role: 'USER',
        permissions: [],
      },
    });

    console.log('✅ Created regular user:');
    console.log(`   Email: ${user.email}`);
    console.log(`   Password: ${userPassword}`);
    console.log(`   Role: ${user.role}`);
  }

  console.log('\n✨ Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
