import { expect, Page } from "@playwright/test";
import HomePage from "./HomePage.page";
import data from "../Utils/TestData.json";
import { getNewAccountNumber,setNewAccountNumber } from "../Utils/BankDetails";
let Homepage:HomePage;
export default class BillPaymentPage {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
    Homepage= new HomePage(page);
  }
  //locators
  public get PayeeName() {
    const transferamt = this.page.locator('input[name="payee.name"]');
    if (transferamt != null) {
      return transferamt;
    } else throw new Error("No Such PayeeName Element");
  }
  public get PayeeAddress() {
    const PayAddress = this.page.locator('input[name="payee.address.street"]');
    if (PayAddress != null) {
      return PayAddress;
    } else throw new Error("No Such PayeeAddress Element");
  }
  public get PayeeCity() {
    const Payeecity = this.page.locator(' input[name="payee.address.city"]');
    if (Payeecity != null) {
      return Payeecity;
    } else throw new Error("No Such PayeeCity Element");
  }
  public get PayeeState() {
    const PayeeState = this.page.locator('input[name="payee.address.state"]');
    if (PayeeState != null) {
      return PayeeState;
    } else throw new Error("No Such PayeeState Element");
  }
  public get PayeeZipCode() {
    const PayeeZip = this.page.locator('input[name="payee.address.zipCode"]');
    if (PayeeZip != null) {
      return PayeeZip;
    } else throw new Error("No Such PayeeZip Element");
  }
  public get PayeePhoneNumber() {
    const Phnum = this.page.locator('//input[@name="payee.phoneNumber"]');
    if (Phnum != null) {
      return Phnum;
    } else throw new Error("No Such PayeePhoneNumber Element");
  }
  public get PayeeAccountNumber() {
    const AccNum = this.page.locator('input[name="payee.accountNumber"]');
    if (AccNum != null) {
      return AccNum;
    } else throw new Error("No Such PayeeAccountNumber Element");
  }
  public get PayeeAccountNumberConfirm() {
    const AccNumCnfrm = this.page.locator('input[name="verifyAccount"]');
    if (AccNumCnfrm != null) {
      return AccNumCnfrm;
    } else throw new Error("No Such PayeeAccountNumberConfirm Element");
  }
  public get AmountToBeTransfered() {
    const Amount = this.page.locator('input[name="amount"]');
    if (Amount != null) {
      return Amount;
    } else throw new Error("No Such AmountToBeTransfered Element");
  }
  public get AccountInformation() {
    const Account = this.page.locator('select[name="fromAccountId"]');
    if (Account != null) {
      return Account;
    } else throw new Error("No Such AccountInformation Element");
  }
  public get SendPaymentButton() {
    const SendPayment = this.page.locator('input[value="Send Payment"]');
    if (SendPayment != null) {
      return SendPayment;
    } else throw new Error("No Such SendPaymentButton Element");
  }
  
  public get BillPaymentCnfrmMsg() {
    const Message = this.page.locator('//h1[normalize-space()="Bill Payment Complete"]');
    if (Message != null) {
      return Message;
    } else throw new Error("No Such BillPaymentCnfrmMsg Element");
  }
  
   
  //functions
  public async GetBillPaymentConfirmationMsg()
  {
    const ele = await this.BillPaymentCnfrmMsg;
    return ele?.textContent();
  }
  
  public async BillPayment()
  {   
     const accountNumber = getNewAccountNumber()!;
     console.log("showcurrentAccount",accountNumber);
      await Homepage.BillPayOptn.isVisible;
      await Homepage.BillPayOptn.click();
      await Homepage.BillPayPage.isVisible;
      await this.PayeeName.fill(data.FirstName);
      await this.PayeeAddress.fill(data.Address);
      await this.PayeeCity.fill(data.City);
      await this.PayeeState.fill(data.State);
      await this.PayeeZipCode.fill(data.ZipCode);
      await this.PayeePhoneNumber.fill(data.Phone);
      await this.PayeeAccountNumber.fill(accountNumber);
      await this.PayeeAccountNumberConfirm.fill(accountNumber);
      await this.AmountToBeTransfered.fill(data.Amount);
      await this.AccountInformation.click();
      await this.page.waitForTimeout(2000);
      await this.AccountInformation.selectOption({ label:accountNumber});
      await this.SendPaymentButton.click();


      
  }
}
