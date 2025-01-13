import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

const {TOKEN_SECRET} = process.env


export type User = {
    email: string
    id: number
}

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    console.log('cookies', req.cookies)
    if(!('token' in req.cookies)){
        res.status(401).json({message: 'unauthorized'})
        return
    }
    const token = req.cookies['token'] // 

    const decoded = jwt.verify(token, TOKEN_SECRET as string) as User

    console.log(decoded)

    if(!token){
        throw new Error('Authentication failed')
    }

    // req.user = decoded

    next()
}

export default verifyToken