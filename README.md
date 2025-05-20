# Playwright MCP Demo

This project is a demo MCP server in TypeScript using the Model Context Protocol (MCP). It also demonstrates Playwright browser automation for both public and internal web applications.

## Setup

1. Copy `.env.example` to `.env` and set your admin password:
   ```bash
   cp .env.example .env
   # Edit .env to set ADMIN_PASSWORD
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```
4. Build the project:
   ```bash
   npm run build
   ```
5. Run the MCP server:
   ```bash
   node build/index.js
   ```

## Project Structure
- `src/index.ts`: Main MCP server implementation
- `.vscode/mcp.json`: MCP server configuration for VS Code
- `.github/copilot-instructions.md`: Copilot custom instructions
- `tests/`: Playwright test specifications for Fandango and Horizon BackOffice

## References
- [Model Context Protocol Documentation](https://modelcontextprotocol.io/quickstart/server)
- [MCP SDK GitHub](https://github.com/modelcontextprotocol/sdk)
- [Playwright Documentation](https://playwright.dev/)
