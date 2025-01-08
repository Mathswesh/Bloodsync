import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
export const Footer = () => {
  // Animation Variants for Footer Items
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const liVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  };

  const socialHover = {
    hover: { scale: 1.2, rotate: 10, transition: { type: 'spring', stiffness: 300 } },
  };

  return (
    <motion.div
      className="font-serif text-white p-4 bg-gradient-to-r from-[#6f0000] to-[#200122]"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Main Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center lg:text-left">
        {/* About Us Section */}
        <motion.div
          className="flex flex-col items-center lg:items-start"
          variants={itemVariants}
        >
          <ul className="text-base sm:text-lg md:text-xl">
            <motion.li
              className="mb-3"
              variants={liVariants}
            >
              About us
              <div className="w-[80px] h-[2px] bg-red-600 mx-auto lg:mx-0"></div>
            </motion.li>
            <motion.li className="mt-2" variants={liVariants}>
              What we Offer
            </motion.li>
            <motion.li className="mt-2" variants={liVariants}>
              Privacy
            </motion.li>
            <motion.li className="mt-2" variants={liVariants}>
              Terms and Conditions
            </motion.li>
          </ul>
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="flex flex-col items-center lg:items-start"
          variants={itemVariants}
        >
          <ul className="text-base sm:text-lg md:text-xl">
            <motion.li
              className="mb-3"
              variants={liVariants}
            >
              Content
              <div className="w-[70px] h-[2px] bg-red-600 mx-auto lg:mx-0"></div>
            </motion.li>
            <motion.li className="mt-2" variants={liVariants}>
              News
            </motion.li>
            <motion.li className="mt-2" variants={liVariants}>
              Blog
            </motion.li>
            <motion.li className="mt-2" variants={liVariants}>
              Graph
            </motion.li>
          </ul>
        </motion.div>

        {/* Resources Section */}
        <motion.div
          className="flex flex-col items-center lg:items-start"
          variants={itemVariants}
        >
          <ul className="text-base sm:text-lg md:text-xl">
            <motion.li
              className="mb-3"
              variants={liVariants}
            >
              Resources
              <div className="w-[90px] h-[2px] bg-red-600 mx-auto lg:mx-0"></div>
            </motion.li>
            <motion.li className="mt-2" variants={liVariants}>
              FAQs
            </motion.li>
            <motion.li className="mt-2" variants={liVariants}>
                 <Link to="/contact">Contact</Link>      
            </motion.li>
            <motion.li className="mt-2" variants={liVariants}>
              Link
            </motion.li>
          </ul>
        </motion.div>

        {/* Follow Us Section */}
        <motion.div
          className="flex flex-col items-center lg:items-start"
          variants={itemVariants}
        >
          <ul className="text-base sm:text-lg md:text-xl">
            <motion.li
              className="mb-3"
              variants={liVariants}
            >
              Follow us
              <div className="w-[85px] h-[2px] bg-red-600 mx-auto lg:mx-0"></div>
            </motion.li>
            <ul className="flex">
              <motion.li
                className="mt-2 ml-2 rounded-full w-9 h-9 bg-white text-red-950 items-center flex justify-center cursor-pointer"
                variants={socialHover}
                whileHover="hover"
              >
                <i className="fa-brands fa-instagram"></i>
              </motion.li>
              <motion.li
                className="mt-2 ml-2 rounded-full w-9 h-9 bg-white text-red-950 items-center flex justify-center cursor-pointer"
                variants={socialHover}
                whileHover="hover"
              >
                <i className="fa-brands fa-linkedin"></i>
              </motion.li>
              <motion.li
                className="mt-2 ml-2 rounded-full w-9 h-9 bg-white text-red-950 items-center flex justify-center cursor-pointer"
                variants={socialHover}
                whileHover="hover"
              >
                <i className="fa-brands fa-github"></i>
              </motion.li>
            </ul>
          </ul>
        </motion.div>
      </div>

      {/* Footer Bottom Section */}
      <motion.div
        className="mt-4 text-center text-sm sm:text-base lg:text-lg"
        variants={liVariants}
      >
        &copy; Copyright Claimed 2024
      </motion.div>
    </motion.div>
  );
};

