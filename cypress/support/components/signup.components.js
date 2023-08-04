Cypress.Commands.add('getSignupLink', () => {
    cy.get('#signin2')
})

Cypress.Commands.add('getSignupUsernameField', () => {
    cy.get('#sign-username')
})

Cypress.Commands.add('getSignupPasswordField', () => {
    cy.get('#sign-password')
})

Cypress.Commands.add('getSignupButton', () => {
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
})