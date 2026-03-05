
describe('API Login Tests', () => {

  it('Login exitoso', () => {
    cy.request('POST', 'https://api.demoblaze.com/login', {
      username: 'usuarioNuevo123',
      password: 'pass123'
    }).then((resp) => {
      expect(resp.status).to.eq(200);
    });
  });

  it('Login incorrecto', () => {
    cy.request({
      method: 'POST',
      url: 'https://api.demoblaze.com/login',
      body: { username: 'mal', password: 'incorrecto' },
      failOnStatusCode: false
    }).then((resp) => {
      expect(resp.status).to.be.oneOf([200, 400]);
    });
  });

});
