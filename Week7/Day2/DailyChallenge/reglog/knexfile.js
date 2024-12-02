module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'knex_tutorial',
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