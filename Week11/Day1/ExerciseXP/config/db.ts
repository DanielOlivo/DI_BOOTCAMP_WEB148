import {knex} from 'knex'
import dotenv from 'dotenv'

dotenv.config()

const {DBPORT, DBDATABASE, DBUSER, DBPASSWORD} = process.env

console.log('password', DBPASSWORD)

const db = knex({
    client: 'pg',
    connection: {
        port: Number(DBPORT),
        user: DBUSER as string,
        database: DBDATABASE as string,
        password: DBPASSWORD as string
    }
})

export default db