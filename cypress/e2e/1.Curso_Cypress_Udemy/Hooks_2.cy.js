/// <reference types = "Cypress" />
import 'cypress-plugin-tab'
import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')
require ('cypress-xpath')

describe("Probando Hooks", () =>{


    before(() =>{

        cy.log("##############--------Principio de TODOOOO############")
     })

     beforeEach(() =>{
        cy.log("Esto repite en cada uno de los test")
     })

     afterEach(()=>{
       cy.log("Esto se hace al final de cada uno de los test")

     })

     after(()=>{
        cy.log("############FINAL DE TODOOO###########3")
     })

    it("test 1", ()=>{

        cy.log("test 1)")    
    })
    it("test 2", ()=>{

        cy.log("test 2)")    
    })

    it("test 3", ()=>{

        cy.log("test 3)")    
    })

    it("test 4", ()=>{

        cy.log("test 4)")    
    })


})