import express from 'express';
import dotenv from 'dotenv';
import projectRouter from './routes/project.routes.js';
import { dbFunction } from './db/index.js';


dotenv.config()

const app = express();

const PORT = process.env.PORT || 5000

app.use('/api/projects',projectRouter)


app.listen(PORT, ()=>{
    dbFunction()
    console.log(`Server is running on port ${PORT}`)
})

