import { Router } from "express";
import userController from "../controllers/userController";
import verifyUser from '../middlewares/verifyUser'

const router = Router()

router.get('/all', verifyUser, userController.getUsers)
router.post('/login', userController.loginUser)
router.post('/register', userController.registerUser)
router.get('/logout', userController.logoutUser)

export default router