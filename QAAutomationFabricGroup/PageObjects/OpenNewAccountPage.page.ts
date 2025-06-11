import { expect, Page } from "@playwright/test";
import HomePage from "./HomePage.page";
import { getNewAccountNumber,setNewAccountNumber } from "../Utils/BankDetails";
let Homepage:HomePage;
export default class OpenNewAccountPage {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
    Homepage= new HomePage(page);
  }
  //locators
  public get AccountTypeDropDown() {
    const AccountTypeDropDwn = this.page.locator('#type');
    if (AccountTypeDropDwn != null) {
      return AccountTypeDropDwn;
    } else throw new Error("No Such AccountTypeDropDown Element");
  }
  public get OpenNewAccountButton() {
    const OpenNewAccount = this.page.locator('input[value="Open New Account"]');
    if (OpenNewAccount != null) {
      return OpenNewAccount;
    } else throw new Error("No Such OpenNewAccountButton Element");
  }
   public get NewAccountID() {
    const NewaccountNumber = this.page.locator('//a[@id="newAccountId"]');
    if (NewaccountNumber != null) {
      return NewaccountNumber;
    } else throw new Error("No Such NewAccountID Element");
  }
  public get AccountOpenConfirmationMsg() {
    const SuccessMessage = this.page.locator('//p[normalize-space()="Congratulations, your account is now open."]');
    if (SuccessMessage != null) {
      return SuccessMessage;
    } else throw new Error("No Such AccountOpenConfirmationMsg Element");
  }
  public get VerifyTotalBalance() {
    const VerifyBalance = this.page.locator('//b[normalize-space()="$515.15"]');
    if (VerifyBalance != null) {
      return VerifyBalance;
    } else throw new Error("No Such VerifyTotalBalance Element");
  }
  

  //functions

  public async GetAccountOpenConfirmationMsg()
  {
    const ele = await this.AccountOpenConfirmationMsg;
    return ele?.textContent();
  }
 public async GetNewAccountNumber()
  {
    const ele = await this.NewAccountID;
     const text = await ele.textContent();
      return text?.trim();
  }
  public async CreateNewSavingsAccount()
  {   
      await Homepage.OpenNewAccountOptn.isVisible();
      await Homepage.OpenNewAccountOptn.click();
      await Homepage.OpenNewAccPage.isVisible();
      const dropdown = await this.AccountTypeDropDown;
      await dropdown.click();
      await dropdown.selectOption({ label: 'SAVINGS' });
      await this.page.waitForTimeout(2000);
      await this.OpenNewAccountButton.click();
      await this.NewAccountID.waitFor({ state: 'visible', timeout: 5000 });
      const accountNumber = await this.GetNewAccountNumber();
      console.log('New Account Number:',accountNumber);
      if (!accountNumber) {
            throw new Error("Failed to retrieve new account number");
            }
            setNewAccountNumber(accountNumber); 
      
  }
  public async VerifyNewAccountDetailsInAccountSummary()
  {   
      const accountNumber = getNewAccountNumber();
      await Homepage.AccountOverViewOptn.click();
      await Homepage.AccountOverviewPg.isVisible();
      const accountLink = this.page.locator(`//a[normalize-space()='${accountNumber}']`);
      await accountLink.waitFor({ state: 'visible', timeout: 5000 }); 
      expect(await accountLink.isVisible()).toBe(true);
      await this.VerifyTotalBalance.isVisible();

  }
}
