# Cypress Cucumber YouTube Test Automation

![Cypress Version](https://img.shields.io/badge/Cypress-14.2.1-brightgreen)
![Cucumber Preprocessor](https://img.shields.io/badge/Cucumber%20Preprocessor-22.0.1-blue)

## Project Structure
\\\
cypress/
├── e2e/
│   ├── features/            # Gherkin feature files
│   └── step-definitions/    # Test implementation
├── pages/                   # Page Object classes
├── support/                 # Support files
└── fixtures/                # Test data
\\\

## Quick Start
1. Install dependencies:
\\\ash
npm install
\\\

2. Run tests:
\\\ash
npm run cy:open   # Interactive mode
npm run cy:run    # Headless mode
\\\

## Key Features
- YouTube-specific test automation
- Page Object Model implementation
- Cross-browser support
- Automatic video recording

## Configuration
Custom settings in \cypress.config.js\:
- Chrome Web Security disabled
- Viewport: 1920x1080
- Special handling for YouTube DOM errors


