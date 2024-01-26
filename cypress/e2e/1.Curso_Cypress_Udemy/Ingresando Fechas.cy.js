
/// <reference types = "Cypress" />
import 'cypress-plugin-tab'
import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')
require ('cypress-xpath')

describe("Insertando fechas", () =>{

    it("Fechas en calendario-Calendario queda cerrado-Simple", ()=>{

        Cypress.on('uncaught:exception', () => false)
        cy.visit("https://rodrigovillanueva.com.mx/form/example-accessibility-basic")
        cy.get("#edit-date").type("2024-02-27")
        cy.get("#edit-datetime-date").type("2024-02-27")
           
    
    })

    it.only("Fechas en calendario-Calendario queda ABIERTO", ()=>{

        
        cy.visit("https://testingqarvn.com.es/calendarios/")
        cy.get("#wsf-1-field-78").type("2024-02-27").tab()
    
    })

})