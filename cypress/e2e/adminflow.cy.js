import LoginPage from '../pageObjects/LoginPage'
import AdminPage from '../pageObjects/Adminflow'
describe('Login and Admin Flow', () => {
  before(() => {
    cy.visit('/')
    LoginPage.login('Admin', 'admin123')
  })
  it('should navigate to Admin page and perform actions', () => {
    cy.get('.oxd-main-menu-item',{timeout: 10000}).contains('Admin').should('be.visible')
    AdminPage.adminpage()
    cy.contains('.oxd-select-option','Admin').should('be.visible').click()
  
    


  })
})
