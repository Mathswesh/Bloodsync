import React from 'react';
import { Link } from 'react-router-dom';
import img3 from '../assets/images/img1.png';
import { Graph } from './Graph';
import { Getapp } from './Getapp';

export const Landingpage = () => {
    return (
        <div className="font-serif bg-gradient-to-r from-[#6f0000] to-[#200122] flex justify-center overflow-x-hidden">
            {/* Main container of landing page */}
            <div className="w-full max-w-[1536px] px-4">
                {/* Hero Section */}
                <div className="flex flex-col md:flex-row md:h-[500px]">
                    {/* Left Section */}
                    <div className="text-cyan-300 mt-6 md:mt-[50px] md:w-1/2">
                        <h1 className="mt-[20px] text-lg sm:text-xl md:text-2xl">Blood Donate Awareness</h1>
                        <h2 className="mt-2 text-xl sm:text-2xl md:text-4xl">"Your blood donation can give a</h2>
                        <h2 className="mt-0 text-xl sm:text-2xl md:text-4xl">precious smile to someone's face."</h2>
                        <p className="mt-4 text-xs sm:text-sm md:text-base">
                            Blood donation is a simple act of kindness that can save lives and bring hope to those in need.
                            By donating blood, you help ensure a steady supply for emergencies and critical medical treatments.
                        </p>
                        <button className="mt-6 text-sm sm:text-base md:text-lg bg-cyan-300 text-black rounded-3xl px-6 py-2">
                            Get Started
                        </button>
                    </div>

                    {/* Right Section */}
                    <div className="flex items-center justify-center md:justify-end mt-6 md:mt-0 md:w-1/2">
                        <img src={img3} alt="" className="w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] h-auto" />
                    </div>
                </div>

                {/* Marquee */}
                <marquee className="text-xs sm:text-sm md:text-lg bg-white w-full py-2 mt-6" behavior="" direction="">
                    "Let’s Donate Blood, Someone is Waiting for You. Hurry up!"
                </marquee>

                {/* Cards Section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-red-800 w-full h-[100px] flex flex-col justify-center items-center text-center rounded">
                        <i className="fa-solid fa-hospital text-white text-xl sm:text-2xl mb-2"></i>
                        <h3 className="text-sm sm:text-lg text-white">23598</h3>
                        <h3 className="text-sm sm:text-lg text-white">Total Hospitals</h3>
                    </div>
                    <div className="bg-red-800 w-full h-[100px] flex flex-col justify-center items-center text-center rounded">
                        <i className="fa-solid fa-droplet text-white text-xl sm:text-2xl mb-2"></i>
                        <h3 className="text-sm sm:text-lg text-white">23598</h3>
                        <h3 className="text-sm sm:text-lg text-white">Total Blood Donated</h3>
                    </div>
                    <div className="bg-red-800 w-full h-[100px] flex flex-col justify-center items-center text-center rounded">
                        <i className="fa-solid fa-user-doctor text-white text-xl sm:text-2xl mb-2"></i>
                        <h3 className="text-sm sm:text-lg text-white">23598</h3>
                        <h3 className="text-sm sm:text-lg text-white">Total Doctors</h3>
                    </div>
                </div>

                {/* Content Section */}
                <div className="text-white text-xs sm:text-sm md:text-base mt-8">
                    Increasing the blood in your body, particularly boosting red blood cell (RBC) production and improving hemoglobin levels, can be achieved through a combination of dietary changes, proper hydration, and lifestyle adjustments. Here's a comprehensive guide:
                </div>

                {/* Placeholder Section */}
                <div className="container h-[200px] sm:h-[300px] md:h-[500px] lg:h-[700px] bg-red-800 mt-6 rounded"></div>

                {/* Graph and Getapp Components */}
                <Graph />
                <Getapp />
            </div>
        </div>
    );
};


// import React from 'react'
// import { Link } from 'react-router-dom';
// import img3 from '../assets/images/img1.png'
// import { Graph } from './Graph';
// import { Getapp } from './Getapp';

