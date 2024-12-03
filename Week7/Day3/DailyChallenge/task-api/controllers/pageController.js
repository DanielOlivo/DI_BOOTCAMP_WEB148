const express = require('express');
const path = require('path');

module.exports = pageController = {
    login: (req, res, next) => 
        res.sendFile(path.join(__dirname, '../pages/login/index.html')),

    register: (req, res, next) => 
        res.sendFile(path.join(__dirname, '../pages/register/index.html'))
}