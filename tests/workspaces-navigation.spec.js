import { test, expect, defineConfig } from '@playwright/test';

export default defineConfig({ reporter: [['html', { open: 'never' }]], });

test('User can log in and navigate to Workstations page via Topology menu', async ({ page }) => {
  // Step 1: Go to the login page
  await page.goto('http://localhost:8080/SNP-WIP/admin');

  // Step 2: Fill in login credentials
  await page.getByRole('textbox', { name: 'User name' }).fill('admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('Stable&Delivery&Quail4');

  // Step 3: Submit the login form (press Enter in password field)
  await page.getByRole('textbox', { name: 'Password' }).press('Enter');

  // Step 4: Confirm successful login by checking for the sidebar user role
  await expect(page.getByText('IT, Administrator')).toBeVisible();

  // Step 5: Click the "Topology" menu in the sidebar
  await page.locator('li#menu-main-topology > a').click();

  // Step 6: Click the "Workstations" submenu item
  await page.locator('li#menu-wks-list > a').click();

  // Step 7: Confirm the Workstations page loads by checking for the heading and table
  await expect(page.locator('li#menu-wks-list.active')).toBeVisible();
  await expect(page.getByRole('table')).toBeVisible();

  // Optional: Pause for debugging if needed
  // await page.pause();
});