class Proyecto1_PO {

visitHome(){

    before(() =>{
        cy.log("#########LA LA LA LA LA LA--------Principio de TODOOOO############")
        cy.visit("https://rodrigovillanueva.com.mx/form/demo-application")
          })
 }

 seccion_1(name,email,phone){

    cy.get('#edit-contact-name').should("be.visible").type(name)
    cy.get('#edit-contact-email').should("be.visible").type(email)
    cy.get('#edit-contact-phone').should("be.visible").type(phone)

 }

 seccion_2(adr1,adr2,city,state){

    cy.get('#edit-contact-address').should("be.visible").type(adr1)
    cy.get('#edit-contact-address-2').should("be.visible").type(adr2)
    cy.get('#edit-contact-city').should("be.visible").type(city)
    cy.wait(1000)
    cy.get("#edit-contact-state-province").should("be.visible").select(state)
 }

 seccion_3(zip,country,texto){

    cy.get('#edit-contact-postal-code').should("be.visible").type(zip)
    cy.get("#edit-contact-country").should("be.visible").select(country)
    cy.get("#edit-resume-method-paste").check()
    cy.wait(1000)
    cy.get('#edit-resume-text').should("be.visible").type(texto)
    cy.get("#webform-submission-demo-application-add-form > #edit-actions > #edit-submit").click({force:true})




 }

}//final

export default Proyecto1_PO;