// import React from 'react';
// import { motion } from 'framer-motion';

// export const Footer = () => {
//   // Animation Variants for Footer Items
//   const containerVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   };

//   const liVariants = {
//     hidden: { opacity: 0, x: -20 },
//     visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
//   };

//   const socialHover = {
//     hover: { scale: 1.2, rotate: 10, transition: { type: 'spring', stiffness: 300 } },
//   };

//   return (
//     <motion.div
//       className="font-serif text-white p-4 bg-gradient-to-r from-[#6f0000] to-[#200122]"
//       initial="hidden"
//       animate="visible"
//       variants={containerVariants}
//     >
//       {/* Main Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center lg:text-left">
//         {/* About Us Section */}
//         <motion.div
//           className="flex flex-col items-center lg:items-start"
//           variants={itemVariants}
//         >
//           <ul className="text-base sm:text-lg md:text-xl">
//             <motion.li
//               className="mb-3"
//               variants={liVariants}
//             >
//               About us
//               <div className="w-[80px] h-[2px] bg-red-600 mx-auto lg:mx-0"></div>
//             </motion.li>
//             <motion.li className="mt-2" variants={liVariants}>
//               What we Offer
//             </motion.li>
//             <motion.li className="mt-2" variants={liVariants}>
//               Privacy
//             </motion.li>
//             <motion.li className="mt-2" variants={liVariants}>
//               Terms and Conditions
//             </motion.li>
//           </ul>
//         </motion.div>

//         {/* Content Section */}
//         <motion.div
//           className="flex flex-col items-center lg:items-start"
//           variants={itemVariants}
//         >
//           <ul className="text-base sm:text-lg md:text-xl">
//             <motion.li
//               className="mb-3"
//               variants={liVariants}
//             >
//               Content
//               <div className="w-[70px] h-[2px] bg-red-600 mx-auto lg:mx-0"></div>
//             </motion.li>
//             <motion.li className="mt-2" variants={liVariants}>
//               News
//             </motion.li>
//             <motion.li className="mt-2" variants={liVariants}>
//               Blog
//             </motion.li>
//             <motion.li className="mt-2" variants={liVariants}>
//               Graph
//             </motion.li>
//           </ul>
//         </motion.div>

//         {/* Resources Section */}
//         <motion.div
//           className="flex flex-col items-center lg:items-start"
//           variants={itemVariants}
//         >
//           <ul className="text-base sm:text-lg md:text-xl">
//             <motion.li
//               className="mb-3"
//               variants={liVariants}
//             >
//               Resources
//               <div className="w-[90px] h-[2px] bg-red-600 mx-auto lg:mx-0"></div>
//             </motion.li>
//             <motion.li className="mt-2" variants={liVariants}>
//               FAQs
//             </motion.li>
//             <motion.li className="mt-2" variants={liVariants}>
//               Contact us
//             </motion.li>
//             <motion.li className="mt-2" variants={liVariants}>
//               Link
//             </motion.li>
//           </ul>
//         </motion.div>

