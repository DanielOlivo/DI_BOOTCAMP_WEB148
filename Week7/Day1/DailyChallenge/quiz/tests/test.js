const request = require('supertest');
const app = require('../app')
const {expect} = require('chai')


describe('tests', () => {

    it('right, right, wrong, get result', async () => {

        // get question
        {
            let res = await request(app).get('/quiz')
            let {message} = res.body;
            expect(message).to.equal("What is the capital of France?");  
        }

        // answer
        {
            let res = await request(app).post('/quiz').send({answer: 'Paris'});
            let {message} = res.body;
            expect(message).to.equal(1);  
        }

        // get question
        {
            let res = await request(app).get('/quiz')
            let {message} = res.body;
            expect(message).to.equal("Which planet is known as the Red Planet?");  
        }

        // answer
        {
            let res = await request(app).post('/quiz').send({answer: 'Mars'});
            let {message} = res.body;
            expect(message).to.equal(2);  
        }

        // get question
        {
            let res = await request(app).get('/quiz')
            let {message} = res.body;
            expect(message).to.equal("What is the largest mammal in the world?");  
        }

        // answer
        {
            let res = await request(app).post('/quiz').send({answer: 'IDK'});
            let {message} = res.body;
            expect(message).to.equal(2);  
        }

        // get scores
        {
            let res = await request(app).get('/quiz/score');
            let {message} = res.body;
            expect(message).to.equal("result: 2 / 3");  
        }
    });
})