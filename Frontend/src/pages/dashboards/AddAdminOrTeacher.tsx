import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const AddAdminOrTeacher = () => {
  const [user, setUser] = useState({
    fullName: '',
    phoneNumber: '',
    username: '',
    password: '',
    email: '', // Added email field
    photoLink: '',
    userType: 'teacher', // Default type is teacher, can switch to admin
  });

  const navigate = useNavigate(); // For navigation after success

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!user.fullName || !user.phoneNumber || !user.username || !user.password || !user.email) {
      toast.error('Please fill in all required fields.');
      return;
    }

    // Email format validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(user.email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    try {
      // Send the request to the server
      const response = await axios.post('http://localhost:5000/api/users/register', user);
      console.log('Response:', response.data);

      toast.success(`${user.userType} account created successfully!`);
      navigate('/'); // Redirect to the homepage or another page after success
    } catch (error) {
      console.error('Error:', error);

      // Specific error handling based on response status
      if (error.response) {
        toast.error(error.response.data.message || 'Failed to create the account.');
      } else {
        toast.error('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg"
      >
        <h2 className="text-center text-3xl font-bold">
          Add {user.userType === 'teacher' ? 'Teacher' : 'Admin'} Account
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            name="fullName"
            value={user.fullName}
            onChange={handleInputChange}
            placeholder="Full Name"
            required
            className="input-primary"
          />
          <input
            name="phoneNumber"
            value={user.phoneNumber}
            onChange={handleInputChange}
            placeholder="Phone Number"
            required
            className="input-primary"
          />
          <input
            name="username"
            value={user.username}
            onChange={handleInputChange}
            placeholder="Username"
            required
            className="input-primary"
          />
          <input
            name="password"
            type="password"
            value={user.password}
            onChange={handleInputChange}
            placeholder="Password"
            required
            className="input-primary"
          />
          <input
            name="email"
            type="email"
            value={user.email}
            onChange={handleInputChange}
            placeholder="Email Address"
            required
            className="input-primary"
          />
          <input
            name="photoLink"
            value={user.photoLink}
            onChange={handleInputChange}
            placeholder="Photo Link (Optional)"
            className="input-primary"
          />
          <select
            name="userType"
            value={user.userType}
            onChange={handleInputChange}
            className="input-primary"
          >
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </select>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary w-full"
          >
            Add Account
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default AddAdminOrTeacher;
