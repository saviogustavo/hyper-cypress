Given ('I am at the home page', () => {
    cy.visitSite()
})

When ('I click on the Sign Up link on the top of the page', () => {
    cy.clickSignupLink()
})

When ('I type a valid username on the pop up box', () => {
    cy.typeSignupUsername()
})

When ('I type a valid password on the pop up box', () => {
    cy.typeSignupPassword()
})

When ('I click on the Sign Up button', () => {
    cy.clickSignupButton()
})

Then ('I can see the Sign Up successful message', () => {
    cy.assertSignupSuccessfullyMessage()
})

Then ('I can see the Sign Up message saying the user already exists', () => {
    cy.assertUserAlreadyExistsMessage()
})

Then ('I can see a "Please fill out Username and Password." message', () => {
    cy.assertNoUsernameOrPasswordMessage()
})