const express = require('express')
// const cors = require('cors')

const app = express()

app.use(express.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/users', (req, res) => {
    res.status(200).json([
        {id: 1, username: 'somebody'},
        {id: 2, username: 'somebody_else'}
    ])
})

app.listen(5000, () => console.log('http://localhost:5000'))