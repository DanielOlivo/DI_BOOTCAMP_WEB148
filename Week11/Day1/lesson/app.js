const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const userRouter = require('./routes/userRoutes')

const {db} = require('./config/db')

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials: true,

}))

app.use('/api/user', userRouter)

const PORT = 5000

app.listen(PORT, () => {
    console.log('http://localhost:' + PORT)
})

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