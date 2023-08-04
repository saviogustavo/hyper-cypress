Cypress.Commands.add('getCartLink', () => {
    cy.get('#cartur')
})

Cypress.Commands.add('getProduct', () => {
    cy.get('.card-title > a')
})

Cypress.Commands.add('getAddToCartButton', () => {
    cy.get('.col-sm-12 > .btn').contains('Add to cart')
})