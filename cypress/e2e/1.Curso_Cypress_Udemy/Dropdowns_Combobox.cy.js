/// <reference types = "Cypress" />
import 'cypress-plugin-tab'
require ('cypress-xpath')

describe("Selectores", () =>{

    it("", ()=>{

        cy.visit("https://rodrigovillanueva.com.mx/form/example-accessibility-advanced")
        cy.get("#edit-address-country").should("be.visible").select("Venezuela").should("have.value","Venezuela")
        cy.wait(1500)
        cy.get("#edit-address-country").should("be.visible").select("Chile").should("have.value","Chile")
     
    
    })

    it("Select autocompletado", ()=>{

        cy.visit("https://www.google.com/")
        cy.get("#APjFqb").type("Ariadne").type("{enter}")
     
    
    })

    it.only("Seleccionar mas de 1 elemento", ()=>{

        cy.visit("https://validaciones.rodrigovillanueva.com.mx/ComboBox_ok.html")
        cy.get("#comboBox2").should("be.visible").select(["Valor 3","Valor 4"])

    })
})