class myinfo{
    get myinfo(){return cy.contains('.oxd-main-menu-item', 'My Info',{timeout: 10000})}
    get empfirstname(){return cy.get('input[name="firstName"]')}
    get emplastname(){return cy.get('input[name="lastName"]')}

 pdetails(fname,lname){
    this.myinfo.should('be.visible').click()
    cy.wait(1500)
   cy.window().scrollTo(0, 200)
    this.empfirstname.scrollIntoView().should('be.visible').clear().type(fname)
    this.emplastname.scrollIntoView().should('be.visible').clear().type(lname)
 }    
}
export default new myinfo()
