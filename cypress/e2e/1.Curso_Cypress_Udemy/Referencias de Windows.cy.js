/// <reference types = "Cypress" />
import 'cypress-plugin-tab'
require ('cypress-xpath')

describe("Referencias de Windows", () =>{

    it("Windows propiedades charset, acepta ñ y acentos", ()=>{

        cy.visit("https://testsheepnz.github.io/random-number.html")
        cy.document().should("have.property","charset").and("eq","UTF-8")
      
    
    })

    it.only("Validar URL", ()=>{
        
        cy.visit("https://testsheepnz.github.io/random-number.html")
        //Validar una parte de la url
        //cy.url().should("include","random-number.html")

        //Validar URL completa
        cy.url().should("eq","https://testsheepnz.github.io/random-number.html")
      
    
    })

})