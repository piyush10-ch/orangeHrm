const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: true,

  e2e: {
    //bail:1,
    baseUrl:'https://opensource-demo.orangehrmlive.com/',
    defaultCommandTimeout: 10000,   // ← 4sec se 10sec
    pageLoadTimeout: 30000,         // ← Page load 30sec
    requestTimeout: 10000,          // ← API request 10sec
    responseTimeout: 10000, 
    env:{
      ACCESS_TOKEN:'b734053fdf024485354bbb5f87b64595d6b0c822d440d6faa7727c13e0ce2357'
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
