import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Identify Research Problem",
    description: "Define the core question or issue to be investigated.",
    icon: "🔍",
  },
  {
    number: "02",
    title: "Conduct Literature Review",
    description: "Examine existing research and theories related to the problem.",
    icon: "📖",
  },
  {
    number: "03",
    title: "Specify Purpose & Research Questions",
    description:
      "Clearly state the objectives and specific questions to be answered.",
    icon: "🎯",
  },
  {
    number: "04",
    title: "Develop Conceptual Framework",
    description: "Create a theoretical basis for the research design.",
    icon: "💡",
  },
  {
    number: "05",
    title: "Apply for Funds",
    description: "Secure financial support for your research project.",
    icon: "💰",
  },
];

export const ResearchApproach = () => {
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
          Approach to Research Excellence
        </motion.h1>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex items-center shadow-md rounded-lg p-6"
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              style={{ backgroundColor: "#fff" }}
            >
              <div
                className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-full text-2xl font-bold"
                style={{ backgroundColor: "#9db4c0", color: "#027c68" }}
              >
                {step.icon}
              </div>
              <div className="ml-4">
                <h2
                  className="text-lg font-semibold"
                  style={{ color: "#027c68" }}
                >
                  {step.title}
                </h2>
                <p
                  className="text-sm mt-1"
                  style={{ color: "#027c68" }}
                >
                  {step.description}
                </p>
              </div>
              <div
                className="ml-auto text-4xl font-bold"
                style={{ color: "#027c68" }}
              >
                {step.number}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
