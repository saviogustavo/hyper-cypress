Cypress.Commands.add('loginLink', () => {
    cy.get('#login2')
})

Cypress.Commands.add('getLoginButton', () => {
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
})

Cypress.Commands.add('getUsernameField', () => {
    cy.get('#loginusername')
})

Cypress.Commands.add('getPasswordField', () => {
    cy.get('#loginpassword')
})