const User = require('../models/User');
const bcrypt = require('bcrypt');

// Register User
const registerUser = async (req, res) => {
  try {
    const { username, password, ...rest } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ username, password: hashedPassword, ...rest });
    await user.save();
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to register user' });
  }
};

// Login User
const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ error: 'User not found' });

    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) return res.status(401).json({ error: 'Invalid credentials' });

    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Login failed' });
  }
};

// Get Users (Admin Only)
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

const getUserDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id; // user ID from authentication middleware

    // Ensure that the user is either the one requesting their own data or an admin
    if (userId !== id && req.user.userType !== 'admin') {
      return res.status(403).json({ error: 'You are not authorized to view this user' });
    }

    const user = await User.findById(id);
    if (!user) return res.status(404).json({ error: 'User not found' });

    res.status(200).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch user details' });
  }
};

// Update User
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id; // user ID from authentication middleware

    // Ensure the logged-in user can only update their own profile or if the user is an admin
    if (userId !== id && req.user.userType !== 'admin') {
      return res.status(403).json({ error: 'You are not authorized to update this user' });
    }

    const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedUser) return res.status(404).json({ error: 'User not found' });

    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update user' });
  }
};

// Delete User
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user._id; // user ID from authentication middleware

    // Ensure the logged-in user can only delete their own profile or if the user is an admin
    if (userId !== id && req.user.userType !== 'admin') {
      return res.status(403).json({ error: 'You are not authorized to delete this user' });
    }

    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) return res.status(404).json({ error: 'User not found' });

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete user' });
  }
};

module.exports = { getUserDetails, registerUser, loginUser, getUsers, updateUser, deleteUser };
