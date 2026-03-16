import PIM from '../pageObjects/PIM'
import LoginPage from '../pageObjects/LoginPage'
describe ('PIM Tests', () => {
    before(() => {
        cy.visit('/')
        LoginPage.login('Admin', 'admin123')
    })
    it('should search for an employee in PIM', () => {
          
        PIM.PIMsearch('Piyush Chaudhary', '0001')
        cy.logout()
    })
})