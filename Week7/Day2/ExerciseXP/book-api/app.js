const express = require('express');
const app = express()

const routes = require('./routes/index');

app.use('/books', routes);

module.exports = app;