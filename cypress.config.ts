import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/automation-practice-form',
    specPattern: 'cypress/tests/*.spec.{js,jsx,ts,tsx}',
  },
});
