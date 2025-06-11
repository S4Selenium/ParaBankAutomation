import { expect, Page } from "@playwright/test";
import data from "../Utils/TestData.json";
export default class RegisterPage {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  //locators
  public get Register() {
    const Register = this.page.getByText("Register");
    if (Register != null) {
      return Register;
    } else throw new Error("No Such Register Element");
  }
  public get FirstName() {
    const Fname = this.page.locator('input[id="customer.firstName"]');
    if (Fname != null) {
      return Fname;
    } else throw new Error("No Such FirstName Element");
  }
  public get LastName() {
    const Lname = this.page.locator('input[id="customer.lastName"]');
    if (Lname != null) {
      return Lname;
    } else throw new Error("No Such LastName Element");
  }
  public get Address() {
    const addres = this.page.locator('input[id="customer.address.street"]');
    if (addres != null) {
      return addres;
    } else throw new Error("No Such Address Element");
  }
  public get City() {
    const city = this.page.locator('input[id="customer.address.city"]');
    if (city != null) {
      return city;
    } else throw new Error("No Such City Element");
  }
  public get State() {
    const state = this.page.locator('input[id="customer.address.state"]');
    if (state != null) {
      return state;
    } else throw new Error("No Such State Element");
  }
  public get ZipCode() {
    const ZipCode = this.page.locator('input[id="customer.address.zipCode"]');
    if (ZipCode != null) {
      return ZipCode;
    } else throw new Error("No Such ZipCode Element");
  }
  public get PhoneNumber() {
    const Phnumber = this.page.locator('input[id="customer.address.zipCode"]');
    if (Phnumber != null) {
      return Phnumber;
    } else throw new Error("No Such PhoneNumber Element");
  }
  public get SSN() {
    const ssn = this.page.locator('input[id="customer.ssn"]');
    if (ssn != null) {
      return ssn;
    } else throw new Error("No Such SNN Element");
  }
  public get Username() {
    const Username = this.page.locator('input[id="customer.username"]');
    if (Username != null) {
      return Username;
    } else throw new Error("No Such Username Element");
  }
  public get Userpassword() {
    const Userpassword = this.page.locator('input[id="customer.password"]');
    if (Userpassword != null) {
      return Userpassword;
    } else throw new Error("No Such Userpassword Element");
  }
  public get Repeatpassword() {
    const Userpassword = this.page.locator("#repeatedPassword");
    if (Userpassword != null) {
      return Userpassword;
    } else throw new Error("No Such Repeatpassword Element");
  }
  public get RegisterButton() {
    const RegButton = this.page.locator('input[value="Register"]');
    if (RegButton != null) {
      return RegButton;
    } else throw new Error("No Such RegisterButton Element");
  }
  public get SuccessfullRegistrationMessage() {
    const RegMessage = this.page.locator('div[id="rightPanel"] p');
    if (RegMessage != null) {
      return RegMessage;
    } else throw new Error("No Such SuccessfullRegistrationMessage Element");
  }

  //functions
  public async GetRegistrationMessage()
  {
    const ele = await this.SuccessfullRegistrationMessage;
    return ele?.textContent();
  }
  public async RegisterNewUser():Promise<string> {
    const randomUsername = `User_${Date.now()}`;
    await expect(this.Register).toBeVisible();
    await this.Register.click();
    await this.FirstName.fill(data.FirstName);
    await this.LastName.fill(data.LastName);
    await this.Address.fill(data.Address);
    await this.City.fill(data.City);
    await this.State.fill(data.State);
    await this.ZipCode.fill(data.ZipCode);
    await this.SSN.fill(data.SSN);
    await this.Username.fill(randomUsername);
    await this.Userpassword.fill(data.Password);
    await this.Repeatpassword.fill(data.ConfirmPassword);
    await this.RegisterButton.click();
    return randomUsername;
  }
}
