const express = require('express')
const router = require('./routes/index')
const app = express()

app.use('/posts', router);

module.exports = app;