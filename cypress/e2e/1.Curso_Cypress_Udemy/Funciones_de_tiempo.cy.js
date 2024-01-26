
/// <reference types = "Cypress" />
import 'cypress-plugin-tab'
import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')
require ('cypress-xpath')
Cypress.on('uncaught:exception', () => false)

describe("", () =>{

    it("", ()=>{

        cy.visit("https://rodrigovillanueva.com.mx/")
        /////Tiempo de espera para conseguir un elemento
        ////defaultCommandTimeout: 4000,

        ///Tiempo de espera para carga de pagina
        ///pageLoadTimeout: 60000,

        ///Tiempo para un Assert
        /// cy.get("#username").should("be.visible",{timeout:5000}).type("Ariadne")
      
    
    })

})