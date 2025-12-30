import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 30 * 1000,

  expect: {
    timeout: 5000,
  },

  reporter: [['html', { open: 'never' }]],

  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 0,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' },
    },
  ],
});