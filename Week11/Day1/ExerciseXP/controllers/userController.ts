import { Request, Response } from "express";
import userModel from "../models/userModel";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export default {

    registerUser: async (req: Request, res: Response): Promise<void> => {
        const {password, email} = req.body

        try{
            const user = await userModel.createUser(password, email)
            res.status(201).json({
                message: 'User registered successfully',
                user
            })
        }
        catch(err){
            console.error(err)
            if(err.code === "23505"){
                res.status(400).json({
                    message: 'Email already exists'
                })
                return
            }
            res.status(500).json({
                message: 'Internal server error'
            })
        }
    },

    loginUser: async (req: Request, res: Response) => {
        const {password, email}  = req.body 

        try {
            const user = await userModel.getUserByEmail(email)    

            if(!user){
                res.status(404).json({
                    message: "User not found"
                })
                return;
            }

            const passwordMatch = await bcrypt.compare(password + "", user.password)

            if(!passwordMatch){
                res.status(404).json({
                    message: "Wrong password"
                })
                return
            }

            /** generate a token */
            const accessToken = jwt.sign(
                {userId: user.id, email: user.email},
                process.env.TOKEN_SECRET as string,
                {expiresIn: '60s'}
            );

            /** set the token in httpOnly cookie */
            res.cookie("token", accessToken, {
                maxAge: 1000 * 60,
                httpOnly: true,
            })

            /** response to client */
            res.status(200).json({
                message: 'Login successful',
                user: {userId: user.id, email: user.email},
                token: accessToken
            })
        }
        catch(err){
            console.error(err)
            res.status(500).json({
                message: 'Internal server error'
            })
        }
    },

    getUsers: async(req: Request, res: Response) => {
        try {
            const users = await userModel.getUsers()
            res.json(users)
        }
        catch(err){
            console.error(err)
            res.status(500).json({
                message: 'Internal server error'
            })
        }
    },   

    logoutUser: (req: Request, res: Response) => {
        res.clearCookie("token");
        req.cookies.token = null
        delete req.cookies.token 
        res.sendStatus(200)
    }, 
}