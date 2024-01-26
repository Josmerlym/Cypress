
/// <reference types = "Cypress" />
import 'cypress-plugin-tab'

describe("Haciendo mi primer reto", () =>{

    it("Aplicando lo aprendido", ()=>{

        cy.visit("https://validaciones.rodrigovillanueva.com.mx/Datatables2_ok.html")
        cy.title().should('eq',"Formulario de Ejemplo")
        //cy.get("label > input").should("be.visible").type("Juan")
        cy.wait(4000)
        //cy.get("#label > input").should("be.visible").clear()

        //Agregando un registro a una tabla
        cy.get("#btnAdd").should("be.visible").click()
        cy.wait(1000)
        cy.get("#nombre").should("be.visible").type("Seba").tab().type("37")
        cy.wait(1000)
        cy.get("#btnSubmit").should("be.visible").click()
        cy.wait(1000)

        //Editando un registro de la tabla

        cy.get(".odd > :nth-child(4) > .btn-warning").should("be.visible").click()
        cy.wait(1000)
        cy.get("#nombre").should("be.visible").clear().type("Antonio")
        cy.log(1000)
        cy.get("#edad").should("be.visible").clear().type("30")
        cy.log(1000)
        cy.get("#btnSubmit").should("be.visible").click()

        //Eliminando un registro de la tabla

        cy.wait(1000)
        cy.get(".odd > :nth-child(4) > .btn-danger").should("be.visible").click()
        

})

})