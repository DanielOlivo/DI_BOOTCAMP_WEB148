const request = require('supertest');
const app = require('../app')
const {expect} = require('chai')


describe('tests', () => {

    it('should return all the notes', async () => {
        const res = await request(app).get('/todos');

        expect(res.status).to.equal(200); 
        expect(Object.keys(res.body).length).to.equal(1);
    });

    it('add, update and remove', async () => {
        let res = await request(app)
            .post('/todos')
            .send({title: 'new note'});

        expect(res.status).to.equal(200);  

        res = await request(app)
            .get('/todos');
        expect('2' in res.body).to.equal(true);


        res = await request(app).put('/todos/2').send({title: 'new note 2'});
        expect(res.status).to.equal(200);
        expect(res.body.title).to.equal('new note 2');


        res = await request(app).delete('/todos/2');  
        expect(res.status).to.equal(200);
    });
})