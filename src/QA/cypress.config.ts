const { defineConfig } = require("cypress");
require("dotenv").config();
// const watch = require("@cypress/watch-preprocessor");
const bookingArg = "booking";
const bookDemo = "book-a-demo";

module.exports = defineConfig({
  projectId: "cpig8p",
  // 2484ft

  numTestsKeptInMemory: 20,
  screenshotOnRunFailure: true,
  screenshotsFolder: "cypress/screenshots",
  videosFolder: "cypress/videos",
  defaultCommandTimeout: 6000,
  execTimeout: 10000,
  pageLoadTimeout: 60000,
  requestTimeout: 20000,
  responseTimeout: 20000,
  watchForFileChanges: true,
  retries: {
    runMode: 1,
    openMode: 1,
  },
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      on("file:preprocessor", (file) => {});

      // using baseUrl with config env
      const appUrl = config.env.type || "local";
      const allUrl = {
        local: "https://www.myndup.com/",
        prod: "https://www.myndup.com/",
      };

      config.baseUrl = allUrl[appUrl];

      return config;
    },

    // using cypress .env file
    env: {
      ...process.env,
    },
    specPattern: "cypress/e2e/**{_spec.ts,Tests.ts}",
  },
});
function watch(): any {
  throw new Error("Function not implemented.");
}
