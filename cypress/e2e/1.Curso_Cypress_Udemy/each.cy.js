
/// <reference types = "Cypress" />
import 'cypress-plugin-tab'
import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')
require ('cypress-xpath')

describe("Funciones each", () =>{

    it("each 1", ()=>{

        for(let i=1; i<=50; i++){

            cy.log("Número: "+i)
        }   
    })

    it.only("Extraer todos los nombres de los productos usando un for", ()=>{

        let tiempo = 1000
        cy.visit("https://magento.softwaretestingboard.com/") 
        cy.wait(tiempo)

        cy.get(".product-item-name").each(($el,index,$list) => {

            //cy.log(index)
            //cy.log($el)
            //cy.log($list)
            cy.log($el.text())
       }

        )
    })

    

        
    })