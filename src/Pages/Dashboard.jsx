import React from "react";
import { motion } from "framer-motion";
import { Link , Route , Routes } from "react-router-dom";
import {Addevent} from './Addevent'
const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="hidden md:flex flex-col bg-blue-600 text-white w-64 p-6 space-y-6 fixed z-10 h-screen top-0"
      >
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <nav>
          <ul className="space-y-4">
            <li className="hover:bg-blue-500 p-3 rounded-lg cursor-pointer">
              <Link>Home</Link>
            </li>
            <li className="hover:bg-blue-500 p-3 rounded-lg cursor-pointer">
              <Link to="/addevent">Add Events</Link>
            </li>
            <li className="hover:bg-blue-500 p-3 rounded-lg cursor-pointer">
              <Link>Reports</Link>
            </li>
            <li className="hover:bg-blue-500 p-3 rounded-lg cursor-pointer">
              <Link>Settings</Link>
            </li>
          </ul>
        </nav>
      </motion.aside>

      <div className="flex flex-col flex-1">
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-white shadow p-4 flex items-center justify-between"
        >
          <h2 className="text-lg font-bold">Welcome to the Dashboard</h2>
          <button className="md:hidden bg-blue-600 text-white p-2 rounded-lg">
            Menu
          </button>
        </motion.header>
        
       {/* <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="p-6 "
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((card) => (
              <motion.div
                key={card}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white shadow rounded-lg p-4"
              >
                <h3 className="text-lg font-semibold">Card {card}</h3>
                <p className="text-gray-600">Some content here...</p>
              </motion.div>
            ))}
          </div>
        </motion.main>
        */}
      </div>
    </div>
  );
};

export default Dashboard;
