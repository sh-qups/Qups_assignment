"use strict";
const { Builder, By, Key, until } = require("selenium-webdriver");
const { element, browser, ExpectedConditions } = require("protractor");
var cart = require("../pages/darazCart-page.js");

describe("Daraz Cart pageTest", function () {
  beforeEach(function () {
    browser.waitForAngularEnabled(false);
  });

  it("Test Cart Product ", async function () {
    await browser.driver.get("https://www.daraz.com.bd/");
    //browser.driver.get("https://member.daraz.com.bd/user/login?spm=a2a0e.home.header.d5.73524591fPQMqk&redirect=https%3A%2F%2Fwww.daraz.com.bd%2F" );
    //browser.driver.sleep(5000);
    await cart.clickLogin();
    browser.driver.sleep(10000);
    await cart.login();
    //browser.driver.sleep(5000);
    browser.driver.sleep(10000);
    await cart.searchProduct();
    browser.driver.sleep(10000);

    await cart.clickProduct();
    //await cart.clickProducTtype();
    browser.driver.sleep(10000);
    // var pbrand = await cart.getProductBrand1()
    // var pname = await cart.getProductName1();
    
    var pname = await cart.getProductName();
    var pbrand = await cart.getProductBrand();
    console.log(pname,pbrand);

     browser.driver.sleep(10000);

     await cart.clickAddToCart();

     await cart.clickGoToCart();

     var cpname  = await cart.getCartName();
     var cpbrand  = await cart.getCartBrand();

    expect(cpname).toEqual(pname);
     expect(cpbrand).toContain(pbrand);
  });
});
