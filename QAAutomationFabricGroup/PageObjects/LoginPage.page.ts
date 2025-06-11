import { expect, Page } from "@playwright/test";
import data from "../Utils/TestData.json";
export default class LoginPage {
  private page: Page;
  constructor(page: Page) {
    this.page = page;
  }
  //locators
  public get PageTile() {
    const Pagetitle = this.page.locator('img[title="ParaBank"]');
    if (Pagetitle != null) {
      return Pagetitle;
    } else throw new Error("No Such PageTile Element");
  }
  public get UsernameField() {
    const username = this.page.locator('input[name="username"]');
    if (username != null) {
      return username;
    } else throw new Error("No Such PageTile Element");
  }
  public get PasswordField() {
    const password = this.page.locator('input[name="password"]');
    if (password != null) {
      return password;
    } else throw new Error("No Such PageTile Element");
  }
   public get LoginButton() {
    const LoginBtn = this.page.locator('input[value="Log In"]');
    if (LoginBtn != null) {
      return LoginBtn;
    } else throw new Error("No Such LoginButton Element");
  }
  public get AccountOverviewText() {
    const AccountOverview = this.page.locator('//h1[normalize-space()="Accounts Overview"]');
    if (AccountOverview != null) {
      return AccountOverview;
    } else throw new Error("No Such AccountOverviewText Element");
  }

  //functions
  public async PageTitleVisible() {
    const ele = await this.PageTile;
    await ele?.isVisible();
  }
  public async GetAccountOverview()
  {
    const ele = await this.AccountOverviewText;
    return ele?.isVisible();
  }
  public async ValidUserLoginFunction(username:string)
  {   
      
      await this.UsernameField.fill(username);
      await this.PasswordField.fill(data.Password);
      await this.LoginButton.click();
  }
}
