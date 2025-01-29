import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const ObjectivesPage = () => {
  const [objectives, setObjectives] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulate fetching data from an API
  useEffect(() => {
    const fetchObjectives = async () => {
      setLoading(true);
      // Replace with actual API call
      const response = await new Promise((resolve) =>
        setTimeout(
          () =>
            resolve([
              {
                title: "Research Excellence",
                description:
                  "Foster a culture of high-quality research and innovation among students.",
                icon: "💡",
              },
              {
                title: "Critical Thinking",
                description:
                  "Develop analytical and critical thinking skills essential for groundbreaking research.",
                icon: "🧠",
              },
              {
                title: "Collaborative Research",
                description:
                  "Promote interdisciplinary collaboration and teamwork in research projects.",
                icon: "🤝",
              },
              {
                title: "Innovation Catalyst",
                description:
                  "Stimulate cutting-edge ideas and transform them into impactful research outcomes.",
                icon: "🚀",
              },
              {
                title: "Problem Solving",
                description:
                  "Equip students with advanced problem-solving skills for tackling complex research challenges.",
                icon: "🔧",
              },
              {
                title: "Research Grant",
                description:
                  "Provide support and guidance for securing research grants and funding opportunities.",
                icon: "💰",
              },
            ]),
          1000
        )
      );
      setObjectives(response);
      setLoading(false);
    };

    fetchObjectives();
  }, []);

  // Framer Motion animation variants
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
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen" style={{ backgroundColor: "#9db4c0" }}>
        <p className="text-xl font-semibold" style={{ color: "#027c68" }}>
          Loading...
        </p>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#9db4c0", padding: "3rem 0" }}>
      <motion.div
        className="container mx-auto px-4"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ color: "#027c68" }}
        >
          Objectives of MMPSRPC
        </motion.h1>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {objectives.map((objective, index) => (
            <motion.div
              key={index}
              className="shadow-lg rounded-lg p-6 text-center"
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              style={{ backgroundColor: "#fff" }}
            >
              <div
                className="flex items-center justify-center w-16 h-16 rounded-full mx-auto text-2xl"
                style={{
                  backgroundColor: "#9db4c0",
                  color: "#027c68",
                }}
              >
                {objective.icon}
              </div>
              <h2
                className="text-xl font-semibold mt-4"
                style={{ color: "#027c68" }}
              >
                {objective.title}
              </h2>
              <p
                className="text-sm mt-2"
                style={{ color: "#027c68" }}
              >
                {objective.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
