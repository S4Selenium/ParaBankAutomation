import { test, expect, request, APIResponse, BrowserContext } from '@playwright/test';
import BaseTest from "../Utils/BaseClass";
import { getNewAccountNumber, getRegisteredUsername} from "../Utils/BankDetails";
test.describe("API Testing", () => {
  const base = new BaseTest();
  let username: string;
  test.beforeEach(async () => {
    await base.init();
  });
function validateTransactionSchema(tx: any, expectedAccountId: number, expectedAmount: number) {
  expect(tx).toHaveProperty('id');
  expect(tx).toHaveProperty('accountId', expectedAccountId);
  expect(tx).toHaveProperty('type');
  expect(tx).toHaveProperty('date');
  expect(tx).toHaveProperty('amount', expectedAmount);
  expect(tx).toHaveProperty('description');

  expect(typeof tx.id).toBe('number');
  expect(typeof tx.accountId).toBe('number');
  expect(typeof tx.type).toBe('string');
  expect(typeof tx.date).toBe('number');
  expect(typeof tx.amount).toBe('number');
  expect(typeof tx.description).toBe('string');
}

test('Login via UI and then GET Transactions by Amount using session', async ({ browser }) => {
     const context = await browser.newContext();
    username = getRegisteredUsername()!;
    await base.Loginsection.PageTitleVisible();
    await base.Loginsection.ValidUserLoginFunction(username);
    const amountToSearch = 10;
    const accountNumber = getNewAccountNumber()!;
  const storageState = await context.storageState();
  const apiContext = await request.newContext({ storageState });

  const apiUrl = `https://parabank.parasoft.com/parabank/services_proxy/bank/accounts/${accountNumber}/transactions/amount/${amountToSearch}?timeout=30000`;

  const response: APIResponse = await apiContext.get(apiUrl);
  expect(response.status()).toBe(200);

  const transactions = await response.json();
  expect(Array.isArray(transactions)).toBe(true);

  for (const tx of transactions) {
    validateTransactionSchema(tx, parseInt(accountNumber), amountToSearch);
  }
});
test.afterEach(async () => {
    await base.cleanup();
  });
});