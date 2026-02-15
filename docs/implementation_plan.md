# Implementation Plan - Personal Finance Dashboard

## Goal Description
Build a comprehensive, local-first Personal Finance Dashboard web application to track income, expenses, assets, and liabilities. The app will replace manual Excel tracking, supporting direct upload of bank statements (CSV/XLS), intelligent categorization using keyword rules, and detailed financial reporting.

## User Review Required
> [!IMPORTANT]
> **Data Persistence Strategy**: The app will run in the browser (local via Vite) but needs to store data persistently. I plan to use the **File System Access API** (if supported by browser) to allow the user to open a local directory where data (JSON) will be saved alongside the original CSVs. Alternatively, we can use `IndexedDB` for robust in-browser storage with Export/Import functionality. Given the request to "store this file in proper format", direct file access or export is crucial. I will default to **IndexedDB with Export/Import** as a robust fallback if file system access is tricky, but will try for direct file saving.

> [!NOTE]
> **Tech Stack Selection**: I will use **Vite + React + TypeScript** for a modern, performant web app. Styling will use **CSS Modules and Variables** adhering to the provided `brandGuidelines.md` for a premium look without heavy framework dependencies like Tailwind (unless user confirms otherwise, but I will stick to "Vanilla CSS" style per system prompt default).

## Proposed Changes

### Project Structure (`d:\Personal\personal-finance-dashboard\app`)
Standard Monorepo structure for Microservices.
```
/app
  /gateway       # API Gateway (Express Proxy)
  /services
    /auth        # Users, Roles, Auth
    /finance     # Banks, Transactions, Parsers
    /property    # Assets, Insurance, Mortgages
    /ai          # LLM Integration, Chat, Categorization
  /client        # React Frontend
  docker-compose.yml
```

#### Core Technologies
- **Containerization**: `Docker`, `Docker Compose`.
- **Database**: `PostgreSQL` (Running in Docker).
- **Backend API**: `Node.js`, `Express`, `TypeScript`.
- **ORM**: `Prisma` (One instance per service, connecting to separate logical DBs or Schemas).
- **Frontend**: `React`, `Vite`.

### Architecture & Data Strategy
#### Services
1.  **Auth Service** ✅:
    - **DB**: `auth_db`.
    - **Responsibility**: Login, Register, User Management, Token Generation, RBAC.
    - **CDC**: Tracks User History (via `UserHistory` table).
    - **Implementation**: JWT authentication, Argon2 password hashing, role-based authorization middleware.
2.  **Finance Service**:
    - **DB**: `finance_db`.
    - **Responsibility**: Bank Registry, Transaction Processing, Categorization, Parsing Engine.
    - **CDC**: Tracks Transaction edits, Bank Account changes.
3.  **Property Service**:
    -   **DB**: `property_db`.
    -   **Responsibility**: Assets, Mortgages, Rental Agreements, Insurance Policies, Rent Matching.
    -   **CDC**: Tracks Value changes, Policy renewals.
4.  **AI Service**:
    -   **DB**: None (Stateless/Cache).
    -   **Responsibility**: LLM Interface (**Ollama**), Intelligent Categorization, Context-Aware Chat.
    -   **Features**:
        -   **Auto-Categorize**: Analyzes "Uncategorized" transactions against existing Category DB + Keywords. Suggests Main/Sub category.
        -   **Chat**: Answers "How much did I spend on food?" by querying Report Service.
5.  **Gateway** ✅:
    -   **Responsibility**: Unifies all APIs under one port (e.g., `localhost:4000/api/auth`, `.../api/finance`).
    -   **Implementation**: Express proxy using `http-proxy-middleware@3.0.5`.

#### Quality Assurance & Testing Strategy
- **Unit Tests**: `Vitest` for business logic (Parsers, Calculations).
- **Integration Tests**: `Supertest` + Dockerized DB for API endpoints.
- **UI Tests**: `Playwright` for E2E flows (Upload -> Verify -> Dashboard).
- **Contract Testing**: `Pact` / `Pactflow`.
  - Ensures `finance-service` API changes don't break `gateway` or `frontend`.
