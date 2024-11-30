const express = require('express')
const router = require('./routes/index')
const app = express()

app.use('/quiz', router);

module.exports = app;