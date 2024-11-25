const express = require('express');
const { registerUser, loginUser, updateUser, deleteUser, getUsers, getUserDetails } = require('../controllers/userController');

const router = express.Router();

// Register User
router.post('/register', registerUser);
router.get('/register', registerUser);

// Login User
router.post('/login', loginUser);

// Get all Users (Admin only)
router.get('/users', getUsers);


router.get('/user/:id', getUserDetails); 

// Update User
router.put('/:id', updateUser);

// Delete User
router.delete('/:id', deleteUser);

module.exports = router;
