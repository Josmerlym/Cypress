/// <reference types = "Cypress" />
import 'cypress-plugin-tab'

describe("Page Up y Page Down", () =>{

    it("Page Up", ()=>{

        cy.visit("https://rodrigovillanueva.com.mx/form/contact")
        cy.title().should('eq','Contact | RodrigoVillanueva.com.mx')
        cy.wait(2000)
        cy.get("#edit-name").type('{pageUp}')
        cy.wait(2000)
    
    })

    it.only("Page Down", ()=>{

        cy.visit("https://rodrigovillanueva.com.mx/form/contact")
        cy.title().should('eq','Contact | RodrigoVillanueva.com.mx')
        cy.wait(2000)
        cy.get("#edit-subject").type('{pageDown}')
        cy.wait(2000)
    
    })

})