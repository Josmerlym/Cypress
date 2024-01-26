const { When } = require("@badeball/cypress-cucumber-preprocessor")
const { when } = require("cypress/types/jquery")

Given ('Abrir el Navegador', ()=> {

    cy.visit("https://demoqa.com/text-box")

})

When ('Cargando el nombre', ()=> {

    cy.get("#userName").should("be.visible").type("Ariadne")

})

When ('Cargando el email', ()=> {

    cy.get("#userEmail").should("be.visible").type("josmerlym89@gmail.com")

})

And ('Cargando la dirección', ()=> {

    cy.get("#currentAddress").should("be.visible").type("San Benito 2685")

})

Then ('Validar el nombre de la página', ()=> {

    cy.title().should('eq','DEMOQA')


})

