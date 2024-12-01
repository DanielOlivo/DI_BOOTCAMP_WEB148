const request = require('supertest');
const app = require("../app");
const {expect} = require("chai")

describe('some tests', () => {

    it('get all', async () => {
        const res = await request(app).get('/posts');
        expect(res.status).to.equal(200);
        expect(res.body.length).to.be.above(0);
    })

    it('create, update and delete', async () => {

        let res = await request(app).post('/posts').send({title: 'some title', content: 'some content'});
        let {id} = res.body[0]; 
        expect(res.status).to.equal(200);


        res = await request(app).put(`/posts/${id}`).send({
            title: 'updated title',
            content: 'updated content'
        });
        expect(res.status).to.equal(200);
        expect(res.body[0].title).to.equal('updated title');
        expect(res.body[0].content).to.equal('updated content');
        
        res = await request(app).delete(`/posts/${id}`);
        expect(res.status).to.equal(200);
    })
})