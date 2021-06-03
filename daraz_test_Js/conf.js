exports.config = {
  framework: 'jasmine',
   //seleniumAddress: 'http://localhost:4444/wd/hub',
   directConnect:true,
  // specs: ['./specs/todo-spec.js','./specs/spec.js'],
  //  specs: ['./specs/spec.js'],
  // specs: ['./specs/pomspec.js'],
  // specs: ['./specs/darazlogin.js'],
   specs: ['./specs/dz1.js','./specs/dz2.js','./specs/dz3.js'],
   SELENIUM_PROMISSE_MANAGER: false,
  // specs: ['./specs/dz2.js',],

  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
    //   //  args: [ "--headless", "--disable-gpu", 'show-fps-counter=true',"--start-maximized","--window-size=1920,1080" "--window-size=800,600" ]
    //    args: [  "--disable-gpu", "--window-size=800,600" ]
    'args': ["--start-maximized"]
      }
  }
 
  // multiCapabilities: [{
  //   'browserName': 'firefox'
  // }, {
  //   'browserName': 'chrome'
  // }]

}