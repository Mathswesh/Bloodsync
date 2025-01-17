import React, { useState } from "react";
import { motion } from "framer-motion";

const DateTimeForm = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Selected Date: ${date}, Selected Time: ${time}`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#9db4c0]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg"
      >
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">
            Choose Date & Time
          </h2>

          <div className="mb-4">
            <label
              htmlFor="date"
              className="block text-gray-600 font-medium mb-2"
            >
              Select Date
            </label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="time"
              className="block text-gray-600 font-medium mb-2"
            >
              Select Time
            </label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              required
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default DateTimeForm;
