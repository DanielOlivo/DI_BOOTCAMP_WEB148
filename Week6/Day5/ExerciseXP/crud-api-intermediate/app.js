const express = require('express');
const axios = require('axios')

const app = express();
const url = "https://jsonplaceholder.typicode.com/"


app.get('/api/posts', async (req, res) => {
    try {
        const response = await axios.get(url + "/posts");
        res.json(response.data);
    } 
    catch (err) {
        console.log(err);
        res.status(404);
    }
});

app.get('/api/posts/:postId', async (req, res) => {
    try {
        const id = Number(req.params.postId);
        const response = await axios.get(url + `/posts/${id}`);
        res.json(response.data);
    }
    catch(err) {
        console.log(err);
        res.status(404);
    }
});

app.post('/api/posts', async (req, res) => {
    try {
        const response = await axios.post(url + `/posts`, req.body);
        res.json(response.data);
    }
    catch(err) {
        console.log(err);
        res.status(404);
    }
});

app.put('/api/posts/:postId', async (req, res) => {
    try {
        const id = Number(req.params.postId);
        const response = await axios.put(url + `/posts/${id}`, req.body);
        res.json(response.data);
    }
    catch(err) {
        console.log(err);
        res.status(404);
    }
});

app.delete('/api/posts/:postId', async (req, res) => {
    try {
        const id = Number(req.params.postId);
        const response = await axios.delete(url + `/posts/${id}`);
        res.json(response.data);
    }
    catch(err) {
        console.log(err);
        res.status(404);
    }
});

app.listen(5000, () => console.log("port: 5000"));