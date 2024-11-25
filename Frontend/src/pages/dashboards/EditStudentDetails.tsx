import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useParams } from 'react-router-dom';

// Mock API call function (replace with your actual API calls)
const fetchStudentDetails = (id: string) => {
  return {
    firstName: 'John',
    fullName: 'John Doe',
    gender: 'Male',
    birthday: '2010-01-01',
    height: '120',
    weight: '30',
    specialNote: 'Allergic to peanuts',
    photoLink: 'https://via.placeholder.com/150', // Example image URL
    registerDate: '2023-05-12',
    homePhone: '123-456-7890',
    homeAddress: '1234 Elm Street',
    batchNumber: 'TK2026',
    username: 'johndoe',
    password: 'password123',
  };
};

const EditStudent = () => {
  const { studentId } = useParams<{ studentId: string }>();
  const navigate = useNavigate();
  
  const [student, setStudent] = useState<any>({
    firstName: '',
    fullName: '',
    gender: 'Male',
    birthday: '',
    height: '',
    weight: '',
    specialNote: '',
    photoLink: '',
    registerDate: '',
    homePhone: '',
    homeAddress: '',
    batchNumber: 'TK2025Y',
    username: '',
    password: '',
  });

  // Load student details on page load (replace with actual API call)
  useEffect(() => {
    if (studentId) {
      const studentDetails = fetchStudentDetails(studentId);
      setStudent(studentDetails);
    }
  }, [studentId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  const handleDelete = () => {
    // Call API to delete the student
    console.log(`Student with ID ${studentId} deleted.`);
    navigate('/students'); // Redirect to students list after delete
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Student updated:', student);
    // Call API to save updated student details
    alert('Student details updated!');
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl w-full space-y-8 bg-white p-8 rounded-xl shadow-lg"
      >
        <div className="text-center">
          <img
            src={student.photoLink || 'https://via.placeholder.com/150'}
            alt="Profile"
            className="mx-auto h-32 w-32 rounded-full object-cover"
          />
          <h2 className="mt-6 text-3xl font-bold gradient-text">Edit Student Details</h2>
          <p className="mt-2 text-sm text-gray-600">Update the student information below</p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {/* Student Details */}
          <fieldset className="border p-4 rounded-md space-y-4">
            <legend className="text-xl font-semibold">Student Details</legend>
            <div className="grid grid-cols-2 gap-4">
              <input
                name="firstName"
                value={student.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
                className="input-primary"
              />
              <input
                name="fullName"
                value={student.fullName}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="input-primary"
              />
              <select
                name="gender"
                value={student.gender}
                onChange={handleChange}
                className="input-primary"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <input
                name="birthday"
                type="date"
                value={student.birthday}
                onChange={handleChange}
                required
                className="input-primary"
              />
              <input
                name="height"
                value={student.height}
                onChange={handleChange}
                placeholder="Height (cm)"
                required
                className="input-primary"
              />
              <input
                name="weight"
                value={student.weight}
                onChange={handleChange}
                placeholder="Weight (kg)"
                required
                className="input-primary"
              />
              <textarea
                name="specialNote"
                value={student.specialNote}
                onChange={handleChange}
                placeholder="Special Note"
                rows={2}
                className="input-primary col-span-2"
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
                onChange={handleChange}
                placeholder="Home Phone Number"
                required
                className="input-primary"
              />
              <input
                name="homeAddress"
                value={student.homeAddress}
                onChange={handleChange}
                placeholder="Home Address"
                required
                className="input-primary"
              />
              <select
                name="batchNumber"
                value={student.batchNumber}
                onChange={handleChange}
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
                onChange={handleChange}
                placeholder="Username"
                required
                className="input-primary"
              />
              <input
                name="password"
                type="password"
                value={student.password}
                onChange={handleChange}
                placeholder="Password"
                required
                className="input-primary"
              />
            </div>
          </fieldset>

          {/* Buttons */}
          <div className="flex space-x-4">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary w-full"
            >
              Update Student
            </motion.button>

            <motion.button
              type="button"
              onClick={handleDelete}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-danger w-full"
            >
              Delete Student
            </motion.button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default EditStudent;
