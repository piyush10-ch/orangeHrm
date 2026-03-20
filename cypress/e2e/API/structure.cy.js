it('explore API structure', () => {
    cy.request({
        method: 'GET',
        url: 'https://gorest.co.in/public/v1/users',
        headers: {
            "Authorization": `Bearer ${Cypress.env('ACCESS_TOKEN')}`
        }
    }).then((res) => {
        // Pehle yeh 3 lines daalo
        console.log('STATUS:', res.status);
        console.log('BODY:', res.body);
        console.log('STRUCTURE:', JSON.stringify(res.body, null, 2)); // ← Pretty print
    })
})