//         {/* Follow Us Section */}
//         <motion.div
//           className="flex flex-col items-center lg:items-start"
//           variants={itemVariants}
//         >
//           <ul className="text-base sm:text-lg md:text-xl">
//             <motion.li
//               className="mb-3"
//               variants={liVariants}
//             >
//               Follow us
//               <div className="w-[85px] h-[2px] bg-red-600 mx-auto lg:mx-0"></div>
//             </motion.li>
//             <ul className="flex">
//               <motion.li
//                 className="mt-2 ml-2 rounded-full w-9 h-9 bg-white text-red-950 items-center flex justify-center cursor-pointer"
//                 variants={socialHover}
//                 whileHover="hover"
//               >
//                 <i className="fa-brands fa-instagram"></i>
//               </motion.li>
//               <motion.li
//                 className="mt-2 ml-2 rounded-full w-9 h-9 bg-white text-red-950 items-center flex justify-center cursor-pointer"
//                 variants={socialHover}
//                 whileHover="hover"
//               >
//                 <i className="fa-brands fa-linkedin"></i>
//               </motion.li>
//               <motion.li
//                 className="mt-2 ml-2 rounded-full w-9 h-9 bg-white text-red-950 items-center flex justify-center cursor-pointer"
//                 variants={socialHover}
//                 whileHover="hover"
//               >
//                 <i className="fa-brands fa-github"></i>
//               </motion.li>
//             </ul>
//           </ul>
//         </motion.div>
//       </div>

//       {/* Footer Bottom Section */}
//       <motion.div
//         className="mt-4 text-center text-sm sm:text-base lg:text-lg"
//         variants={liVariants}
//       >
//         &copy; Copyright Claimed 2024
//       </motion.div>
//     </motion.div>
//   );
// };

// // import React from 'react';
// // import { motion } from 'framer-motion';

// // export const Footer = () => {
// //   // Animation Variants
// //   const containerVariants = {
// //     hidden: { opacity: 0, y: 50 },
// //     visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
// //   };

// //   const itemVariants = {
// //     hidden: { opacity: 0, y: 20 },
// //     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// //   };

// //   const socialHover = {
// //     hover: { scale: 1.2, rotate: 10, transition: { type: 'spring', stiffness: 300 } },
// //   };

// //   return (
// //     <motion.div
// //       className="font-serif text-white p-4 bg-gradient-to-r from-[#6f0000] to-[#200122]"
// //       initial="hidden"
// //       animate="visible"
// //       variants={containerVariants}
// //     >
// //       {/* Main Grid */}
// //       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center lg:text-left">
// //         {/* About Us Section */}
// //         <motion.div
// //           className="flex flex-col items-center lg:items-start"
// //           variants={itemVariants}
// //         >
// //           <ul className="text-base sm:text-lg md:text-xl">
// //             <li className="mb-3">
// //               About us
// //               <div className="w-[80px] h-[2px] bg-red-600 mx-auto lg:mx-0"></div>
// //             </li>
// //             <li className="mt-2">What we Offer</li>
// //             <li className="mt-2">Privacy</li>
// //             <li className="mt-2">Terms and Conditions</li>
// //           </ul>
// //         </motion.div>

// //         {/* Content Section */}
// //         <motion.div
// //           className="flex flex-col items-center lg:items-start"
// //           variants={itemVariants}
// //         >
// //           <ul className="text-base sm:text-lg md:text-xl">
// //             <li className="mb-3">
// //               Content
// //               <div className="w-[70px] h-[2px] bg-red-600 mx-auto lg:mx-0"></div>
// //             </li>
// //             <li className="mt-2">News</li>
// //             <li className="mt-2">Blog</li>
// //             <li className="mt-2">Graph</li>
// //           </ul>
// //         </motion.div>

// //         {/* Resources Section */}
// //         <motion.div
// //           className="flex flex-col items-center lg:items-start"
// //           variants={itemVariants}
// //         >
// //           <ul className="text-base sm:text-lg md:text-xl">
// //             <li className="mb-3">
// //               Resources
// //               <div className="w-[90px] h-[2px] bg-red-600 mx-auto lg:mx-0"></div>
// //             </li>
// //             <li className="mt-2">FAQs</li>
// //             <li className="mt-2">Contact us</li>
// //             <li className="mt-2">Link</li>
// //           </ul>
// //         </motion.div>

