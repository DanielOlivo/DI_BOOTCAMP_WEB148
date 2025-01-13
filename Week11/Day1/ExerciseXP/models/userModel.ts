import db from '../config/db'
import bcrypt from 'bcrypt'

export default {

    createUser: async(password: string, email: string) => {
        const trx = await db.transaction()

        try{
            const hashPassword = await bcrypt.hash(password + "", 10) // + "" - to make sure its a string

            const [user] = await trx("users").insert({
                email: email.toLowerCase(),
                password: hashPassword
            }, ["email", "id"])

            await trx.commit()
            return user;
        }
        catch(err){
            await trx.rollback();
            console.error(err)
            throw err
        }
    },

    getUsers: async() => {
        try {
            const users = await db('users')
                .select('id', 'email')
            return users
        }
        catch(error){
            console.error(error)
            throw error
        }
    },

    getUserByEmail: async(email: string) => {
        try {
            const user = db('users')
                .select('id', 'email', 'password')
                .where({email: email.toLowerCase()})
                .first()
            return user
        }
        catch(error){
            console.error(error)
            throw error
        }
    }
}