// export const Landingpage = () => {
//     return (
//         <div className="font-serif bg-gradient-to-r from-[#6f0000] to-[#200122] flex justify-center overflow-x-hidden">
//             {/* main container of landing page */}
//             <div className='w-[1200px] md:'>
//                 <div className='flex h-[500px]'>
//                     <div className="text-cyan-300 flex-row justify-between items-center mt-[100px]">
//                         <div className="mt-[40px] text-xl">Blood Donate Awarnesss</div>
//                         <div className="mt-[40px] text-4xl">" Your blood donation can give a</div>
//                         <div className="mt-[0px] text-4xl">precious smile to someone's face."</div>
//                         <p className='mt-[40px] text-2xs'></p>
//                         <div>Blood donation is a simple act of kindness that can save lives and bring hope to those in need.
//                             By donating blood, you help ensure a steady supply for emergencies and critical medical treatments.</div>
//                         <button className='mt-[30px] text-black bg-cyan-300 rounded-3xl w-40 h-10 text-[20px] mx-3'>Get Started</button>
//                     </div>
//                     <div className="flex items-center justify-end h-[500px]"><img src={img3} alt="" className='w-[1000px] h-[450px]' /></div>
//                 </div>
//                 <marquee className="text-[27px] bg-white w-[1515px] relative right-[155px] z-10" behavior="" direction="">" Let’s Donate Blood , Some one is Waiting for You. Hurry up ! "</marquee>
//                 {/* cards */}
//                 <div className="pt-[35px] grid grid-cols-3 gird-rows-1">
//                     <div className="container bg-red-800 w-[395px] h-[100px]">
//                         <div className="p-2 flex-row justify-center items-center text-center">
//                             <i class="fa-solid fa-hospital"></i>
//                             <h3 className="text-lg font-bold text-gray-800">23598</h3>
//                             <h3 className="text-lg font-bold text-gray-800">Total Hospital</h3>
//                         </div>
//                     </div>
//                     <div className="container bg-red-800 w-[395px] h-[100px]">
//                         <div className="p-2 flex-row justify-center items-center text-center">
//                             <i class="fa-solid fa-droplet"></i>
//                             <h3 className="text-lg font-bold text-gray-800">23598</h3>
//                             <h3 className="text-lg font-bold text-gray-800">Total Blood Donate</h3>
//                         </div>
//                     </div>
//                     <div className="container bg-red-800 w-[395px] h-[100px]">
//                         <div className=" p-2 flex-row justify-center items-center text-center">
//                             <i class="fa-solid fa-user-doctor"></i>
//                             <h3 className="text-lg font-bold text-gray-800">23598</h3>
//                             <h3 className="text-lg font-bold text-gray-800">Total Doctors</h3>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="pt-[35px] pb-[30px] grid grid-cols-3 gird-rows-1">
//                     <div className="container bg-red-800 w-[395px] h-[100px]">
//                         <div className="p-2 flex-row justify-center items-center text-center">
//                             <i class="fa-solid fa-hospital"></i>
//                             <h3 className="text-lg font-bold text-gray-800">23598</h3>
//                             <h3 className="text-lg font-bold text-gray-800">Total Hospital</h3>
//                         </div>
//                     </div>
//                     <div className="container bg-red-800 w-[395px] h-[100px]">
//                         <div className="p-2 flex-row justify-center items-center text-center">
//                             <i class="fa-solid fa-droplet"></i>
//                             <h3 className="text-lg font-bold text-gray-800">23598</h3>
//                             <h3 className="text-lg font-bold text-gray-800">Total Blood Donate</h3>
//                         </div>
//                     </div>
//                     <div className="container bg-red-800 w-[395px] h-[100px]">
//                         <div className=" p-2 flex-row justify-center items-center text-center">
//                             <i class="fa-solid fa-user-doctor"></i>
//                             <h3 className="text-lg font-bold text-gray-800">23598</h3>
//                             <h3 className="text-lg font-bold text-gray-800">Total Doctors</h3>
//                         </div>
//                     </div>
//                 </div>
//                 {/* scroll cards */}
//                 <div className="text-white text-1xl">Increasing the blood in your body, particularly boosting red blood cell (RBC) production and improving hemoglobin levels, can be achieved through a combination of dietary changes, proper hydration, and lifestyle adjustments. Here's a comprehensive guide:</div>
//                 <div className="container h-[700px] bg-red-800 mt-[20px] mb-[50px]">
//                 </div>
//                 <Graph/>
//                 <Getapp/>
//             </div>
//         </div>
//     )
// }
