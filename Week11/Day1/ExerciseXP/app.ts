import express from 'express'
import dotenv from 'dotenv'
import db from './config/db'
import cors from 'cors'
import userRoutes from './routes/userRoutes'
import cookieParser from 'cookie-parser'

const port = 5000

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({credentials: true}))
app.use('/api/users',userRoutes)

app.listen(port, () => console.log('http://localhost:' + port))

// async function testConnection() {
//     try {
//         const response = await db.raw('select version()')
//         console.log(response.rows)
//     }
//     catch(err){
//         console.error(err)
//     }
// }
// testConnection()