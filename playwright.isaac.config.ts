import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/playwright",
  timeout: 60_000,
  fullyParallel: false,
  reporter: [
    ["list"],
    [
      "html",
      {
        open: "never",
        outputFolder: "evidencias/reportes/playwright-isaac-html",
      },
    ],
    [
      "json",
      {
        outputFile: "evidencias/reportes/playwright-isaac.json",
      },
    ],
  ],
  projects: [
    {
      name: "chromium",
      testMatch: /isaac-.*\.spec\.ts/,
      use: {
        ...devices["Desktop Chrome"],
      },
    },
  ],
});