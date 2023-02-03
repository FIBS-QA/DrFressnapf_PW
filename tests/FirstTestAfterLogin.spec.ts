import { test } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/sprechstunde-buchen/#/checkout/step-my-pet-profile');
  await page.getByRole('button', { name: 'Matyi Boxer 10.10.2010' }).click();
  await page.getByRole('button', { name: 'Nein' }).click();
  await page.getByRole('button', { name: 'Allgemeine Gesundheitsberatung Tierarztberatung per Videochat 19.90 €' }).click();
});