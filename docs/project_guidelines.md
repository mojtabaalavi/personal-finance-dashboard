# Project Guidelines & Standards

## 1. Coding Standards
### General
- **Language**: TypeScript (Strict Mode).
- **Style**: Functional components (React), Functional programming patterns (Node).
- **Formatting**: Prettier + ESLint (Standard Config).

### Naming Conventions
- **Files**: `kebab-case` (e.g., `user-service.ts`, `finance-card.tsx`).
- **Classes/Components**: `PascalCase` (e.g., `TransactionList`, `AuthService`).
- **Variables/Functions**: `camelCase` (e.g., `calculateTax`, `isUserLoggedIn`).
- **Constants**: `UPPER_SNAKE_CASE` (e.g., `MAX_RETRY_COUNT`).

## 2. Microservice Guidelines
### Communication
- **Synchronous**: REST (HTTP/JSON) for direct request/response.
- **Contracts**: Must be defined in `packages/types` (shared library) or validated via **Pact**.

### Error Handling
- Use standard HTTP codes (200, 400, 401, 403, 404, 500).
- Response Format:
  ```json
  {
    "success": false,
    "error": {
      "code": "INVALID_INPUT",
      "message": "Transaction date is in the future."
    }
  }
  ```

## 3. Git Workflow & CI/CD
### Pre-commit (Husky)
- Linting must pass.
- Security audit (`npm audit`) must pass.
- Related Unit Tests must pass.

### Branching
- `main`: Production-ready code.
- `feature/*`: New features (e.g., `feature/auth-service`).
- `fix/*`: Bug fixes.

## 4. Operational Scenarios
### Scenario A: Adding a New Bank Parser
1.  **Admin** logs in.
2.  Navigate to **Settings > Parsers**.
3.  Click **Create New Parser**.
4.  Upload Sample CSV.
5.  Map Columns (Date -> Col A, Amount -> Col D).
6.  Save as Version 1.0.

### Scenario B: Monthly Reconciliation
1.  User drags & drops CSV files into **Upload** area.
2.  System auto-detects Bank Account.
3.  System highlights "3 New Transactions", "1 Duplicate".
4.  User clicks **Confirm**.
5.  Transactions added to Ledger.
6.  Dashboard updates instantly.

## 5. Directory Structure
```
/app
  /packages
    /types        # Shared TS interfaces
    /utils        # Shared logic
  /services
    /auth
    /finance
    /property
  /client         # Vite App
  /docs           # Documentation
  docker-compose.yml
```
