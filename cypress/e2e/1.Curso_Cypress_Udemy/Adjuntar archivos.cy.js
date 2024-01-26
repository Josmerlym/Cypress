
/// <reference types = "Cypress" />
import 'cypress-plugin-tab'
import 'cypress-file-upload'
require ('cypress-xpath')

describe("Carga de archivos", () =>{

    it("Cargando una imagen", ()=>{

        cy.visit("https://testingqarvn.com.es/upload-files/")
        //cy.visit("https://demoqa.com/automation-practice-form")
        cy.wait(1500)

        const ruta = 'imagenPrueba.jpg'
        //cy.get("[type='file']").attachFile(ruta)
        cy.get("#wsf-1-field-94").attachFile(ruta)
        //cy.get('[type="file"]').attachFile(ruta)
        cy.wait(3000)
      
    
    })

})