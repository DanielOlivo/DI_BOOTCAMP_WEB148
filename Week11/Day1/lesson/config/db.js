const knex = require('knex')
require('dotenv').config();

const {PGUSER, PGDATABASE, PGPORT, PGPASSWORD} = process.env

module.exports = {
    db: knex({
        client: 'pg',
        connection: {
            port: PGPORT,
            user: PGUSER,
            database: PGDATABASE,
            password: PGPASSWORD
        }
    })
}
