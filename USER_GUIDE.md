# Personal Finance Dashboard - Complete User Guide

## Table of Contents
1. [Overview](#overview)
2. [System Requirements](#system-requirements)
3. [Installation & Setup](#installation--setup)
4. [Configuration](#configuration)
5. [Running the Application](#running-the-application)
6. [Features & Usage](#features--usage)
7. [Architecture](#architecture)
8. [Troubleshooting](#troubleshooting)
9. [Advanced Usage](#advanced-usage)

---

## Overview

The **Personal Finance Dashboard** is a comprehensive, local-first web application designed to replace manual Excel-based financial tracking. Built using modern microservices architecture, it provides a privacy-focused solution for managing personal finances, tracking income and expenses, managing assets and liabilities, and generating detailed financial reports.

### Key Features

- **Privacy First**: All data stored locally on your machine - no cloud dependency
- **Intelligent Bank Statement Processing**: Auto-parse CSV/Excel files from multiple NZ banks (ASB, ANZ, KiwiBank)
- **Smart Categorization**: AI-powered transaction categorization with keyword matching
- **Property Management**: Track rental properties, mortgages, insurance, and rental income
- **Tax Reporting**: Generate property-specific P&L statements for tax purposes
- **Real-time Dashboard**: View net worth, cash flow, and financial health at a glance
- **Multi-user Support**: Role-based access control (Admin/User)
- **AI Chat Assistant**: Ask questions about your finances using natural language

### Technology Stack

- **Frontend**: React + TypeScript + Vite
- **Backend**: Node.js microservices (Express + TypeScript)
- **Database**: PostgreSQL 15
- **AI**: Ollama (local LLM) for intelligent features
- **Containerization**: Docker + Docker Compose
- **ORM**: Prisma

---

## System Requirements

### Minimum Requirements

- **Operating System**: Windows 10/11, macOS 12+, or Linux (Ubuntu 20.04+)
- **CPU**: 4-core processor (Intel i5 or AMD Ryzen 5 equivalent)
- **RAM**: 8 GB (16 GB recommended for AI features)
- **Storage**: 10 GB free disk space
- **Docker**: Docker Desktop 4.0+ (with Docker Compose)
- **Internet**: Required for initial setup (downloading Docker images)

### Software Prerequisites

1. **Docker Desktop**: [Download here](https://www.docker.com/products/docker-desktop/)
   - Ensure Docker Compose is included (v2.0+)
   - **Windows**: WSL 2 backend enabled
   - **macOS**: Rosetta 2 enabled (for Apple Silicon)

2. **Git** (optional, for updates): [Download here](https://git-scm.com/downloads)

3. **Web Browser**: Modern browser (Chrome, Firefox, Edge, Safari)

---

## Installation & Setup

### Step 1: Verify Docker Installation

Open a terminal/PowerShell and run:

```bash
docker --version
docker-compose --version
```

You should see output like:
```
Docker version 24.0.x
Docker Compose version v2.x.x
```

### Step 2: Navigate to Project Directory

```powershell
# Windows PowerShell
cd D:\Personal\personal-finance-dashboard\app

# macOS/Linux
cd ~/personal-finance-dashboard/app
```

### Step 3: Build Docker Images

This step compiles all microservices and prepares them for deployment:

```bash
docker-compose build
```

**Expected Duration**: 5-10 minutes (first time)

### Step 4: Start All Services

```bash
docker-compose up -d
```

The `-d` flag runs services in detached mode (background).

### Step 5: Verify Services Are Running

Run the health check script:

```powershell
# Windows
.\check-health.ps1

# macOS/Linux
chmod +x check-health.sh && ./check-health.sh
```

All services should show **HEALTHY** status.

### Step 6: Initialize Database Schema

The database schema is automatically created when services start via Prisma migrations.

### Step 7: Seed Database with Test Users (Optional)

For quick testing, seed the database with default admin and user accounts:

```powershell
# Windows
.\seed-database.ps1

# Alternative: Run directly in container
docker exec pfd_auth npm run seed
```

**Default Admin Credentials**:
- **Email**: `admin@example.com`
- **Password**: `password123`
- **Role**: ADMIN

**Default User Credentials**:
- **Email**: `user@example.com`
- **Password**: `password123`
- **Role**: USER

⚠️ **Important**: Login requires an **EMAIL ADDRESS**, not a username.

---

## Configuration

### Environment Variables

Each service uses environment variables defined in `docker-compose.yml`. Default configuration works out-of-the-box for local development.

#### Database Configuration

**Default Credentials** (defined in `docker-compose.yml`):
- **Host**: localhost
- **Port**: 5432
- **Database**: pfd_db
- **Username**: admin
- **Password**: password123

**⚠️ Security Note**: Change these credentials for production use!

#### JWT Secret

Default: `supersecretkey`

To change, update all service configurations:

```yaml
environment:
  - JWT_SECRET=your-new-secret-key-here
```

### Port Mapping

| Service | Internal Port | External Port | Purpose |
|---------|--------------|---------------|---------|
| Gateway | 4000 | 4000 | API Gateway (unified entry point) |
| Auth Service | 4001 | 4001 | User authentication & management |
| Finance Service | 4002 | 4002 | Bank accounts & transactions |
| Property Service | 4003 | 4003 | Assets, mortgages, insurance |
| AI Service | 4004 | 4004 | AI categorization & chat |
| Reporting Service | 4005 | 4005 | Analytics & reports |
| Client (Frontend) | 80 | 3000 | React web application |
| PostgreSQL | 5432 | 5432 | Database |
| Ollama | 11434 | 11434 | Local LLM server |

---

## Running the Application

### Starting the Application

```bash
cd d:\Personal\personal-finance-dashboard\app
docker-compose up -d
```

### Stopping the Application

```bash
docker-compose down
```

**Note**: This stops all containers but **preserves data** in Docker volumes.

### Stopping & Removing All Data

```bash
docker-compose down -v
```

**⚠️ Warning**: The `-v` flag deletes all database data!

### Viewing Logs

**All services**:
```bash
docker-compose logs -f
```

**Specific service**:
```bash
docker-compose logs -f auth-service
```

### Restarting a Service

```bash
docker-compose restart auth-service
```

### Rebuilding After Code Changes

```bash
docker-compose build --no-cache <service-name>
docker-compose up -d <service-name>
```

---

## Features & Usage

### 1. User Registration & Login

#### Quick Start with Default Admin

For testing, you can use the pre-seeded admin account:

1. Run the seed script:
   ```powershell
   .\seed-database.ps1
   ```

2. Open your browser: **http://localhost:3000**

3. Login with:
   - **Email**: `admin@example.com`
   - **Password**: `password123`

⚠️ **Note**: The system uses **email addresses** for login, not usernames.

#### First-Time Setup (New User)

1. Open your browser and navigate to: **http://localhost:3000**
2. Click **"Register"**
3. Enter:
   - **Email**: your@email.com
   - **Password**: (minimum 8 characters)
4. Click **"Create Account"**
5. You'll be redirected to the login page
6. Login with your credentials

#### User Roles

- **USER**: Can view and manage their own financial data
- **ADMIN**: Full access + user management + parser configuration

### 2. Dashboard Overview

The dashboard provides a real-time snapshot of your financial health.

**Key Metrics Displayed**:
- **Total Balance**: Sum of all bank accounts
- **Monthly Income**: Total income for current month
- **Monthly Expenses**: Total expenses for current month
- **Net Savings**: Income minus expenses
- **Total Assets**: Value of all assets (property, vehicles, savings)
- **Total Liabilities**: Outstanding debts (mortgages, credit cards)

**Visualizations**:
- Income vs Expense trend chart
- Category breakdown (pie charts)
- Recent transactions table
- Spending limits progress bars

### 3. Bank Statement Upload & Processing

#### Supported Banks

- **ASB Bank** (CSV)
- **ANZ** (CSV)
- **KiwiBank** (CSV)

#### Upload Process

1. Navigate to **Transactions** page
2. Click **"Upload Bank Statement"**
3. Drag & drop your CSV file or click to browse
4. System auto-detects:
   - Bank account number
   - Statement format
   - Date range
5. Review the **Validation Report**:
   - New transactions count
   - Duplicate transactions (automatically skipped)
   - Categorized vs uncategorized
6. Click **"Confirm & Import"**
7. Transactions added to ledger

#### Transaction Categorization

The system uses a multi-layer categorization approach:

**Automatic Categorization**:
- **Keyword Matching**: Matches transaction descriptions to predefined keywords
- **AI Suggestions**: Uses local LLM to suggest categories for unknown transactions

**Manual Categorization**:
1. Filter transactions by "Uncategorized"
2. Select a transaction
3. Choose **Main Category** and **Sub Category**
4. Click **"Save"**
5. System learns from your choices

**Category Structure** (from categories.csv):
```
Main Category → Sub Category → Keywords
--------------------------------------------
Food & Dining → Groceries → "countdown", "new world", "pak n save"
Food & Dining → Restaurants → "uber eats", "menulog"
Transport → Fuel → "bp", "z energy", "mobil"
Housing → Rent → "rent", "tenancy"
```

### 4. Managing Bank Accounts

#### Adding a Bank Account

1. Navigate to **Settings → Bank Accounts**
2. Click **"Add Bank Account"**
3. Enter:
   - **Account Name**: e.g., "ASB Everyday"
   - **Account Number**: e.g., "12-3057-0123456-01"
   - **Bank Name**: ASB, ANZ, KiwiBank, etc.
   - **Account Type**: Savings, Cheque, Credit Card, Loan
4. Click **"Save"**

#### Bank Account Types

You can add custom account types via **Admin → Bank Types**:
- Savings
- Cheque / DaytoDay
- Credit Card
- Loan
- Mortgage
- Investment

### 5. Property Management (Rental & Own)

#### Adding a Property

1. Navigate to **Properties** page
2. Click **"Add Property"**
3. Enter **Basic Details**:
   - **Address**: Full property address
   - **Property Type**: Rental or Owner-Occupied
   - **Current Value**: Market value
   - **Purchase Date** & **Purchase Price**

4. **Financial Details**:
   - **Insurance Premium**: Yearly or monthly
   - **Council Rates**: Annual amount
   - **Maintenance Budget**: Estimated yearly costs

5. **For Rental Properties**:
   - **Rental Agreement Details**:
     - Tenant name
     - Lease start & end dates
     - Rent amount
     - Payment frequency (Weekly/Fortnightly/Monthly)
     - Due day (e.g., 1st of month)
     - Payment keywords (for auto-matching transactions)

6. **Mortgage Details** (if applicable):
   - Current loan amount
   - Interest rate
   - Fixed rate expiry date (alerts 3 months prior)
   - Payment frequency

#### Rent Matching Logic

The system automatically links bank transactions to rental properties:

1. **Full Keyword Match**: Exact tenant name or reference
2. **Partial Keyword Match**: Substring matching (e.g., "Smith" matches "John Smith Rent")
3. **Manual Link**: Drag transaction onto property card

#### Property Tax Report

1. Navigate to **Reports → Property Tax**
2. Select:
   - **Financial Year**: e.g., 2024 (1 Apr 2024 - 31 Mar 2025)
   - **Property**: Select from dropdown
3. Click **"Generate Report"**

**Report Includes**:
- **Income**: Total rent received
- **Expenses**:
  - Interest on loan
  - Rates
  - Insurance
  - Repairs & maintenance
- **Net Profit/Loss**: For IRD tax return

### 6. AI Chat Assistant

#### Starting a Chat Session

1. Click the **chat icon** (bottom-right corner)
2. Type your question, e.g.:
   - "How much did I spend on groceries last month?"
   - "What's my total savings this year?"
   - "Show me my largest expenses in December"
3. The AI analyzes your data and responds

**Powered by**: Ollama (llama3 model) running locally

**Privacy**: All AI processing happens on your machine - no data sent to external servers.

### 7. Admin Features

#### User Management

**Access**: Admin → Users

**Actions**:
-  View all users
- **Lock/Unlock** user accounts
- **Change user role** (User ↔ Admin)
- **Manage permissions**

#### Parser Configuration

**Access**: Admin → Parsers

**Purpose**: Configure how CSV files from different banks are parsed.

**Adding a New Bank Parser**:
1. Click **"Create New Parser"**
2. Upload a sample CSV file
3. Map columns:
   - **Date Column**: Select column containing transaction date
   - **Date Format**: e.g., DD/MM/YYYY
   - **Amount Column**: Transaction amount
   - **Description Column**: Merchant/payee name
   - **Account Number Column** (optional)
4. **Sign Inversion Rules** (optional):
   - Some banks use positive values for expenses
   - Add keywords to invert sign (e.g., "DEBIT", "WITHDRAWAL")
5. Save as **Version 1.0**
6. Set as **Default Parser**  for that bank

**Versioning**: Maintain multiple parser versions as banks change CSV formats.

---

## Architecture

### Microservices Overview

```
┌─────────────────────────────────────────────────┐
│            React Frontend (Client)              │
│              http://localhost:3000              │
└────────────────────┬────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────┐
│         API Gateway (Port 4000)                 │
│  Routes: /api/auth, /api/finance, /api/property│
└─────┬────────┬──────────┬────────────┬─────────┘
      │        │          │            │
  ┌───▼──┐ ┌──▼───┐  ┌───▼────┐  ┌───▼─────┐
  │ Auth │ │Finance│  │Property│  │ AI Svc  │
  │ 4001 │ │ 4002 │  │  4003  │  │  4004   │
  └───┬──┘ └──┬───┘  └───┬────┘  └───┬─────┘
      │       │          │            │
  ┌───▼───────▼──────────▼────────────▼─────┐
  │         PostgreSQL (Port 5432)           │
  │          Database: pfd_db                │
  └──────────────────────────────────────────┘
```

### Service Responsibilities

| Service | Responsibility | Key Features |
|---------|---------------|--------------|
| **Gateway** | API routing, rate limiting | Unified entry point |
| **Auth Service** | User management, JWT auth, RBAC | Login, register, user CRUD |
| **Finance Service** | Bank accounts, transactions, parsing | CSV upload, categorization |
| **Property Service** | Assets, mortgages, insurance, rentals | Property tracking, rent matching |
| **AI Service** | LLM integration, chat, auto-categorization | Ollama-powered insights |
| **Reporting Service** | Analytics, aggregation, tax reports | Cross-service data queries |

### Data Storage Strategy

**Database Isolation**: Each service manages its own schema within `pfd_db`.

**Change Data Capture (CDC)**:
- Critical tables (User, Transaction, Asset) maintain history via CDC tables
- Enables "point-in-time" reporting (e.g., "What was my net worth on Jan 1st?")

**Schema Example (Auth Service)**:
```sql
-- Current state
User (id, email, passwordHash, role, isLocked)

-- Historical state (CDC)
UserHistory (id, userId, email, role, changedAt, changedBy)
```

---

## Troubleshooting

### Common Issues

#### 1. Containers Won't Start

**Problem**: `docker-compose up` fails

**Solutions**:

```bash
# Check Docker is running
docker ps

# Check for port conflicts
netstat -ano | findstr :4000
netstat -ano | findstr :5432

# Remove old containers and rebuild
docker-compose down -v
docker-compose build --no-cache
docker-compose up -d
```

#### 2. Service Shows "UNREACHABLE"

**Problem**: Health check fails for a service

**Solution**:

```bash
# View service logs
docker-compose logs -f <service-name>

# Common causes:
# - Database not ready (wait 10 seconds after startup)
# - Missing environment variables
# - Port already in use

# Restart specific service
docker-compose restart <service-name>
```

#### 3. Database Connection Errors

**Problem**: Services can't connect to PostgreSQL

**Symptoms**:
```
Error: P1001: Can't reach database server at `db:5432`
```

**Solutions**:

```bash
# Ensure PostgreSQL container is running
docker-compose ps | grep postgres

# Check database logs
docker-compose logs db

# Reset database
docker-compose down -v
docker-compose up -d
```

#### 4. Prisma Client Errors

**Problem**: `Error: Cannot find module '../generated/client'`

**Solution**:
```bash
# Rebuild services with Prisma clients
docker-compose build auth-service finance-service property-service --no-cache
docker-compose up -d
```

#### 5. Frontend Shows Blank Page

**Problem**: http://localhost:3000 displays nothing

**Solutions**:

```bash
# Check client container
docker-compose logs client

# Verify Nginx is serving files
docker exec pfd_client ls /usr/share/nginx/html

# Rebuild client
docker-compose build client --no-cache
docker-compose up -d client
```

#### 6. AI Service Not Responding

**Problem**: Chat doesn't work, AI features unavailable

**Solutions**:

```bash
# Check Ollama is running
docker ps | grep ollama

# Pull llama3 model (first time only)
docker exec pfd_ollama ollama pull llama3

# Check AI service logs
docker-compose logs ai-service
```

### Health Check Script

Run the provided health check script to verify all services:

```powershell
# Windows
.\check-health.ps1

# Expected output:
# Gateway ... HEALTHY
# Auth Service ... HEALTHY
# Finance Service ... HEALTHY
# Property Service ... HEALTHY
# AI Service ... HEALTHY
# Reporting Service ... HEALTHY
# Client ... HEALTHY
# PostgreSQL ... HEALTHY
```

### Logs Analysis

**View all logs**:
```bash
docker-compose logs -f
```

**Filter by service**:
```bash
docker-compose logs -f auth-service | grep ERROR
```

**Export logs to file**:
```bash
docker-compose logs > debug.log
```

---

## Advanced Usage

### Running in Development Mode (Without Docker)

For active development, you can run services locally:

#### Prerequisites
- Node.js 22+
- PostgreSQL 15 installed locally
- Ollama installed locally (for AI features)

#### Steps

1. **Install dependencies**:
```bash
cd app
npm install
```

2. **Set up local database**:
```bash
# Create database
createdb pfd_db

# Update .env files in each service
DATABASE_URL=postgresql://localhost:5432/pfd_db
```

3. **Run all services concurrently**:
```bash
npm run dev
```

This starts:
- Gateway on port 4000
- All microservices on their respective ports
- Frontend dev server on port 5173 (Vite default)

### Backup & Restore

#### Backup Database

```bash
# Create backup
docker exec pfd_postgres pg_dump -U admin pfd_db > backup_$(date +%Y%m%d).sql

# Verify backup
ls -lh backup_*.sql
```

#### Restore Database

```bash
# Stop services
docker-compose down

# Start only database
docker-compose up -d db

# Wait for database to be ready
sleep 5

# Restore
docker exec -i pfd_postgres psql -U admin pfd_db < backup_20260215.sql

# Start all services
docker-compose up -d
```

### Customization

#### Adding a New Category

1. Edit `categories.csv` in project root:
```csv
MainCategory,SubCategory,Keywords
Travel,Flights,"air nz;jetstar;emirates"
Travel,Accommodation,"booking.com;airbnb;hotel"
```

2. Restart finance service:
```bash
docker-compose restart finance-service
```

#### Changing UI Theme

Edit `app/client/src/index.css` to update CSS variables:

```css
:root {
  --primary-color: #2E3A8C;  /* MJ Dark Blue */
  --secondary-color: #4A5FD9; /* MJ Light Blue */
  /* Update to your brand colors */
}
```

### Performance Optimization

#### Increase Container Resources

Edit `docker-compose.yml`:

```yaml
services:
  ai-service:
    deploy:
      resources:
        limits:
          cpus: '2'
          memory: 4G
```

#### Enable Production Mode

Set environment variable:

```yaml
environment:
  - NODE_ENV=production
```

This enables:
- Production builds (minified, optimized)
- Reduced logging
- Connection pooling

---

## Security Best Practices

### For Production Deployment

1. **Change Default Credentials**:
```yaml
environment:
  - POSTGRES_PASSWORD=<strong-password>
  - JWT_SECRET=<random-256-bit-string>
```

2. **Enable HTTPS**: Use Nginx reverse proxy with Let's Encrypt

3. **Firewall Rules**: Block external access to all ports except 443 (HTTPS)

4. **Regular Backups**: Automate daily database backups

5. **Update Dependencies**:
```bash
npm update
docker-compose pull
```

---

## Quick Reference

### Essential Commands

| Task | Command |
|------|---------|
| Start all services | `docker-compose up -d` |
| Stop all services | `docker-compose down` |
| View service status | `docker-compose ps` |
| View logs | `docker-compose logs -f <service>` |
| Restart service | `docker-compose restart <service>` |
| Rebuild service | `docker-compose build <service>` |
| Run health check | `.\check-health.ps1` |
| Access database | `docker exec -it pfd_postgres psql -U admin pfd_db` |

### Service URLs

| Service | URL | Purpose |
|---------|-----|---------|
| Web UI | http://localhost:3000 | Main application |
| API Gateway | http://localhost:4000 | API endpoint |
| Auth Service | http://localhost:4001/health | Health check |
| Finance Service | http://localhost:4002/health | Health check |
| Property Service | http://localhost:4003/health | Health check |
| AI Service | http://localhost:4004/health | Health check |
| Reporting Service | http://localhost:4005/health | Health check |

---

## Support & Contributing

### Getting Help

- **Documentation**: Check this guide and `/docs` folder
- **Logs**: Always check service logs for error details
- **Health Check**: Run `check-health.ps1` to diagnose issues

### Project Structure

```
personal-finance-dashboard/
├── app/
│   ├── client/              # React frontend
│   ├── gateway/             # API Gateway
│   ├── services/
│   │   ├── auth/           # Authentication service
│   │   ├── finance/        # Transaction service
│   │   ├── property/       # Property service
│   │   ├── ai/             # AI service
│   │   └── reporting/      # Reporting service
│   ├── docs/               # Documentation
│   ├── docker-compose.yml  # Container orchestration
│   └── check-health.ps1    # Health check script
├── categories.csv          # Transaction categories
└── sampleBankStatements/   # Example CSV files
```

---

## Appendix

### Supported Date Formats

- `DD/MM/YYYY` (NZ standard)
- `MM/DD/YYYY` (US)  
- `YYYY-MM-DD` (ISO)
- `DD-MMM-YYYY` (e.g., 15-Feb-2026)

### Financial Year

- **NZ/AU**: 1 April - 31 March
- **US/Most**: 1 January - 31 December

The app defaults to NZ financial year for tax reporting.

### Bank CSV Examples

**ASB Format**:
```csv
Date,Amount,Description,Balance
15/02/2026,-45.50,COUNTDOWN AUCKLAND,1234.50
```

**ANZ Format**:
```csv
Date,Amount,Payee,Type
15/02/2026,-45.50,COUNTDOWN AUCKLAND,EFTPOS
```

**KiwiBank Format**:
```csv
Date,Description,Debit,Credit,Balance
15/02/2026,COUNTDOWN AUCKLAND,45.50,,1234.50
```

---

## Changelog

### Version 1.0.0 (February 2026)
- Initial release
- Microservices architecture
- Support for ASB, ANZ, KiwiBank
- Property management
- AI-powered categorization
- Tax reporting

---

**Last Updated**: February 15, 2026  
**Version**: 1.0.0  
**Contact**: Documentation Team
