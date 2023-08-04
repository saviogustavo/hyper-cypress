Cypress.Commands.add('visitSite', () => {
    cy.visit('https://www.demoblaze.com')
})


Cypress.Commands.add('clickLoginLink', () => {
    cy.loginLink().click()
})

Cypress.Commands.add('typeUsername', () => {
    cy.getUsernameField().type('sav')
})

Cypress.Commands.add('typePassword', () => {
    cy.getPasswordField().type('sav')
})

Cypress.Commands.add('clickLoginButton', () => {
    cy.getLoginButton().click()
})

Cypress.Commands.add('assertUsername', () => {
    cy.wait(2000)
    cy.get('#nameofuser').contains('Welcome sav').should('be.visible')
})

Cypress.Commands.add('asserNoUsernameOrPassword', () => {
    cy.on('window:alert', (str) => {
        expect(str).to.equal(`Please fill out Username and Password.`)
    })
})

Cypress.Commands.add('typeInvalidUsername', () => {
    cy.getUsernameField().type('adjfhuaidhf')
})

Cypress.Commands.add('typeInvalidPassword', () => { 
    cy.getPasswordField().type('dhfiudsafsd')
})

Cypress.Commands.add('assertUserDoesNotExist', () => {
    cy.on('window:alert', (str) => {
        expect(str).to.equal(`User does not exist.`)
    })
})