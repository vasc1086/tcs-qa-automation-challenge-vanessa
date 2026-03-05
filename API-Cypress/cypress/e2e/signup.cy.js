
describe('API Signup Tests', () => {

  it('Crear usuario nuevo', () => {
    cy.fixture('usuarios').then(users => {
      cy.request('POST', 'https://api.demoblaze.com/signup', {
        username: users[0].user,
        password: users[0].password
      }).then((resp) => {
        expect(resp.status).to.eq(200);
      });
    });
  });

  it('Intentar crear usuario existente', () => {
    cy.fixture('usuarios').then(users => {
      cy.request({
        method: 'POST',
        url: 'https://api.demoblaze.com/signup',
        body: {
          username: users[1].user,
          password: users[1].password
        },
        failOnStatusCode: false
      }).then((resp) => {
        expect(resp.status).to.be.oneOf([200, 400]);
      });
    });
  });

});
