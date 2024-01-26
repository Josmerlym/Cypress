
/// <reference types = "Cypress" />
import 'cypress-plugin-tab'
import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')
require ('cypress-xpath')

describe("", () =>{

    it.only("RETO", ()=>{

        let tiempo = 3000
        cy.visit("https://magento.softwaretestingboard.com/") 
        cy.wait(tiempo)
        cy.get('#ui-id-5 > :nth-child(2)').click({force:true})  
        cy.wait(tiempo)          
        cy.get(".product-item-link").eq(1).click()
        cy.wait(tiempo)
        cy.get(".size > .swatch-attribute-options").eq(0).click()   

       
      
        
        })
           
           
       

})