/// <reference types = "Cypress" />
import 'cypress-plugin-tab'
import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')
require ('cypress-xpath')

describe("Navegación entre las páginas", () =>{

    it("Back - Foward - Reload", ()=>{

        cy.visit("https://magento.softwaretestingboard.com/")
        cy.get('#ui-id-4 > :nth-child(2)').click()
        cy.wait(1000)
        cy.get('#search').type("lalalalalalala")
        cy.wait(3000)
        cy.reload()
        cy.wait(2000)
        cy.go("back")
        cy.wait(1000)
        cy.go("forward")
 
    
    })

})