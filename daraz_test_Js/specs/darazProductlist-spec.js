"use strict";
const { Builder, By, Key, until } = require("selenium-webdriver");
const { element, browser, ExpectedConditions } = require("protractor");

var Productlist = require("../pages/darazProductlist-page.js");

describe("Daraz Productlist pageTest", function () {
  beforeEach(function () {
    browser.waitForAngularEnabled(false);
  });

  it("Test Product list  ", async function () {
    await browser.driver.get("https://www.daraz.com.bd/");
    
    //browser.driver.get("https://member.daraz.com.bd/user/login?spm=a2a0e.home.header.d5.73524591fPQMqk&redirect=https%3A%2F%2Fwww.daraz.com.bd%2F" );
   // browser.driver.sleep(10000);

    await Productlist.clickLogin();
     
    browser.driver.sleep(10000);
    await Productlist.login();

     browser.driver.sleep(10000);
    await Productlist.searchProduct();

    //browser.driver.sleep(10000);
    await Productlist.clickProducTtype();
    browser.driver.sleep(15000);

    await Productlist.getProductList();


  });


});
