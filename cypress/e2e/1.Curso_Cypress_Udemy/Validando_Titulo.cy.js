

describe("Sección 1, Validando el titulo", () =>{

    it("Test Validar el titulo de la página", ()=>{

        cy.visit("https://rodrigovillanueva.com.mx/")
        cy.title().should('eq','Home Page | RodrigoVillanueva.com.mx')
        cy.log("Ok, la funcion Title funcionó bien")
    
    })

   

})