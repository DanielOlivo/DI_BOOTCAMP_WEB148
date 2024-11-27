const express = require('express');
const app = express();

let posts = [
    {id: 1, title: 'title1', content: 'content'},
    {id: 2, title: 'title2', content: 'content'},
    {id: 3, title: 'title3', content: 'content'},
    {id: 4, title: 'title4', content: 'content'},
    {id: 5, title: 'title5', content: 'content'},
    {id: 6, title: 'title6', content: 'content'},
]

// GET /posts: Return a list of all blog posts.
app.get("/api/posts", (req, res) => {
    res.json(posts);
});

// GET /posts/:id: Return a specific blog post based on its id.
app.get("/api/posts/:postID",  (req, res) => {
    const id = Number(req.params.postID);
    const post = posts.find((d) => d.id === id);
    if(!post){
        return res.status(404).send("post not found");
    }
    res.json(post);
});

// POST /posts: Create a new blog post.
app.use(express.json());


app.post("/api/posts", async (req, res) => {

    const {title, content} = req.body
    const newPost = {
        id: Math.floor(Math.random() * 100000),
        title: title,
        content: content
    };
    posts.push(newPost);
    res.status(201).json(newPost);
})

// PUT /posts/:id: Update an existing blog post.
app.put("/api/posts/:postID",  (req, res) => {
    let id = Number(req.params.postID);
    let index = posts.findIndex((post) => post.id === id);

    if(index === -1 || posts == undefined){
        return res.status(404).send("post not found");
    }

    const updatePost = {
        id: posts[index].id,
        title: req.body.title,
        content: req.body.content
    };
    posts[index] = updatePost;
    res.status(200).json("Post updated");
})

// DELETE /posts/:id: Delete a blog post.
app.delete("/api/posts/:postID", (req, res) => {
    let id = Number(req.params.postID);
    let index = posts.findIndex((post) => post.id === id);

    if(index === -1){
        return res.status(404).send("post not found");
    }
    posts.splice(index,1);
    res.status(200).json("post deleted");
});


// comment to enable testing at server.test.js
// app.listen(3000, () => {
//     console.log("port 3000");
// })

module.exports = app;