// //         {/* Follow Us Section */}
// //         <motion.div
// //           className="flex flex-col items-center lg:items-start"
// //           variants={itemVariants}
// //         >
// //           <ul className="text-base sm:text-lg md:text-xl">
// //             <li className="mb-3">
// //               Follow us
// //               <div className="w-[85px] h-[2px] bg-red-600 mx-auto lg:mx-0"></div>
// //             </li>
// //             <ul className="flex">
// //               <motion.li
// //                 className="mt-2 ml-2 rounded-full w-9 h-9 bg-white text-red-950 items-center flex justify-center cursor-pointer"
// //                 variants={socialHover}
// //                 whileHover="hover"
// //               >
// //                 <i className="fa-brands fa-instagram"></i>
// //               </motion.li>
// //               <motion.li
// //                 className="mt-2 ml-2 rounded-full w-9 h-9 bg-white text-red-950 items-center flex justify-center cursor-pointer"
// //                 variants={socialHover}
// //                 whileHover="hover"
// //               >
// //                 <i className="fa-brands fa-linkedin"></i>
// //               </motion.li>
// //               <motion.li
// //                 className="mt-2 ml-2 rounded-full w-9 h-9 bg-white text-red-950 items-center flex justify-center cursor-pointer"
// //                 variants={socialHover}
// //                 whileHover="hover"
// //               >
// //                 <i className="fa-brands fa-github"></i>
// //               </motion.li>
// //             </ul>
// //           </ul>
// //         </motion.div>
// //       </div>

// //       {/* Footer Bottom Section */}
// //       <motion.div
// //         className="mt-4 text-center text-sm sm:text-base lg:text-lg"
// //         variants={itemVariants}
// //       >
// //         &copy; Copyright Claimed 2024
// //       </motion.div>
// //     </motion.div>
// //   );
// // };

// // // import React from 'react';

// // // export const Footer = () => {
// // //     return (
// // //         <div className="font-serif text-white p-4 bg-gradient-to-r from-[#6f0000] to-[#200122]">
// // //             {/* Main Grid */}
// // //             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center lg:text-left">
// // //                 {/* About Us Section */}
// // //                 <div className="flex flex-col items-center lg:items-start">
// // //                     <ul className="text-base sm:text-lg md:text-xl">
// // //                         <li className="mb-3">
// // //                             About us
// // //                             <div className="w-[80px] h-[2px] bg-red-600 mx-auto lg:mx-0"></div>
// // //                         </li>
// // //                         <li className="mt-2">What we Offer</li>
// // //                         <li className="mt-2">Privacy</li>
// // //                         <li className="mt-2">Terms and Conditions</li>
// // //                     </ul>
// // //                 </div>
// // //                 {/* Content Section */}
// // //                 <div className="flex flex-col items-center lg:items-start">
// // //                     <ul className="text-base sm:text-lg md:text-xl">
// // //                         <li className="mb-3">
// // //                             Content
// // //                             <div className="w-[70px] h-[2px] bg-red-600 mx-auto lg:mx-0"></div>
// // //                         </li>
// // //                         <li className="mt-2">News</li>
// // //                         <li className="mt-2">Blog</li>
// // //                         <li className="mt-2">Graph</li>
// // //                     </ul>
// // //                 </div>

// // //                 {/* Resources Section */}
// // //                 <div className="flex flex-col items-center lg:items-start">
// // //                     <ul className="text-base sm:text-lg md:text-xl">
// // //                         <li className="mb-3">
// // //                             Resources
// // //                             <div className="w-[90px] h-[2px] bg-red-600 mx-auto lg:mx-0"></div>
// // //                         </li>
// // //                         <li className="mt-2">FAQs</li>
// // //                         <li className="mt-2">Contact us</li>
// // //                         <li className="mt-2">Link</li>
// // //                     </ul>
// // //                 </div>

