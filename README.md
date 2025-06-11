# Playwright Automation - ParaBank Demo App

This project automates the testing of the [ParaBank](https://parabank.parasoft.com/parabank/index.htm) application using Playwright. It includes both **UI-based automation** and **API testing with authenticated session reuse**.

---

## 📁 Project Structure
QAAutomationFabricGroup/
.
├── tests/
│   └── APITest.spec.ts              # API test using session-based authentication
│
├── pages/                           # Page Object Models (POM) for UI interactions
│   ├── HomePage.page.ts             # Home Page interactions
│   ├── LoginPage.page.ts            # Login Page interactions
│   ├── Registration.page.ts         # Registration Page interactions
│   ├── NewAccountOpening.page.ts    # New Account Opening Page interactions
│   ├── TransferFund.page.ts         # Transfer Funds Page interactions
│   └── BillPaymentPage.page.ts      # Bill Payment Page interactions
│
├── Utils/
│   ├── BankDetails.ts               # Utility to store/retrieve usernames and account numbers
│   └── TestData.json                # Static test data used across tests
│
├── username-data.json               # Stores dynamically registered usernames (if applicable)
├── account-data.json                # Stores dynamically created account numbers (if applicable)
├── playwright.config.ts             # Playwright configuration file
└── README.md                        # Project documentation




---

## Features Covered

###UI Test Automation

- Login
- Registration
- Account Opening
- Bill Payment (with dynamic account number)

### API Testing (GET Transactions by Amount)

- Dynamically fetch account number from `account-data.json`
- Perform login via UI to simulate a real session
- Use session storage for making authenticated API requests
- Validate response schema with expected data

---

## Authentication Strategy

Since ParaBank requires a browser session to access transaction endpoints:

1. Login is performed using UI automation (`page.fill(...)`).
2. Browser session is stored using `storageState`.
3. The API context (`request.newContext`) is created using this session state.
4. Authenticated request is made to:

---

## How to Run

1. **Install Dependencies**

npm install
npx playwright test tests/APITest.spec.ts

Test Results
<img width="890" alt="image" src="https://github.com/user-attachments/assets/043bab57-3a6a-4329-a687-1200a64eab96" />

