Cypress.Commands.add('getPlaceOrderButton', () => {
    cy.get('.col-lg-1 > .btn').contains('Place Order')
})

Cypress.Commands.add('getPurchaseNameField', () => {
    cy.get('#name')
})

Cypress.Commands.add('getPurchaseCountryField', () => {
    cy.get('#country')
})

Cypress.Commands.add('getPurchaseCityField', () => {
    cy.get('#city')
})

Cypress.Commands.add('getPurchaseCardField', () => {
    cy.get('#card')
})

Cypress.Commands.add('getPurchaseMonthField', () => {
    cy.get('#month')
})

Cypress.Commands.add('getPurchaseYearField', () => {
    cy.get('#year')
})

Cypress.Commands.add('getPurchaseButton', () => {
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
})