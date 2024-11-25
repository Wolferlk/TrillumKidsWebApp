import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Brain, Users, Calendar } from 'lucide-react';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://player.vimeo.com/external/517090081.hd.mp4?s=0a9e4f8f5f3c8d9e3b3d3e3e3e3e3e3e3e3e3e&profile_id=175"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/70 to-blue-500/70" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Welcome to Trillium Kids PreSchool
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl mb-8"
          >
            Where Every Child's Journey Begins with Wonder and Joy
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white text-pink-500 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors"
          >
            Enroll Now
          </motion.button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Trillium Kids?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide a nurturing environment where children can learn, grow, and thrive
              through play-based education and personalized attention.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Heart,
                title: 'Nurturing Care',
                description: 'Dedicated teachers who create a loving and supportive environment',
              },
              {
                icon: Brain,
                title: 'Creative Learning',
                description: 'Innovative programs that spark curiosity and imagination',
              },
              {
                icon: Users,
                title: 'Small Classes',
                description: 'Personalized attention with low student-to-teacher ratios',
              },
              {
                icon: Calendar,
                title: 'Flexible Schedule',
                description: "Programs that fit your family's busy lifestyle",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <feature.icon className="w-12 h-12 text-pink-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-pink-500 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Join Our Family?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule a tour today and see why Trillium Kids PreSchool is the perfect place
            for your child's early education journey.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-white text-pink-500 px-8 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors"
          >
            Schedule a Tour
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Home;
