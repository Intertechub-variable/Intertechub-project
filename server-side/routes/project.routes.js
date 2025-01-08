import express from 'express';
import { CreatProject, deleteProject, getAllProjects, updateProject } from '../controllers/project.controller.js';

const projectRouter = express.Router();
projectRouter.get('/',getAllProjects);
projectRouter.post('/create',CreatProject);
projectRouter.patch('/update/:id',updateProject);
projectRouter.delete('/:id',deleteProject)

export default projectRouter