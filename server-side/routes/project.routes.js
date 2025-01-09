import express from 'express';
import { CreatProject, deleteProject, getAllProjects, updateProject } from '../controllers/project.controller.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const projectRouter = express.Router();
projectRouter.get('/',getAllProjects);
projectRouter.post('/create',authMiddleware,CreatProject);
projectRouter.patch('/update/:id',authMiddleware,updateProject);
projectRouter.delete('/:id',authMiddleware,deleteProject)

export default projectRouter