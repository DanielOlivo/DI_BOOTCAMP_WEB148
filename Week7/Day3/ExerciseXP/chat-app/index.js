const server = require('./server')

server.listen(port, () => {
  console.log(`server started ${port}`);
});