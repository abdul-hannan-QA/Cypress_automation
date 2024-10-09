const cypress = require("Cypress");
const { defineConfig } = require("Cypress");

module.exports = defineConfig({


  defaultCommandTimeout:6000,

  env:{
    url:"https://rahulshettyacademy.com"
  },
  


  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
});
