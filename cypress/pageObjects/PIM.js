class PIM {
  get CPIM() {return cy.get('.oxd-main-menu-item',{timeout: 10000}).contains('PIM')}
  get Ename(){return cy.get('.oxd-autocomplete-text-input.oxd-autocomplete-text-input--active',{timeout: 10000}).eq(0)}
  get Eid(){return cy.contains('.oxd-input-group', 'Employee Id').find('input');}
  get Estatus(){return cy.get('.oxd-select-text').eq(0);}
  get substatus(){return cy.get('.oxd-select-text').eq(1);}
  get reset(){return cy.get('.oxd-button.oxd-button--medium.oxd-button--ghost').contains('Reset')}
  PIMsearch(name,id){
   this.CPIM.should('be.visible').click()
    this.Ename.should('be.visible').type(name)
    this.Eid.should('be.visible').type(id)
    this.Estatus.should('be.visible').click()
    cy.get('.oxd-select-option').contains('Freelance').should('be.visible').click()
    this.substatus.should('be.visible').click()
    cy.get('.oxd-select-option').contains('Current Employees').should('be.visible').click()
    this.reset.should('be.visible').click()
  }
}
export default new PIM()
