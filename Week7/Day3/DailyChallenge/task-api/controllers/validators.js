const {param, body, validationResult} = require('express-validator');

module.exports = validators = {
    validUUID: () => [param('id').exists().isUUID()],
    validPost: () => [
        body('username').exists().isLength({min: 4}),
        body('password').exists().isLength({min: 4})
    ],
    validPut: () => [
        body('password').exists().isLength({min: 4}),
    ]
}