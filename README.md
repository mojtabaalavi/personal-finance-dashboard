# Personal Finance Dashboard

A comprehensive, privacy-first personal finance management application built with modern microservices architecture.

## 🚀 Quick Start

### Option 1: Using Docker (Recommended)

```powershell
# From root directory - all commands work from here
npm run docker:build
npm run docker:up

# Or from app directory
cd app
npm run docker:up

# Check health
cd app
.\check-health.ps1

# Seed database with sample data (recommended for first-time users)
.\seed-database.ps1

# Open application
Start http://localhost:3000
```

**What you get after seeding:**
- 2 test users (admin & regular user)
- 3 sample bank accounts with 20 transactions
- 4 sample assets (properties, vehicles) and liabilities
- Sample AI conversation with financial insights

💡 *The seed script is safe to run multiple times - it won't delete your data!*

### Option 2: Development Mode (Local)

```powershell
# From root directory
npm install
npm run dev

# Or from app directory
cd app
npm install
npm run dev
```

### Available Scripts (can be run from root or app directory)

**Docker Commands:**
- `npm run docker:up` - Start all containers
- `npm run docker:down` - Stop all containers
- `npm run docker:build` - Build all images
- `npm run docker:logs` - View logs
- `npm run docker:restart` - Restart all containers

**Development:**
- `npm run dev` - Start all services in dev mode
- `npm run dev:backend` - Start only backend services
- `npm run dev:client` - Start only frontend

**Build & Test:**
- `npm run build:all` - Build all services
- `npm run test:all` - Run all tests
- `npm run test:e2e` - Run end-to-end tests

### Default Test Credentials

After running the seed script:

**Admin User**:
- Email: `admin@example.com`
- Password: `password123`

**Regular User**:
- Email: `user@example.com`  
- Password: `password123`

⚠️ **Login requires EMAIL ADDRESS, not username**

## 🗄️ Database Setup & Sample Data

### First-Time Setup

The application uses **PostgreSQL with schema isolation** - each microservice has its own database schema for proper data separation:

- `auth` schema - User accounts and authentication
- `finance` schema - Bank accounts, transactions, categories
- `property` schema - Assets, liabilities, insurance, rentals
- `ai` schema - Conversations, messages, insights

**Quick Setup for New Users:**

```powershell
# 1. Start all services
cd app
npm run docker:up

# 2. Wait for services to be healthy (~30 seconds)
.\check-health.ps1

# 3. Initialize database tables
.\create-tables.ps1

# 4. Seed all services with sample data
.\seed-database.ps1
```

The **seed-database.ps1** script will populate all four services with sample data:
- ✅ **Auth**: 2 test users (admin and regular user)
- ✅ **Finance**: 3 bank accounts, 20 transactions, 7 categories
- ✅ **Property**: 4 assets, 4 liabilities, insurance policies
- ✅ **AI**: Sample conversation with financial insights

### Safe Reseeding - Your Data is Protected 🛡️

**You can run the seed script multiple times without losing your data!**

All seed scripts use **upsert patterns** (update-or-insert):
- **Auth service**: Checks if test users exist before creating them
- **Finance service**: Uses `upsert` for all sample accounts and transactions
- **Property service**: Sample data has specific IDs (`asset-1-primary-home`, etc.) that won't conflict with your data
- **AI service**: Sample conversations use placeholder IDs

**What gets created on reseed:**
- Only **missing sample data** is added
- Your own transactions, assets, and accounts remain untouched
- Test users are skipped if they already exist

**Example**: If you've added 50 transactions and 3 properties, running the seed script will:
- ✅ Keep all your 50 transactions and 3 properties
- ✅ Add sample data only if it doesn't exist
- ✅ Skip test users if they're already there

### Manual Service Seeding

If you need to seed individual services:

```powershell
# Seed individual services
docker exec pfd_auth npm run seed       # Users only
docker exec pfd_finance npm run seed    # Banking data only
docker exec pfd_property npm run seed   # Assets only
docker exec pfd_ai npm run seed         # AI conversations only
```

### Database Access & Verification

**Check if data was seeded successfully:**

