const request = require('supertest');
const app = require('../app')
const {expect} = require('chai')


describe('tests', () => {

    it('should return all the notes', async () => {
        const res = await request(app).get('/books');

        expect(res.status).to.equal(200); 
        expect(Object.keys(res.body).length).to.equal(2);
    });

    it('add, update and remove', async () => {
        let res = await request(app)
            .post('/books')
            .send({title: 'New Book', author: "Author"});

        expect(res.status).to.equal(200);  

        res = await request(app)
            .get('/books');
        expect('3' in res.body).to.equal(true);


        res = await request(app).put('/books/3').send({title: 'Title updated', author: "Author"});
        expect(res.status).to.equal(200);
        expect(res.body.title).to.equal('Title updated');


        res = await request(app).delete('/books/3');  
        expect(res.status).to.equal(200);
    });
})