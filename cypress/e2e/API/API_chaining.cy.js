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
            expect(postres.body.data.name).to.eq('Piyush');
            expect(postres.body.data.id).to.be.a('number');
            cy.log(`Created post with ID: ${postres.body.data.id}`);
            cy.log("post id:"+postres.body.data.id);
            // Now, let's make a GET request to verify the post was created
            const postId = postres.body.data.id;
            cy.request({
                method:'GET',
                url:`https://gorest.co.in/public/v1/users/${postId}`,
                headers:{
                    "Authorization":`Bearer ${Cypress.env('ACCESS_TOKEN')}`
                }
            }).then((getres)=>{
                expect(getres.status).to.eq(200);
                expect(getres.body.data).to.have.property('id', postId);
                expect(getres.body.data.name).to.eq("Piyush");
                expect(getres.body.data.email).to.eq(postres.body.data.email);
                cy.log(`Verified post with ID: ${getres.body.data.id}`);
                cy.request({
                    method:'DELETE',
                    url:`https://gorest.co.in/public/v1/users/${postId}`,
                    headers:{
                        "Authorization":`Bearer ${Cypress.env('ACCESS_TOKEN')}`
                    }
                }).then((deleteres)=>{
                    expect(deleteres.status).to.eq(204);
                    cy.log(`Deleted post with ID: ${postId}`);
                })
            })
        }) 
})
})  