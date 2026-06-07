import { expect, test } from "@playwright/test";

const baseUrl = process.env.CLAUSTRUM_BASE_URL ?? "https://claustrum.maugp.com";
const email = process.env.CLAUSTRUM_EMAIL ?? "demo@demo.com";
const password = process.env.CLAUSTRUM_PASSWORD ?? "pruebas1234";

test("Armando: login y consulta detalle de curso en la malla curricular", async ({ page }) => {
  await page.goto(`${baseUrl}/auth/signin`);

  await page.locator("#login-email").fill(email);
  await page.locator("#login-password").fill(password);
  await page.getByRole("button", { name: /iniciar sesi\u00f3n/i }).click();

  await expect(page).toHaveURL(/overview|onboarding|curriculum/);

  await page.goto(`${baseUrl}/curriculum`);

  const firstCourse = page.locator('[id^="course-"]').first();
  await expect(firstCourse).toBeVisible({ timeout: 15_000 });

  await firstCourse.click();

  await expect(page).toHaveURL(/\/curriculum\/\d+/);
  await expect(page.getByRole("button", { name: /volver al plan/i })).toBeVisible();
  await expect(page.locator("h1").first()).toBeVisible();
});
