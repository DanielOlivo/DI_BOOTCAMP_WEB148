const path = require('path')
const express = require('express')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())

const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    // Add more emoji objects
];

let total = 0;
let success = 0;
let current;

function getQuestion() {
    return emojis[Math.floor(Math.random() * emojis.length)];
}


app.get("/init", (req, res) => {
    total = 0;
    success = 0
    current = getQuestion()

    res.json({
        total: total, 
        success: success,
        question: current.emoji
    })
})

app.post("/answers", (req, res) => {
    const {answer} = req.body;

    if (answer === current.name.toLowerCase()){
        success++;
    } 
    total++;

    current = getQuestion();

    res.json({
        total: total, 
        success: success,
        question: current.emoji
    });
});



app.listen(5000, () => console.log('port 5000'))