```powershell
# Access PostgreSQL
docker exec -it pfd_postgres psql -U admin pfd_db

# Check users
\c pfd_db
SET search_path TO auth;
SELECT email, role FROM "User";

# Check transactions (should see ~20 sample transactions)
SET search_path TO finance;
SELECT COUNT(*) FROM "Transaction";

# Check assets (should see 4 sample assets)
SET search_path TO property;
SELECT name, type, value FROM "Asset";

# Exit
\q
```

### Troubleshooting Database Issues

**Services can't connect to database:**
```powershell
# Check if PostgreSQL is running
docker ps | Select-String postgres

# View database logs
docker-compose logs postgres

# Restart database
docker-compose restart postgres
```

**Seed script fails:**
```powershell
# Ensure all services are running
docker-compose ps

# Check specific service logs
docker-compose logs auth-service
docker-compose logs finance-service

# Try manual seed for specific service
docker exec pfd_auth npm run seed
```

**Want to start fresh:**
```powershell
# WARNING: This deletes ALL data including your own

# Stop services
docker-compose down

# Remove database volume
docker volume rm app_postgres_data

# Start fresh
docker-compose up -d
.\seed-database.ps1
```

## ✅ System Status

All services are now running and healthy:

- ✅ **Gateway** (Port 4000) - API routing - [Swagger Docs](http://localhost:4000/api-docs)
- ✅ **Auth Service** (Port 4001) - User authentication - [Swagger Docs](http://localhost:4001/api-docs)
- ✅ **Finance Service** (Port 4002) - Transactions & bank accounts - [Swagger Docs](http://localhost:4002/api-docs)
- ✅ **Property Service** (Port 4003) - Assets & rentals - [Swagger Docs](http://localhost:4003/api-docs)
- ✅ **AI Service** (Port 4004) - Intelligent categorization - [Swagger Docs](http://localhost:4004/api-docs)
- ✅ **Reporting Service** (Port 4005) - Analytics & reports - [Swagger Docs](http://localhost:4005/api-docs)

**Access Swagger Documentation:**
- Each service: Visit root URL (e.g., `http://localhost:4001/`) - auto-redirects to `/api-docs`
- Gateway: `http://localhost:4000/api-docs` - comprehensive API documentation for all services
- ✅ **Client** (Port 3000) - React web UI
- ✅ **PostgreSQL** (Port 5432) - Database
- ✅ **Ollama** (Port 11434) - Local LLM
- ✅ **MailHog** (Port 8025) - Email testing - [Web UI](http://localhost:8025)

## 📖 Documentation

**[Complete User Guide](USER_GUIDE.md)** - Comprehensive setup, configuration, and usage guide

### Quick Links

- **Architecture**: [docs/architecture_review.md](docs/architecture_review.md)
- **Implementation Plan**: [docs/implementation_plan.md](docs/implementation_plan.md)
- **Project Guidelines**: [docs/project_guidelines.md](docs/project_guidelines.md)
- **Task List**: [docs/task.md](docs/task.md)

## 🎯 Key Features

### 🏦 Smart Banking
- Auto-parse CSV files from ASB, ANZ, KiwiBank
- Intelligent transaction categorization
- Duplicate detection
- Multi-account management

### 🏠 Property Management
- Track rental properties and owner-occupied homes
- Mortgage tracking with rate expiry alerts
- Automatic rent matching from bank transactions
- Insurance and rates management

### 📊 Financial Insights
- Real-time dashboard with net worth tracking
- Income vs expense analysis
- Category-based spending reports
- Financial year tax reports (NZ: 1 Apr - 31 Mar)

### 🤖 AI-Powered
- Local LLM (Ollama) for privacy
- Natural language queries
- Smart categorization suggestions
- Chat assistant for financial questions

### 🔒 Privacy First
- All data stored locally (no cloud)
- Docker-based deployment
- Role-based access control
- Change Data Capture (CDC) for audit trails

## 🛠️ Technology Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Node.js 22 + Express + TypeScript  
- **Database**: PostgreSQL 15 with Prisma ORM 7.4.0
- **AI**: Ollama (llama3 model)
- **Testing**: Vitest, Playwright, Pact
- **Deployment**: Docker + Docker Compose

## 📋 Requirements

- Docker Desktop 4.0+
- 8 GB RAM (16 GB recommended)
- 10 GB free disk space
- Modern web browser

## 🎨 UI Preview

The application features a premium, clean design following the MJ Solutionss brand guidelines:

- **Primary**: MJ Dark Blue (#2E3A8C)
- **Secondary**: MJ Light Blue (#4A5FD9)
- **Typography**: Inter font family
- **Style**: Glassmorphism with modern card layouts

## 📝 Essential Commands

```bash
# Start services
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f

# Health check
.\check-health.ps1

# Rebuild service
docker-compose build <service-name>

# Restart service
docker-compose restart <service-name>

# Access database
docker exec -it pfd_postgres psql -U admin pfd_db
```

## 🔧 Configuration

### Default Ports

| Service | Port | URL |
|---------|------|-----|
| Client (UI) | 3000 | http://localhost:3000 |
| Gateway | 4000 | http://localhost:4000 |
| Auth | 4001 | http://localhost:4001 |
| Finance | 4002 | http://localhost:4002 |
| Property | 4003 | http://localhost:4003 |
| AI | 4004 | http://localhost:4004 |
| Reporting | 4005 | http://localhost:4005 |
| PostgreSQL | 5432 | localhost:5432 |
| Ollama | 11434 | http://localhost:11434 |
| MailHog (Email) | 8025 | http://localhost:8025 |
| MailHog (SMTP) | 1025 | localhost:1025 |

### Default Credentials

**Database**:
- Username: `admin`
- Password: `password123`
- Database: `pfd_db`

**JWT Secret**: `supersecretkey`

⚠️ **Change these for production use!**

### Email Testing (MailHog)

All emails sent by the application (verification codes, 2FA codes, password resets) are captured by **MailHog** for local testing:

- **Web Interface**: http://localhost:8025
- **SMTP Server**: localhost:1025

**How to use:**
1. Open http://localhost:8025 in your browser
2. Perform actions that trigger emails (registration, login with 2FA, password reset)
3. Check MailHog web UI to see all captured emails
4. No actual emails are sent to real addresses

**Note**: Test users created by the seed script have 2FA disabled by default for easier testing.

### Database Management

**Reseed Test Users** (Delete and recreate test accounts only):
```powershell
cd app
# Delete test users using PowerShell variable
$sql = 'DELETE FROM \"User\" WHERE email IN (''admin@example.com'', ''user@example.com'');'
docker exec -i pfd_postgres psql -U admin pfd_db -c $sql
.\seed-database.ps1
```

**Complete Database Reset** (⚠️ Deletes ALL data):
```powershell
cd app
docker-compose down -v
docker-compose up -d
# Wait for services to start, then seed:
.\seed-database.ps1
```

**Data Persistence:**
- ✅ Data persists across container restarts and rebuilds
- ✅ `docker-compose down` (without `-v`) keeps all data
- ✅ `docker-compose build` never affects database
- ❌ `docker-compose down -v` removes ALL data (volumes deleted)

## 🚨 Troubleshooting

### Services Won't Start

```bash
# Check Docker is running
docker ps

# Remove old containers
docker-compose down -v

# Rebuild from scratch
docker-compose build --no-cache
docker-compose up -d
```

### Check Service Health

```powershell
# Windows
.\check-health.ps1

# View specific service logs
docker-compose logs -f <service-name>
```

### Database Connection Issues

```bash
# Restart database
docker-compose restart db

# Check database logs  
docker-compose logs db
```

### PostgreSQL Database Access

**Connection Details:**
- Host: `localhost`
- Port: `5432`
- Database: `pfd_db`
- Username: `admin`
- Password: `password123`

**Using Command Line (psql):**
```powershell
# Direct connection via Docker
docker exec -it pfd_postgres psql -U admin pfd_db

# Common psql commands:
\dt          # List all tables
\d "User"    # Describe User table (quotes needed for capitalized names)
\q           # Exit psql
```

**Using GUI Tools:**

<details>
<summary><strong>pgAdmin 4</strong> (Recommended)</summary>

1. Download from https://www.pgadmin.org/download/
2. Launch pgAdmin
3. Right-click "Servers" → "Register" → "Server"
4. **General tab**: Name = "PFD Local"
5. **Connection tab**:
   - Hostname: `localhost`
   - Port: `5432`
   - Database: `pfd_db`
   - Username: `admin`
   - Password: `password123`
6. Click "Save"
7. Connection type: **Standard** (not SSL)

</details>

<details>
<summary><strong>VS Code Extension</strong></summary>

1. Install **PostgreSQL** extension by Chris Kolkman
2. Click PostgreSQL icon in sidebar
3. Click "+" to add connection
4. Select "Standard Connection"
5. Enter connection details:
   - Hostname: `localhost`
   - PostgreSQL user: `admin`
   - Password: `password123`
   - Port: `5432`
   - Database: `pfd_db`
   - Connection type: **Standard**
6. Click "Connect"

</details>

### TypeScript Errors After Schema Changes

If you see TypeScript errors about missing properties (e.g., `Property 'emailVerified' does not exist on type 'User'`), the Prisma client needs to be regenerated:

**Symptoms:**
- Red squiggly lines in VS Code on Prisma model fields
- TypeScript errors in Problems tab about missing properties
- Errors mentioning fields like `emailVerified`, `twoFactorEnabled`, etc.

**Solution:**
```powershell
# Navigate to the auth service
cd app/services/auth

# Regenerate Prisma Client
npx prisma generate

# If errors persist, also run for other services with Prisma:
cd ../finance
npx prisma generate

cd ../property
npx prisma generate
```

**Why this happens:**
- The Prisma schema defines the database structure
- The Prisma Client provides TypeScript types based on the schema
- After changing the schema, you must run `prisma generate` to update the types
- This regenerates `src/generated/client` with updated TypeScript definitions

**When to regenerate:**
- After pulling code with schema changes
- After modifying any `schema.prisma` file
- After running database migrations
- When TypeScript can't find properties that exist in the schema

## 📦 Project Structure

```
personal-finance-dashboard/
├── app/
│   ├── client/              # React frontend (Vite)
│   ├── gateway/             # API Gateway (Express)
│   ├── services/
│   │   ├── auth/           # Authentication & user management
│   │   ├── finance/        # Transactions & bank accounts
│   │   ├── property/       # Properties & rentals
│   │   ├── ai/             # AI categorization & chat
│   │   └── reporting/      # Analytics & reports
│   ├── docker-compose.yml  # Container orchestration
│   ├── check-health.ps1    # Health check script
│   └── package.json        # Monorepo configuration
├── docs/                   # Architecture & planning docs
├── categories.csv          # Transaction categories & keywords
├── sampleBankStatements/   # Example bank CSV files
└── USER_GUIDE.md          # Complete user documentation
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run E2E tests
npm run test:e2e

# Run specific service tests
npm test --workspace=services/auth
```

## 🔄 Development Workflow

### Running Locally (Without Docker)

```bash
# Install dependencies
npm install

# Start all services in dev mode
npm run dev

# Services will start on their respective ports
# Frontend on http://localhost:5173 (Vite dev server)
```

### Making Changes

```bash
# After code changes, rebuild affected services
docker-compose build <service-name>
docker-compose up -d <service-name>
```

## 📊 Monitoring

### View Container Status

```bash
docker-compose ps
```

### Monitor Resources

```bash
docker stats
```

### Export Logs

```bash
docker-compose logs > app-logs.txt
```

## 🔐 Security Notes

For production deployment:

1. **Update credentials** in `docker-compose.yml`
2. **Enable HTTPS** with Nginx reverse proxy
3. **Configure firewall** rules
4. **Regular backups** of PostgreSQL database
5. **Update dependencies** regularly

## 📄 License

Private project for personal use.

## 🙏 Acknowledgments

- Built with modern enterprise patterns scaled for personal use
- Follows microservices best practices
- Implements CDC for data integrity
- Privacy-focused design (local-first)

---

**Status**: ✅ All services running and healthy  
**Version**: 1.0.0  
**Last Updated**: February 15, 2026
