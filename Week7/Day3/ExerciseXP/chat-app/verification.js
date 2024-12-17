const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')

const online = require('./onlineManager');

const {parsed: {SECRET}} = dotenv.config()

module.exports = async function verify(socket, next){
    try{
        const token = socket.handshake.auth.token || {token: ''};
        const decoded = jwt.verify(token, SECRET);
        await online.addUser(decoded.data, socket.id);
        next();
    } catch(err){
        console.log(err);
    }
}