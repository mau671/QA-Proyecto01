import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/playwright",
  timeout: 60_000,
  expect: {
    timeout: 10_000,
  },
  fullyParallel: false,
  reporter: [
    ["list"],
    ["html", { open: "never", outputFolder: "evidencias/reportes/playwright-mauricio-html" }],
    ["json", { outputFile: "evidencias/reportes/playwright-mauricio.json" }],
  ],
  use: {
    baseURL: process.env.CLAUSTRUM_BASE_URL ?? "https://claustrum.maugp.com",
    screenshot: "only-on-failure",
    trace: "retain-on-failure",
    video: "retain-on-failure",
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
