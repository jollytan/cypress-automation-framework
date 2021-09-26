/// <reference types="Cypress"/>

describe("Updating - Test Contact Us form via Automation Test Store - Test Case", () => {
    it("Should be able to submit a successful submission via contact us", () => {
        cy.visit("https://www.automationteststore.com/")
        cy.get('.info_links_footer > :nth-child(5) > a').click()
        cy.get('#ContactUsFrm_first_name').type("Joe")
        cy.get('#ContactUsFrm_email').type("blogs@gmail.com")
        cy.get('#ContactUsFrm_enquiry').type("How can I learn Cypress?")
        cy.get('.col-md-6 > .btn').click()
    })
})
