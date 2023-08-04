Given ('I am at the Home Page', ()=> {
    cy.visitSite()
})

When ('I click on the cart link on the top of the page', ()=> {
    cy.clickCartLink()
})

Then ('I am redirected to the Cart Page', ()=> {
    cy.assertCartPage()
})

When ('I click on a product', ()=> {
    cy.clickProduct()
})

When ('I click on Add to cart button', ()=> {
    cy.clickAddToCartButton()
})

Then ('The product will be added to my cart', ()=> {
    cy.assertProductAdded()
})