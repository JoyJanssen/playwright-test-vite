import { test, expect } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("http://localhost:5173");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Vite + React + TS");

  const button = page.getByRole("button");
  await expect(button).toHaveText("count is 0");
  await button.click();
  await expect(button).toHaveText("count is 1");
});
