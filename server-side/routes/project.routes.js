import express from 'express';
import { 
  createProject, 
  deleteProject, 
  getAllProjects, 
  updateProject 
} from '../controllers/project.controller.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const projectRouter = express.Router();
projectRouter.get('/',getAllProjects);
projectRouter.post('/create',authMiddleware,createProject);
projectRouter.patch('/update/:id',authMiddleware,updateProject);
projectRouter.delete('/:id',authMiddleware,deleteProject)

export default projectRouter