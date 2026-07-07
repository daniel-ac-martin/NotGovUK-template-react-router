import { defineConfig } from 'cypress';

export default defineConfig({
  downloadsFolder: '.cypress/downloads',
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'feat/**/*.spec.*',
    supportFile: '.cypress/support/index.js',
    testIsolation: false
  },
  fixturesFolder: 'fixtures',
  requestTimeout: 7000,
  screenshotsFolder: '.cypress/screenshots',
  videosFolder: '.cypress/videos',
  video: false
});
