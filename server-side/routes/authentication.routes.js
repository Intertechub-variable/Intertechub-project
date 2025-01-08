import express from 'express';
import logout from '../controllers/logout';
import login from '../controllers/login';
import signUp from '../controllers/signup';

const authRouter = express.Router();
authRouter.post('/login',login)
authRouter.post('/signup',signUp)
authRouter.post('/logout',logout)

export default authRouter