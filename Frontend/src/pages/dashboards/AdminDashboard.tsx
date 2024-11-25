import React from 'react';
import { motion } from 'framer-motion';
import { Users, DollarSign, FileText, Settings, PlusCircle, Edit2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';



const AdminDashboard = () => {

  const navigate = useNavigate();
  
  return (
    <div className="p-6 max-w-7xl mx-auto flex">
      {/* Sidebar for Action Buttons */}
      <div className="fixed top-20 left-0 w-64 p-6 bg-white shadow-lg rounded-xl">
        <h2 className="text-xl font-semibold mb-6">Actions</h2>
        {[ 
          { text: 'Add New Student', icon: PlusCircle, action:() => navigate('/dashboard/admin/Signin') },
          { text: 'Add New Admin', icon: PlusCircle, action:() => navigate('/dashboard/admin/adddminorteacher') },
          { text: 'Add News', icon: PlusCircle, action: () => alert('Add News') },
          { text: 'Add Notice', icon: PlusCircle, action: () => alert('Add Notice') },
          { text: 'Add Educational Materials', icon: PlusCircle, action: () => alert('Add EDU Materials') },
          { text: 'Edit Student', icon: Edit2, action: () => alert('Edit Student') },
          { text: 'Edit Teacher', icon: Edit2, action: () => alert('Edit Teacher') },
        ].map((button, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="mb-4 flex items-center justify-start p-4 rounded-xl cursor-pointer hover:bg-gray-100"
          >
            <button
              onClick={button.action}
              className="flex items-center text-pink-500 hover:text-pink-700 w-full"
            >
              <button.icon className="h-6 w-6 mr-2" />
              <span>{button.text}</span>
            </button>
          </motion.div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="ml-72 w-full">
        {/* Dashboard Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-8 gradient-text"
        >
          Admin Dashboard
        </motion.h1>

        {/* Overview Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {[ 
            { icon: Users, title: 'Total Students', value: '150' },
            { icon: DollarSign, title: 'Revenue', value: '$45,000' },
            { icon: FileText, title: 'Reports', value: '12 New' },
            { icon: Settings, title: 'System Status', value: 'All Good' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
            >
              <item.icon className="h-10 w-10 text-pink-500 mb-4" />
              <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
              <p className="text-gray-600">{item.value}</p>
            </motion.div>
          ))}
        </div>

        {/* Recent Activities Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Recent Enrollments */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-4">Recent Enrollments</h2>
            <div className="space-y-4">
              {[ 
                'Sarah Johnson - Age 4', 
                'Michael Smith - Age 3', 
                'Emma Davis - Age 5'
              ].map((enrollment, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="h-2 w-2 bg-pink-500 rounded-full" />
                  <span>{enrollment}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* System Updates */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <h2 className="text-xl font-semibold mb-4">System Updates</h2>
            <div className="space-y-4">
              {[ 
                'New curriculum module added', 
                'Payment system updated', 
                'Staff schedule optimized'
              ].map((update, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="h-2 w-2 bg-blue-500 rounded-full" />
                  <span>{update}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
