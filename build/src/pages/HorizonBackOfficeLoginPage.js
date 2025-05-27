import { expect } from '@playwright/test';
export class HorizonBackOfficeLoginPage {
    page;
    usernameInput;
    passwordInput;
    loginButton;
    errorMessage; // Optional: if there's an error message element
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('#uid');
        this.passwordInput = page.locator('#pwd');
        this.loginButton = page.locator('#login-button');
        // Example for an error message, adjust selector if needed
        // this.errorMessage = page.locator('.error-message-class');
    }
    async goto(baseUrlFromConfig) {
        // The baseURL from playwright.config.ts should handle the domain
        // We just need to navigate to the specific admin path
        // If your baseURL in config is 'http://localhost:8080', then page.goto('/SNP-WIP/admin') is correct.
        // If your baseURL in config is 'http://localhost:8080/SNP-WIP', then page.goto('/admin') is correct.
        // For now, let's assume baseURL might not have /SNP-WIP
        const path = process.env.HORIZON_LOGIN_PATH || '/SNP-WIP/admin';
        if (baseUrlFromConfig) {
            await this.page.goto(`${baseUrlFromConfig}${path}`);
        }
        else {
            // This will use the baseURL from playwright.config.ts + path
            await this.page.goto(path);
        }
    }
    async login(username, password) {
        const u = username ?? process.env.ADMIN_USERNAME ?? '';
        const p = password ?? process.env.ADMIN_PASSWORD ?? '';
        if (!u || !p) {
            throw new Error('Admin username or password is not set in environment variables (ADMIN_USERNAME, ADMIN_PASSWORD) and not provided to login method.');
        }
        await this.usernameInput.fill(u);
        await this.passwordInput.fill(p);
        await this.loginButton.click();
    }
    async expectLoginButtonToBeVisible() {
        await expect(this.loginButton).toBeVisible();
        await expect(this.usernameInput).toBeVisible();
    }
}
