import { expect } from '@playwright/test';
export class HorizonBackOfficeDashboardPage {
    page;
    topBarWelcomeMessage; // Example: "WIP - Local Test Environment"
    userMenu;
    logoutLink;
    constructor(page) {
        this.page = page;
        this.topBarWelcomeMessage = page.locator('text=WIP - Local Test Environment');
        this.userMenu = page.locator('#topmenu-user'); // Assuming this is the user dropdown
        this.logoutLink = page.locator('text=Logout'); // Assuming this is the logout link text
    }
    async expectWelcomeMessageToBeVisible(message) {
        const locator = message ? this.page.locator(`text=${message}`) : this.topBarWelcomeMessage;
        await expect(locator).toBeVisible();
    }
    async logout() {
        await this.userMenu.click();
        await this.logoutLink.click();
    }
}
