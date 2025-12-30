# SauceDemo Playwright Automation
This project contains UI automation tests for the SauceDemo application using Playwright Test with JavaScript.

## Tech Stack
- Playwright Test
- JavaScript (Node.js)
- Chromium browser

## Project Structure
```
sauce-demo-playwright/
├── tests/
│   ├── login.spec.js
│   └── checkout.e2e.spec.js
├── playwright.config.js
├── package.json
├── .gitignore
└── README.md
```

## Test Coverage
### Login
- Verify login page loads
- Verify successful login with valid credentials
### Checkout (End-to-End)
- Login with valid user
- Add product to cart
- Complete checkout flow
- Verify order confirmation message

## How to Run Tests
- Install dependencies: npm install
- Run all tests: npx playwright test
- Run tests with HTML report: npx playwright test --reporter=html

## Approach
- Tests are written using Playwright’s built-in test runner.  
- Selectors are based on (data-test) attributes to keep tests stable and readable.  
- The focus was on covering critical user journeys rather than exhaustive UI validation.