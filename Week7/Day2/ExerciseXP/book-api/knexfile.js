module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      // TODO change to your db name
      database: 'knex_tutorial',

      // change to your db user
      user: 'daniel',
      password: '1234',
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