
/// <reference types = "Cypress" />
import 'cypress-plugin-tab'
import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')
require ('cypress-xpath')

describe("Eventos del mouse", () =>{

    it("Drag and drop", ()=>{

        //let tiempo = 1000
        cy.visit("https://the-internet.herokuapp.com/drag_and_drop")
        cy.get("#draggable").drag("#droppable",{force:true})
    })


    it("Mouse Over", ()=>{

        //let tiempo = 1000
        cy.visit("https://magento.softwaretestingboard.com/sale.html")
        cy.wait(1500)
        cy.contains("Training").trigger('mouseover')
       
        
    })

    it("Cuando se abre en otra ventana", ()=>{

        //let tiempo = 1000
        cy.visit("https://www.bci.cl/bancaprivada")
        cy.wait(1500)
        cy.contains("Investor Relations").invoke("removeAttr","target").click()     
    })

    it("Trabajando con Range sliders", ()=>{

        //let tiempo = 1000
        Cypress.on('uncaught:exception', () => false)
        cy.visit("https://demoqa.com/slider")
        cy.wait(1500)
        cy.get(".range-slider__wrap").invoke("attr","value","66", {force:true})
                   
    })

    it.only("Corriegiendo error EXCEPTION", ()=>{

        //let tiempo = 1000
        
        Cypress.on('uncaught:exception', () => false)
        cy.visit("https://validaciones.rodrigovillanueva.com.mx/Calculador_ok.html")
        cy.get("#edit-date").type("20-01-2024")
           
    })
})

