const dotenv = require('dotenv');
const {parsed : {DBUSER, DBPASSWORD, DBNAME, DBPORT}} = dotenv.config()

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: DBNAME,
      user: DBUSER,
      password: DBPASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: "./seed"
    }
  },
};