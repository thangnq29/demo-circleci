const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
     },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: "https://www.demoblaze.com",
    // excludeSpecPattern: process.env.CI ? 'cypress/e2e/all.cy.js' : [], 
    specPattern: "./cypress/e2e/**.*"
  },
});
