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
    current_amount:{
        type:Number,
        required:[true,'Current amount is required'],
        trim:true,
    },
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
    },
    pdf: {
        type: Buffer,
        required: true
    },
    isApproved: {
        type: Boolean,
        default: true
    },
    donors: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        amount: {
            type: Number,
            required: true
        },
        donatedAt: {
            type: Date,
            default: Date.now
        }
    }]
},
{
        timestamps:true
    }
)

const Project = mongoose.model('Project',projectSchema);
export default Project