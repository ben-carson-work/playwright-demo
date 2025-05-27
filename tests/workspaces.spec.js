import { test, expect } from '@playwright/test';

test('User can log in and navigate to Workstations page', async ({ page }) => {
  // Step 1: Go to the login page
  await page.goto('http://localhost:8080/SNP-WIP/admin');

  // Step 2: Fill in login credentials
  await page.getByRole('textbox', { name: 'User name' }).fill('admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('Stable&Delivery&Quail4');

  // Step 3: Submit the login form (press Enter in password field)
  await page.getByRole('textbox', { name: 'Password' }).press('Enter');

  // Step 4: Confirm successful login by checking for the sidebar user role
  await expect(page.getByText('IT, Administrator')).toBeVisible();

  // Step 5: Click the "Topology" link in the left-hand nav
  await page.getByRole('treeitem', { name: 'Topology' }).click();

  // Step 6: Click the "Workstations" link in the Topology submenu
  await page.getByRole('link', { name: 'Workstations' }).click();

  // Step 7: Confirm the Workstations page loads by checking for the heading and table
  await expect(page.getByRole('heading', { name: 'Workstations' })).toBeVisible();
  await expect(page.getByRole('table')).toBeVisible();

  // Optionally pause for debugging
  // await page.pause();
});