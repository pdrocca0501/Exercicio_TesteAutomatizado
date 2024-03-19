const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ef4hiu',
  e2e: {baseUrl: 'http://lojaebac.ebaconline.art.br/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video:true,
  },
});
