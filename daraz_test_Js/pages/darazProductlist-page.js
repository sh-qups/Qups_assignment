
// 'use strict'
const fs = require("fs");
const { Builder, By, Key, until } = require("selenium-webdriver");
const { element, browser, ExpectedConditions } = require("protractor");
var json = require("../data/login.json");
var username = json.login.username;
var password = json.login.password;
var searchValue = json.productname.product;
var products=[];

var darazProductPage = function() {


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

    this.getProductList = async function () {

       await browser.driver.findElements(By.className("c16H9d")).then(function(elements){
            elements.forEach(function (element) {
                element.getText().then(function(text){
                    products.push(text);
                });
            });
        });
    
        browser.driver.call(write);
    }

  };


  function write() {

    var data = products.toString();
    var len= products.length;
    len = len.toString();
    data = data.concat(',Num of Products:  '+ len)
    data = data.split(",").join("\n");
    
    
    fs.writeFile("./data/result.txt", data, ["utf8"], function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("The file was saved!");
    });
  
    return console.log("function finished");
  }


  
  // module.exports = darazAffliatePage;
  module.exports = new darazProductPage();