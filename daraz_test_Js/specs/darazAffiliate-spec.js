"use strict";
const { Builder, By, Key, until } = require("selenium-webdriver");
const { element, browser, ExpectedConditions } = require("protractor");
var affiliate = require("../pages/darazAffiliate-page.js");

describe("Daraz Affiliate pageTest", function () {
  beforeEach(function () {
    browser.waitForAngularEnabled(false);
  });

  it("Test Help Center links", async function () {
    await browser.driver.get("https://www.daraz.com.bd/");
    await affiliate.clickAffiliate();
    browser.driver.sleep(5000);
    //  var x = await affiliate.getLinkText();
    //   console.log(x);
    expect(affiliate.getLinkText()).toEqual("www.daraz.com.bd");
    browser.driver.sleep(5000);
    await affiliate.clickHelpCenter();
    browser.driver.sleep(10000);
    // console.log(await browser.driver.getTitle());
    expect(await browser.driver.getTitle()).toContain("Help Center");

    await browser.driver.navigate().back();
    browser.driver.sleep(2000);
    await affiliate.clickHowToBuy();
    browser.driver.sleep(10000);
    // console.log(await browser.driver.getTitle());
    expect(await browser.driver.getTitle()).toContain("Help Center");

    await browser.driver.navigate().back();
    browser.driver.sleep(2000);
    await affiliate.clickReturnsRefunds();
    browser.driver.sleep(10000);
    // console.log(await browser.driver.getTitle());
    expect(await browser.driver.getTitle()).toContain("Return Goods");

    await browser.driver.navigate().back();
    browser.driver.sleep(2000);
    await affiliate.clickContactUs();
    browser.driver.sleep(10000);
    // console.log(await browser.driver.getTitle());
    expect(await browser.driver.getTitle()).toContain("Contact Us");
  });
});
