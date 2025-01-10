import express from 'express';

import {  deleteProject, fundProject,createProject, getAllProjects, updateProject, getApprovedProjects, getUnApprovedProjects, approveProject } from '../controllers/project.controller.js';

import authMiddleware from '../middlewares/authMiddleware.js';
import {userMiddleware, adminMiddleware} from '../middlewares/roleMiddleware.js';

const projectRouter = express.Router();
projectRouter.get('/',getAllProjects);

projectRouter.get('/approved',getApprovedProjects)
projectRouter.get('/unapproved',getUnApprovedProjects)
projectRouter.put('/approve/:id',approveProject);
projectRouter.post('/create',authMiddleware,createProject);
projectRouter.post('/fund/:id',authMiddleware,fundProject)
projectRouter.put('/update/:id',authMiddleware,updateProject);
projectRouter.patch('/update/:id',authMiddleware,updateProject);
//projectRouter.post('/create',authMiddleware, userMiddleware, createProject);
projectRouter.patch('/update/:id',authMiddleware, userMiddleware, updateProject);

projectRouter.delete('/:id',authMiddleware,deleteProject)

// projectRouter.post('/approve/:id', authMiddleware, adminMiddleware, approveProject);
// projectRouter.get('/unapprovedProjects', authMiddleware, adminMiddleware, getUnApprovedProjects);
// projectRouter.get('/approvedProjects', authMiddleware, getApprovedProjects);
// projectRouter.post('/fundProject/:id', authMiddleware, userMiddleware, fundProject);
// projectRouter.get('/fundedProjects', authMiddleware, userMiddleware, getProjectsFundedByMe);

export default projectRouter