import { test } from '@playwright/test';
import { join } from 'path';
import { TheConfig } from 'sicolo';
import HomePage from '../support/pages/HomePage';

test.describe('Teste Loja', () => {
  let homePage: HomePage;
  const CONFIG = join(__dirname, '../support/fixtures/config.yml');
  const BASE_URL = TheConfig.fromFile(CONFIG)
    .andPath('application.base_url')
    .retrieveData();

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await page.goto(BASE_URL);
    await homePage.realizaLogin();
  });

  test('Valida Compra', async () => {
    await homePage.adicionarProduto();
    await homePage.acessarCarrinho();
    await homePage.realizarCheckout();
    await homePage.dadosCheckout('Roberto', 'Bif', '88804320');
    await homePage.validaDados();
    await homePage.finalizaCompra();
    await homePage.validaCompraFinalizada();
  });
  test('Valida Compra2', async () => {
    await homePage.adicionarProdutos();
    await homePage.acessarCarrinho();
    await homePage.removeProduto();
    await homePage.realizarCheckout();
    await homePage.dadosCheckout('Roberto', 'Bif', '88804320');
    await homePage.validaDados();
    await homePage.finalizaCompra();
    await homePage.validaCompraFinalizada();
  });
});
