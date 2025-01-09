import Project from "../models/project.model.js";
import {v2 as cloudinary} from 'cloudinary'

export const getAllProjects = async (req,res)=>{
    try {
    const projects = await Project.find({})
     res.json(projects);
    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Internal server error'})
    }
    

}

export const CreatProject = async (req,res)=>{

  const { title,image, description, current_amount,target_amount,end_date  } = req.body;
    try {
        let result = null
        if(image){
         result  = await cloudinary.uploader.upload(image,{
                folder:'projects',  
            })
        }
        const product = await Project.create({
            title,
            description,
            target_amount,
            end_date,
            creator:req.user.id,
            image:result?.secure_url? result?.secure_url:'',
         
        })
        res.json(product)

    } catch (error) {
        console.log('error in creating project',error.message);
        res.status(500).json({message:'Internal server error'})
    }
}

export const getSingleProject = async (req,res)=>{
    try {
        const {id} = req.params;
        const project = await Project.findById(id);
        res.json(project);

    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Internal server error'})
    }
};

export const updateProject = async (req,res)=>{
    try {
        const {id} = req.params;
        const project = await Project.findById(id);
        if(!project){
            return res.status(404).json({message:'Project not found!'});
        };
        const updatedProject = await Project.findByIdAndUpdate(id,req.body,
            {new:true}
        );
        res.json(updatedProject)

    } catch (error) {
        console.log(error)
        res.status(500).json({message:'Internal server error'})
    }
};

export const deleteProject = async (req,res)=>{
      try {
     const {id} = req.params;
    const project = await Project.findById(id);
    if(!project){
        return res.status(404).json({message:'Project not found'})
    }
    if(product.image){
        try {
             const public_id = Project.image.split('/').pop().split('.')[0];
             await cloudinary.uploader.destroy(`products/${public_id}`);
        } catch (error) {
            console.log('error deleting product from cloudinary')
        }
    }
await Project.findByIdAndDelete(id);
res.json({message:'Project deleted successfully'})
   } catch (error) {
    console.log('error in deleting product',error.message);
    res.status(500).json({message:'Internal server error'})
   }
};

