const express = require('express');
const {createServer} = require('http')
const {Server} = require('socket.io')
const {io: Client} = require('socket.io-client');
const {assert} = require('chai')

describe('rooms', () => {
    let app, io, serverSocket, clients;

    before((done) => {
        const app = express();
        const server = createServer(app);
        io = new Server(server);

        server.listen(() => {
            const port = server.address().port;

            io.on("connection", (socket) => {
                serverSocket = socket;
            });

            clients = [];
            for(i = 0; i<3; i++){
                const client = new Client(`http://localhost:${port}`)
                // console.log(client.id); 
                client.on("connect", () => console.log('connected'));
                clients.push(client); 

            }
            done();
        })
    });

    after((done) => {
        io.close();
        clients.forEach((client) => client.close());
        done()
    })


    it('first', (done) => {
        io.on('room1', (arg) => {
            console.log(arg);
            done();
        }) 
        clients[0].emit('room1', 'hi dudes');
        done()
    })

    it('just test', (done) => {
        assert.equal(1,1);
        done();
    })
})

describe("some tests", () => {
    let app, io, serverSocket, clientSocket;

    before((done) => {
        const app = express();
        const server = createServer(app);
        io = new Server(server);

        server.listen(() => {
            const port = server.address().port;
            
            // const port = '5000'
            io.on("connection", (socket) => {
                serverSocket = socket;
            });
            clientSocket = new Client(`http://localhost:${port}`)
            clientSocket.on("connect", done);
        })
    })

    after(() => {
        io.close();
        clientSocket.close();
    })

    it('it should work', (done) => {
        clientSocket.on("hello", (arg) => {
            assert.equal(arg, "world");
            done();
        })
        serverSocket.emit('hello', 'world');
    })
})

