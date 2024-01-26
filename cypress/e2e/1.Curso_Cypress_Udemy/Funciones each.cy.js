
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

    it("Extraer todos los nombres de los productos usando un for", ()=>{

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

    it("Extraer todos los nombres de los productos usando un for y hacer click en uno de ellos", ()=>{

        let tiempo = 2000
        cy.visit("https://magento.softwaretestingboard.com/") 
        cy.wait(tiempo)
        cy.get(".product-item-link").each(($el,index,$list) => {

             //cy.log($el.text())
             let producto = $el.text()
             cy.log(producto)

             if(producto.includes("Hero")){

                //En este caso use una clase que no estaba en la misma linea de todo lo que trae el 
                //$el, por lo cual no me funcionaba, asi que use la clase que estaba en la misma linea
                // de todos esos elementos.

                cy.wrap($el).click()
                cy.log("entro en el if")
             }

             })
        })

        it("RETO", ()=>{

            let tiempo = 3000
            cy.visit("https://magento.softwaretestingboard.com/") 
            cy.wait(tiempo)
            cy.get('#ui-id-5 > :nth-child(2)').click()

           
            for(let i=0; i<=1; i++){
        
              
               cy.get(".product-item-link").eq(i).click()
               cy.wait(tiempo)

               //Selecciona talla
               //cy.get(".size > .swatch-attribute-options").eq(0).click()

               //Usando el atributo option y especificandole que tenga el texto
               //de la talla M------NAWEBONAAAA

               cy.contains("[role ='option']","M").should("be.visible").click({force:true})

               //Selecciona color

                //Lo solucione usando la herramienta Relative xpath
                // Comparé ruta xpath entre ambos productos y consegui uno en comun
               //div[@index='0'])[2]
               //cy.get('.swatch-attribute.color > .swatch-attribute-options').eq(0).click() 
               cy.wait(tiempo)
               cy.xpath("(//div[@role='option'])[6]").click() 
               cy.get('#qty').clear().type("2")
               cy.wait(tiempo)
               cy.get('#product-addtocart-button').click()
               cy.wait(tiempo)
               cy.get('#ui-id-5 > :nth-child(2)').click()                  

                }
         
            })
               
            
            it.only("Probando seleccionar la talla indicando un Indice", ()=>{

                //Mejor verlo en los recursos del curso, es recorrer toda la pagina y agregar todos los productos

                let tiempo = 3000
                cy.visit("https://magento.softwaretestingboard.com/breathe-easy-tank.html") 
                cy.wait(tiempo)
                cy.get("[role ='option']").eq(4).click() //Si funcionó
                cy.wait(tiempo)
                //cy.get('.swatch-attribute-options clearfix').eq(1).click()
                
    
               
             
    
                    
    
               
                
                })
           

        
    })
