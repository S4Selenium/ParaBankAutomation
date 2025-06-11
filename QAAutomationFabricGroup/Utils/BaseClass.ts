// Utils/BaseTest.ts
import { chromium, Browser, BrowserContext, Page } from "@playwright/test";
import RegisterPage from "../PageObjects/RegisterPage.page";
import LoginPage from "../PageObjects/LoginPage.page";
import HomePage from "../PageObjects/HomePage.page";
import OpenNewAccountPage from "../PageObjects/OpenNewAccountPage.page";
import TransferFundPage from "../PageObjects/TransferFundPage.page";
import BillPaymentPage from "../PageObjects/BillPaymentPage.page";
import Env from "./environment";


export default class BaseTest {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  Registration!: RegisterPage;
  Loginsection!: LoginPage;
  Homepage!: HomePage;
  NewAccountpg!: OpenNewAccountPage;
  TransferFundPg!:TransferFundPage;
  BillPaymentPg!:BillPaymentPage;

  async init() {
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    await this.page.goto(Env.AutoTestEnv);

    this.Registration = new RegisterPage(this.page);
    this.Loginsection = new LoginPage(this.page);
    this.Homepage = new HomePage(this.page);
    this.NewAccountpg = new OpenNewAccountPage(this.page);
    this.TransferFundPg = new TransferFundPage(this.page);
    this.BillPaymentPg=new BillPaymentPage(this.page)
  }
 
  async cleanup() {
    await this.context.close();
    await this.browser.close();
  }
}