/// <reference types="Cypress"/>

describe("Test Contact Us form via WebdriverUni", () => {
    it("Should be able to submit a successful submission via contact us", () => {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
        cy.get('[name="first_name"]').type("Joe")
        cy.get('[name="last_name"]').type("blogs")
        cy.get('[name="email"]').type("blogs@gmail.com")
        cy.get('textarea.feedback-input').type("How can I learn Cypress?")
        cy.get('[type="submit"]').click()
    })
})