
/// <reference types = "Cypress" />
import 'cypress-plugin-tab'
import 'cypress-file-upload'
require('@4tw/cypress-drag-drop')
require ('cypress-xpath')
Cypress.on('uncaught:exception', () => false)

describe("Tablas", () =>{

    it("Seleccionar elmentos Padre-Children", ()=>{

        cy.visit("https://validaciones.rodrigovillanueva.com.mx/Botones_ok.html")
        cy.title().should("eq","Formulario de Ejemplo")
        cy.wait(1000)
        cy.get("#actionForm").children(".btn-secondary")
        cy.get("#actionForm").children(".btn-secondary").should("contain","Doble Click Me").dblclick()
        cy.wait(1000)
        cy.get("#actionForm").children('[onclick="clickAction()"]').should("contain","Click Me").click()     
    
    })

    it("Seleccionar por medio de elmentos eq", ()=>{

        cy.visit("https://validaciones.rodrigovillanueva.com.mx/Botones_ok.html")
        cy.title().should("eq","Formulario de Ejemplo")
        cy.wait(1000)
        cy.get("[type='button']").eq(1).should("contain", "Click Me").click()
    })

    it("Usando filtros-Buscando filtrar un elemento por su clase", ()=>{

        cy.visit("https://validaciones.rodrigovillanueva.com.mx/Botones_ok.html")
        cy.title().should("eq","Formulario de Ejemplo")
        cy.wait(1000)
        cy.get("[type='button']").filter(".btn-secondary").dblclick()
    })

    it("Usando find para encontrar un elemento dentro de un grupo", ()=>{

        cy.visit("https://validaciones.rodrigovillanueva.com.mx/Botones_ok.html")
        cy.title().should("eq","Formulario de Ejemplo")
        cy.wait(1000)
        cy.get("#actionForm").find(".btn-secondary").dblclick()
    })

    it("Usando FIRST para encontrar un elemento dentro de un grupo", ()=>{

        cy.visit("https://validaciones.rodrigovillanueva.com.mx/Botones_ok.html")
        cy.title().should("eq","Formulario de Ejemplo")
        cy.wait(1000)
        cy.get("[type='button']").should("contain","Click Me").first().click({force:true})
    })

    it("Usando FIRST Y FIND para encontrar un elemento dentro de un grupo", ()=>{

        cy.visit("https://validaciones.rodrigovillanueva.com.mx/Botones_ok.html")
        cy.title().should("eq","Formulario de Ejemplo")
        cy.wait(1000)
        cy.get("#actionForm").find("button")  //Consigue 8 botones
        cy.get("#actionForm").find("button").first().click()
        cy.wait(1000)
        cy.get("#actionForm").find("button").last().click()
    })

    it("Clickar todos los botones", ()=>{

        cy.visit("https://validaciones.rodrigovillanueva.com.mx/Botones_ok.html")
        cy.title().should("eq","Formulario de Ejemplo")
        cy.wait(1000)
        cy.get("[type='button']").should("contain","Click Me").nextAll().should("have.length","8")
        
    })

    it("A partir de un elemento Hijo seleccionar su elemento Padre ", ()=>{

        cy.visit("https://validaciones.rodrigovillanueva.com.mx/Botones_ok.html")
        cy.title().should("eq","Formulario de Ejemplo")
        cy.wait(2000)
        cy.get("[type='button']").parent().should("have.id","actionForm")
        
    })

    it("Mostrando los campos de una tabla ", ()=>{

        cy.visit("https://tristen.ca/tablesort/demo/")
        cy.title().should("eq","tablesort")
        cy.wait(1000)

        const datos = []
        cy.get("#sort td").each(($el,index,$list) =>{

            datos[index] = $el.text()
        
        }).then(()=>{

            for(let i=0;i<datos.length; i++) {
                cy.log(datos[i])
            }
        })
        
        
    })
    
    it("Sumando valores de una tabla", ()=>{

        cy.visit("https://tristen.ca/tablesort/demo/")
        cy.title().should("eq","tablesort")
        cy.wait(1000)

        const datos = []
        let cantidad = 0
        cy.get("#sort td").each(($el,index,$list) =>{

            datos[index] = $el.text()
        
        }).then(()=>{

            for(let i=0;i<datos.length; i++) {

                //cy.log(datos[i])
                if(Number(datos[i])){

                    cantidad+=Number(datos[i])
                }

            }

            cy.log("la cantidad total es: "+cantidad)
            expect(cantidad).eq(21)
        })
        
        
    })

    it.only("Extraer info de un registro especifico de la tabla", ()=>{

        cy.visit("https://tristen.ca/tablesort/demo/")
        cy.title().should("eq","tablesort")
        cy.wait(1000)

        const campo = cy.get('tbody > :nth-child(4) > :nth-child(2)')
        cy.log(campo)

        campo.each(($el,index,$list) => {
            const dato = $el.text()
            cy.log(dato)

            if (dato.includes("Cookie Monster")){

                campo.eq(index).next().next().then((chucheria) => {

                    const golosina = chucheria.text()
                    cy.log(golosina)
                })
         }}
 )

        
        
    })
    
    
    
    

})