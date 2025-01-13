import React from "react";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <div className="bg-[#9db4c0] min-h-screen flex flex-col items-center py-8">
      {/* Intro Section */}
      <motion.div
        className="max-w-4xl text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-red-600 mb-6">About BloodSync</h1>
        <p className="text-gray-700 text-lg mb-4">
          BloodSync is a revolutionary platform that connects blood donors with
          hospitals in need. Our mission is to simplify the blood donation
          process and make life-saving resources accessible to all.
        </p>
        <p className="text-gray-700 text-lg">
          Since our inception, we’ve been committed to fostering a community of
          care and support, ensuring no patient has to wait for critical
          assistance.
        </p>
      </motion.div>

      {/* History Section */}
      <motion.div
        className="max-w-5xl mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-red-600 mb-4">Our History</h2>
        <p className="text-gray-600 mb-4">
          BloodSync was founded in 2020 in response to the growing challenges of
          blood shortages and inefficient donation systems. What began as a
          small community project has now evolved into a trusted global
          platform, impacting millions of lives.
        </p>
        <p className="text-gray-600">
          Over the years, we’ve collaborated with hospitals, non-profits, and
          health organizations to create a seamless network for blood donation
          and distribution.
        </p>
      </motion.div>

      {/* Features Section */}
      <motion.div
        className="flex flex-wrap justify-center gap-6 mt-8 max-w-5xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="bg-white shadow-md rounded-lg p-6 w-80 text-center">
          <h2 className="text-xl font-bold text-red-600">Real-Time Search</h2>
          <p className="text-gray-600 mt-2">
            Locate hospitals nearby with real-time availability for blood
            donation appointments.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 w-80 text-center">
          <h2 className="text-xl font-bold text-red-600">Data-Driven Insights</h2>
          <p className="text-gray-600 mt-2">
            Our platform leverages data analytics to predict blood demand trends
            and improve resource allocation.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 w-80 text-center">
          <h2 className="text-xl font-bold text-red-600">Global Network</h2>
          <p className="text-gray-600 mt-2">
            BloodSync connects donors and hospitals across 20+ countries,
            creating a unified global effort to save lives.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 w-80 text-center">
          <h2 className="text-xl font-bold text-red-600">Community Impact</h2>
          <p className="text-gray-600 mt-2">
            Join a network of over 50,000 registered donors committed to
            bringing hope and healing to those in need.
          </p>
        </div>
      </motion.div>

      {/* Statistics Section */}
      <motion.div
        className="bg-gray-100 py-8 w-full mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-red-600 mb-4">
            BloodSync in Numbers
          </h2>
          <div className="flex justify-center gap-12">
            <div>
              <h3 className="text-4xl font-bold text-gray-800">1,000+</h3>
              <p className="text-gray-600">Hospitals Connected</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-gray-800">20,000+</h3>
              <p className="text-gray-600">Donors Registered</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-gray-800">75,000+</h3>
              <p className="text-gray-600">Lives Impacted</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        className="container mx-auto px-6 py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-red-600 text-center mb-6">
          Testimonials
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="bg-white shadow-md rounded-lg p-6 w-80 text-center">
            <p className="text-gray-600">
              "BloodSync is a game-changer. I never imagined donating blood
              could be this easy and impactful." – Sarah K.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 w-80 text-center">
            <p className="text-gray-600">
              "This platform saved my father’s life by connecting us to a donor
              in minutes. Forever grateful!" – Mark R.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 w-80 text-center">
            <p className="text-gray-600">
              "As a regular donor, BloodSync makes it simple to find nearby
              hospitals and manage appointments." – Emily B.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Vision Section */}
      <motion.div
        className="max-w-4xl mt-12 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-red-600 mb-4">Our Vision</h2>
        <p className="text-gray-600">
          At BloodSync, we envision a world where blood is never a scarcity. A
          world where every patient receives timely assistance, and every donor
          is celebrated as a hero. Together, we can make this vision a reality.
        </p>
      </motion.div>
    </div>
  );
};
