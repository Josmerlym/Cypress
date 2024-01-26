
/// <reference types = "Cypress" />
import 'cypress-plugin-tab'
import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')
require ('cypress-xpath')

describe("Funcion invoke", () =>{

    it("Invoke text - Extraer texto de un elemento", ()=>{

        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        cy.get(".page-body > :nth-child(5)").invoke("text").as("info")
        cy.get("@info").should("contain","The information will be submitted to the server if it passes client side validation.")
      
    
    })

    it("Invoke text 2 - Extraer texto de un elemento", ()=>{

        cy.visit("https://testpages.herokuapp.com/styled/validation/input-validation.html")
        cy.get(".page-body > :nth-child(5)").invoke("text").as("info")
        cy.get("@info").should("contain","The information will be submitted to the server if it passes client side validation.")
        cy.get("[for='firstname']").invoke("text").as("tittleName")
        cy.get("@tittleName").should("contain","First name:").then(() => {

             cy.get("#firstname").should("be.visible").as("name")
             cy.get("@name").type("Josmerlym")

        })   
    })

    it.only(" Invoke, comparando images src", ()=>{

        cy.visit("https://magento.softwaretestingboard.com/breathe-easy-tank.html")
        cy.wait(1000)
        cy.get(".logo > img").invoke("attr","src").should("include","softwaretestingboard")
     
    })
})