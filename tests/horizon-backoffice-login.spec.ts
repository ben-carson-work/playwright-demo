import { test as baseTest, expect } from '@playwright/test';
import { HorizonBackOfficeLoginPage } from '../src/pages/HorizonBackOfficeLoginPage.js';
import { HorizonBackOfficeDashboardPage } from '../src/pages/HorizonBackOfficeDashboardPage.js';

// Extend base 'test' with our custom fixtures
const test = baseTest.extend<{
  loginPage: HorizonBackOfficeLoginPage;
  dashboardPage: HorizonBackOfficeDashboardPage;
}>({
  loginPage: async ({ page }, use) => {
    await use(new HorizonBackOfficeLoginPage(page));
  },
  dashboardPage: async ({ page }, use) => {
    await use(new HorizonBackOfficeDashboardPage(page));
  },
});

// Reading baseURL from the config, will be automatically used by page.goto() if path starts with '/'
// or can be explicitly passed if needed.
// const baseURL = test.info().project.use.baseURL; // Not directly needed if POM handles navigation well

test.beforeEach(async ({ loginPage }) => {
  // Common setup: Go to the login page before each test in this file
  // The HorizonBackOfficeLoginPage.goto() method can take an optional path or use a default.
  // It will use the baseURL from playwright.config.ts
  await loginPage.goto();
});

test('User can log in to Horizon BackOffice with admin credentials', async ({ loginPage, dashboardPage }) => {
  // Credentials should be sourced from .env file (ADMIN_USERNAME, ADMIN_PASSWORD)
  // The login method in POM will use them by default.
  await loginPage.login(process.env.ADMIN_USERNAME, process.env.ADMIN_PASSWORD);

  // Verify successful login by checking for a welcome message on the dashboard
  await dashboardPage.expectWelcomeMessageToBeVisible('WIP - Local Test Environment');
});

test('Admin can log out from Horizon BackOffice and return to login screen', async ({ loginPage, dashboardPage }) => {
  // Login first
  await loginPage.login(process.env.ADMIN_USERNAME, process.env.ADMIN_PASSWORD);

  // Validate the dashboard appears
  await dashboardPage.expectWelcomeMessageToBeVisible('WIP - Local Test Environment');

  // Logout
  await dashboardPage.logout();

  // Validate that the login screen is shown again
  await loginPage.expectLoginButtonToBeVisible();
});
