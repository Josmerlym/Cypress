/// <reference types= "cypress" />

describe('Primer test con cypress', () =>{

    it("Esto es un hola mundo desde Cypress", () =>{
       cy.log("Bienvenidos a cypress")
       cy.visit('https://testingqarvn.com.es/datos-personales/')
       cy.wait(1000)
       cy.get("#wsf-1-field-21").type("Josmerlym")
       cy.wait(1000)
       cy.get("#wsf-1-field-22").type("Melo")
       cy.wait(1000)
       cy.get("#wsf-1-field-23").type("josmerlym89@gmail.com")
       cy.wait(1000)
       cy.get("#wsf-1-field-24").type("+56986465781")
       cy.wait(3000)
       cy.get("#wsf-1-field-28").type("San Benito 2685")
       cy.wait(3000)
       cy.get("#wsf-1-field-27").click()
       cy.wait(1000)

    })
})