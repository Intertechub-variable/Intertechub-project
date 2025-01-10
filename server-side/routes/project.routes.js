import express from 'express';
import {  deleteProject, fundProject,createProject, getAllProjects, updateProject, getApprovedProjects, getUnApprovedProjects, approveProject } from '../controllers/project.controller.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const projectRouter = express.Router();
projectRouter.get('/',getAllProjects);

projectRouter.get('/approved',getApprovedProjects)
projectRouter.get('/unapproved',getUnApprovedProjects)
projectRouter.put('/approve/:id',approveProject);
projectRouter.post('/create',authMiddleware,createProject);
projectRouter.post('/fund/:id',authMiddleware,fundProject)
projectRouter.put('/update/:id',authMiddleware,updateProject);
projectRouter.patch('/update/:id',authMiddleware,updateProject);
projectRouter.delete('/:id',authMiddleware,deleteProject)

export default projectRouter