/// <reference types = "Cypress" />
import 'cypress-plugin-tab'
import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')
require ('cypress-xpath')
Cypress.on('uncaught:exception', () => false)

describe("Comandos personalizados", () =>{

    before(() =>{

        cy.log("####LALALALALALA--------Principio de TODOOOO############")
        cy.visit("https://rodrigovillanueva.com.mx/form/demo-application")
     
     })

    it("Probando comandos personalizados", ()=>{

      cy.escribir_Texto("#userName","Ariadne") 
      cy.escribir_Texto("#userEmail","josmerlym89@gmail.com") 
      cy.escribir_Texto("#currentAddress","San Benito 2685") 
      cy.escribir_Texto_xpath("//textarea[contains(@id,'permanentAddress')]","Siii")
      cy.click_normal("#submit")
      
    })

    it("Por bloque", ()=>{

       cy.Bloque_Toolsqa("Ariadne", "josmerlym89@gmail.com","San Benito 2685", "Siii")
        
      })
      
    it.only("Reto con todo lo aprendido", ()=>{

        cy.Bloque_Reto("Josmerlym", "josmerlym89@gmail.com","+56987654321","San benito", "Puente Alto","Santiago", "Kansas","1110000","Venezuela","Blaaaaah")
         
       })
})