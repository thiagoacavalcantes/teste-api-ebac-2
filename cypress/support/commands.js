// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('cadastrarUsuario' , (nome, email, senha, administrador) => {
    cy.request({
        method: 'POST',
        url: 'usuarios',
        body: {
            "nome": nome,
            "email": email,
            "password": senha,
            "administrador": administrador
          }
    })
})

Cypress.Commands.add('editarUsuario' , (nome, email, senha, admnistrador) => {
    cy.request({
        method: 'PUT',
        url: 'usuarios' + '/vNq83im6RNrN7r0F',
        body: {
            "nome": nome,
            "email": email,
            "password": senha,
            "administrador": admnistrador
          }
          
    })
})