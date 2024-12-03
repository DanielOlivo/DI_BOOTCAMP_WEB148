const request = require('supertest');
const app = require("../app");
const {expect} = require("chai")
const {v4: uuidv4} = require('uuid');

describe('some tests', () => {

    it('get all', async () => {
        const res = await request(app).get('/tasks');
        expect(res.status).to.equal(200);
        expect(res.body.length).to.be.above(0);
    });

    it('get random nonexistent', async () => {
        const id = uuidv4();
        const res = await request(app).get(`/tasks/${id}`);
        expect(res.status).to.equal(404);
    })

    it('get all and then get one by id', async () => {
        let res = await request(app).get('/tasks');

        const id = res.body[0].id;
        res = await request(app).get(`/tasks/${id}`);
        expect(res.status).to.equal(200);
    })

    it('get with invalid id', async() => {
        const id = '0000'
        const res = await request(app).get(`/tasks/${id}`);
        expect(res.status).to.equal(400);
    })

    // for unknown reason this test freezes sometimes
    it('create, update and remove', async () => {
        let res = await request(app).post('/tasks').send({title: 'some other task'});
        expect(res.status).to.equal(200);
        const id = res.body.id;

        res = await request(app).put(`/tasks/${id}`).send({completed: true});
        expect(res.status).to.equal(200);

        res = await request(app).delete(`/tasks/${id}`);
        expect(res.status).to.equal(200);
    });

    it('try to delete with invalid uuid', async() => {
        const id = '0000';
        res = await request(app).delete(`/tasks/${id}`);
        expect(res.status).to.equal(400);
    });

    it('try to create task with empty content', async () => {
        let res = await request(app).post('/tasks').send({title: ''});
        expect(res.status).to.equal(400);
    });
})