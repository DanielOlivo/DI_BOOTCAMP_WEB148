const {assert} = require('chai')
const {validate: isValidUUID} = require('uuid')

module.exports.isNum = arg => assert.typeOf(arg, 'number');
module.exports.isStr = arg => assert.typeOf(arg, 'string')
module.exports.ok = assert.isOk
module.exports.notOk = assert.isNotOk
module.exports.eq = (arg1, arg2) => assert.equal(arg1, arg2);
module.exports.isTrue = assert.isTrue
module.exports.isUUID = (arg) => assert.isTrue(isValidUUID(arg));