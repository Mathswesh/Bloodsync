import React from 'react';
import { motion } from 'framer-motion';

// List of hospitals
const hospitals = [
  'St. Mary\'s Hospital', 'City General Hospital', 'Greenwood Medical Center', 'Lakeview Hospital', 'Mountain Peak Hospital',
  'Riverside Health Center', 'Sunrise Medical Clinic', 'Crescent Moon Hospital', 'Maple Grove Health Facility', 'Silverstone Clinic',
  'Oceanview Medical Center', 'Pinehill General Hospital', 'Forest Grove Hospital', 'Valley Creek Health Center', 'Starview Medical Hospital',
  'Hilltop Medical Center', 'Bright Future Health Clinic', 'Clearwater Hospital', 'Rosewood Healthcare', 'Westfield Medical Center'
];

// The card component for each hospital
const HospitalCard = ({ name, index }) => {
  return (
    <motion.div
      className="relative flex flex-col justify-start items-center w-56 h-72 bg-white rounded-lg shadow-lg overflow-hidden"
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      style={{
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(10px)',
      }}
    >
      {/* Image section */}
      <div className="w-full h-32 bg-cover bg-center" style={{ backgroundImage: `url(https://via.placeholder.com/300x150?text=Hospital+${index + 1})` }} />
      
      {/* Card content */}
      <div className="relative z-10 p-4 flex flex-col justify-center items-center space-y-2 text-white">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-sm">Hospital {index + 1}</p>
      </div>
    </motion.div>
  );
};

// The list component
export const Hospitallist = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-[50px] bg-[#9db4c0]">
      {hospitals.map((hospital, index) => (
        <HospitalCard key={index} name={hospital} index={index} />
      ))}
    </div>
  );
};

// import React from 'react';
// import { motion } from 'framer-motion';

// // List of hospitals
// const hospitals = [
//   'St. Mary\'s Hospital', 'City General Hospital', 'Greenwood Medical Center', 'Lakeview Hospital', 'Mountain Peak Hospital',
//   'Riverside Health Center', 'Sunrise Medical Clinic', 'Crescent Moon Hospital', 'Maple Grove Health Facility', 'Silverstone Clinic',
//   'Oceanview Medical Center', 'Pinehill General Hospital', 'Forest Grove Hospital', 'Valley Creek Health Center', 'Starview Medical Hospital',
//   'Hilltop Medical Center', 'Bright Future Health Clinic', 'Clearwater Hospital', 'Rosewood Healthcare', 'Westfield Medical Center'
// ];

// // The card component for each hospital
// const HospitalCard = ({ name, index }) => {
//   return (
//     <motion.div
//       className="relative flex flex-col justify-start items-center w-56 h-72 bg-white rounded-lg shadow-lg overflow-hidden"
//       whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
//       style={{
//         background: 'rgba(255, 255, 255, 0.8)',
//         backdropFilter: 'blur(10px)',
//       }}
//     >
//       {/* Image section */}
//       <div className="w-full h-32 bg-cover bg-center" style={{ backgroundImage: `url(https://via.placeholder.com/300x150?text=Hospital+${index + 1})` }}>
//         {/* Placeholder image, you can replace it with actual hospital images */}
//       </div>

//       {/* Card content */}
//       <div className="relative z-10 p-4 flex flex-col justify-center items-center space-y-2 text-white">
//         <h2 className="text-xl font-semibold">{name}</h2>
//         <p className="text-sm">Hospital {index + 1}</p>
//       </div>
//     </motion.div>
//   );
// };

// // The list component
// export const Hospitallist = () => {
//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
//       {hospitals.map((hospital, index) => (
//         <HospitalCard key={index} name={hospital} index={index} />
//       ))}
//     </div>
//   );
// };

// import React from 'react';
// import { motion } from 'framer-motion';

// const hospitals = [
//   'St. Mary\'s Hospital', 'City General Hospital', 'Greenwood Medical Center', 'Lakeview Hospital', 'Mountain Peak Hospital',
//   'Riverside Health Center', 'Sunrise Medical Clinic', 'Crescent Moon Hospital', 'Maple Grove Health Facility', 'Silverstone Clinic',
//   'Oceanview Medical Center', 'Pinehill General Hospital', 'Forest Grove Hospital', 'Valley Creek Health Center', 'Starview Medical Hospital',
//   'Hilltop Medical Center', 'Bright Future Health Clinic', 'Clearwater Hospital', 'Rosewood Healthcare', 'Westfield Medical Center'
// ];

// const HospitalCard = ({ name, index }) => {
//   return (
//     <motion.div
//       className="relative flex flex-col justify-center items-center w-full md:w-80 h-80 bg-white rounded-lg shadow-lg overflow-hidden"
//       whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
//       style={{
//         background: 'rgba(255, 255, 255, 0.8)',
//         backdropFilter: 'blur(10px)',
//       }}
//     >
//       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-blue-500 via-purple-600 to-pink-500 opacity-50"></div>
//       <div className="relative z-10 p-6 flex flex-col justify-center items-center space-y-4 text-white">
//         <h2 className="text-2xl font-semibold">{name}</h2>
//         <p className="text-lg">Hospital {index + 1}</p>
//       </div>
//     </motion.div>
//   );
// };

// export const Hospitallist = () => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
//       {hospitals.map((hospital, index) => (
//         <HospitalCard key={index} name={hospital} index={index} />
//       ))}
//     </div>
//   );
// };

// // import React from 'react';
// // import { motion } from 'framer-motion';

// // const hospitals = [
// //   'St. Mary\'s Hospital', 'City General Hospital', 'Greenwood Medical Center', 'Lakeview Hospital', 'Mountain Peak Hospital',
// //   'Riverside Health Center', 'Sunrise Medical Clinic', 'Crescent Moon Hospital', 'Maple Grove Health Facility', 'Silverstone Clinic',
// //   'Oceanview Medical Center', 'Pinehill General Hospital', 'Forest Grove Hospital', 'Valley Creek Health Center', 'Starview Medical Hospital',
// //   'Hilltop Medical Center', 'Bright Future Health Clinic', 'Clearwater Hospital', 'Rosewood Healthcare', 'Westfield Medical Center'
// // ];

// // const HospitalCard = ({ name, index }) => {
// //   return (
// //     <motion.div
// //       className="relative flex flex-col justify-center items-center w-64 h-96 bg-white rounded-lg shadow-lg overflow-hidden"
// //       whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
// //       style={{
// //         background: 'rgba(255, 255, 255, 0.8)',
// //         backdropFilter: 'blur(10px)',
// //       }}
// //     >
// //       <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-blue-500 via-purple-600 to-pink-500 opacity-50"></div>
// //       <div className="relative z-10 p-6 flex flex-col justify-center items-center space-y-4 text-white">
// //         <h2 className="text-2xl font-semibold">{name}</h2>
// //         <p className="text-lg">Hospital {index + 1}</p>
// //       </div>
// //     </motion.div>
// //   );
// // };

// // export const Hospitallist = () => {
// //   return (
// //     <div className="grid grid-cols-4 gap-6 p-6">
// //       {hospitals.map((hospital, index) => (
// //         <HospitalCard key={index} name={hospital} index={index} />
// //       ))}
// //     </div>
// //   );
// // };
