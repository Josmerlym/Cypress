const { defineConfig } = require("cypress");


module.exports = defineConfig({
  video: true,
  projectId: 'phvmdx',
  e2e: {
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
      
      
    },
    
  testIsolation: false,
  
  
  },chromeWebSecurity: false,

  
  
  
});