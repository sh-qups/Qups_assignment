
// 'use strict'
const { Builder, By, Key, until } = require("selenium-webdriver");
const { element, browser, ExpectedConditions } = require("protractor");

var darazAffliatePage = function() {


    //var affiliate = browser.driver.findElement(By.xpath('//*[@id="anonSignup"]/a'));
    //var affiliate = browser.driver.findElement(By.css("div[id='anonSignup'] a[class='grey']"));
    // var affiliatetitle = await browser.driver.findElement(By.xpath( '//*[@id="J_6558113530"]/div/div/p[5]/a[1]')); 
    
 
    this.clickAffiliate = function (){
       browser.driver.findElement(By.css("div[id='anonSignup'] a[class='grey']")).click();
    }

    this.getLinkText = async function () {
       return await browser.driver.findElement(By.xpath( '//*[@id="J_6558113530"]/div/div/p[5]/a[1]')).getText();
    }

    this.clickHelpCenter = async function () {
      await browser.driver.findElement(By.xpath( '//*[@id="J_1362278930"]/section/div[1]/div/div[1]/ul[1]/li[1]/a')).click();
  }

    this.clickHowToBuy = async function () {
      await browser.driver.findElement(By.xpath( '//*[@id="J_1362278930"]/section/div[1]/div/div[1]/ul[1]/li[2]/a')).click();
      
    }

    this.clickReturnsRefunds = async function () {
      await browser.driver.findElement(By.xpath( '//*[@id="J_1362278930"]/section/div[1]/div/div[1]/ul[1]/li[4]/a')).click();
    }

    this.clickContactUs = async function () {
      await browser.driver.findElement(By.xpath( '//*[@id="J_1362278930"]/section/div[1]/div/div[1]/ul[1]/li[5]/a')).click();
    }


  };
  
  // module.exports = darazAffliatePage;
  module.exports = new darazAffliatePage();