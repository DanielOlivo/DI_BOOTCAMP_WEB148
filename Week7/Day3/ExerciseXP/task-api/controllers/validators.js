const {param, body, validationResult} = require('express-validator');

module.exports = validators = {
    validUUID: () => [param('id').exists().isUUID()],
    validPost: () => [body('title').exists().isLength({min: 1})],
    validPut: () => [
        body('title').optional().isLength({min: 1}).trim(),
        body('completed').optional().isBoolean()
    ]
}