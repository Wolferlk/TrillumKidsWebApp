import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, Calendar, Bell } from 'lucide-react';

const TeacherDashboard = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8 gradient-text"
      >
        Teacher Dashboard
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { icon: Users, title: 'Students', value: '25 Active' },
          { icon: BookOpen, title: 'Classes', value: '4 Today' },
          { icon: Calendar, title: 'Events', value: '2 This Week' },
          { icon: Bell, title: 'Notifications', value: '3 New' },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-xl shadow-lg"
          >
            <item.icon className="h-8 w-8 text-pink-500 mb-4" />
            <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
            <p className="text-gray-600">{item.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-xl shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4">Today's Schedule</h2>
          <div className="space-y-4">
            {[
              '9:00 AM - Morning Circle',
              '10:30 AM - Art Activity',
              '1:00 PM - Story Time',
            ].map((schedule, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="h-2 w-2 bg-pink-500 rounded-full" />
                <span>{schedule}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-xl shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4">Recent Updates</h2>
          <div className="space-y-4">
            {[
              'New student joining next week',
              'Parent meeting scheduled',
              'Curriculum update available',
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
  );
};

export default TeacherDashboard;