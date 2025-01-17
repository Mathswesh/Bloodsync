// Install dependencies with `npm install react-icons`

import React from 'react';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';

export const Getapp = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#9db4c0] text-gray-800">
      <div className="text-center px-4">
        <h1 className="text-4xl font-bold mb-4 text-[#027c68]">Get Our App</h1>
        <p className="text-lg text-gray-600 mb-6">
          Experience the convenience of managing everything on the go with our app. Available now on your favorite platforms.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="flex items-center justify-center gap-2 bg-[#027c68] hover:bg-[#025b50] text-white px-6 py-3 rounded-lg shadow-lg transition duration-300"
          >
            <GoogleIcon className="text-2xl" />
            <span>Get it on Google Play</span>
          </a>

          <a
            href="#"
            className="flex items-center justify-center gap-2 bg-[#027c68] hover:bg-[#025b50] text-white px-6 py-3 rounded-lg shadow-lg transition duration-300"
          >
            <AppleIcon className="text-2xl" />
            <span>Download on the App Store</span>
          </a>
        </div>
      </div>

      {/* <div className="mt-10">
        <img
          src="https://via.placeholder.com/300x500"
          alt="App Preview"
          className="rounded-lg shadow-lg border border-gray-200"
        />
      </div> */}
    </div>
  );
};


// import React from 'react';
// import { motion } from 'framer-motion';

// export const Getapp = () => {
//   return (
//     <div className="container mx-auto h-screen flex items-center justify-center">
//       <motion.div
//         className="w-1/2 h-1/2 bg-white shadow-md rounded-lg overflow-hidden flex flex-col sm:flex-row"
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.8 }}
//       >
//         {/* Header Section */}
//         <motion.div
//           className="flex items-center justify-center bg-gradient-to-r from-red-600 to-red-900 w-full sm:w-1/3 text-white p-4"
//           initial={{ x: -100 }}
//           animate={{ x: 0 }}
//           transition={{ duration: 0.8, ease: 'easeOut' }}
//         >
//           <h2 className="text-center text-lg sm:text-xl lg:text-2xl font-bold">
//             Get the App
//           </h2>
//         </motion.div>

//         {/* Content Section */}
//         <motion.div
//           className="w-full sm:w-2/3 bg-white p-6 flex flex-col items-center space-y-6"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.3 }}
//         >
//           {/* Microsoft Store */}
//           <motion.div
//             className="flex items-center justify-between w-full"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <div className="text-red-600 text-3xl">
//               <i className="fa-brands fa-microsoft"></i>
//             </div>
//             <button className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition text-sm sm:text-base">
//               Microsoft Store
//             </button>
//           </motion.div>

//           {/* Google Store */}
//           <motion.div
//             className="flex items-center justify-between w-full"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             <div className="text-red-600 text-3xl">
//               <i className="fa-brands fa-google"></i>
//             </div>
//             <button className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition text-sm sm:text-base">
//               Google Play Store
//             </button>
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };
