const express = require('express');
const app = express()

const routes = require('./routes/index');

app.use('/posts', routes);

module.exports = app;