- **Pre-Commit Hooks (`Husky` + `lint-staged`)**:
  - **Lint**: `eslint`, `prettier`.
  - **Security**: `npm audit`, `trivy` (container scan).
  - **Logic**: Run related unit tests on changed files.

#### Database Schema (Distributed)
- **Auth**: `User` (with `UserHistory`), `Role`.
- **Finance**: `BankAccount`, `Transaction`, `ParsingConfig`.
- **Property**: `Asset`, `Liability`, `Insurance`, `RentalAgreement`.

### Features & Components (`client/src/components`)
#### [NEW] DevOps & Setup
- **Scripts**:
  - `npm run docker:up`: Starts all services + DB.
  - `npm run docker:down`: Stops everything.
  - `npm run docker:build`: Rebuilds images.
- **Local Dev**: Instructions provided to run locally via `npm run dev` (concurrently) or via Docker.

#### [IMPLEMENTED] Gateway Service
- Proxy routing to all microservices
- Health check endpoint
- CORS and JSON middleware enabled
- Environment-based service URL configuration

#### [IMPLEMENTED] Auth Service
- User registration with Argon2 password hashing
- JWT-based login and token generation
- Protected `/me` endpoint for current user details
- User management endpoints (Admin only):
  - `GET /api/users` - List all users
  - `PATCH /api/users/:id/lock` - Toggle user lock status
  - `PATCH /api/users/:id/permissions` - Update permissions and role
- Change Data Capture via `UserHistory` table
- RBAC middleware with role-based authorization

#### [NEW] Configuration
- **Bank Account Registry**:
  - Admin Interface to manage Accounts.
  - **Type Management**: Admin can Add/Edit/Delete Types (defaults: Saving, Loan, CreditCard, DaytoDay).
- **Parser Manager**:
  - **Versioning**: Store parser rules as JSON. Create new version on edit.
  - **Default Setting**: Admin selects which parser version is active for a Bank.
  - **Review**: Admin can test parser against sample files.
- **Auth Flow**:
  - **Real Backend Auth**: JWT-based session.
  - **Register**: Creates User in PostgreSQL DB (Password hashed with Argon2).
  - **Email Confirmation**: Backend logs "Confirmation Link" to console (Local dev) or sets "Verified" directly for Admin simplicity.
- **Roles & Permissions**:
  - **Admin**: Can access `/api/admin/*` and `/api/users/*` endpoints.
  - **User**: Restricted to `/api/me/*` (Personal view) or Read-Only if configured.
- **Admin Dashboard**:
  - Calls `GET /api/users` to list all accounts.
  - Calls `PATCH /api/users/:id/lock` to Lock/Unlock.
  - Calls `PATCH /api/users/:id/permissions` to update granular permissions.
- **Privacy Mode**: Global Frontend toggle to mask data via CSS/State.

#### [NEW] Dashboard
- **KPI Cards**: Balance, Income, Expense, Savings.
- **Financial Year Overview**: Income vs Expense trend.
- **Expense Dynamic Comparison**:
  - Bar Chart.
  - Toggles: **Monthly** (Default), **3 Months**, **6 Months**, **Yearly**.
  - Logic: Compares current period vs previous period (e.g., This Month vs Last Month).

#### [NEW] Bank Statement Import
- **Upload Workflow**:
  - **Step 1**: User uploads file -> Save to `server/temp/`.
  - **Step 2 (Analyze)**: Server parses file, runs De-duplication, Categorization, and Smart Detection.
  - **Step 3 (Validate)**: UI shows a "Preview Report" of what will be added.
    - *Highlights*: Missing fields, potential duplicates, generic "Uncategorized" items.
  - **Step 4 (Commit)**: User clicks "Confirm Import".
    - Data written to `Transaction` DB table.
    - Temp file deleted.
