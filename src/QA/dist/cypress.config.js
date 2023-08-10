var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var defineConfig = require("cypress").defineConfig;
require("dotenv").config();
// const watch = require("@cypress/watch-preprocessor");
var bookingArg = "booking";
var bookDemo = "book-a-demo";
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
        setupNodeEvents: function (on, config) {
            on("file:preprocessor", function (file) { });
            // using baseUrl with config env
            var appUrl = config.env.type || "local";
            var allUrl = {
                local: "https://www.myndup.com/",
                prod: "https://www.myndup.com/",
            };
            config.baseUrl = allUrl[appUrl];
            return config;
        },
        // using cypress .env file
        env: __assign({}, process.env),
        specPattern: "cypress/e2e/**{_spec.ts,Tests.ts}",
    },
});
function watch() {
    throw new Error("Function not implemented.");
}
