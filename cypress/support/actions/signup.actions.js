Cypress.Commands.add('clickSignupLink', () => {
    cy.getSignupLink().click()
})

Cypress.Commands.add('typeSignupUsername', () => {
    cy.getSignupUsernameField().type(`newuser${Math.random().toString(36).substr(2, 4)}`)
})

Cypress.Commands.add('typeSignupPassword', () => {
    cy.getSignupPasswordField().type(`newpassword${Math.random().toString(36).substr(2, 4)}`)
})

Cypress.Commands.add('clickSignupButton', () => {
    cy.getSignupButton().click()
})

Cypress.Commands.add('assertSignupSuccessfullyMessage', () => {
    cy.on('window:alert', (str) => {
        expect(str).to.equal(`Sign up successful.`)
    })
})

Cypress.Commands.add('assertUserAlreadyExistsMessage', () => {
    cy.on('window:alert', (str) => {
        expect(str).to.equal(`This user already exist.`)
    })
})

Cypress.Commands.add('assertNoUsernameOrPasswordMessage', () => {
    cy.on('window:alert', (str) => {
        expect(str).to.equal(`Please fill out Username and Password.`)
    })
})