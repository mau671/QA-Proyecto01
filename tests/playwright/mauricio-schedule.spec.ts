import { expect, test } from "@playwright/test";

const baseUrl = process.env.CLAUSTRUM_BASE_URL ?? "https://claustrum.maugp.com";
const email = process.env.CLAUSTRUM_EMAIL ?? "demo@demo.com";
const password = process.env.CLAUSTRUM_PASSWORD ?? "pruebas1234";

test("Mauricio: usuario autenticado crea y guarda un horario", async ({ page }) => {
  await page.goto(`${baseUrl}/auth/signin`);

  await page.locator("#login-email").fill(email);
  await page.locator("#login-password").fill(password);
  await page.getByRole("button", { name: /iniciar|entrar|login/i }).click();

  await expect(page).toHaveURL(/overview|onboarding|schedule/);

  await page.goto(
    `${baseUrl}/schedule?university=1&campus=3&career=10&plan=48&term=101`,
  );

  await expect(page.getByRole("heading", { name: /creador de horarios/i })).toBeVisible();
  await page
    .getByRole("button", { name: /grupo 01 regular sanchez fernandez ivonne/i })
    .click();
  await expect(page.getByText("MATEMÁTICA GENERAL").last()).toBeVisible();

  await page.getByRole("button", { name: /guardar horario actual/i }).click();
  await page.getByRole("textbox").fill(`Horario QA Mauricio ${Date.now()}`);
  await page.getByRole("button", { name: /^guardar$/i }).click();

  await expect(page.getByRole("button", { name: /quitar grupo/i }).first()).toBeVisible();
});
