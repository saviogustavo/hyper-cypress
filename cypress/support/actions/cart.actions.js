Cypress.Commands.add('clickCartLink', () => {
    cy.getCartLink().click()
})

Cypress.Commands.add('assertCartPage', () => {
    cy.get('.col-lg-8 > h2').contains('Products').should('be.visible')  
})

Cypress.Commands.add('clickProduct', () => {
    cy.getProduct().eq(0).click()
})

Cypress.Commands.add('clickAddToCartButton', () => {
    cy.getAddToCartButton().click()
})

Cypress.Commands.add('assertProductAdded', () => {
    cy.wait(2000)
    cy.on('window:alert', (str) => {
        expect(str).to.equal(`Product added`)
    })
})