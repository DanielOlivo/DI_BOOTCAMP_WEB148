const request = require('supertest');
const app = require("../app");
const {expect} = require("chai")
const {v4: uuidv4} = require('uuid');
const {faker} = require('@faker-js/faker')

describe('some tests', () => {

    it('get all', async () => {
        const res = await request(app).get('/users');
        expect(res.status).to.equal(200);
        expect(res.body.length).to.be.above(0);
    });

    it('get random nonexistent', async () => {
        const id = uuidv4();
        const res = await request(app).get(`/users/${id}`);
        expect(res.status).to.equal(404);
    })

    it('get all and then get one by id', async () => {
        let res = await request(app).get('/users');
        const id = res.body[0].id;
        res = await request(app).get(`/users/${id}`);
        expect(res.status).to.equal(200);
    })

    it('try get with invalid uuid', async() => {
        const id = '0000'
        const res = await request(app).get(`/users/${id}`);
        expect(res.status).to.equal(400);
    });


    it('john doe logins', async() => {
        const res = await request(app).post('/login').send({username: 'john.doe', password: '1234'});
        expect(res.status).to.equal(200);
    })

    // this test freezes
    it('registering and login', async () => {
        const user = {
            username: faker.internet.username(),
            password: faker.internet.password()
        };
        let res = await request(app).post('/register').send(user);
        expect(res.status).to.equal(200);

        res = await request(app).post('/login').send(user);
        expect(res.status).to.equal(200);
    });

    // it('try to delete with invalid uuid', async() => {
    //     const id = '0000';
    //     res = await request(app).delete(`/tasks/${id}`);
    //     expect(res.status).to.equal(400);
    // });

    // it('try to create task with empty content', async () => {
    //     let res = await request(app).post('/tasks').send({title: ''});
    //     expect(res.status).to.equal(400);
    // });
})