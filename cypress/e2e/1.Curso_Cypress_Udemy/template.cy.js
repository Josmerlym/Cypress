
/// <reference types = "Cypress" />
import 'cypress-plugin-tab'
import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')
require ('cypress-xpath')
Cypress.on('uncaught:exception', () => false)

describe("", () =>{

    it("", ()=>{

        cy.visit("https://rodrigovillanueva.com.mx/")
      
    
    })

})

before(() =>{

    cy.log("##############--------Principio de TODOOOO############")
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
 
 })
