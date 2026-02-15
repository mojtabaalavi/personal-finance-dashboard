import { test, expect } from '@playwright/test';

test.describe('Authentication Flow', () => {
  test('new user can register and login', async ({ page }) => {
    const testEmail = `test-${Date.now()}@example.com`;
    const testPassword = 'Password123!';

    await page.goto('/');
    
    // Check if redirected to login
    await expect(page).toHaveURL(/.*login/);
    
    // Switch to Register
    await page.click('text=Register');
    await expect(page).toHaveURL(/.*register/);
    
    // Fill register form
    await page.fill('input[type="email"]', testEmail);
    await page.fill('input[type="password"]', testPassword);
    await page.click('button[type="submit"]');

    // Should be redirected to login on success (as per current frontend implementation)
    await expect(page).toHaveURL(/.*login/);

    // Login
    await page.fill('input[type="email"]', testEmail);
    await page.fill('input[type="password"]', testPassword);
    await page.click('button[type="submit"]');
    
    // Verify Dashboard access
    const dashboardHeader = page.locator('h2').filter({ hasText: /Dashboard|Welcome/ });
    await expect(dashboardHeader).toBeVisible({ timeout: 10000 });

    // Logout
    await page.click('text=Logout');
    await expect(page).toHaveURL(/.*login/);
  });

  test('seeded admin user can login', async ({ page }) => {
    // Use the seeded admin account
    // Run: .\seed-database.ps1 to create this account
    const adminEmail = 'admin@example.com';
    const adminPassword = 'password123';

    // Login via UI with admin credentials
    await page.goto('/');
    await expect(page).toHaveURL(/.*login/);
    
    await page.fill('input[type="email"]', adminEmail);
    await page.fill('input[type="password"]', adminPassword);
    await page.click('button[type="submit"]');
    
    // Verify successful login and dashboard access
    const contentHeader = page.locator('h2').filter({ hasText: /Dashboard|Welcome/ });
    await expect(contentHeader).toBeVisible({ timeout: 10000 });

    // Logout
    await page.click('text=Logout');
    await expect(page).toHaveURL(/.*login/);
  });

  test('seeded regular user can login', async ({ page }) => {
    // Use the seeded regular user account
    // Run: .\seed-database.ps1 to create this account
    const userEmail = 'user@example.com';
    const userPassword = 'password123';

    // Login via UI
    await page.goto('/');
    await expect(page).toHaveURL(/.*login/);
    
    await page.fill('input[type="email"]', userEmail);
    await page.fill('input[type="password"]', userPassword);
    await page.click('button[type="submit"]');
    
    // Verify login successful
    const contentHeader = page.locator('h2').filter({ hasText: /Dashboard|Welcome/ });
    await expect(contentHeader).toBeVisible({ timeout: 10000 });

    // Logout
    await page.click('text=Logout');
    await expect(page).toHaveURL(/.*login/);
  });
});
