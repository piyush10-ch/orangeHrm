import API from '../../pageObjects/API'
import API_user from "../../fixtures/API_user.json";
describe('API chaining with POM', () => {
    let postId;
    it('should create a new post', () => {
        API.API_POST(API_user.name,`piyush${Date.now()}@gmail.com`, API_user.status, API_user.gender).then((postres)=>{
            expect(postres.status).to.eq(201);
            expect(postres.body.data.name).to.eq('Piyush');
            postId = postres.body.data.id;
            cy.log(`Created post with ID: ${postId}`);
            API.API_GET(postId).then((getres)=>{
                expect(getres.status).to.eq(200);
                expect(getres.body.data.name).to.eq('Piyush');
                expect(getres.body.data.email).to.include('.com');
                API.API_DELETE(postId).then((deleteres)=>{
                    expect(deleteres.status).to.eq(204);
                    cy.log(`Deleted post with ID: ${postId}`);
                })  
            })
        })
    })
})
   