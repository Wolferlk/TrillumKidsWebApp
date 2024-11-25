import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Award, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Heart, value: '15+', label: 'Years Experience' },
    { icon: Star, value: '500+', label: 'Happy Students' },
    { icon: Award, value: '50+', label: 'Programs' },
    { icon: Users, value: '30+', label: 'Expert Teachers' }
  ];

  return (
    <div className="py-12">
      {/* Hero Section */}
      <div className="relative h-[40vh] mb-16">
        <img
          src="https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?auto=format&fit=crop&q=80&w=1920"
          alt="Preschool Environment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/70 to-blue-500/70 flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white text-center"
          >
            About Trillium Kids
          </motion.h1>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6 gradient-text">Our Mission</h2>
          <p className="text-gray-600 text-lg">
            To create a nurturing and stimulating environment where children can develop
            their full potential through play-based learning, creative expression, and
            social interaction.
          </p>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="bg-gradient-to-r from-pink-500 to-blue-500 py-16 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center text-white"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-4" />
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          <div>
            <h2 className="text-3xl font-bold mb-6 gradient-text">Our Values</h2>
            <ul className="space-y-4">
              {[
                'Child-centered learning approach',
                'Safe and nurturing environment',
                'Qualified and passionate educators',
                'Inclusive and diverse community',
                'Partnership with families'
              ].map((value, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  <span className="h-2 w-2 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full" />
                  <span className="text-gray-600">{value}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&q=80&w=800"
              alt="Children Playing"
              className="rounded-lg shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;