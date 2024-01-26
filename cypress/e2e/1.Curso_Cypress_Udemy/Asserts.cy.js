/// <reference types = "Cypress" />
import 'cypress-plugin-tab'
require ('cypress-xpath')

describe("Aprendiendo a usar asserts", () =>{

    it("Assert Contains", ()=>{

        cy.visit("https://automationexercise.com/")
        cy.wait(1000)
        cy.get("#accordian").contains("Men").click()
      
    
    })

    it("Assert find y eq ", ()=>{

        cy.visit("https://automationexercise.com/")
        cy.wait(1000)
        cy.get("#accordian").contains("Men").click()
        cy.wait(1000)
        cy.get("#accordian").contains("Jeans").click()
        cy.wait(1000)
        //La siguiente clase padre tiene 3 elementos y necesitamos uno de ellos para clickar
        //cy.get(".product-image-wrapper").first().click()
        //Esta otra clase hijo del padre tmb tiene 3 elementos
        //cy.get(".product-image-wrapper").find(".single-products")

        //Lo más acertado es combinar find con un "eq"
        //Incluso buscando por el nombre del articulo tira error
        //Añadiendo el "eq" y se le indica el indice 0, 1, 2...

        cy.get(".product-image-wrapper").find(".single-products").eq(1).click()        
    
    })

    it("Assert find y eq ", ()=>{

        cy.visit("https://magento.softwaretestingboard.com/?ref=hackernoon.com")
        cy.wait(1000)
        cy.get(".product-image-photo").eq(2).click()
        
      
    
    })

    it("Prueba Falabella, no recomendable, da error xq es la de producción ", ()=>{

        cy.visit("https://www.falabella.com/falabella-cl/category/cat720161/Smartphones?facetSelected=true&f.product.brandName=apple")
        cy.wait(1000)
        cy.get(".jsx-1484439449 search-results-4-grid grid-pod").should("be.visible").eq(2).click()
           
    })

    it.only("Extraer texto a patir de una clase ", ()=>{

        cy.visit("https://magento.softwaretestingboard.com/?ref=hackernoon.com")
        cy.wait(1000)
        cy.get(".product-image-photo").eq(2).click()
        cy.wait(1000)

                                         /////Usando PROMESAS///

        cy.get(".product-info-stock-sku").then((e) =>{

        //cy.get(".product-info-stock-sku").find(".stock available").then((e) =>{
        cy.log(e.text)
        let estado = e.text()
        cy.log(estado)
        if (estado = "In Stock SKU MT07")  //Use solo = en vez de == porque no sé la cantidad
        //exacta de espacios entre In Stock y SKU MT07
        cy.log("El vestido es nuevo")
        })
        })

        it("Extraer texto a partir de un ID ", ()=>{

            cy.visit("https://magento.softwaretestingboard.com/?ref=hackernoon.com")
            cy.wait(1000)
            cy.get(".product-image-photo").eq(2).click()
            cy.wait(1000)
            cy.get(".product-info-stock-sku").then((e) =>{
            cy.log(e.text)

            let estado = e.text()
            cy.log(estado)
            if (estado = "In Stock SKU MT07")  
            cy.log("El vestido es nuevo")
            })

            cy.get("#product-price-694").then((e) => {

            //cy.get(".price").then((e) => { No sirve ya que esa clase es usada en mas elementos
            //de esa misma pantalla
            
            cy.log(e.text)

            let precio = e.text()
            cy.log(precio)
            precio = precio.slice(1,3)  //SLICE para quitarle el signo de moneda al precio
            cy.log(precio)

            if(precio>30){

                cy.log("Esta fuera del presupuesto")

            } else {

                cy.log("Esta dentro del presupuesto")
                cy.get("#option-label-size-143-item-168").click() //Escoge talla S
                cy.wait(1000)
                cy.get("#option-label-color-93-item-52").click() //Escoge color
                cy.wait(1000)
                cy.get("#product-addtocart-button").click() //Agregar al carrito
                cy.wait(4000)
            }



            } )

            })

            it("Extraer texto a partir de un ID ", ()=>{

                //Repeti el ejercicio pero usando Clases, para solo tener un codigo en el que
                //pueda agregar cualquier producto en la linea 131

                cy.visit("https://magento.softwaretestingboard.com/?ref=hackernoon.com")
                cy.wait(1000)
                cy.get(".product-image-photo").eq(3).click()
                cy.wait(1000)
                cy.get(".product-info-stock-sku").then((e) =>{
                cy.log(e.text)
    
                let estado = e.text()
                cy.log(estado)
                if (estado = "In Stock SKU MT07")  
                cy.log("El vestido es nuevo")
                })
    
                cy.get(".price-wrapper ").then((e) => {
    
                                
                cy.log(e.text)
    
                let precio = e.text()
                cy.log(precio)
                precio = precio.slice(1,3)  
                cy.log(precio)
    
                if(precio>30){
    
                    cy.log("Esta fuera del presupuesto")
    
                } else {
    
                    cy.log("Esta dentro del presupuesto")
                    cy.get("#option-label-size-143-item-168").click() 
                    cy.wait(1000)
                    cy.get("#option-label-color-93-item-52").click() 
                    cy.wait(1000)
                    cy.get("#product-addtocart-button").click() 
                    cy.wait(4000)
                }
    
    
    
                } )
    
                })


             it("Assert have y contain ", ()=>{

                    cy.visit("https://testingqarvn.com.es/datos-personales/")
                    cy.get("#wsf-1-field-21").should("be.visible").type("Josmerlym")
                    cy.wait(1000)
                    cy.get("#wsf-1-field-22").should("be.visible").type("Melo")
                    cy.wait(1000)
                    cy.get("#wsf-1-field-23").should("be.visible").type("ari@gmail.com")
                    cy.wait(1000)
                    cy.get("#wsf-1-field-24").should("be.visible").type("+56987654321")
                    cy.wait(1000)
                    cy.get("#wsf-1-field-28").should("be.visible").type("Santiago de Chile")
                    cy.wait(1000)
                    cy.get("#wsf-1-field-27").should("be.visible").click()

                    //Assert have te obliga a esperar el texto completo y tal cual está
                    cy.xpath("//*[@id='post-216']/div/div/div/div/div[2]/div/div/div/div/div/p").should("have.text","Gracias por tu encuesta.")

                    //Assert contains solo necesita una parte del texto
                    cy.xpath("//*[@id='post-216']/div/div/div/div/div[2]/div/div/div/div/div/p").should("contain.text","encuesta.")
                       
                })

                it("Assert Contain Value", ()=>{

                    cy.visit("https://testingqarvn.com.es/datos-personales/")
                    cy.get("#wsf-1-field-21").should("be.visible").type("Josmerlym")
                    cy.get("#wsf-1-field-21").should("be.visible").should("contain.value","Josmerlym").then(() =>{

                        cy.get("#wsf-1-field-22").should("be.visible").type("Melo")
                        cy.wait(1000)
                        cy.get("#wsf-1-field-23").should("be.visible").type("ari@gmail.com")

                    })

                    
                  
                
                })

                it("Assert have.class", ()=>{

                    cy.visit("https://testingqarvn.com.es/datos-personales/")
                    cy.get("#wsf-1-field-21").should("be.visible").type("Josmerlym")
                    cy.get("#wsf-1-field-21").should("be.visible").should("contain.class","wsf-field nombre nom").then(() =>{

                        cy.get("#wsf-1-field-22").should("be.visible").type("Melo")
                        cy.wait(1000)
                        cy.get("#wsf-1-field-23").should("be.visible").type("ari@gmail.com")

                    })
      
                })

                it("Assert have.class y AND", ()=>{

                    cy.visit("https://testingqarvn.com.es/datos-personales/")
                    cy.get("#wsf-1-field-21").should("be.visible").type("Josmerlym")

                    //Quitamos en doble should y agregamos AND
                    //Tambien se puede usar la parte negativa not.be.visible y not.have class
                    cy.get("#wsf-1-field-21").should("be.visible").and("contain.class","wsf-field nombre nom").then(() =>{

                        
                        cy.get("#wsf-1-field-22").should("be.visible").type("Melo")
                        cy.wait(1000)
                        cy.get("#wsf-1-field-23").should("be.visible").type("ari@gmail.com")

                    })
      
                })

                it("Conseguir un elemento BOTON mediante texto y que comparte el mismo atributo", ()=>{
                    // CONTAINS sirve tambien para cuando el elemento no tiene ID, usamos su texto

                    //Estos botones comparte el mismo atributo type=button, indicandole el texto
                    //que tiene el botón, sabrá a cual hacerle click

                    cy.visit("https://www.mercadolibre.cl/hub/registration/landing?redirect_url=https%3A%2F%2Fwww.mercadolibre.cl%2F#nav-header")
                    cy.wait(1000)
                    cy.contains("[type='button']","Crear cuenta empresa").should("be.visible").click({force:true})
                    
                  
                
                })

                it("Reto de los Asserts", ()=>{

                    //Estos botones comparte el mismo atributo type=button, indicandole el texto
                    //que tiene el botón, sabrá a cual hacerle click

                    cy.visit("https://validaciones.rodrigovillanueva.com.mx/Calculador_ok")
                    //cy.wait(1000)
                    //cy.contains("[type='button']","Crear cuenta empresa").should("be.visible").click({force:true})
                    
                  
                
                })

                it("Reto de los Asserts", ()=>{

                    //Estos botones comparte el mismo atributo type=button, indicandole el texto
                    //que tiene el botón, sabrá a cual hacerle click

                    cy.visit("https://validaciones.rodrigovillanueva.com.mx/Calculador_ok.html")
                    
                  
                
                })
    
    })


