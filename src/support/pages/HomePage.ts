import { Page, expect } from '@playwright/test';
import HomeElements from '../elements/HomeElements';
import BasePage from './BasePage';

export default class HomePage extends BasePage {
  readonly homeElements: HomeElements;

  constructor(readonly page: Page) {
    super(page);
    this.page = page;
    this.homeElements = new HomeElements(page);
  }

  async searchProductByName(): Promise<void> {
    await this.homeElements.getSearchField().type('t-shirts');
    await this.homeElements.getSearchButton().click();
  }

  async checkProductCount(): Promise<void> {
    await expect(this.homeElements.getProductCount()).toBeVisible();
  }

<<<<<<< HEAD
  async realizaLogin(): Promise<void> {
    await this.homeElements.getCampoLogin().type('standard_user');
    await this.homeElements.getCampoSenha().type('secret_sauce');
    await this.homeElements.getBotaoLogar().click();
  }

  async adicionarProduto(): Promise<void> {
    await this.homeElements.getAddMochila().click();
  }

  async adicionarProdutos(): Promise<void> {
    await this.homeElements.getAddMochila().click();
    await this.homeElements.getAddBike().click();
    await this.homeElements.getAddCamiseta().click();
  }

  async removeProduto(): Promise<void> {
    await this.homeElements.getRemoveMochila().click();
  }

  async acessarCarrinho(): Promise<void> {
    await this.homeElements.getCarrinho().click();
  }

  async realizarCheckout(): Promise<void> {
    await this.homeElements.getCheckout().click();
  }

  async dadosCheckout(
    nome: string,
    sobrenome: string,
    cep: string
  ): Promise<void> {
    await this.homeElements.getPreencheNome().type(nome);
    await this.homeElements.getPreencheSobrenome().type(sobrenome);
    await this.homeElements.getPreencheCEP().type(cep);
    await this.homeElements.getContinue().click();
  }

  async validaDados(): Promise<void> {
    await expect(this.homeElements.getValidaTexto()).toHaveText('Price Total');
  }

  async finalizaCompra(): Promise<void> {
    await this.homeElements.getFinalizarCompra().click();
  }

  async validaCompraFinalizada(): Promise<void> {
    await expect(this.homeElements.getValidaTextoFinal()).toHaveText(
      'Thank you for your order!'
    );
    await this.homeElements.getHome().click();
  }

  async validaCompra2Remove1(): Promise<void> {
    await this.homeElements.getAddMochila().click();
    await this.homeElements.getAddBike().click();
    await this.homeElements.getAddCamiseta().click();
    await this.homeElements.getCarrinho().click();
    await this.homeElements.getRemoveMochila().click();
    await this.homeElements.getCheckout().click();
    await this.homeElements.getPreencheNome().type('Roberto');
    await this.homeElements.getPreencheSobrenome().type('Bif');
    await this.homeElements.getPreencheCEP().type('88804320');
    await this.homeElements.getContinue().click();
    await this.homeElements.getFinalizarCompra().click();
    await this.homeElements.getHome().click();
=======
  async login(): Promise<void> {
    await this.homeElements.getLoginField().type('standard_user');
    await this.homeElements.getPassField().type('secret_sauce');
    await this.homeElements.getSubmitButton().click();
>>>>>>> 3de24f09b5b17a85f9ed8790d3945539bc2a9bf7
  }
}
