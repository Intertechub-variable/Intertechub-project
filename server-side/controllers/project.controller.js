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

export const createProject = async (req, res) => {
    const { title, image, description, current_amount, target_amount, end_date, pdf } = req.body;
    try {
        let imageResult = null;
        let pdfResult = null;

        if (image) {
            imageResult = await cloudinary.uploader.upload(image, {
                folder: 'projects',
            });
        }

        // if (pdf) {
        //     pdfResult = await cloudinary.uploader.upload(pdf, {
        //         folder: 'projects',
        //         resource_type: 'raw',
        //     });
        // }

        const project = await Project.create({
            title,
            description,
            target_amount,
            end_date,
            creator: req.userId,
            image: imageResult?.secure_url ? imageResult?.secure_url : '',
            // pdf: pdfResult?.secure_url ? pdfResult?.secure_url : '',
        });

        res.json(project);
    } catch (error) {
        console.log('error in creating project', error.message);
        res.status(500).json({ message: 'Internal server error' });
    }
}
// export const fundingProject = async (req, res) => {
//   const { amount } = req.body;
//   const projectId = req.params.id;
//   try{

//   if (amount <= 0) {
//     return res.status(400).json({ message: 'Amount must be greater than zero' });
//   }

//   const project = await Project.findById(projectId);
//   if (!project) {
//     return res.status(404).json({ message: 'Project not found' });
//   }

//   project.current_amount += amount; // Increase current amount
//   await project.save();

//   res.json(project);
//   } catch(error){
//      console.log(error)
//     res.status(500).json({message:'Internal server error'})
//   }
// }

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
        if(project.image){
            try {
                const public_id = project.image.split('/').pop().split('.')[0];

                await cloudinary.uploader.destroy(`products/${public_id}`);
            } catch (error) {
                console.log('error deleting product from cloudinary',error.message)
            }
        }
        await Project.findByIdAndDelete(id);
        res.json({message:'Project deleted successfully'})

   } catch (error) {
        console.log('error in deleting product',error.message);
        res.status(500).json({message:'Internal server error'})
   }
};

export const approveProject = async (req, res) => {
    try {
        const {id} = req.params
        const project = await Project.findById(id);
        if(!project){
            return res.status(404).json({message:'Project not found'});
        };

        project.isApproved = true;
        await project.save();

        return res.json({message: 'Project approved successfully', project});
    } catch (error) {
        return res.status(500).json({message: 'Internal server error'})
    };
};
export const getUnApprovedProjects = async (req, res) => {
    try {
        const projects = await Project.find({isApproved : false});

        return res.status(200).send(projects);
    } catch (error) {
        return res.status(500)
            .json({
            error: 'Internal server error', 
            message: 'failed to get unapproved projects'
        });
    };
};

export const getApprovedProjects = async (req, res) => {
    try {
        const projects = await Project.find({isApproved : true});
        return res.status(200).send(projects);
    } catch (error) {
        return res
        .status(500)
        .json({
            error: 'Internal server error', 
            message: 'failed to get approved projects'
        });
    };
};

export const fundProject = async (req, res) => {
    try {
        const {id} = req.params;
        const amount = +req.body.amount;
        console.log(typeof amount)
        const project = await Project.findById(id);
        const minAmount = project.target_amount / 100
        if (amount < minAmount){
            res.status(400).send({message:`The minimum amount to fund is ${minAmount}`})
        }
        project.current_amount += amount
        project.donors.push({
            user: req.userId,
            amount,
            // donatedAt: Date.now
        });

        await project.save()

        return res.status(200).send({message: "project funded successfully"})

    } catch (error) {
        console.log(error.message)
        return res.status(500)
        .json({
            error: 'Internal server error', 
            message: 'failed to get fund project'
        });
    };
};

export const getProjectsFundedByMe = async (req, res) => {
    try {
        // Query the projects funded by the user
        const userId = req.userId
        const fundedProjects = await Project.find({
             'donors.user': userId 
            })
            .populate('donors.user', 'username email');
        
        return res.status(200).send(fundedProjects)
    } catch (error) {
        return res.status(500)
        .json({
            error: 'Internal server error', 
            message: 'Failed to get funded project'
        });
    }
}

