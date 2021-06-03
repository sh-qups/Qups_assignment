
// 'use strict'
const { Builder, By, Key, until } = require("selenium-webdriver");
const { element, browser, ExpectedConditions } = require("protractor");
var json = require("../data/login.json");
var username = json.login.username;
var password = json.login.password;
var searchValue = json.productname.product;


var darazCartPage = function() {


    this.clickLogin = async function (){
      browser.driver.findElement(By.xpath('//*[@id="anonLogin"]/a')).click();
    
    }
    

    this.login = async function (){

      await browser.driver.findElement(By.xpath('//*[@id="container"]/div/div[2]/form/div/div[1]/div[1]/input')).sendKeys(username);
      await browser.driver.findElement(By.xpath('//*[@id="container"]/div/div[2]/form/div/div[1]/div[2]/input')).sendKeys(password);
      await browser.driver.findElement(By.xpath('//*[@id="container"]/div/div[2]/form/div/div[2]/div[1]/button')).click();
    
    }
 
    this.searchProduct = async function (){
      await browser.driver.findElement(By.name("q")).sendKeys(searchValue, Key.RETURN);
    
    }
    this.clickProducTtype = async function () {
      browser.driver.findElement(By.xpath('//*[@id="root"]/div/div[2]/div[1]/div/div[2]/div/div[2]/div[2]/div/div[1]/label[4]/span[1]/input')).click();
      browser.driver.findElement(By.xpath('//*[@id="root"]/div/div[2]/div[1]/div/div[2]/div/div[3]/div[2]/div/div/label[2]/span[1]/input')).click();
    
  }


    this.clickProduct = async function () {
      browser.driver.findElement(By.xpath('//*[@id="root"]/div/div[2]/div[1]/div/div[1]/div[2]/div[1]/div/div/div[1]/div/a')).click();
      
      
    }

    this.getProductName = async function () {
     return await browser.driver.findElement(By.xpath('//*[@id="module_product_title_1"]/div/div/span')).getText();
      //return await browser.driver.findElement(By.className('pdp-mod-product-badge-title')).getText()

    }

  this.getProductBrand =  async function () {
    //return  await browser.driver.findElement(By.xpath('//*[@id="module_product_brand_1"]/div/a[1]')).getText();
    return await browser.driver.findElement(By.className('pdp-link pdp-link_size_s pdp-link_theme_blue pdp-product-brand__brand-link')).getText()
    
    
    }

    this.getProductBrand1 = async function () {
      return browser.driver.findElement(By.xpath('//*[@id="root"]/div/div[2]/div[1]/div/div[2]/div/div[2]/div[2]/div/div[1]/label[4]/span[2]')).getText();
      }

      this.getProductName1 = async function () {
        return browser.driver.findElement(By.className('c16H9d')).getText();
  
      }

    this.clickAddToCart = async function () {
      browser.driver.findElement(By.xpath('//*[@id="module_add_to_cart"]/div/button[2]')).click();
    }

    this.clickGoToCart = async function () {
      browser.driver.findElement(By.xpath('//*[@id="dialog-body-1"]/div/div[1]/div/div[2]/div/div[2]/div/div[2]/button[2]')).click();
    }

    this.getCartName = async function () {
      return await browser.driver.findElement(By.className('automation-link-from-title-to-prod title')).getText();
    }

    this.getCartBrand = async function () {
      return await browser.driver.findElement(By.className('automation-link-from-sub-title-to-prod sku')).getText();
    }
  };
  
  // module.exports = darazAffliatePage;
  module.exports = new darazCartPage();