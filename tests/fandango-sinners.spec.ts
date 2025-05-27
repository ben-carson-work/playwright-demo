import { test, expect } from '@playwright/test';
import { FandangoPage } from '../src/pages/FandangoPage.js'; // Adjusted path

test('Verify "Sinners" is playing in theaters near 29407 on Fandango', async ({ page }) => {
  const fandangoPage = new FandangoPage(page);

  // Step 1: Go to Fandango homepage
  await fandangoPage.goto();

  // Step 2: Enter zipcode '29407' in the search box and submit
  await fandangoPage.searchByZipcode('29407');

  // Step 3: Verify "Sinners" is present
  await fandangoPage.expectMovieToBeVisible('Sinners');
  // Or, if you want to use the default from the POM:
  // await fandangoPage.expectMovieToBeVisible();

  // Optionally, pause for debugging
  // await page.pause();
});
