import Adminflow from '../pageObjects/Adminflow'
import LoginPage from '../pageObjects/LoginPage'
import PIM from '../pageObjects/PIM'
import myinfo from '../pageObjects/myinfo'
import userdata from '../fixtures/Users.json'
describe('End to End Flow', () => {

  beforeEach(() => {
    cy.visit('/')
    LoginPage.login(userdata.username, userdata.password)
  })
  it('Login flow',()=>{
    cy.wait(2000)
    cy.logout()
    LoginPage.forgotpswrd()
  })
  it('My info',()=>{
    myinfo.pdetails(userdata.fname, userdata.lname)
    cy.logout()
  })
  it('Admin flow',()=>{
    cy.get('.oxd-main-menu-item',{timeout: 10000}).contains('Admin').should('be.visible')
    Adminflow.adminpage()
    cy.contains('.oxd-select-option','Admin').should('be.visible').click()
    cy.logout()
  })
  it('PIM flow',()=>{
    PIM.PIMsearch(userdata.ename, userdata.empid )
        cy.logout()
  })
})