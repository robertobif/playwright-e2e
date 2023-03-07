import { Locator, Page } from '@playwright/test';
import BaseElements from './BaseElements';

export default class HomeElements extends BaseElements {
  constructor(readonly page: Page) {
    super(page);
    this.page = page;
  }

  getSearchField(): Locator {
    return this.page.locator('#search_query_top');
  }

  getSearchButton(): Locator {
    return this.page.locator('button[name="submit_search"]');
  }

  getProductCount(): Locator {
    return this.page.locator('span[class="heading-counter"]');
  }

<<<<<<< HEAD
  getCampoLogin(): Locator {
    return this.page.locator('#user-name');
  }

  getCampoSenha(): Locator {
    return this.page.locator('#password');
  }

  getBotaoLogar(): Locator {
    return this.page.locator('#login-button');
  }

  getAddMochila(): Locator {
    return this.page.locator('#add-to-cart-sauce-labs-backpack');
  }

  getRemoveMochila(): Locator {
    return this.page.locator('#remove-sauce-labs-backpack');
  }

  getAddBike(): Locator {
    return this.page.locator('#add-to-cart-sauce-labs-bike-light');
  }

  getAddCamiseta(): Locator {
    return this.page.locator('#add-to-cart-sauce-labs-bolt-t-shirt');
  }

  getCarrinho(): Locator {
    return this.page.locator('#shopping_cart_container');
  }

  getCheckout(): Locator {
    return this.page.locator('#checkout');
  }

  getPreencheNome(): Locator {
    return this.page.locator('#first-name');
  }

  getPreencheSobrenome(): Locator {
    return this.page.locator('#last-name');
  }

  getPreencheCEP(): Locator {
    return this.page.locator('#postal-code');
  }

  getContinue(): Locator {
    return this.page.locator('#continue');
  }

  getFinalizarCompra(): Locator {
    return this.page.locator('#finish');
  }

  getHome(): Locator {
    return this.page.locator('#back-to-products');
  }

  getValidaTexto(): Locator {
    return this.page.locator('text=Price Total');
  }

  getValidaTextoFinal(): Locator {
    return this.page.locator('text=Thank you for your order!');
  }
=======
  getLoginField(): Locator {
    return this.page.locator('#user-name');
  }

  getPassField(): Locator {
    return this.page.locator('#password');
  }

  getSubmitButton(): Locator {
    return this.page.locator('#login-button');
  }
>>>>>>> 3de24f09b5b17a85f9ed8790d3945539bc2a9bf7
}
