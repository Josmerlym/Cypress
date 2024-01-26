

describe("Funciones para Type", () =>{

    it("Probando Type Enter", ()=>{

        cy.visit("https://www.google.com/")
        cy.title().should('eq','Google')
        cy.wait(1500)
        cy.screenshot("prueba")
        cy.get("#APjFqb").type("Caracas {enter}")
        cy.wait(2000)
        cy.screenshot("prueba")
        cy.get("#kp-wp-tab-overview > div.TzHB6b.cLjAic.K7khPe.LMRCfc > div > div > div > div > div > div.kb0PBd.cvP2Ce.jGGQ5e.ieodic.ToJJHb > div > div > span > a > h3").click()
    
    })

})