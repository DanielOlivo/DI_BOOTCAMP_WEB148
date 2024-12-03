const express = require('express');
const app = express()

const routes = require('./routes/index');

app.use('/tasks', routes);

module.exports = app;