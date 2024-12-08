const db = require('./db/db');
const queries = require('./service/queries');


console.log(queries.getAll().toQuery());

db.destroy();