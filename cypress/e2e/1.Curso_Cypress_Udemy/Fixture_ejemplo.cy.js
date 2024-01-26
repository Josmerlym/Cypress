
/// <reference types = "Cypress" />
import 'cypress-plugin-tab'
import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')
require ('cypress-xpath')
Cypress.on('uncaught:exception', () => false)



describe("Pruebas con Fixture - Cargando datos desde un json hacia un formulario", () =>{

    // before(function(){
    
    //     cy.fixture('Datos').then(function(data){
    //     globalThis.data=data    
    // })
    
    // })

    it("Fixture 1", ()=>{

        cy.visit("https://demoqa.com/text-box")
        cy.get("#userName").type(data.nombre)
        cy.get("#userEmail").type(data.email)
        cy.get("#currentAddress").type(data.dir1)
        cy.get("#permanentAddress").type(data.dir2)
        cy.get('#submit').click()
    
    })

    it.only("Reto de los Fixture", ()=>{


        // Con el foreach se recorre todo el arreglo del json--> Datos.json
        //cy.fixture('MOCK_DATA').then( testdata => {
        cy.fixture('excelNew').then( testdata => {

            testdata.forEach(data => {

                const dataNombre = data.nombre
                const dataEmail = data.email
                const dataDir1 = data.dir1
                const dataDir2 = data.dir2

                cy.visit("https://demoqa.com/text-box")
                cy.get("#userName").type(dataNombre)
                cy.get("#userEmail").type(dataEmail)
                cy.get("#currentAddress").type(dataDir1)
                cy.get("#permanentAddress").type(dataDir2)
                cy.get('#submit').click()

                
            })
        })

    
    })


})