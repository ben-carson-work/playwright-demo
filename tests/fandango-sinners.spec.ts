import { test, expect } from '@playwright/test';

// This test checks Fandango for the movie "Sinners" in theaters near zipcode 29407

test('Verify "Sinners" is playing in theaters near 29407 on Fandango', async ({ page }) => {
  // Step 1: Go to Fandango homepage
  await page.goto('https://fandango.com');

  // Step 2: Enter zipcode '29407' in the search box and submit
  const searchBox = page.getByRole('textbox', { name: /search by city, state, zip or movie/i });
  await searchBox.fill('29407');
  const goButton = page.getByRole('button', { name: /^go$/i });
  await goButton.click();

  // Step 3: Wait for the page to update with theaters near 29407
  await page.waitForLoadState('networkidle');

  // Step 4: Scroll through the list of movies and verify "Sinners" is present
  // We'll look for a heading, link, or paragraph containing "Sinners"
  const found = await page.locator('text=/Sinners/i').first();
  await expect(found).toBeVisible();

  // Optionally, pause for debugging
  // await page.pause();
});