- **Smart Detection**:
  - 1. Read first X lines of file.
  - 2. Regex match for Account Number.
  - 3. Lookup Bank Account in DB -> Get Default Parser Config.
  - 4. If ambiguity, ask User to confirm Parser.
- **Engine**:
  - Uses `ParserConfig` (Column Indexes, Date Formats, Sign Inversion Rules) to process the file.
- **Categorizer**: Runs `categories.csv` logic against description.
- **Review UI**: Shows ambiguous or new transactions for user approval.

#### [NEW] Assets & Liabilities
- **Property Manager**:
  - **Type**: Rental vs Own (Own excluded from Rental Summaries).
  - **Details**: Current Value, Council Rates, Insurance, Maintenance Cost.
  - **Linkage**: Connect to specific Mortgage Liability (Current Loan Amount).
  - **Rental Agreements**:
    - Track Tenant Details, Lease Dates, Rent Amount, Due Day.
    - **Rent Matching**: Define Keywords (e.g., "Ref: 5B Cleary") per property.
    - **Logic**: Scanning Bank Transactions for Strings (Partial/Full Match) -> Auto-tag as "Rent Received" for that Property.
    - **Reconciliation**: Highlight missed/late payments (Expected vs Actual).
  - **Frequencies**: Rent & Mortgage Repayments (Weekly, Fortnightly, Monthly).
  - **Calculations**:
    - **Net Income**: Rent - (Mortgage + Rates + Insurance + Maintenance).
    - **Tax Estimation**: Configurable Tax Rate on Net Rental Income.
    - **Rental Summary**: Aggregated view of all Rental Properties.
  - **Notifications**: Mortgage Fix Rate Expiry (< 3 Months).
  - **Transaction Linking**: Ability to tag a transaction (Income/Expense) as belonging to a specific Property.
- **General Assets**: Saving & Cash, Superannuation, Vehicle, Contents.
- **Liabilities**: Credit Cards (Limit, Available), Mortgages.
- **Person Assignment**: Track ownership per asset/liability.

#### [NEW] Authentication & Security
- **Auth Flow**:
  - Email/Password Login.
  - Registration with **Simulated Email Confirmation** (UI flow matches real experience, "link" generated internally for local demo).
- **Roles**:
  - **Admin**: Full access (Add, Edit, Delete, Configure).
  - **User**: View Only (can browse Dashboards/Reports but disabled Edit/Delete actions).
- **User Management (Admin Only)**:
  - List all users.
  - Mechanism to **Lock/Unlock** user access.
  - **Granular Permissions**: Toggle access to specific features (e.g., "Can View Assets", "Can View Tax Reports") per user.
- **Privacy Mode**:
  - Global toggle in Header.
  - When active, sensitive numbers (Balances, Transaction Amounts) are masked (e.g., `****`).

#### [NEW] Reports
- **Financial Year**: Custom Logic (1 Apr to 31 Mar).
- **Timeframes**: Last 2 Years, Current Year, Monthly, 3/6 Months.
- **Summaries**: Total Assets/Liabilities by Person and Combined.
- **Tax Report**:
  - **Profit & Loss Statement**: Break down by Property.
  - **Logic**: Sum Income (Rent) and Expenses (Rates, Insurance, Maintenance) per Property.
  - **GST Handling**: Option to toggle GST inclusion if relevant (based on notes).

## Verification Plan

### Automated Tests
- Unit tests for the **CSV Parser** and **Categorization Logic** using `vitest`.
- Test `categories.csv` parsing to ensure rules are loaded correctly.
- Integration tests for Auth Service endpoints using `supertest`.

### Manual Verification
- Upload sample bank statements (`sampleBankStatements`).
- Verify correct categorization based on `categories.csv`.
- Verify Financial Year calculations.
- Verify Asset/Liability totals align with manual Excel sheets (if decipherable).
- Test Auth Service registration, login, and user management endpoints.
