// tests/E2Etest.spec.ts
import { test, expect,request, APIResponse } from "@playwright/test";
import BaseTest from "../Utils/BaseClass";
import data from "../Utils/TestData.json";
import { saveRegisteredUsername, getRegisteredUsername} from "../Utils/BankDetails";

test.describe.serial("End To End Test Cases", () => {
  const base = new BaseTest();
  let username: string;
  test.beforeEach(async () => {
    await base.init();
  });

  test("Registration of New User to the system and Login with the new User", async () => {
    await base.Loginsection.PageTitleVisible();
    username = await base.Registration.RegisterNewUser();
    saveRegisteredUsername(username);
    const RegistrationMessage = await base.Registration.GetRegistrationMessage();
    expect(RegistrationMessage).toBe('Your account was created successfully. You are now logged in.');
    console.log(username);
  });

  test("Login to the application with the registered user and verify Global navigation", async () => {
    username = getRegisteredUsername()!;
    await base.Loginsection.PageTitleVisible();
    await base.Loginsection.ValidUserLoginFunction(username);
    const AccountOverviewText = await base.Loginsection.GetAccountOverview();
    expect(AccountOverviewText).toBe(true);
    await base.Homepage.VerifyGlobalNavigation();
  });

  test("Verify user able to create savings account and verify account balance", async () => {
    username = getRegisteredUsername()!;
    await base.Loginsection.PageTitleVisible();
    await base.Loginsection.ValidUserLoginFunction(username);
    await base.NewAccountpg.CreateNewSavingsAccount();
    const SuccessMessage = await base.NewAccountpg.GetAccountOpenConfirmationMsg();
    expect(SuccessMessage).toBe("Congratulations, your account is now open.");
    await base.NewAccountpg.VerifyNewAccountDetailsInAccountSummary();
  });

  test("Verify User able to transfer funds from account created", async () => {
    username = getRegisteredUsername()!;
    await base.Loginsection.PageTitleVisible();
    await base.Loginsection.ValidUserLoginFunction(username);
    await base.TransferFundPg.TransferFundFromAccount();
    const SuccessMsg= await base.TransferFundPg.GetAccountOpenConfirmationMsg();
    expect(SuccessMsg).toBe("Transfer Complete!");
    
  });
  test("Verify User able to pay Bills", async () => {
    username = getRegisteredUsername()!;
    await base.Loginsection.PageTitleVisible();
    await base.Loginsection.ValidUserLoginFunction(username);
    await base.BillPaymentPg.BillPayment();
    const SuccessMsg= await base.BillPaymentPg.GetBillPaymentConfirmationMsg();
    expect(SuccessMsg).toBe("Bill Payment Complete");
  });
  test.afterEach(async () => {
    await base.cleanup();
  });
});
