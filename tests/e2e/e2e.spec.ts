import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  // Go to the starting url before each test.
  await page.goto("http://localhost:5173/");
});

test("typing", async ({ page }) => {
  const searchInput = page.getByPlaceholder("Поиск");
  await searchInput.type("Hello world");
  const spinner = page.locator(".spinner");
  expect(searchInput.textContent()).not.toBeNull();
  await expect(spinner).toBeVisible();
  await new Promise<void>((resolve) => setTimeout(() => resolve(), 2000));
  expect(spinner).not.toBeVisible();
  await new Promise<void>((resolve) => setTimeout(() => resolve(), 2000));
  const firstDiv = page.locator("div").filter({ hasText: /^Hello-world$/ });
  expect(firstDiv).toBeVisible();

  await firstDiv.click();

  await new Promise<void>((resolve) => setTimeout(() => resolve(), 2000));

  const image = await page.locator("img");

  const imageSrc = await image.getAttribute("src");

  expect(imageSrc).not.toBeUndefined();
});
