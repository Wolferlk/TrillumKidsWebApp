import React from 'react';
import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&q=80&w=800',
      title: 'Art & Creativity'
    },
    {
      url: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=800',
      title: 'Outdoor Activities'
    },
    {
      url: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800',
      title: 'Science Experiments'
    },
    {
      url: 'https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?auto=format&fit=crop&q=80&w=800',
      title: 'Music & Movement'
    },
    {
      url: 'https://images.unsplash.com/photo-1555009393-f20bdb245c4d?auto=format&fit=crop&q=80&w=800',
      title: 'Story Time'
    },
    {
      url: 'https://images.unsplash.com/photo-1576334593420-3b0d4bff5270?auto=format&fit=crop&q=80&w=800',
      title: 'Playtime Fun'
    }
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 gradient-text">Our Gallery</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a peek into the joyful moments and learning adventures at Trillium Kids PreSchool
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="relative group rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white text-xl font-semibold">{image.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Gallery;