
Given ('I am at the landing page', () => {
    cy.visitSite()
})

When ('I click on the login link on the top of the page', () => {
    cy.clickLoginLink()
})

When ('I type a valid username on the pop up box', () => {
    cy.typeUsername()
})

When ('I type a valid password on the pop up box', () => {
    cy.typePassword()
})

When ('I click the Login button', () => {
    cy.clickLoginButton()
})

Then ('I can see my username on the top of the Home Page', () => {
   cy.assertUsername()
})

Then ('I can see a "Please fill out Username and Password." message', () => {
    cy.asserNoUsernameOrPassword()
})

When ('I type an invalid username on the pop up box', () => {
    cy.typeInvalidUsername()
})

When ('I type an invalid password on the pop up box', () => {
    cy.typeInvalidPassword()
})

Then ('I can see a "User does not exist." message', () => {
   cy.assertUserDoesNotExist()
})