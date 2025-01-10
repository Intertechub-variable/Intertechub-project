import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    creator: {
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    title: {
        type:String,
        required:[true,'Title is required'],
        trim:true
    },
    description:{
        type:String,
        required:[true,'Description is required'],
        trim:true,
    },
    // current_amount:{
    //     type:Number,
    //     // required:[true,'Current amount is required'],
    //     default:0,
    //     trim:true,
    // },
     
    target_amount:{
        type:Number,
        required:[true,'Target amount is required'],
        trim:true,
    },
    end_date:{
        type:Date,
        required:[true,'End date is required'],
        default:Date.now
    },
    image:{
        type:String,
        required:[true,'Project image is required'],
        default:''
    }
},
{
        timestamps:true
    }
)

const Project = mongoose.model('Project',projectSchema);
export default Project