/// <reference types = "Cypress" />
import 'cypress-plugin-tab'
Cypress.on('uncaught:exception', () => false)

describe("Probando el Tabulador", () =>{

    it("Funcion Tab", ()=>{

        cy.visit("https://rodrigovillanueva.com.mx/form/contact")
        cy.title().should('eq','Contact | RodrigoVillanueva.com.mx')
        cy.wait(1000)
        cy.get("#edit-name").type("Josmerlym").tab().type("josmerlym89@gmail.com").tab().type(" Aqui va el asunto")
           
    })
})