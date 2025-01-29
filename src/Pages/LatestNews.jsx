import React from "react";
import { motion } from "framer-motion";

const newsData = [
  {
    title: "Call for Proposals for Research Support",
    date: "9/22/2024",
    image: "https://via.placeholder.com/150",
    author: "M. M. Patel Students Research Project Cell, KSV",
  },
  {
    title: "Launch of GST Analytics Hackathon",
    date: "8/20/2024",
    image: "https://via.placeholder.com/150",
    author: "Goods and Service Tax Network",
  },
  {
    title: "Extension of SIH 2024 Idea Submission Deadline",
    date: "9/18/2024",
    image: "https://via.placeholder.com/150",
    author: "Smart India Hackathon",
  },
];

const NewsCard = ({ title, date, image, author }) => (
  <motion.div
    className="bg-white shadow-md rounded-lg p-4"
    whileHover={{
      scale: 1.05,
      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
    }}
    whileTap={{ scale: 0.95 }}
  >
    <img
      src={image}
      alt={title}
      className="rounded-lg w-full h-40 object-cover"
    />
    <div className="mt-4">
      <p className="text-sm" style={{ color: "#027c68" }}>
        {date}
      </p>
      <h2
        className="text-lg font-semibold mt-2"
        style={{ color: "#027c68" }}
      >
        {title}
      </h2>
      <p className="text-sm mt-2" style={{ color: "#027c68" }}>
        {author}
      </p>
    </div>
  </motion.div>
);

export const LatestNews = () => {
  // Framer Motion animation variants for cards
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <div style={{ backgroundColor: "#9db4c0", padding: "3rem 0" }}>
      <motion.div
        className="container mx-auto px-4"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-2xl font-bold text-center mb-6"
          style={{ color: "#027c68" }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Latest News
        </motion.h1>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {newsData.map((news, index) => (
            <motion.div key={index} variants={cardVariants}>
              <NewsCard {...news} />
            </motion.div>
          ))}
        </motion.div>
        <div className="text-center mt-6">
          <motion.button
            className="py-2 px-4 rounded-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{
              backgroundColor: "#027c68",
              color: "#fff",
            }}
          >
            View All News
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};
