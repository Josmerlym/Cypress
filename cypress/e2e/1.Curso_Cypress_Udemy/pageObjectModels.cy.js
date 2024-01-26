
/// <reference types = "Cypress" />
import 'cypress-plugin-tab'
import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')
require ('cypress-xpath')
Cypress.on('uncaught:exception', () => false)

//importamos la clase que contiene la funcion que usaremos
import Proyecto1_PO from '../../support/pageObjectModels/Proyecto1_PO/Proyecto1_PO.cy'

describe("Page objects models", () =>{

    const master = new Proyecto1_PO() // creamos una variable con la clase

    master.visitHome()

    it("Seccion 1", ()=>{

        master.seccion_1("Josmerlym","josmerlym89@gmail.com","+56987654321")
    })

    it("Seccion 2", ()=>{

        master.seccion_2("San Benito", "Puente Alto","Santiago","Kansas")
    })

    it("Seccion 3", ()=>{

        master.seccion_3("10101011","Venezuela",("Mamawebo"))
    })

    it("Llamando a todas las secciones un un solo caso de prueba", ()=>{
        master.seccion_1("Josmerlym","josmerlym89@gmail.com","+56987654321")
        master.seccion_2("San Benito", "Puente Alto","Santiago","Kansas")
        master.seccion_3("10101011","Venezuela",("Mamawebo"))
    })

})


