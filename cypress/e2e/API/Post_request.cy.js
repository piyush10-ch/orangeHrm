describe('Post Request', () => {
    it('should create a new post', () => {
        cy.request({
            method:'POST',
            url:'https://gorest.co.in/public/v1/users',
            headers:{
                "Authorization":`Bearer ${Cypress.env('ACCESS_TOKEN')}`
            },
            body:{
                name:"Piyush",
                email:`Piyushtest${Date.now()}@gmail.com`,
                status:"active",
                gender:"male"
            }

        }).then((postres)=>{
            expect(postres.status).to.eq(201);
           expect(postres.body.name).to.eq('Piyush');
        })
})
})