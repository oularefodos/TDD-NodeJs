const request = require('supertest');
const app = require('../app');

    
describe('Users API', () => {
    let userCreated;
    
    it('Post /user/register --> 200 an Object of user with the same info', async (done) => {
        const user = {"name" : "fode", "email" : "oularefode@gmail.com", "password" : "pass01word"}
        userCreated = await request(app)
                        .post('/users/register')
                        .send(user)
                        .expect(200, done)
    });
});