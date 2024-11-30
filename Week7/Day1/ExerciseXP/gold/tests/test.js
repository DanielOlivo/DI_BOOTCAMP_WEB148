const request = require('supertest');
const app = require('../app')
const {expect} = require('chai')


describe('tests', () => {

    it('should return all the posts', async () => {
        const res = await request(app).get('/posts');

        expect(res.status).to.equal(200); 
        expect(Object.keys(res.body).length).to.equal(2);
    });

    it('create post, update and remove', async () => {
        {
            const res = await request(app).post('/posts').send({
                title: "new title",
                content: "content"
            });

            expect(res.status).to.equal(200);
            expect(res.body.title).to.equal('new title');
        }

        {
            const res = await request(app).put('/posts/3').send({
                title: "updated title",
                content: "updated content"
            });
            expect(res.status).to.equal(200);
            expect(res.body.title).to.equal('updated title');
        }

        {
            const res = await request(app).delete('/posts/3');
            expect(res.status).to.equal(200);
        }
    })



})