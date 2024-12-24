const express = require('express')

const app = express()

app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/hello', (req, res) => {
    res.status(200).json({msg: 'Hello from Express'})
})

app.post('/api/world', (req, res) => {
    res.status(200).json({msg: `I received your POST request. This is what you send me: ${req.body.msg}`});
})

app.listen(5000, () => console.log('localhost:5000'))