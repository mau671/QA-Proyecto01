import { expect, test } from "@playwright/test";

const baseUrl = process.env.CLAUSTRUM_BASE_URL ?? "https://claustrum.maugp.com";
const email = process.env.CLAUSTRUM_EMAIL ?? "demo@demo.com";
const password = process.env.CLAUSTRUM_PASSWORD ?? "pruebas1234";

test("Isaac: consulta detalle de profesor y abre formulario de reseña", async ({ page }) => {
  await page.goto(`${baseUrl}/auth/signin`);

  await page.locator("#login-email").fill(email);
  await page.locator("#login-password").fill(password);
  await page.getByRole("button", { name: /iniciar|entrar|login/i }).click();

  await expect(page).toHaveURL(/overview|onboarding|professors|curriculum/);

  await page.goto(`${baseUrl}/professors/480`);
  await page.waitForLoadState("networkidle");

  await expect(page.getByRole("heading", { name: /cordero quiros marcial/i })).toBeVisible({
    timeout: 15_000,
  });

  await expect(page.getByText(/calidad general/i)).toBeVisible();
  await expect(page.getByText(/facilidad/i).first()).toBeVisible();
  await expect(page.getByText(/calidad/i).first()).toBeVisible();

  await expect(page.getByRole("button", { name: /escribir reseña/i })).toBeVisible();
  await page.getByRole("button", { name: /escribir reseña/i }).click();

  await expect(page.getByRole("heading", { name: /enviar reseña/i })).toBeVisible();
  await expect(page.getByText(/curso/i).first()).toBeVisible();
  await expect(page.getByText(/comentario/i).first()).toBeVisible();

  await page.screenshot({
    path: "evidencias/isaac/CP-I-007-playwright-formulario.png",
    fullPage: true,
  });
});