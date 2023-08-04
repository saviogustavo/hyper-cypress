Cypress.Commands.add('clickPlaceOrderButton', () => {
    cy.getPlaceOrderButton().click()
})

Cypress.Commands.add('fillInPurchaseFields', () => {
    cy.getPurchaseNameField().type('Savio')
    cy.getPurchaseCountryField().type('Brasil')
    cy.getPurchaseCityField().type('Patos')
    cy.getPurchaseCardField().type('12345')
    cy.getPurchaseMonthField().type('06')
    cy.getPurchaseYearField().type('2019')
})

Cypress.Commands.add('clickPurchaseButton', () => {
    cy.getPurchaseButton().click()
})

Cypress.Commands.add('assertPurchaseConfirmationMessage', () => {
    cy.get('.sweet-alert > h2').contains('Thank you for your purchase!').should('be.visible')
})