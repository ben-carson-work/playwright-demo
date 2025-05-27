import { expect } from '@playwright/test';
export class FandangoPage {
    page;
    searchInput;
    goButton;
    movieTitleSelector = 'text=/Sinners/i'; // Example, refine if needed
    constructor(page) {
        this.page = page;
        this.searchInput = page.getByRole('textbox', { name: /search by city, state, zip or movie/i });
        this.goButton = page.getByRole('button', { name: /^go$/i });
    }
    async goto() {
        await this.page.goto('https://fandango.com');
    }
    async searchByZipcode(zipcode) {
        await this.searchInput.fill(zipcode);
        await this.goButton.click();
        await this.page.waitForLoadState('networkidle');
    }
    async expectMovieToBeVisible(movieTitle) {
        // Use provided movieTitle or the default 'Sinners'
        const titleSelector = movieTitle ? `text=/${movieTitle}/i` : this.movieTitleSelector;
        const movieLocator = this.page.locator(titleSelector).first();
        await expect(movieLocator).toBeVisible();
    }
}
