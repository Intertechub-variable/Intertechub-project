import express from 'express';
import dotenv from 'dotenv';
import projectRouter from './routes/project.routes.js';
import { dbFunction } from './db/index.js';
import authMiddleware from './middlewares/authMiddleware.js';
import authRouter from './routes/authentication.routes.js';
// import User


dotenv.config()

const app = express();

const PORT = process.env.PORT || 5000

app.use('/api/projects', authMiddleware, projectRouter)
app.use('/api/auth',authRouter)

app.listen(PORT, ()=>{
    dbFunction()
    console.log(`Server is running on port ${PORT}`)
})

