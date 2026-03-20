class API{
    API_POST(pname, pemail, pstatus, pgender){
      return cy.request({
        method:'POST',
        url:'https://gorest.co.in/public/v1/users',
        headers:{
            "Authorization":`Bearer ${Cypress.env('ACCESS_TOKEN')}`
        },
        body:{
            name:pname,
            email:pemail,
            status:pstatus,
            gender:pgender
        }
    })
}
API_GET(postId){
    return cy.request({
        method:'GET',
        url:`https://gorest.co.in/public/v1/users/${postId}`,
        headers:{
            "Authorization":`Bearer ${Cypress.env('ACCESS_TOKEN')}`
        }
    })
}
API_DELETE(postId){
    return cy.request({
        method:'DELETE',
        url:`https://gorest.co.in/public/v1/users/${postId}`,
        headers:{
            "Authorization":`Bearer ${Cypress.env('ACCESS_TOKEN')}`
        }
    })
}
}
export default  new API();