 import mongoose from "mongoose";

export const dbFunction = async()=>{ 
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log('DB connected at:',conn.connection.host)
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
    
}
