# Playwright MCP Demo Project

This project demonstrates a setup for running Playwright tests, showcasing integration with Model-View-Controller Protocol (MCP) if applicable, and modern Playwright best practices.

## Project Structure

-   `tests/`: Contains all Playwright test files (`*.spec.ts`).
    -   Example: `fandango-sinners.spec.ts`, `horizon-backoffice-login.spec.ts`
-   `src/pages/`: Contains Page Object Model (POM) classes that encapsulate page-specific logic and selectors.
    -   Example: `FandangoPage.ts`, `HorizonBackOfficeLoginPage.ts`, `HorizonBackOfficeDashboardPage.ts`
-   `src/utils/`: (Optional) For shared utility functions or helper classes.
-   `playwright.config.ts`: The main configuration file for Playwright, defining test directories, reporters, browser projects, etc.
-   `.env`: For local environment variables (e.g., `BASE_URL`, `ADMIN_USERNAME`, `ADMIN_PASSWORD`). This file is not committed to git (see `.env.example`).
-   `.env.example`: An example template for the `.env` file.
-   `package.json`: Manages project dependencies and scripts.
-   `tsconfig.json`: TypeScript configuration.

## Prerequisites

-   Node.js (version specified in `package.json` or latest LTS)
-   npm (usually comes with Node.js)

## Setup

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd playwright-mcp-demo
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Install Playwright browsers:**
    (This step might have been covered by `npm install` if Playwright's install script ran, but it's good to ensure)
    ```bash
    npx playwright install
    ```

4.  **Set up environment variables:**
    Copy the `.env.example` file to `.env` and fill in the required values:
    ```bash
    cp .env.example .env
    ```
    Now, edit `.env` with your local settings:
    ```
    BASE_URL=http://your-app-base-url.com
    ADMIN_USERNAME=your_admin_username
    ADMIN_PASSWORD=your_admin_password
    HORIZON_LOGIN_PATH=/your/login/path # Optional, if different from default in POM
    ```

## Running Tests

To run all tests:
```bash
npm test
```
This command executes `playwright test` as defined in `package.json`.

To run tests in a specific file:
```bash
npx playwright test tests/your-test-file.spec.ts
```

To run tests in headed mode (opens browser):
```bash
npx playwright test --headed
```

To run tests against a specific browser (e.g., firefox):
```bash
npx playwright test --project=firefox
```

To view the HTML report after a test run (usually generated in `playwright-report` directory):
```bash
npx playwright show-report
```

## Debugging Tests

Playwright offers several ways to debug:
-   `await page.pause()`: Pause test execution and open Playwright Inspector.
-   Playwright Inspector: `npx playwright test --debug`
-   VS Code Debugger: Configure `launch.json` for Playwright. (Refer to Playwright documentation for details)

## TypeScript

This project uses TypeScript. Code is compiled using the settings in `tsconfig.json`. The `build` script in `package.json` can be used for manual compilation if needed, but Playwright typically handles TypeScript compilation for tests on the fly.

## Contributing

(Add guidelines for contributing if this were an open project.)
