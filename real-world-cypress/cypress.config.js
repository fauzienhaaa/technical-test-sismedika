const { defineConfig } = require("cypress");
const dotenv = require("dotenv");

dotenv.config();

module.exports = defineConfig({
  env: {
      baseUrl: process.env.BASE_URL,
      username: process.env.VALID_USERNAME,
      password: process.env.VALID_PASSWORD,
   },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "**/*.test.{js,ts,jsx,tsx}",
  },
});
