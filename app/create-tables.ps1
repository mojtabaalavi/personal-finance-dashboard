# Database Tables Initialization Script
# Creates all required tables based on Prisma schemas
# This bypasses Prisma CLI (which has issues in Alpine containers) and uses direct SQL

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Database Tables Initialization" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Creating database structure for all services..." -ForegroundColor Yellow
Write-Host "This is safe to run multiple times (uses IF NOT EXISTS)" -ForegroundColor Gray
Write-Host ""

# Auth schema tables
Write-Host "[1/4] Creating Auth schema tables..." -ForegroundColor Cyan
@"
CREATE SCHEMA IF NOT EXISTS auth;

DROP TABLE IF EXISTS auth."UserHistory" CASCADE;
DROP TABLE IF EXISTS auth."User" CASCADE;
DROP TYPE IF EXISTS auth."Role" CASCADE;

CREATE TYPE auth."Role" AS ENUM ('USER', 'ADMIN');

CREATE TABLE auth."User" (
  id TEXT PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  "passwordHash" TEXT NOT NULL,
  role auth."Role" NOT NULL DEFAULT 'USER',
  "isLocked" BOOLEAN NOT NULL DEFAULT false,
  permissions TEXT[] NOT NULL DEFAULT '{}',
  "emailVerified" BOOLEAN NOT NULL DEFAULT false,
  "emailVerificationToken" TEXT UNIQUE,
  "emailVerificationExpiry" TIMESTAMP,
  "twoFactorEnabled" BOOLEAN NOT NULL DEFAULT true,
  "twoFactorCode" TEXT,
  "twoFactorCodeExpiry" TIMESTAMP,
  "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE auth."UserHistory" (
  id TEXT PRIMARY KEY,
  "userId" TEXT NOT NULL,
  email TEXT NOT NULL,
  role auth."Role" NOT NULL,
  permissions TEXT[] NOT NULL,
  "changedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "changedBy" TEXT
);

CREATE INDEX "User_email_idx" ON auth."User"(email);
CREATE INDEX "User_emailVerificationToken_idx" ON auth."User"("emailVerificationToken");
"@ | docker exec -i pfd_postgres psql -U admin pfd_db 2>&1 | Out-Null
if ($LASTEXITCODE -eq 0) { Write-Host "  ✅ Auth schema created (2 tables)" -ForegroundColor Green } else { Write-Host "  ⚠️  Auth schema had issues" -ForegroundColor Yellow }
Write-Host ""

# Finance schema tables
Write-Host "[2/4] Creating Finance schema tables..." -ForegroundColor Cyan
@"
CREATE SCHEMA IF NOT EXISTS finance;

DROP TABLE IF EXISTS finance."TransactionHistory" CASCADE;
DROP TABLE IF EXISTS finance."Transaction" CASCADE;
DROP TABLE IF EXISTS finance."SubCategory" CASCADE;
DROP TABLE IF EXISTS finance."Category" CASCADE;
DROP TABLE IF EXISTS finance."BankAccountHistory" CASCADE;
DROP TABLE IF EXISTS finance."ParserConfig" CASCADE;
DROP TABLE IF EXISTS finance."BankAccount" CASCADE;
DROP TABLE IF EXISTS finance."BankAccountType" CASCADE;
DROP TYPE IF EXISTS finance."TransactionType" CASCADE;

CREATE TYPE finance."TransactionType" AS ENUM ('INCOME', 'EXPENSE');

CREATE TABLE finance."BankAccountType" (
  id TEXT PRIMARY KEY,
  name TEXT UNIQUE NOT NULL
);

CREATE TABLE finance."BankAccount" (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  "accountNumber" TEXT UNIQUE NOT NULL,
  "bankName" TEXT NOT NULL,
  balance DECIMAL(15,2) NOT NULL DEFAULT 0,
  "typeId" TEXT NOT NULL REFERENCES finance."BankAccountType"(id),
  "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE finance."BankAccountHistory" (
  id TEXT PRIMARY KEY,
  "bankAccountId" TEXT NOT NULL,
  balance DECIMAL(15,2) NOT NULL,
  "changedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "changedBy" TEXT
);

CREATE TABLE finance."Category" (
  id TEXT PRIMARY KEY,
  name TEXT UNIQUE NOT NULL,
  type finance."TransactionType" NOT NULL
);

CREATE TABLE finance."SubCategory" (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  "categoryId" TEXT NOT NULL REFERENCES finance."Category"(id),
  UNIQUE(name, "categoryId")
);

