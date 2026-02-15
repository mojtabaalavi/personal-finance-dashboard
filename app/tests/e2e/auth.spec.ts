import { test, expect } from '@playwright/test';

test.describe('Authentication Flow', () => {
  test('new user to register and login', async ({ page }) => {
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
    const dashboardHeader = page.locator('h2');
    await expect(dashboardHeader).toContainText('Dashboard', { timeout: 10000 });
    await expect(page).toHaveURL(/.*:3002\/?$/);

    // Logout
    await page.click('text=Logout');
    await expect(page).toHaveURL(/.*login/);
  });
});
