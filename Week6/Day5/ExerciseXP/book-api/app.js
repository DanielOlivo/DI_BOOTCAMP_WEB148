const routing = require('./routing.js');


routing.listen(5000, () => {
    console.log('server is listening on port 5000');
})