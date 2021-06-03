exports.config = {
    framework: 'jasmine',
    directConnect:true,
    specs: ['',],
    SELENIUM_PROMISSE_MANAGER: false,
    // capabilities: {
    //     browserName: 'firefox',
    //   }
    
    capabilities: {
        browserName: 'chrome',
        'chromeOptions': {
            // 'args': ['show-fps-counter=true',"--window-size=1920,1080","--start-maximized"]
            'args': ["--start-maximized"]
          }
      },


        // Options to be passed to Jasmine.
//     jasmineNodeOpts: {
//     defaultTimeoutInterval: 30000
//   }
  jasmineNodeOpts: {
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 1440000
  }


  };

