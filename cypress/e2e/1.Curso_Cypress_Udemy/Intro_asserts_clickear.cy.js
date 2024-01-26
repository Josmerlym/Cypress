/// <reference types = "Cypress" />
import 'cypress-plugin-tab'

describe("Intro asserts", () =>{

    it("Probar asserts Click sencillo", ()=>{

        cy.visit("https://rodrigovillanueva.com.mx/form/contact")
        cy.title().should('eq','Contact | RodrigoVillanueva.com.mx')
        cy.wait(1000)
        cy.get("#edit-name").should("be.visible").type("Josmerlym")
        cy.wait(1000)
        cy.get("#edit-email").should("be.visible").type("josmerlym89@gmail.com")
        cy.wait(1000)
        cy.get("#edit-subject").should("be.visible").should("be.enabled").type("el fucking asunto xD")
        cy.wait(1000)
        cy.get("#edit-message").should("be.visible").type("blah!")
        cy.wait(1000)
        cy.get("#edit-actions-submit").should("be.visible").click()
        
            
    })

    it("Probar click forzado", ()=>{

        ///Sirve cuando un botón tiene otro elemento encima o no esta facil de 
        //hacerle click, entonces usamos el click forzado

        cy.visit("https://rodrigovillanueva.com.mx/form/contact")
        cy.title().should('eq','Contact | RodrigoVillanueva.com.mx')
        cy.wait(1000)
        cy.get("#edit-name").should("be.visible").type("Josmerlym")
        cy.wait(1000)
        cy.get("#edit-email").should("be.visible").type("josmerlym89@gmail.com")
        cy.wait(1000)
        cy.get("#edit-subject").should("be.visible").should("be.enabled").type("el fucking asunto xD")
        cy.wait(1000)
        cy.get("#edit-message").should("be.visible").type("blah!")
        cy.wait(1000)
        cy.get("#edit-actions-submit").should("be.visible").click({force: true})
        
            
    })
    
    it.only("Probar click con coordenadas X,Y", ()=>{

        
        cy.visit("https://rodrigovillanueva.com.mx/form/contact")
        cy.title().should('eq','Contact | RodrigoVillanueva.com.mx')
        cy.wait(1000)
        cy.get("#edit-name").should("be.visible").type("Josmerlym")
        cy.wait(1000)
        cy.get("#edit-email").should("be.visible").type("josmerlym89@gmail.com")
        cy.wait(1000)
        cy.get("#edit-subject").should("be.visible").should("be.enabled").type("el fucking asunto xD")
        cy.wait(1000)
        cy.get("#edit-message").should("be.visible").type("blah!")
        cy.wait(1000)
        cy.get("#edit-actions-submit").should("be.visible").click({force: true})
        cy.wait(2000)
        cy.get("#slide-2-layer-3 > a").should("be.visible").click(10,5)
        
            
    })

})