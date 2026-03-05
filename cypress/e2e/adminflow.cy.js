import LoginPage from '../pageObjects/LoginPage'
describe('Login and Admin Flow', () => {
  before(() => {
    cy.visit('/')
    LoginPage.login('Admin', 'admin123')
  })
  it('should navigate to Admin page and perform actions', () => {
    cy.get('.oxd-main-menu-item').contains('Admin').click()


  })
})
