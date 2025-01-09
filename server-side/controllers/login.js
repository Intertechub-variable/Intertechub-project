import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js' // Adjust the path as necessary

const login = async (req, res) => {
  const { email, password } = req.body;
console.log(email)
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credential' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credential' });
    }

    // Create and sign a token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '10d' });

    res.cookie('token', token, { httpOnly: true });
    res.json({ user: { id: user._id,name:user.username, email: user.email } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

export default login;