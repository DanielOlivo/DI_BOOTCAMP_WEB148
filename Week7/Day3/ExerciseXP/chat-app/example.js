const express = require('express');
const {createServer} = require('http')
const {Server} = require('socket.io')
const {io: Client} = require('socket.io-client');
const passport = require('passport');
const passportJwt = require('passport-jwt');
const jwt = require('jsonwebtoken');

const JwtStrategy = passportJwt.Strategy;
const ExtractJwt = passportJwt.ExtractJwt;

const jwtSecret = "MySecret";

const app = express()
const server = createServer(app);
io = new Server(server);


// ids and names
const users = {}

//names and sockets
const rooms = {
    // 'chat1': ['johndoe', 'janedoe']
    'johndoe': ['chat1'],
    'janedoe': ['chat1', 'chat2'],
    'dude': ['chat2']
}


function getToken(id, username){
    return jwt.sign(
        {
            data: {
                id: id,
                username: username
            }
        },
        jwtSecret
    )
}

const tokens = [
    getToken(1, 'johndoe'),
    getToken(2, 'janedoe'),
    getToken(3, 'dude'),
]

const jwtDecodeOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: jwtSecret
};

passport.use(
    new JwtStrategy(jwtDecodeOptions, (payload, done) => {
        return done(null, payload.data);
    })
)

io.use(async (socket, next) => {
    try {
        const token = socket.handshake.auth.token || {token: ''};
        const decoded = jwt.verify(token, jwtSecret);
        socket.user = decoded.data.username;
        next();
    } catch(err){
        console.log(err);
    }
});

io.on("connection", (socket) => {

    socket.on('message', ({room, msg}) => {
        console.log(`server: message from ${socket.user}`);
        console.log('all rooms: ' + io.sockets.adapter.rooms);
        
        io.to(room).emit('message', {room: room, msg: msg});
    });


    socket.on('login', (name) => {
        console.log(`user ${name}: id ${socket.id}`);
        users[socket.id] = name;

        for(const room of rooms[name]){
            console.log(`${name} in ${room} room`);
            socket.join(room);
        }

    })

})

var clients = []

server.listen(5000, () => {
    console.log('listening 5000'); 
})

for(i = 0; i < 3; i++){
    const client = new Client(`http://localhost:${5000}`
        ,{
            auth: {token: tokens[i]}
        }
    );
    client.on('connect', () => {
        // console.log(`connected with id: ${client.id}`)
    });
    client.on('message', ({room, msg}) => {
        console.log(`${room}: ${client.id} receives: ${msg}`);
    })
    clients.push(client);
}

clients[0].emit('login', 'johndoe');
clients[1].emit('login', 'janedoe');
clients[2].emit('login', 'dude');

clients[1].emit('message', {room: 'chat1', msg: 'hi john'});
clients[2].emit('message', {room: 'chat2', msg: 'duuuude!'});

close();

async function close(){
    setTimeout(() => {
        console.log('closing');
        clients.forEach((client) => client.close());
        server.close();
    }, 3000);
}