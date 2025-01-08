import React from 'react';
import { motion } from 'framer-motion';

export const Getapp = () => {
  return (
    <div className="container mx-auto h-screen flex items-center justify-center">
      <motion.div
        className="w-1/2 h-1/2 bg-white shadow-md rounded-lg overflow-hidden flex flex-col sm:flex-row"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header Section */}
        <motion.div
          className="flex items-center justify-center bg-gradient-to-r from-red-600 to-red-900 w-full sm:w-1/3 text-white p-4"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-center text-lg sm:text-xl lg:text-2xl font-bold">
            Get the App
          </h2>
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="w-full sm:w-2/3 bg-white p-6 flex flex-col items-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Microsoft Store */}
          <motion.div
            className="flex items-center justify-between w-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-red-600 text-3xl">
              <i className="fa-brands fa-microsoft"></i>
            </div>
            <button className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition text-sm sm:text-base">
              Microsoft Store
            </button>
          </motion.div>

          {/* Google Store */}
          <motion.div
            className="flex items-center justify-between w-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-red-600 text-3xl">
              <i className="fa-brands fa-google"></i>
            </div>
            <button className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition text-sm sm:text-base">
              Google Play Store
            </button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};
