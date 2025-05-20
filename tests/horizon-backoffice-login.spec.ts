import { test, expect } from '@playwright/test';

// This test logs in to the Horizon BackOffice web application and verifies successful login

test('User can log in to Horizon BackOffice with admin credentials', async ({ page }) => {
  // Step 1: Go to the login page
  await page.goto('http://localhost8080/SNP-WIP/admin');

  // Step 2: Fill in username and password
  await page.fill('#uid', process.env.ADMIN_USERNAME || '');
  await page.fill('#pwd', process.env.ADMIN_PASSWORD || '');

  // Step 3: Click the login button
  await page.click('#login-button');

  // Step 4: Wait for the top bar to contain the expected string
  await expect(page.locator('text=WIP - Local Test Environment')).toBeVisible();

  // Optionally, pause for debugging
  // await page.pause();
});

test('Admin can log out from Horizon BackOffice and return to login screen', async ({ page }) => {
  // Step 1: Go to the login page
  await page.goto('http://localhost8080/SNP-WIP/admin');

  // Step 2: Fill in username and password
  await page.fill('#uid', process.env.ADMIN_USERNAME || '');
  await page.fill('#pwd', process.env.ADMIN_PASSWORD || '');

  // Step 3: Click the login button
  await page.click('#login-button');

  // Step 4: Validate the dashboard appears
  await expect(page.locator('text=WIP - Local Test Environment')).toBeVisible();

  // Step 5: Open the dropdown menu in the upper right
  await page.click('#topmenu-user');

  // Step 6: Click the "Logout" link
  await page.click('text=Logout');

  // Step 7: Validate that the login screen is shown again
  await expect(page.locator('#login-button')).toBeVisible();
  await expect(page.locator('#uid')).toBeVisible();
});
