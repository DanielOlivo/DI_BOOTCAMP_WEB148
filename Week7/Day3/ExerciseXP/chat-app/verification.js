const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')

const {parsed: {SECRET}} = dotenv.config()

module.exports = async function verify(socket, next){
    try{
        const token = socket.handshake.auth.token || {token: ''};
        const decoded = jwt.verify(token, SECRET);
        socket.user = decoded.data.username;
        next();
    } catch(err){
        console.log(err);
    }
}