// // //                 {/* Follow Us Section */}
// // //                 <div className="flex flex-col items-center lg:items-start">
// // //                     <ul className="text-base sm:text-lg md:text-xl">
// // //                         <li className="mb-3">
// // //                             Follow us
// // //                             <div className="w-[85px] h-[2px] bg-red-600 mx-auto lg:mx-0"></div>
// // //                         </li>
// // //                         <ul className='flex'>
// // //                             <li className="mt-2 ml-2 rounded-full w-9 h-9 bg-white text-red-950 items-center flex justify-center">
// // //                                 <i className="fa-brands fa-instagram"></i>
// // //                             </li>
// // //                             <li className="mt-2 ml-2 rounded-full w-9 h-9 bg-white text-red-950 items-center flex justify-center">
// // //                                 <i className="fa-brands fa-linkedin"></i>
// // //                             </li>
// // //                             <li className="mt-2 ml-2 rounded-full w-9 h-9 bg-white text-red-950 items-center flex justify-center">
// // //                                 <i className="fa-brands fa-github"></i>
// // //                             </li>
// // //                         </ul>
// // //                     </ul>
// // //                 </div>
// // //             </div>
            
// // //             {/* Footer Bottom Section */}
// // //             <div className="mt-4 text-center text-sm sm:text-base lg:text-lg">
// // //                 &copy; Copyright Claimed 2024
// // //             </div>
// // //         </div>
// // //     );
// // // };



// // // // import React from 'react'

// // // // export const Footer = () => {
// // // //   return (
// // // //     <div class="font-serif text-white p-3 grid grid-cols-4 grid-rows-1  bg-gradient-to-r from-[#6f0000] to-[#200122]">
// // // //         <div class="items-center justify-center flex col-span-1 row-span-1">
// // // //             <ul className='text-[20px]'>
// // // //                 <li className='mb-3'>About us <div className='w-[80px] h-[2px] bg-red-600'></div></li>
// // // //                 <li className='mt-2'>What we Ofer</li>
// // // //                 <li className='mt-2'>Privacy</li>
// // // //                 <li className='mt-2'>Terms and Conditions</li>
// // // //             </ul>
// // // //         </div>
// // // //         <div class="items-center justify-center flex col-span-1 row-span-1">
// // // //             <ul className='text-[20px]'>
// // // //                 <li className='mb-3'>Content <div className='w-[70px] h-[2px] bg-red-600'></div></li>
// // // //                 <li className='mt-2'>News</li>
// // // //                 <li className='mt-2'>Blog</li>
// // // //                 <li className='mt-2'>Graph</li>
// // // //             </ul>
// // // //         </div>
// // // //         <div class="items-center justify-center flex col-span-1 row-span-1">
// // // //             <ul className='text-[20px]'>
// // // //                 <li className='mb-3'>Resources <div className='w-[90px] h-[2px] bg-red-600'></div></li>
// // // //                 <li className='mt-2'>Faqs</li>
// // // //                 <li className='mt-2'>Contact us</li>
// // // //                 <li className='mt-2'>Link</li>
// // // //             </ul>
// // // //         </div>
// // // //         <div class="items-center justify-center flex col-span-1 row-span-1">
// // // //             <ul className='text-[20px]'>
// // // //                 <li className='mb-3'>Follow us<div className='w-[85px] h-[2px] bg-red-600'></div></li>
// // // //                 <li className='mt-2 rounded-full w-9 h-9 bg-white text-red-950 items-center flex justify-center'><i class="fa-brands fa-instagram"></i></li>
// // // //                 <li className='mt-2 rounded-full w-9 h-9 bg-white text-red-950 items-center flex justify-center'><i class="fa-brands fa-linkedin"></i></li>
// // // //                 <li className='mt-2 rounded-full w-9 h-9 bg-white text-red-950 items-center flex justify-center'><i class="fa-brands fa-github"></i></li>
// // // //             </ul>
// // // //         </div>
// // // //         <div class="items-center justify-center flex col-span-full text-[17px] text-white">&copy; Copyright Claimed 2024</div> 
// // // //     </div>
// // // //   )
// // // // }
