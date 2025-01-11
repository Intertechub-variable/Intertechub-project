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
import path from 'path'
// import User
// TODO  edit user model and project model

dotenv.config()

const app = express();

const PORT = process.env.PORT || 5000
const __dirname = path.resolve()



app.use(cookieParser())
app.use(cors({credentials: true, origin:'https://crowdfunding-app.onrender.com',methods: ['GET','POST','PUT', 'DELETE']}))
app.use(bodyParser.urlencoded({ extended:true}))
app.use(express.json({limit:'10mb'}));

cloudinary.config({
    cloud_name:process.env.CLOUDINARY_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
    secure:true,
})


app.use('/api/auth',authRouter)
app.use('/api/projects', projectRouter)
// app.use('/api/projects', authMiddleware, projectRouter)

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "/client-side/dist")));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client-side", "dist", "index.html"));
	});
}


app.listen(PORT, ()=>{
    dbFunction()
    console.log(`Server is running on port ${PORT}`)
})

