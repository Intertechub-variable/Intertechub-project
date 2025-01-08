import express from 'express';
import logout from '../controllers/logout.js';
import login from '../controllers/login.js';
import signUp from '../controllers/signup.js';

const authRouter = express.Router();
authRouter.post('/login',login)
authRouter.post('/signup',signUp)
authRouter.post('/logout',logout)

export default authRouter