const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    //bail:1,
    baseUrl:'https://opensource-demo.orangehrmlive.com/',
    defaultCommandTimeout: 10000,   // ← 4sec se 10sec
    pageLoadTimeout: 30000,         // ← Page load 30sec
    requestTimeout: 10000,          // ← API request 10sec
    responseTimeout: 10000, 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
