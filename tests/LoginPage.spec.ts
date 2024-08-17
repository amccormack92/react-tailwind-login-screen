import { test, expect } from "@playwright/test";

test.describe("Login Page Load Test", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5173");
  });
  test("should load the login page successfully", async ({ page }) => {
    const logo = page.getByRole("heading", { name: "Welcome" });
    await expect(logo).toBeVisible();

    const usernameInput = page.getByRole("textbox", {
      name: "Enter your username",
    });
    await expect(usernameInput).toBeVisible();

    const passwordInput = page.getByRole("textbox", {
      name: "Enter your password",
    });
    await expect(passwordInput).toBeVisible();

    const submitButton = page.getByRole("button", { name: "Login" });
    await expect(submitButton).toBeVisible();
  });
});

test.describe("Login Form - Mobile View", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5173");
  });
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 414, height: 812 });
  });

  test("should display the form correctly on mobile", async ({ page }) => {
    const companyNameDestopView = page
      .locator("div")
      .filter({ hasText: /^MORGAN MOTORS$/ })
      .nth(1);
    const usernameInput = page.getByRole("textbox", {
      name: "Enter your username",
    });
    const passwordInput = page.getByRole("textbox", {
      name: "Enter your password",
    });
    const submitButton = page.getByRole("button", { name: "Login" });

    await expect(companyNameDestopView).toBeHidden();
    await expect(usernameInput).toBeVisible();
    await expect(passwordInput).toBeVisible();
    await expect(submitButton).toBeVisible();
  });
});

test.describe("Login Form - tablet and up View", () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 812 });
  });

  test("should display the form correctly on tablet", async ({ page }) => {
    const companyNameDestopView = page
      .locator("div")
      .filter({ hasText: /^MORGAN MOTORS$/ })
      .nth(1);
    const usernameInput = page.getByRole("textbox", {
      name: "Enter your username",
    });
    const passwordInput = page.getByRole("textbox", {
      name: "Enter your password",
    });
    const submitButton = page.getByRole("button", { name: "Login" });

    await expect(companyNameDestopView).toBeVisible();
    await expect(usernameInput).toBeVisible();
    await expect(passwordInput).toBeVisible();
    await expect(submitButton).toBeVisible();
  });
});
