const express = require('express');
const app = express()
const cors = require('cors')

const routes = require('./routes/index');

app.use(cors());
app.use(express.static('./pages/login'));
app.use(express.static('./pages/register'));

app.use('/', routes);

module.exports = app;