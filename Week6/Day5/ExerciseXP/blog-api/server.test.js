const request = require('supertest');
const app = require('./server.js')

describe('post routes', () => {

    it("should fetch all the posts", async () => {
        return request(app)
            .get('/api/posts')
            .then((res) => {
                expect(res.statusCode).toBe(200);
            })
    });

    test('should create a post', async () => {
        const response = await request(app)
            .post("/api/posts")
            .send({title: "new title", content: "some content"});
        expect(response.status).toBe(201);
    });

    it('should fetch a post if it exists', async () => {
        const response = await request(app).get('/api/posts/1');
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('id', 1);
    });

    it('should update a post', async() => {
        const response = await request(app)
            .put("/api/posts/1")
            .send({title: "updated title", content: "updated content"})
        expect(response.statusCode).toBe(200);
    });

    it("should delete a post", async() => {
        const res = await request(app)
            .delete("/api/posts/4");
        expect(res.statusCode).toEqual(200);
    });

});