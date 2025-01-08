import express from 'express';
import dotenv from 'dotenv';
import projectRouter from './routes/project.routes.js';
import { dbFunction } from './db/index.js';
import authMiddleware from './middlewares/authMiddleware.js';
import authRouter from './routes/authentication.routes.js';
import {v2 as cloudinary } from 'cloudinary'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import bodyParser from 'body-parser'
// import User


dotenv.config()

const app = express();

const PORT = process.env.PORT || 3000
app.use(cookieParser())
app.use(cors())
app.use(bodyParser.urlencoded())


cloudinary.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
    secure:true,
})


app.use('/api/auth',authRouter)
// app.use('/api/projects', projectRouter)
app.use('/api/projects', authMiddleware, projectRouter)

app.listen(PORT, ()=>{
    dbFunction()
    console.log(`Server is running on port ${PORT}`)
})

