import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Book, Clock, MessageSquare } from 'lucide-react';

const ParentDashboard = () => {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-8 gradient-text"
      >
        Parent Dashboard
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { icon: Calendar, title: 'Events', value: '3 Upcoming' },
          { icon: Book, title: 'Activities', value: '12 This Week' },
          { icon: Clock, title: 'Attendance', value: '95%' },
          { icon: MessageSquare, title: 'Messages', value: '2 New' },
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
          <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
          <div className="space-y-4">
            {['Art Class', 'Story Time', 'Outdoor Play'].map((activity, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="h-2 w-2 bg-pink-500 rounded-full" />
                <span>{activity}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-6 rounded-xl shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
          <div className="space-y-4">
            {[
              'Parent-Teacher Meeting - March 15',
              'Spring Festival - March 20',
              'Field Trip - March 25',
            ].map((event, index) => (
              <div key={index} className="flex items-center space-x-4">
                <div className="h-2 w-2 bg-blue-500 rounded-full" />
                <span>{event}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ParentDashboard;