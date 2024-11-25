import React, { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { toast } from 'react-toastify'; // Import toast
import 'react-toastify/dist/ReactToastify.css'; // Import CSS

const RegisterStudent = () => {
  const [student, setStudent] = useState({
    firstName: '',
    fullName: '',
    gender: '',
    birthday: '',
    height: '',
    weight: '',
    specialNote: '',
    photoLink: '',
    registerDate: new Date().toISOString().split('T')[0], // Auto-generate registration date
    homePhone: '',
    homeAddress: '',
    batchNumber: '',
    username: '',
    password: '',
    email: '', // Added email field
    userType: 'student', // Add the userType field (student, teacher, admin)
  });

  const [guardianType, setGuardianType] = useState('mom');
  const [guardianDetails, setGuardianDetails] = useState({
    name: '',
    phoneNumber: '',
    id: '',
    job: '',
    address: '',
  });

  const handleStudentChange = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  const handleGuardianChange = (e) => {
    const { name, value } = e.target;
    setGuardianDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple form validation
    if (!student.firstName || !student.fullName || !student.username || !student.password || !student.email) {
      toast.error('Please fill in all required fields.');
      return;
    }

    const formData = {
      ...student,
      guardianType,
      guardianDetails,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/users/register', formData);
      console.log('Response:', response.data);
      
      toast.success('Student Registered Successfully!');
    } catch (error) {
      console.error('Error:', error);
      
      toast.error('Failed to register student');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl w-full space-y-8 bg-white p-8 rounded-xl shadow-lg"
      >
        <h2 className="text-center text-3xl font-bold">Register Student</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Student Details */}
          <fieldset className="border p-4 rounded-md space-y-4">
            <legend className="text-xl font-semibold">Student Details</legend>
            <div className="grid grid-cols-2 gap-4">
              <input
                name="firstName"
                value={student.firstName}
                onChange={handleStudentChange}
                placeholder="First Name"
                required
                className="input-primary"
              />
              <input
                name="fullName"
                value={student.fullName}
                onChange={handleStudentChange}
                placeholder="Full Name"
                required
                className="input-primary"
              />
              <select
                name="gender"
                value={student.gender}
                onChange={handleStudentChange}
                className="input-primary"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <input
                name="birthday"
                type="date"
                value={student.birthday}
                onChange={handleStudentChange}
                required
                className="input-primary"
              />
              <input
                name="height"
                value={student.height}
                onChange={handleStudentChange}
                placeholder="Height (cm)"
                required
                className="input-primary"
              />
              <input
                name="weight"
                value={student.weight}
                onChange={handleStudentChange}
                placeholder="Weight (kg)"
                required
                className="input-primary"
              />
              <textarea
                name="specialNote"
                value={student.specialNote}
                onChange={handleStudentChange}
                placeholder="Special Note"
                rows={2}
                className="input-primary col-span-2"
              />
              <input
                name="photoLink"
                value={student.photoLink}
                onChange={handleStudentChange}
                placeholder="Photo Link"
                className="input-primary col-span-2"
              />
            </div>
          </fieldset>

          {/* Guardian Details */}
          <fieldset className="border p-4 rounded-md space-y-4">
            <legend className="text-xl font-semibold">Guardian Details</legend>
            <div className="flex justify-center space-x-4">
              {['mom', 'dad', 'guardian'].map((type) => (
                <motion.button
                  key={type}
                  onClick={() => setGuardianType(type)}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${guardianType === type ? 'bg-gradient-to-r from-pink-500 to-blue-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </motion.button>
              ))}
            </div>
            <div className="space-y-4">
              <input
                name="name"
                value={guardianDetails.name}
                onChange={handleGuardianChange}
                placeholder={`${guardianType === 'mom' ? 'Mom' : guardianType === 'dad' ? 'Dad' : 'Guardian'} Name`}
                required
                className="input-primary"
              />
              <input
                name="phoneNumber"
                value={guardianDetails.phoneNumber}
                onChange={handleGuardianChange}
                placeholder="Phone Number"
                required
                className="input-primary"
              />
              <input
                name="id"
                value={guardianDetails.id}
                onChange={handleGuardianChange}
                placeholder="ID"
                required
                className="input-primary"
              />
              <input
                name="job"
                value={guardianDetails.job}
                onChange={handleGuardianChange}
                placeholder="Job"
                className="input-primary"
              />
              <textarea
                name="address"
                value={guardianDetails.address}
                onChange={handleGuardianChange}
                placeholder="Address"
                rows={2}
                className="input-primary"
              />
            </div>
          </fieldset>

          {/* Other Details */}
          <fieldset className="border p-4 rounded-md space-y-4">
            <legend className="text-xl font-semibold">Other Details</legend>
            <div className="grid grid-cols-2 gap-4">
              <input
                name="homePhone"
                value={student.homePhone}
                onChange={handleStudentChange}
                placeholder="Home Phone Number"
                required
                className="input-primary"
              />
              <input
                name="homeAddress"
                value={student.homeAddress}
                onChange={handleStudentChange}
                placeholder="Home Address"
                required
                className="input-primary"
              />
              <select
                name="batchNumber"
                value={student.batchNumber}
                onChange={handleStudentChange}
                required
                className="input-primary"
              >
                {['TK2025Y', 'TK2026', 'TK2027', 'TK2028', 'TK2029', 'TK2030'].map((batch) => (
                  <option key={batch} value={batch}>
                    {batch}
                  </option>
                ))}
              </select>
              <input
                name="username"
                value={student.username}
                onChange={handleStudentChange}
                placeholder="Username"
                required
                className="input-primary"
              />
              <input
                name="password"
                type="password"
                value={student.password}
                onChange={handleStudentChange}
                placeholder="Password"
                required
                className="input-primary"
              />
              <input
                name="email"
                type="email"
                value={student.email}
                onChange={handleStudentChange}
                placeholder="Email"
                required
                className="input-primary"
              />
              {/* User Type Selection */}
              <select
                name="userType"
                value={student.userType}
                onChange={handleStudentChange}
                className="input-primary col-span-2"
              >
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="admin">Admin</option>
              </select>
            </div>
          </fieldset>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary w-full"
          >
            Register Student
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default RegisterStudent;
