const request = require('supertest');
const app = require("../app");
const {expect} = require("chai")

describe('some tests', () => {

    it('get all', async () => {
        const res = await request(app).get('/books');
        expect(res.status).to.equal(200);
        expect(res.body.length).to.be.above(0);
    });

    it('get existing book', async () => {
        const res = await request(app).get('/books/1');
        expect(res.status).to.equal(200);
    });

    it('get nonexisting book', async () => {
        const res = await request(app).get('/books/1000000');
        expect(res.status).to.equal(404);
    })

    it('create book item and get it', async() => {
        let res = await request(app).post('/books').send({
            author: 'Iain M. Banks',
            title: 'The Wasp Factory',
            publishedYear: 1984
        });
        expect(res.status).to.equal(200);
        const {id} = res.body[0];

        res = await request(app).get(`/books/${id}`);
        expect(res.status).to.equal(200);
    })

})