// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



//Funciones Globales

Cypress.Commands.add("escribir_Texto", (selector,texto) => {
    
        cy.get(selector).should("be.visible").type(texto)
       
     })

Cypress.Commands.add("escribir_Texto_xpath", (selector,texto) => {
    
        cy.xpath(selector).should("be.visible").type(texto)
       
     })
Cypress.Commands.add("click_normal", (selector) => {
    
        cy.get(selector).should("be.visible").click()
       
     })

 Cypress.Commands.add("click_forzado", (selector) => {
    
        cy.get(selector).should("be.visible").click({force:true})
       
     })


// Funciones por conjunto
// Creando la funcion Toolsqa

Cypress.Commands.add('Bloque_Toolsqa', (name, email, dir1, dir2) => {
    
    cy.get('#userName').should("be.visible").type(name)
    cy.get('#userEmail').should("be.visible").type(email)
    cy.get('#currentAddress').should("be.visible").type(dir1)
    cy.xpath("//textarea[contains(@id,'permanentAddress')]").should("be.visible").type(dir2)
    cy.click_normal('#submit')
})

Cypress.Commands.add('Bloque_Reto', (name, email, phone, adr1, adr2, city, state, zip, country, texto) => {
    
    cy.get('#edit-contact-name').should("be.visible").type(name)
    cy.get('#edit-contact-email').should("be.visible").type(email)
    cy.get('#edit-contact-phone').should("be.visible").type(phone)
    cy.get('#edit-contact-address').should("be.visible").type(adr1)
    cy.get('#edit-contact-address-2').should("be.visible").type(adr2)
    cy.get('#edit-contact-city').should("be.visible").type(city)
    cy.wait(1000)
    cy.get("#edit-contact-state-province").should("be.visible").select(state)
    cy.get('#edit-contact-postal-code').should("be.visible").type(zip)
    cy.get("#edit-contact-country").should("be.visible").select(country)
    cy.get("#edit-resume-method-paste").check()
    cy.wait(1000)
    cy.get('#edit-resume-text').should("be.visible").type(texto)
    cy.get("#webform-submission-demo-application-add-form > #edit-actions > #edit-submit").click({force:true})
    

    



    
})
