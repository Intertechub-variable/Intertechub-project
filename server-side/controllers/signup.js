import bcrypt from 'bcrypt';
import User from '../models/user.model.js'

const signUp = async (req, res) => {
  const { username, email, password } = req.body;
   
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Check if there is any user in the database and if none make it an admin 
    const users = await User.find();
    if (users.length === 0) {
      req.body.role = 'admin';
    };

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: hashedPassword
    });

    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: 'Server error', error });
  }
};

export default signUp;