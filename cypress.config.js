const { defineConfig } = require('cypress')

module.exports = defineConfig({
  watchForFileChanges: false,
  experimentalStudio: true,
  defaultCommandTimeout: 60000,
  viewportWidth: 1000,
  viewportHeight: 1000,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    chromeWebSecurity: false,
    baseUrl:'https://www.saucedemo.com/',
    setupNodeEvents(on, config) {

    },
    "include": ["./node_modules/cypress", "cypress/**/*.js"]
  },
})