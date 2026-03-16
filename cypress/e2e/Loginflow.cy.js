import LoginPage from '../pageObjects/LoginPage'
import myinfo from '../pageObjects/myinfo'
import userdata from '../fixtures/Users.json'
describe('template spec', () => {
  //userdata.forEach((user)=>{
  it('Login', () => {
    cy.visit('/')
    LoginPage.forgotpswrd()
    LoginPage.login(userdata.username,userdata.password)
    myinfo.pdetails(userdata.fname,userdata.lname)
   cy.logout()
   
    
   
  })
})  
//})