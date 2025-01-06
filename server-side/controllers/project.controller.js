import Project from "../models/project.model.js";

export const getAllProjects = async (req,res)=>{
    const projects = await Project.find({})
    res.json({msg:"Hello"})
}

export const CreatProject = async (req,res)=>{
    
}

export const getSingleProject = async (req,res)=>{};

export const deleteProject = async (req,res)=>{};

export const updateProject = async (req,res)=>{};

export const fundingProject = async (req,res)=>{}

export const featuredProjects = async (req,res)=>{}

export const fundedProjects = async (req,res)=>{}