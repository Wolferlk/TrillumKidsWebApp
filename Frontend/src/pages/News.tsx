import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

const News = () => {
  const news = [
    {
      date: '2024-03-15',
      title: 'Spring Festival Coming Up!',
      excerpt: 'Join us for our annual Spring Festival filled with fun activities, performances, and family entertainment.',
      image: 'https://images.unsplash.com/photo-1526634332515-d56c5fd16991?auto=format&fit=crop&q=80&w=800'
    },
    {
      date: '2024-03-10',
      title: 'New Art Program Launch',
      excerpt: 'Introducing our enhanced art program featuring weekly workshops with local artists.',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800'
    },
    {
      date: '2024-03-05',
      title: 'Parent Workshop Series',
      excerpt: 'Monthly workshops focusing on child development, nutrition, and positive parenting strategies.',
      image: 'https://images.unsplash.com/photo-1531498860502-7c67cf02f657?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4 gradient-text">Latest News</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest happenings, events, and announcements at Trillium Kids
          </p>
        </motion.div>

        <div className="grid gap-8">
          {news.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img
                    className="h-48 w-full md:w-48 object-cover"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(item.date).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                  <h2 className="text-xl font-semibold mb-3">{item.title}</h2>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="text-pink-500 font-medium flex items-center"
                  >
                    Read More <ArrowRight className="h-4 w-4 ml-2" />
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;