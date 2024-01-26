/// <reference types = "Cypress" />
import 'cypress-plugin-tab'
require ('cypress-xpath')

describe("Checkbox", () =>{

    it("Marcar todos los checks", ()=>{

        cy.visit("https://rodrigovillanueva.com.mx/form/example-accessibility-advanced")
        
        // Dar click o check a todos los checkboxes usando el tipo de elemento

        //cy.get("[type = 'checkbox']").check()

        // Como saber si todos los checkbox fueron marcados, usamos un assert

        //cy.get("[type = 'checkbox']").check().should("be.checked")

        //Para deseleccionar los checks

        cy.get("[type = 'checkbox']").uncheck().should("not.be.checked")
        
       //Dar click a un check especifico

       
       cy.get("#edit-tableselect-three").check()

    
    })

    it("Marcar un check especifico con ID", ()=>{

        cy.visit("https://rodrigovillanueva.com.mx/form/example-accessibility-advanced")
        cy.wait(1500)
        cy.get("#edit-tableselect-three").check()
        
    })

    it("Marcar un check especifico con xpath", ()=>{

        cy.visit("https://rodrigovillanueva.com.mx/form/example-accessibility-advanced")
        cy.wait(1500)
        cy.xpath("//input[contains(@id,'edit-webform-checkboxes-other-checkboxes-two')]").check()
        
    })

        //Tambien funcion con click(), además del check()

        it.only("Marcar un Radiobutton", ()=>{

        cy.visit("https://rodrigovillanueva.com.mx/form/example-accessibility-wizard")
        cy.wait(1500)
        cy.get("#edit-sex-radios-female").click()
        
    })

})