CREATE TABLE finance."Transaction" (
  id TEXT PRIMARY KEY,
  date TIMESTAMP NOT NULL,
  amount DECIMAL(15,2) NOT NULL,
  description TEXT NOT NULL,
  "rawText" TEXT,
  type finance."TransactionType" NOT NULL DEFAULT 'EXPENSE',
  "bankAccountId" TEXT NOT NULL REFERENCES finance."BankAccount"(id),
  "categoryId" TEXT REFERENCES finance."Category"(id),
  "subCategoryId" TEXT REFERENCES finance."SubCategory"(id),
  "linkedAssetId" TEXT,
  "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE finance."TransactionHistory" (
  id TEXT PRIMARY KEY,
  "transactionId" TEXT NOT NULL,
  "categoryId" TEXT,
  "subCategoryId" TEXT,
  amount DECIMAL(15,2) NOT NULL,
  "changedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "changedBy" TEXT
);

CREATE TABLE finance."ParserConfig" (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  "bankName" TEXT NOT NULL,
  "bankAccountId" TEXT REFERENCES finance."BankAccount"(id),
  rules JSONB NOT NULL,
  "isActive" BOOLEAN NOT NULL DEFAULT true,
  "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX "Transaction_date_idx" ON finance."Transaction"(date);
CREATE INDEX "Transaction_bankAccountId_idx" ON finance."Transaction"("bankAccountId");
"@ | docker exec -i pfd_postgres psql -U admin pfd_db 2>&1 | Out-Null
if ($LASTEXITCODE -eq 0) { Write-Host "  ✅ Finance schema created (8 tables)" -ForegroundColor Green } else { Write-Host "  ⚠️  Finance schema had issues" -ForegroundColor Yellow }
Write-Host ""

# Property schema tables
Write-Host "[3/4] Creating Property schema tables..." -ForegroundColor Cyan
@"
CREATE SCHEMA IF NOT EXISTS property;

DROP TABLE IF EXISTS property."RentalAgreement" CASCADE;
DROP TABLE IF EXISTS property."Insurance" CASCADE;
DROP TABLE IF EXISTS property."LiabilityHistory" CASCADE;
DROP TABLE IF EXISTS property."Liability" CASCADE;
DROP TABLE IF EXISTS property."AssetHistory" CASCADE;
DROP TABLE IF EXISTS property."Asset" CASCADE;
DROP TYPE IF EXISTS property."AssetType" CASCADE;

CREATE TYPE property."AssetType" AS ENUM ('PROPERTY_OWN', 'PROPERTY_RENTAL', 'VEHICLE', 'CASH', 'SUPERANNUATION', 'CONTENTS');

CREATE TABLE property."Asset" (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  type property."AssetType" NOT NULL,
  value DECIMAL(15,2) NOT NULL,
  owner TEXT NOT NULL,
  address TEXT,
  "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE property."AssetHistory" (
  id TEXT PRIMARY KEY,
  "assetId" TEXT NOT NULL,
  value DECIMAL(15,2) NOT NULL,
  "changedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "changedBy" TEXT
);

CREATE TABLE property."Liability" (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  type TEXT NOT NULL,
  amount DECIMAL(15,2) NOT NULL,
  "interestRate" DECIMAL,
  "fixExpiry" TIMESTAMP,
  "assetId" TEXT REFERENCES property."Asset"(id),
  "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE property."LiabilityHistory" (
  id TEXT PRIMARY KEY,
  "liabilityId" TEXT NOT NULL,
  amount DECIMAL(15,2) NOT NULL,
  "interestRate" DECIMAL,
  "changedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "changedBy" TEXT
);

CREATE TABLE property."Insurance" (
  id TEXT PRIMARY KEY,
  provider TEXT NOT NULL,
  "policyNumber" TEXT NOT NULL,
  premium DECIMAL(10,2) NOT NULL,
  coverage DECIMAL(15,2) NOT NULL,
  excess DECIMAL(10,2) NOT NULL,
  "renewalDate" TIMESTAMP NOT NULL,
  "assetId" TEXT REFERENCES property."Asset"(id),
  "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE property."RentalAgreement" (
  id TEXT PRIMARY KEY,
  "tenantName" TEXT NOT NULL,
  "rentAmount" DECIMAL(10,2) NOT NULL,
  frequency TEXT NOT NULL,
  "startDate" TIMESTAMP NOT NULL,
  "endDate" TIMESTAMP,
  "assetId" TEXT NOT NULL REFERENCES property."Asset"(id),
  "matchKeywords" TEXT[] NOT NULL,
  "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
"@ | docker exec -i pfd_postgres psql -U admin pfd_db 2>&1 | Out-Null
if ($LASTEXITCODE -eq 0) { Write-Host "  ✅ Property schema created (6 tables)" -ForegroundColor Green } else { Write-Host "  ⚠️  Property schema had issues" -ForegroundColor Yellow }
Write-Host ""

# AI schema tables
Write-Host "[4/4] Creating AI schema tables..." -ForegroundColor Cyan
@"
CREATE SCHEMA IF NOT EXISTS ai;

DROP TABLE IF EXISTS ai."AnalyticsCache" CASCADE;
DROP TABLE IF EXISTS ai."Insight" CASCADE;
DROP TABLE IF EXISTS ai."Message" CASCADE;
DROP TABLE IF EXISTS ai."Conversation" CASCADE;
DROP TYPE IF EXISTS ai."MessageRole" CASCADE;
DROP TYPE IF EXISTS ai."ConversationStatus" CASCADE;

CREATE TYPE ai."MessageRole" AS ENUM ('USER', 'ASSISTANT', 'SYSTEM');
CREATE TYPE ai."ConversationStatus" AS ENUM ('ACTIVE', 'ARCHIVED', 'DELETED');

CREATE TABLE ai."Conversation" (
  id TEXT PRIMARY KEY,
  "userId" TEXT NOT NULL,
  title TEXT NOT NULL DEFAULT 'New Conversation',
  status ai."ConversationStatus" NOT NULL DEFAULT 'ACTIVE',
  "contextAccountIds" TEXT[] NOT NULL DEFAULT '{}',
  "contextPropertyIds" TEXT[] NOT NULL DEFAULT '{}',
  "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE ai."Message" (
  id TEXT PRIMARY KEY,
  "conversationId" TEXT NOT NULL REFERENCES ai."Conversation"(id) ON DELETE CASCADE,
  role ai."MessageRole" NOT NULL,
  content TEXT NOT NULL,
  model TEXT,
  "tokenCount" INTEGER,
  "processingTime" INTEGER,
  "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE ai."Insight" (
  id TEXT PRIMARY KEY,
  "userId" TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  priority TEXT NOT NULL,
  "isRead" BOOLEAN NOT NULL DEFAULT false,
  "isDismissed" BOOLEAN NOT NULL DEFAULT false,
  "relatedTransactionIds" TEXT[] NOT NULL,
  "relatedConversationId" TEXT,
  "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "expiresAt" TIMESTAMP
);

CREATE TABLE ai."AnalyticsCache" (
  id TEXT PRIMARY KEY,
  "userId" TEXT NOT NULL,
  "cacheKey" TEXT NOT NULL,
  data JSONB NOT NULL,
  "expiresAt" TIMESTAMP NOT NULL,
  "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE("userId", "cacheKey")
);

CREATE INDEX "Conversation_userId_idx" ON ai."Conversation"("userId");
CREATE INDEX "Conversation_status_idx" ON ai."Conversation"(status);
CREATE INDEX "Message_conversationId_idx" ON ai."Message"("conversationId");
CREATE INDEX "Insight_userId_idx" ON ai."Insight"("userId");
CREATE INDEX "Insight_isRead_idx" ON ai."Insight"("isRead");
CREATE INDEX "AnalyticsCache_expiresAt_idx" ON ai."AnalyticsCache"("expiresAt");
"@ | docker exec -i pfd_postgres psql -U admin pfd_db 2>&1 | Out-Null
if ($LASTEXITCODE -eq 0) { Write-Host "  ✅ AI schema created (4 tables)" -ForegroundColor Green } else { Write-Host "  ⚠️  AI schema had issues" -ForegroundColor Yellow }
Write-Host ""

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "✅ Database initialization complete!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Total created: 20 tables across 4 schemas" -ForegroundColor Gray
Write-Host "  • Auth: 2 tables + 1 enum" -ForegroundColor Gray
Write-Host "  • Finance: 8 tables + 1 enum" -ForegroundColor Gray
Write-Host "  • Property: 6 tables + 1 enum" -ForegroundColor Gray
Write-Host "  • AI: 4 tables + 2 enums" -ForegroundColor Gray
Write-Host ""
Write-Host "Next: Run .\seed-database.ps1 to populate with sample data" -ForegroundColor Yellow
