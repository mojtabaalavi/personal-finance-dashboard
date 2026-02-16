const { defineConfig } = require('@prisma/client');

module.exports = defineConfig({
  datasources: {
    db: {
      url: process.env.DATABASE_URL || 'postgresql://admin:password123@db:5432/pfd_db',
    },
  },
});
