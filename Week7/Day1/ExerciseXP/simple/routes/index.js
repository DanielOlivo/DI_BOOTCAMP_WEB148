const express = require('express')
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('Homepage');
    next();
})

router.get('/about', (req, res, next) => {
    res.send('About us');
    next();
})

module.exports = router;