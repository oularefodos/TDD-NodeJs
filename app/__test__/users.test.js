const request = require('supertest');
const app = require('../app');

describe('Users API', () => {

    it('Post /user/register --> 200 an Object of user with the same info', () => {
        const user = {name : "fode", email : "oularefode@gmail.com", password : "password"}
        request(app)
            .post('/useri/register')
            .send(user)
            .expect(200, {
                name : user.name,
                email : user.email,
            })
    })

    it('GET /Income/id --> a income with the same id', () => {}) 
    it('GET /Income/id --> nothing', () => {})

    it('POST /income --> created income', () => {})

})