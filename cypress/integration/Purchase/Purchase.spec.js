import '../Cart/Cart.spec';

When ('I click on the Place Order button', ()=> {
    cy.clickPlaceOrderButton()
})

When ('I fill in all the required fields', ()=>{
   cy.fillInPurchaseFields()
})

When ('I click on Purchase button', ()=> {
    cy.clickPurchaseButton()
})

Then ('I can see the Purchase confirmation', ()=> {
    cy.assertPurchaseConfirmationMessage()
})