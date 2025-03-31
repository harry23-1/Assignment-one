const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  retries: {
    runMode: 2,
    openMode: 0
  },

  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 15000,
  execTimeout: 60000,
  taskTimeout: 60000,
  pageLoadTimeout: 60000,
  requestTimeout: 10000,
  responseTimeout: 30000,
  video: true,
  videoCompression: 32,
  videoUploadOnPasses: false,
  chromeWebSecurity: false,
  watchForFileChanges: false,
  trashAssetsBeforeRuns: true,
  screenshotOnRunFailure: true,
  numTestsKeptInMemory: 3,

  env: {
    baseUrl: "https://www.youtube.com",
    hideYoutubeElements: [
      '#header',
      '#masthead-container',
      '#secondary'
    ]
  },

  e2e: {
    specPattern: "cypress/e2e/**/*.feature",
    supportFile: "cypress/support/testContext.js",
    experimentalRunAllSpecs: true,
    experimentalInteractiveRunEvents: true,

    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);

      on("before:browser:launch", (browser, launchOptions) => {
        if (browser.name === "chrome") {
          launchOptions.args.push(
            "--disable-dev-shm-usage",
            "--disable-blink-features=ShadowDOMV0",
            "--disable-site-isolation-trials",
            "--disable-features=CrossOriginOpenerPolicy"
          );
          launchOptions.preferences.default['prefs'] = {
            'profile.managed_default_content_settings.popups': 1,
            'profile.managed_default_content_settings.notifications': 1
          };
        }
        return launchOptions;
      });

      return config;
    }
  }
});
