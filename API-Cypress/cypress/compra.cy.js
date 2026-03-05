
describe('Flujo de compra en Demoblaze', () => {

  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/');
  });

  it('Compra completa con dos productos', () => {

    // Producto 1
    cy.contains('Samsung galaxy s6').click();
    cy.contains('Add to cart').click();
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Product added');
    });
    cy.contains('Home').click();

    // Producto 2
    cy.contains('Nokia lumia 1520').click();
    cy.contains('Add to cart').click();
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Product added');
    });

    // Carrito
    cy.contains('Cart').click();

    // Orden
    cy.contains('Place Order').click();

    cy.fixture('datosCompra').then((data) => {
      cy.get('#name').type(data.nombre);
      cy.get('#country').type(data.pais);
      cy.get('#city').type(data.ciudad);
      cy.get('#card').type(data.tarjeta);
      cy.get('#month').type(data.mes);
      cy.get('#year').type(data.year);
    });

    cy.contains('Purchase').click();

    cy.contains('Thank you for your purchase!')
      .should('be.visible');
  });

});
