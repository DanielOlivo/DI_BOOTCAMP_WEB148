const request = require('supertest');
const app = require("../app");
const gen = require('../gen')
const {expect} = require("chai")

describe('some tests', () => {

    it('get all', async () => {
        const res = await request(app).get('/users');
        expect(res.status).to.equal(200);
        expect(res.body.length).to.be.above(0);
    });

    it('get specific', async() => {
        // first get all
        let res = await request(app).get('/users');
        const id = res.body[0].id;

        res = await request(app).get(`/users/${id}`)
        expect(res.status).to.equal(200);
    });

    it('create a new one', async() => {
        const newUser = gen();
        const res = await request(app).post('/register').send(newUser);
        expect(res.status).to.equal(200);
    });

    it('john doe logins', async()=> {
        const res = await request(app).post('/login').send({
            username: 'john.doe',
            password: '1234'
        });
        expect(res.status).to.equal(200);
    });

    it('unexistent user logins', async() => {
        const res = await request(app).post('/login').send({
            username: 'no-name',
            password: '0000'
        });
        expect(res.status).to.equal(404);
    });

    it('updating user with id = 2', async() => {
        let user = gen();
        user.first_name = 'Jane';
        user.last_name = 'Doe';
        user.password = 'asdfg';

        let res = await request(app).put('/users/2').send(user);
        expect(res.status).to.equal(200);
    })
})