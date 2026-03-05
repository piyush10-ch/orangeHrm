class Login{
    get usernameinput(){ return cy.get('input[name="username"]') }
    get passwordinput(){return cy.get('input[name="password"]')}
    get loginbtn(){return cy.get('.oxd-button.oxd-button--medium.oxd-button--main.orangehrm-login-button')}
login(un,pw){
    this.usernameinput.should('be.visible').clear().type(un)
    this.passwordinput.should('be.visible').clear().type(pw)
   this.loginbtn.click()

}    
get forgotpassword(){return cy.get('.oxd-text.oxd-text--p.orangehrm-login-forgot-header')}


forgotpswrd(){
    this.forgotpassword.click()
    cy.get('.orangehrm-forgot-password-button--cancel').should('be.visible').click()


}
}
export default new Login ();