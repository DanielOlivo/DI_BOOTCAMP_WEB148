const request = require('supertest')
const routing = require('./routing.js')

describe('some tests', () => {

    it('should return all the books', async () => {
        const response = await request(routing).get("/api/books")
        expect(response.statusCode).toEqual(200);
        expect(response.body.length).toBe(2);
    });

    it('should return Iain M Banks by id', async() => {
        const response = await request(routing).get('/api/books/2');
        expect(response.statusCode).toEqual(200);
        expect(response.body.id).toEqual(2);
        expect(response.body.author).toEqual("Iain M. Banks");
    });

    it('creating new book', async() => {
        const response = await request(routing)
            .post("/api/books")
            .send({id: 3, author: "William Gibson", title: "Neuromancer", publishedYear: 1985});
        expect(response.statusCode).toBe(201);
    });
})