/// <reference types="cypress" />
const { faker } = require('@faker-js/faker');


describe('Teste de API em Usuários', () => {

  it('Deve logar com sucesso', () => {
    cy.request({
      method: 'POST',
      url: 'login',
      body: {
        "email": "fulano@qa.com",
        "password": "teste"
      }
    }).should((response) => { 
      expect(response.body.message).to.equal('Login realizado com sucesso')
      expect(response.status).equal(200)
  });
})
  
  
  
 

  it('Deve cadastrar um usuário com sucesso', () => {
    cy.cadastrarUsuario(faker.person.fullName(), faker.internet.email(), 'teste@123', 'true') 
    .should((response) => {
      expect(response.status).equal(201)
      expect(response.body.message).equal('Cadastro realizado com sucesso')
    })   
  });

    
});
 
