import { expect, Page } from "@playwright/test";
import HomePage from "./HomePage.page";
import { getNewAccountNumber,setNewAccountNumber } from "../Utils/BankDetails";
let Homepage:HomePage;
export default class TransferFundPage {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
    Homepage= new HomePage(page);
  }
  //locators
  public get TransferAmount() {
    const transferamt = this.page.locator('#amount');
    if (transferamt != null) {
      return transferamt;
    } else throw new Error("No Such TransferAmount Element");
  }
  public get FromAccount() {
    const fromAcc = this.page.locator('//select[@id="fromAccountId"]');
    if (fromAcc != null) {
      return fromAcc;
    } else throw new Error("No Such FromAccount Element");
  }
  public get TransferButton() {
    const transferBtn = this.page.locator('input[value="Transfer"]');
    if (transferBtn != null) {
      return transferBtn;
    } else throw new Error("No Such TransferButton Element");
  }
  public get TransferCompleteMessage() {
    const transfercomplete = this.page.locator('//h1[normalize-space()="Transfer Complete!"]');
    if (transfercomplete != null) {
      return transfercomplete;
    } else throw new Error("No Such TransferCompleteMessage Element");
  }

   
  //functions
  public async GetAccountOpenConfirmationMsg()
  {
    const ele = await this.TransferCompleteMessage;
    return ele?.textContent();
  }
  public async TransferFundFromAccount()
  {   
     const accountNumber = getNewAccountNumber();
      await Homepage.TransferFundOptn.isVisible;
      await Homepage.TransferFundOptn.click();
      await Homepage.TransferFundPage.isVisible;
      await this.TransferAmount.fill("50");
      await this.FromAccount.click();
      await this.FromAccount.selectOption({ label:accountNumber});
      await this.TransferButton.click();
      
  }
}
