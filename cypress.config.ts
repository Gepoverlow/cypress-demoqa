import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/automation-practice-form',
    specPattern: 'cypress/tests/*.spec.{js,jsx,ts,tsx}',
  },
  blockHosts: ['pagead2.googlesyndication.com',
    'securepubads.g.doubleclick.net',
    'www.google-analytics.com',
    'serving.stat-rock.com'
  ]
});
