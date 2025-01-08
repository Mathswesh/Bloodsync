import React from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 px-6 sm:px-12">
      {/* Container for the contact page */}
      <div className="max-w-7xl mx-auto">
        
        {/* Contact Section Header */}
        <motion.h1
          className="text-4xl font-bold text-center text-gray-800 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Contact Us
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">Get in Touch</h2>
            
            <form>
              {/* Name Field */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-600">Full Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your full name"
                />
              </div>

              {/* Email Field */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-600">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your email"
                />
              </div>

              {/* Message Field */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-600">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information Section */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">Our Contact Info</h2>
            
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-700">Phone</h3>
              <p className="text-gray-600">+1 234 567 890</p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-700">Email</h3>
              <p className="text-gray-600">contact@example.com</p>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-700">Address</h3>
              <p className="text-gray-600">1234 Street Name, City, Country</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
