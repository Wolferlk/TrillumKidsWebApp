import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [userTypeFilter, setUserTypeFilter] = useState('');
  const [batchFilter, setBatchFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true); // Set loading to true while fetching data
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:5000/api/users', {
          params: {
            page: currentPage,
            search,
            userTypeFilter,
            batchFilter,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data && response.data.users) {
          setUsers(response.data.users);
          setTotalPages(response.data.totalPages || 1);
        } else {
          setUsers([]); // Handle cases where no data is returned
        }
      } catch (error) {
        console.error('Error fetching users:', error);
        toast.error('Failed to fetch users.');
      } finally {
        setLoading(false); // Stop loading after fetch is complete
      }
    };

    fetchUsers();
  }, [currentPage, search, userTypeFilter, batchFilter]);

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/api/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success('User deleted successfully!');
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
    } catch (error) {
      console.error('Error deleting user:', error);
      toast.error('Failed to delete user.');
    }
  };

  const filteredUsers = users.filter((user) => {
    const fullNameMatch = user.fullName?.toLowerCase().includes(search.toLowerCase());
    const userTypeMatch = userTypeFilter ? user.userType === userTypeFilter : true;
    const batchMatch = batchFilter ? user.batchNumber === batchFilter : true;

    return fullNameMatch && userTypeMatch && batchMatch;
  });

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl w-full space-y-8 bg-white p-8 rounded-xl shadow-lg"
      >
        <div className="flex justify-between items-center mb-4">
          <div className="flex space-x-4">
            <select
              value={userTypeFilter}
              onChange={(e) => setUserTypeFilter(e.target.value)}
              className="input-primary"
            >
              <option value="">All User Types</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="admin">Admin</option>
            </select>

            <select
              value={batchFilter}
              onChange={(e) => setBatchFilter(e.target.value)}
              className="input-primary"
            >
              <option value="">All Batches</option>
              {['TK2025Y', 'TK2026', 'TK2027', 'TK2028', 'TK2029', 'TK2030'].map((batch) => (
                <option key={batch} value={batch}>
                  {batch}
                </option>
              ))}
            </select>
          </div>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by Full Name"
            className="input-primary w-1/3"
          />
        </div>

        {loading ? (
          <div className="text-center py-4">Loading...</div>
        ) : (
          <table className="min-w-full mt-6">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Full Name</th>
                <th className="px-4 py-2 text-left">Email</th>
                <th className="px-4 py-2 text-left">Batch Number</th>
                <th className="px-4 py-2 text-left">User Type</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user) => (
                  <tr key={user._id}>
                    <td className="px-4 py-2">{user.fullName}</td>
                    <td className="px-4 py-2">{user.email}</td>
                    <td className="px-4 py-2">{user.batchNumber}</td>
                    <td className="px-4 py-2">{user.userType}</td>
                    <td className="px-4 py-2 space-x-4">
                      <Link to={`/edit-user/${user._id}`}>
                        <button className="btn-primary">View</button>
                      </Link>
                      <button onClick={() => handleDelete(user._id)} className="btn-danger">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-4">
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}

        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="btn-primary"
          >
            Prev
          </button>
          <span>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="btn-primary"
          >
            Next
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default UserManagement;
