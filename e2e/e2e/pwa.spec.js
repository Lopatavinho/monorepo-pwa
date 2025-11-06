import { test, expect } from '@playwright/test';

test('PWA carrega e chama API', async ({ page }) => {
  await page.goto('http://localhost:8080');

  // Verifica se o botão existe
  const botao = page.getByText('Chamar API');
  await expect(botao).toBeVisible();

  // Clica no botão
  await botao.click();

  // Espera pelo alerta
  page.on('dialog', async dialog => {
    expect(dialog.message()).toContain('Olá do backend!');
    await dialog.dismiss();
  });
});
