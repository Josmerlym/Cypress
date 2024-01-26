/// <reference types = "Cypress" />
import 'cypress-plugin-tab'
import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')
require ('cypress-xpath')

describe("Hooks", () =>{


    before(() =>{

        cy.log("##############--------Principio de TODOOOO############")
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
        cy.wait(1000)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
        cy.wait(1000)
        cy.get('.oxd-button').click()
     })

    //  beforeEach(() =>{
    //     cy.log("Esto repite en cada uno de los test")
    //  })

    //  afterEach(()=>{
    //    cy.log("Esto se hace al final de cada uno de los test")

    //  })

     after(()=>{
        cy.log("############FINAL DE TODOOO###########3")
        cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click()

     })

    it("click 1", ()=>{

        cy.xpath("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][contains(.,'Admin')]").should("be.visible").click()
        cy.wait(2000)
     })
    it("click 2", ()=>{
        cy.xpath("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][contains(.,'Leave')]").should("be.visible").click()
        cy.wait(2000)
    })

    it("click 3", ()=>{
       

        cy.xpath("//span[@class='oxd-text oxd-text--span oxd-main-menu-item--name'][contains(.,'My Info')]").should("be.visible").click()
        cy.wait(2000)
    })

    // it("test 4", ()=>{

    //     cy.log("test 4)")    
    // })


})