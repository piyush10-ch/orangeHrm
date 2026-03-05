class myinfo{
    get myinfo(){return cy.contains('.oxd-main-menu-item', 'My Info')}
    get empfirstname(){return cy.get('input[name="firstName"]')}
    get emplastname(){return cy.get('input[name="lastName"]')}

 pdetails(fname,lname){
    this.myinfo.should('be.visible').click()
    this.empfirstname.should('be.visible').clear().type(fname)
    this.emplastname.should('be.visible').clear().type(lname)
 }    
}
export default new myinfo()
