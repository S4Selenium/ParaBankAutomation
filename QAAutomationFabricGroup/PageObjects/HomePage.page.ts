import { expect, Page } from "@playwright/test";
import data from "../Utils/TestData.json";
export default class HomePage {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  //locators
  public get OpenNewAccountOptn() {
    const OpenNewAcc = this.page.locator('a[href="openaccount.htm"]');
    if (OpenNewAcc != null) {
      return OpenNewAcc;
    } else throw new Error("No Such OpenNewAccountOptn Element");
  }
  public get OpenNewAccPage() {
    const OpenNewAccount = this.page.locator('//h1[normalize-space()="Open New Account"]');
    if (OpenNewAccount != null) {
      return OpenNewAccount;
    } else throw new Error("No Such OpenNewAccPage Element");
  }
  public get AccountOverViewOptn() {
    const Overview = this.page.locator('a[href="overview.htm"]');
    if (Overview != null) {
      return Overview;
    } else throw new Error("No Such PageTile Element");
  }
   public get AccountOverviewPg() {
    const OverviewPg = this.page.locator('//h1[normalize-space()="Accounts Overview"]');
    if (OverviewPg != null) {
      return OverviewPg;
    } else throw new Error("No Such AccountOverviewPg Element");
  }
  public get TransferFundOptn() {
    const transferFund = this.page.locator('a[href="transfer.htm"]');
    if (transferFund != null) {
      return transferFund;
    } else throw new Error("No Such TransferFundOptn Element");
  }
  public get TransferFundPage() {
    const transferFundPg = this.page.locator('//h1[normalize-space()="Transfer Funds"]');
    if (transferFundPg != null) {
      return transferFundPg;
    } else throw new Error("No Such TransferFundPage Element");
  }
  public get BillPayOptn() {
    const BillPayOption = this.page.locator('a[href="billpay.htm"]');
    if (BillPayOption != null) {
      return BillPayOption;
    } else throw new Error("No Such BillPayOption Element");
  }
  public get BillPayPage() {
    const BillPayPg = this.page.locator('//h1[normalize-space()="Bill Payment Service"]');
    if (BillPayPg != null) {
      return BillPayPg;
    } else throw new Error("No Such BillPayPage Element");
  }
  public get FindTransactionOption() {
    const FindTransaction = this.page.locator('a[href="findtrans.htm"]');
    if (FindTransaction != null) {
      return FindTransaction;
    } else throw new Error("No Such FindTransactionOption Element");
  }
  public get FindTransactionPage() {
    const FindTransactionPg = this.page.locator('//h1[normalize-space()="Find Transactions"]');
    if (FindTransactionPg != null) {
      return FindTransactionPg;
    } else throw new Error("No Such FindTransactionPage Element");
  }
  public get UpdateContactInfoOptn() {
    const UpdateContactInfo = this.page.locator('a[href="updateprofile.htm"]');
    if (UpdateContactInfo != null) {
      return UpdateContactInfo;
    } else throw new Error("No Such UpdateContactInfoOptn Element");
  }
public get UpdateContactInfoPage() {
    const UpdateContactInfoPg = this.page.locator(' //h1[normalize-space()="Update Profile"]');
    if (UpdateContactInfoPg != null) {
      return UpdateContactInfoPg;
    } else throw new Error("No Such UpdateContactInfoPage Element");
  }
  public get RequestLoanInfo() {
    const RequestLoanInfo = this.page.locator('a[href="requestloan.htm"]');
    if (RequestLoanInfo!= null) {
      return RequestLoanInfo;
    } else throw new Error("No Such RequestLoanInfo Element");
  }
  public get RequestLoanInfoPage() {
    const RequestLoanInfoPg = this.page.locator('//h1[normalize-space()="Apply for a Loan"]');
    if (RequestLoanInfoPg!= null) {
      return RequestLoanInfoPg;
    } else throw new Error("No Such RequestLoanInfoPage Element");
  }
  public get LogOutOptn() {
    const LogOutOptn = this.page.locator('  a[href="logout.htm"]');
    if (LogOutOptn!= null) {
      return LogOutOptn;
    } else throw new Error("No Such LogOutOptn Element");
  }
  
  
  //functions
 
  public async VerifyGlobalNavigation()
  {
      
      await this.OpenNewAccountOptn.isVisible();
      await this.OpenNewAccountOptn.click();
      await this.OpenNewAccPage.isVisible();
      await this.AccountOverViewOptn.isVisible();
      await this.AccountOverViewOptn.click();
      await this.AccountOverviewPg.isVisible();
      await this.TransferFundOptn.isVisible();
      await this.TransferFundOptn.click();
      await this.TransferFundPage.isVisible();
      await this.BillPayOptn.isVisible();
      await this.BillPayOptn.click();
      await this.BillPayPage.isVisible();
      await this.FindTransactionOption.isVisible();
      await this.FindTransactionOption.click();
      await this.FindTransactionPage.isVisible();
      await this.UpdateContactInfoOptn.isVisible();
      await this.UpdateContactInfoOptn.click();
      await this.UpdateContactInfoPage.isVisible();
      await this.RequestLoanInfo.isVisible();
      await this.RequestLoanInfo.click();
      await this.RequestLoanInfoPage.isVisible();
      await this.LogOutOptn.isVisible();
      await this.LogOutOptn.click();
  }
}
