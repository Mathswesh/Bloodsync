// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link, Outlet } from "react-router-dom";

// export const AppDashboard = () => {
//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-100">
//         <nav className="bg-blue-600 text-white p-4">
//           <ul className="flex space-x-4">
//             <li>
//               <Link to="/" className="hover:underline">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/dashboard" className="hover:underline">
//                 Dashboard
//               </Link>
//             </li>
//           </ul>
//         </nav>
//         <main className="p-6">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/dashboard" element={<Dashboard />}>
//               <Route path="overview" element={<Overview />} />
//               <Route path="settings" element={<Settings />} />
//             </Route>
//           </Routes>
//         </main>
//       </div>
//     </Router>
//   );
// };

// const Home = () => (
//   <div className="text-center">
//     <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
//     <p className="mt-4">Navigate to the dashboard to explore nested routes.</p>
//   </div>
// );

// const Dashboard = () => (
//   <div className="space-y-4">
//     <h1 className="text-xl font-semibold">Dashboard</h1>
//     <nav className="flex space-x-4">
//       <Link to="overview" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
//         Overview
//       </Link>
//       <Link to="settings" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
//         Settings
//       </Link>
//     </nav>
//     <div className="mt-6 p-4 bg-white rounded shadow">
//       <Outlet />
//     </div>
//   </div>
// );

// const Overview = () => (
//   <div>
//     <h2 className="text-lg font-medium">Overview</h2>
//     <p>This is the overview section of the dashboard.</p>
//   </div>
// );

// const Settings = () => (
//   <div>
//     <h2 className="text-lg font-medium">Settings</h2>
//     <p>This is the settings section of the dashboard.</p>
//   </div>
// );


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
        className="hidden md:flex flex-col bg-blue-600 text-white w-64 p-6 space-y-6 fixed h-screen top-0"
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
