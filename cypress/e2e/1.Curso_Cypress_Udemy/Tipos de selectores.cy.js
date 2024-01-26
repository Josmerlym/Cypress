
/// <reference types = "Cypress" />
import 'cypress-plugin-tab'
require ('cypress-xpath')

describe("Tipos de selectores", () =>{

    it("Selector por ID", ()=>{

        cy.visit("https://rodrigovillanueva.com.mx/form/contact")
        cy.get("#edit-name").should("be.visible").type("Ariadne")      
    
    })

    it("Selector por Atributos", ()=>{

        cy.visit("https://rodrigovillanueva.com.mx/form/contact")
        cy.get("[placeholder = 'Your Name']").should("be.visible").type("Ariadne Rella")   
    
    })

    it("Selector por xpath", ()=>{

        cy.visit("https://rodrigovillanueva.com.mx/form/contact")
        cy.xpath("//*[@id='edit-name']").type("Ari")
    
    })

    it("Selector por Contains", ()=>{

        cy.visit("https://testingqarvn.com.es/radio-buttons/")
        //cy.wait(5000)
        cy.get(".wsf-label").contains("CypressIO").click()
    
    })

    it.only("Selector por copy selector", ()=>{

        cy.visit("https://testingqarvn.com.es/radio-buttons/")
        //cy.wait(5000)
        cy.get("#wsf-1-field-39").should("be.visible").type("josmerlym89@gmail.com")
    
    })

})