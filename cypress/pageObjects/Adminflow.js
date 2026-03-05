class Adminflow {
  get adminbtn(){ return cy.get('.oxd-main-menu-item').contains('Admin')}
  get addbtn(){return cy.get('.orangehrm-header-container>.oxd-button',{timeout: 10000}).contains('Add')}
  get userrole(){return cy.get('.oxd-select-text-input', { timeout: 10000 }).eq(0)}

 adminpage(){
  this.adminbtn.click()
  this.addbtn.should('be.visible').click()
  this.userrole.should('be.visible').click()
 }
}
export default new Adminflow()
