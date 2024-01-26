
/// <reference types = "Cypress" />
import 'cypress-plugin-tab'
require ('cypress-xpath')

describe("Reto 2", () =>{

    it("Probando la aplicación", ()=>{

        cy.visit("https://computer-database.gatling.io/computers")
        cy.xpath("//input[contains(@id,'searchbox')]").type("ACE")
        cy.get("#searchsubmit").should("be.visible").click()
        cy.get("#add").should("be.visible").click()
        cy.wait(1000)
        cy.get("#name").should("be.visible").type("Lenovo")
        cy.wait(1000)
        cy.get("#introduced").should("be.visible").type("2024-01-05").tab().type("2028-01-06")
        cy.wait(1000)
        //Seleccionando un elemento del dropdown con función Select
        //cy.get("#company").should("be.visible").select("Lenovo Group")
        //Seleccionando un elemento del dropdown con assert
        cy.get("#company").should("be.visible").select("Lenovo Group").should("have.value","35").wait(1000)
        cy.get(".primary").should("be.visible").click()
        cy.wait(1000)
        cy.xpath("//input[contains(@id,'searchbox')]").type("Lenovo")
        cy.get("#searchsubmit").should("be.visible").click()
        


    
    })

})