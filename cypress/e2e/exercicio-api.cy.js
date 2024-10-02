/// <reference types="cypress" />
import contrato from'../contracts/usuarios.contract'
const { faker } = require('@faker-js/faker');

describe('Testes da Funcionalidade Usuários', () => {

  it('Deve validar contrato de usuários', () => {
    cy.request('usuarios').then(response =>{
      return contrato.validateAsync(response.body)
  })
  })

  it('Deve listar usuários cadastrados', () => {
    cy.request({
      method: 'GET',
      url: 'usuarios'
  }).should((response) => {
      expect(response.status).equal(200)
      expect(response.body).to.have.property('usuarios')
  }) 
  });

it('Deve cadastrar um usuário com sucesso', () => {
  cy.cadastrarUsuario(faker.person.fullName(), faker.internet.email(), 'teste@123', 'true') 
  .should((response) => {
    expect(response.status).equal(201)
    expect(response.body.message).equal('Cadastro realizado com sucesso')
  })   
  });

  it('Deve validar um usuário com email inválido', () => {
    cy.request({
        method: 'POST',
        url: 'usuarios',
        body: {
          "nome": "Exercicio EBAC",
          "email": "exercicio10@qa.com.br",
          "password": "teste",
          "administrador": "true"
        },
        failOnStatusCode: false 
      }).should(response => {
        expect(response.status).to.equal(400); 
        expect(response.body.message).to.equal('Este email já está sendo usado');
      });
  });

  it('Deve editar um usuário previamente cadastrado', () => {
   cy.editarUsuario(faker.person.fullName(), 'testeebac02@qa.com.br', faker.internet.password(), 'true')
   .should((response) => {
    expect(response.status).equal(200)
    expect(response.body.message).equal('Registro alterado com sucesso')
  }) 
  });

  it('Deve deletar um usuário previamente cadastrado', () => {
    cy.cadastrarUsuario(faker.person.fullName(), faker.internet.email(), 'teste@123', 'true')
        .then(response => {
            let id = response.body._id
            cy.request({
                method: 'DELETE',
                url: `usuarios/${id}`,
            }).should(response => {
                expect(response.body.message).to.equal('Registro excluído com sucesso')
                expect(response.status).equal(200)
            })
        })

  });



















})