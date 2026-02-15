# E2E Testing Guide

## Overview

This directory contains end-to-end (E2E) tests for the Personal Finance Dashboard using Playwright.

## Setup

### Prerequisites

1. Ensure all services are running:
```bash
cd ../..
docker-compose up -d
```

2. Wait for services to be healthy:
```bash
.\check-health.ps1
```

### Install Dependencies

```bash
npm install
```

## Default Test Users

The database can be seeded with default test users for quick testing.

### Seed the Database

From the auth service directory:

```bash
cd ../../services/auth
npm run seed
```

This creates:

#### Admin User
- **Email**: `admin@example.com`
- **Password**: `password123`
- **Role**: ADMIN
- **Permissions**: manage_users, manage_parsers, view_all_data

#### Regular User
- **Email**: `user@example.com`
- **Password**: `password123`
- **Role**: USER
- **Permissions**: (none)

## Running Tests

### Run All Tests

```bash
npm test
```

### Run Tests in UI Mode (Interactive)

```bash
npx playwright test --ui
```

### Run Specific Test

```bash
npx playwright test auth.spec.ts
```

### Run Tests in Headed Mode (See Browser)

```bash
npx playwright test --headed
```

### Debug Tests

```bash
npx playwright test --debug
```

## Test Coverage

### Authentication Tests (`auth.spec.ts`)

1. **New User Registration and Login**
   - Tests user registration flow
   - Verifies login with new user
   - Checks dashboard access
   - Tests logout

2. **Admin Login and Access**
   - Creates an admin user via API
   - Logs in with admin credentials
   - Verifies access to admin-only pages:
     - `/admin/users` - User Management
     - `/admin/parsers` - Parser Management
   - Tests logout

3. **Access Control**
   - Verifies regular users cannot access admin pages
   - Tests proper redirection for unauthorized access

## Important Notes

### Email Address Required

⚠️ **The login system requires an EMAIL ADDRESS, not a username.**

**Correct Login Format**:
- Email: `admin@example.com`
- Password: `password123`

**Incorrect (Will Fail)**:
- Username: `admin`
- Password: `password123`

### Creating Admin Users

By default, user registration creates users with the `USER` role. To create admin users:

#### Option 1: Database Seed (Recommended for Testing)
```bash
cd services/auth
npm run seed
```

#### Option 2: Via API (After Creating User)

1. Register a new user
2. Update user role via API:

```bash
# Get user token from registration
TOKEN="your_token_here"
USER_ID="user_id_here"

# Upgrade to admin
curl -X PATCH http://localhost:4000/api/users/${USER_ID}/permissions \
  -H "Authorization: Bearer ${TOKEN}" \
  -H "Content-Type: application/json" \
  -d '{
    "role": "ADMIN",
    "permissions": ["manage_users", "manage_parsers"]
  }'
```

#### Option 3: Direct Database Update

```bash
# Access database
docker exec -it pfd_postgres psql -U admin pfd_db

# Update user role
UPDATE "User" SET role = 'ADMIN', permissions = '{manage_users,manage_parsers}' 
WHERE email = 'youremail@example.com';
```

## Troubleshooting

### Services Not Running

```bash
cd ../..
docker-compose up -d
.\check-health.ps1
```

### Database Connection Issues

```bash
# Restart database
docker-compose restart db

# Restart auth service
docker-compose restart auth-service
```

### Clear Test Data

```bash
# Reset database
docker-compose down -v
docker-compose up -d

# Wait for services to start
Start-Sleep -Seconds 30

# Re-seed with test users
cd services/auth
npm run seed
```

### Test Timeout Issues

If tests timeout, increase the timeout in `playwright.config.ts`:

```typescript
use: {
  actionTimeout: 30000, // Increase from default
}
```

## Test Port Configuration

The tests are configured to use different ports to avoid conflicts:

- **Development Frontend**: Port 5173 (Vite dev server)
- **Production Frontend**: Port 3000 (Nginx in Docker)
- **E2E Test Target**: Port 3002 (Configured in playwright.config)

Make sure the correct port is configured in `playwright.config.ts`.

## Viewing Test Reports

After running tests, view the HTML report:

```bash
npx playwright show-report
```

## CI/CD Integration

Tests can be run in CI/CD pipelines:

```bash
# Run tests in headless mode
npx playwright test

# Generate report
npx playwright show-report
```

## Best Practices

1. **Use Unique Emails**: Tests use timestamp-based emails to avoid conflicts
2. **Clean Up**: Tests should clean up after themselves (logout, etc.)
3. **Idempotent**: Tests should be runnable multiple times
4. **Isolated**: Each test should be independent
5. **Fast**: Keep tests focused and efficient

## Adding New Tests

When adding new tests:

1. Create test in appropriate `.spec.ts` file
2. Use descriptive test names
3. Follow existing patterns for page navigation
4. Add proper assertions
5. Clean up any test data
6. Document any special setup requirements

## Resources

- [Playwright Documentation](https://playwright.dev/)
- [Playwright Best Practices](https://playwright.dev/docs/best-practices)
- [Test Generator](https://playwright.dev/docs/codegen)

## Support

For issues or questions, check:
1. Service logs: `docker-compose logs -f <service>`
2. Health check: `.\check-health.ps1`
3. Database state: `docker exec -it pfd_postgres psql -U admin pfd_db`
