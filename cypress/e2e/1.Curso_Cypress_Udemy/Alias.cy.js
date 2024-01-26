
/// <reference types = "Cypress" />
import 'cypress-plugin-tab'
import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')
require ('cypress-xpath')

describe("Alias", () =>{

    it("Alias 1", ()=>{

        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        cy.get("#firstname").should("be.visible").as("name")
        cy.get("@name").type("Josmerlym")
        cy.get("#surname").should("be.visible").as("surname")
        cy.get("@surname").type("Rodriguez kdhdhkdhkdhkshdksahdkhsakdhskahdkashkdhskhdkshdksahdas")
        cy.get("#age").should("be.visible").as("age")
        cy.get("@age").type("34")
        cy.get("#country").should("be.visible").as("country")
        cy.get("@country").select("Venezuela").should("have.value","Venezuela")
        cy.get("[type='submit']").as("btnEnviar")
        cy.get("@btnEnviar").click()
     
    
    })

})