const express = require('express')
const fetchPosts = require('./data/dataService.js')

const app = express()

app.listen(5000, () => console.log("port 5000"));

app.get('/api', async (req, res) => {
    try {
        const response = await fetchPosts();
        console.log('success');
        res.json(response.data);
    } catch (err) {
        console.log(err);
        res.status(404).send('failed');
    }
})