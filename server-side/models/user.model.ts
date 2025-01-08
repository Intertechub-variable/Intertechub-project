import mongoose, { Schema, Document } from 'mongoose';

const UserSchema: Schema = new Schema({
  username: { 
    type: String, 
    required: [true, 'user name is required'], 
    // unique: true 
  },
  email: { 
    type: String, 
    required: [true, 'email is required'], 
    // unique: true 
  },
  password: { 
    type: String, 
    required: [true, 'password is required'] 
  },
  createdAt: { 
    type: Date, 
    default: Date.now 
  },
  updatedAt: { 
    type: Date, 
    default: Date.now 
  }
});

const User = mongoose.model('User', UserSchema);

export default User;