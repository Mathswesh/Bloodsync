import React from 'react';

export const Footer = () => {
    return (
        <div className="font-serif text-white p-4 bg-gradient-to-r from-[#6f0000] to-[#200122]">
            {/* Main Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center lg:text-left">
                {/* About Us Section */}
                <div className="flex flex-col items-center lg:items-start">
                    <ul className="text-base sm:text-lg md:text-xl">
                        <li className="mb-3">
                            About us
                            <div className="w-[80px] h-[2px] bg-red-600 mx-auto lg:mx-0"></div>
                        </li>
                        <li className="mt-2">What we Offer</li>
                        <li className="mt-2">Privacy</li>
                        <li className="mt-2">Terms and Conditions</li>
                    </ul>
                </div>

                {/* Content Section */}
                <div className="flex flex-col items-center lg:items-start">
                    <ul className="text-base sm:text-lg md:text-xl">
                        <li className="mb-3">
                            Content
                            <div className="w-[70px] h-[2px] bg-red-600 mx-auto lg:mx-0"></div>
                        </li>
                        <li className="mt-2">News</li>
                        <li className="mt-2">Blog</li>
                        <li className="mt-2">Graph</li>
                    </ul>
                </div>

                {/* Resources Section */}
                <div className="flex flex-col items-center lg:items-start">
                    <ul className="text-base sm:text-lg md:text-xl">
                        <li className="mb-3">
                            Resources
                            <div className="w-[90px] h-[2px] bg-red-600 mx-auto lg:mx-0"></div>
                        </li>
                        <li className="mt-2">FAQs</li>
                        <li className="mt-2">Contact us</li>
                        <li className="mt-2">Link</li>
                    </ul>
                </div>

                {/* Follow Us Section */}
                <div className="flex flex-col items-center lg:items-start">
                    <ul className="text-base sm:text-lg md:text-xl">
                        <li className="mb-3">
                            Follow us
                            <div className="w-[85px] h-[2px] bg-red-600 mx-auto lg:mx-0"></div>
                        </li>
                        <ul className='flex'>
                            <li className="mt-2 ml-2 rounded-full w-9 h-9 bg-white text-red-950 items-center flex justify-center">
                                <i className="fa-brands fa-instagram"></i>
                            </li>
                            <li className="mt-2 ml-2 rounded-full w-9 h-9 bg-white text-red-950 items-center flex justify-center">
                                <i className="fa-brands fa-linkedin"></i>
                            </li>
                            <li className="mt-2 ml-2 rounded-full w-9 h-9 bg-white text-red-950 items-center flex justify-center">
                                <i className="fa-brands fa-github"></i>
                            </li>
                        </ul>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom Section */}
            <div className="mt-4 text-center text-sm sm:text-base lg:text-lg">
                &copy; Copyright Claimed 2024
            </div>
        </div>
    );
};



// import React from 'react'

// export const Footer = () => {
//   return (
//     <div class="font-serif text-white p-3 grid grid-cols-4 grid-rows-1  bg-gradient-to-r from-[#6f0000] to-[#200122]">
//         <div class="items-center justify-center flex col-span-1 row-span-1">
//             <ul className='text-[20px]'>
//                 <li className='mb-3'>About us <div className='w-[80px] h-[2px] bg-red-600'></div></li>
//                 <li className='mt-2'>What we Ofer</li>
//                 <li className='mt-2'>Privacy</li>
//                 <li className='mt-2'>Terms and Conditions</li>
//             </ul>
//         </div>
//         <div class="items-center justify-center flex col-span-1 row-span-1">
//             <ul className='text-[20px]'>
//                 <li className='mb-3'>Content <div className='w-[70px] h-[2px] bg-red-600'></div></li>
//                 <li className='mt-2'>News</li>
//                 <li className='mt-2'>Blog</li>
//                 <li className='mt-2'>Graph</li>
//             </ul>
//         </div>
//         <div class="items-center justify-center flex col-span-1 row-span-1">
//             <ul className='text-[20px]'>
//                 <li className='mb-3'>Resources <div className='w-[90px] h-[2px] bg-red-600'></div></li>
//                 <li className='mt-2'>Faqs</li>
//                 <li className='mt-2'>Contact us</li>
//                 <li className='mt-2'>Link</li>
//             </ul>
//         </div>
//         <div class="items-center justify-center flex col-span-1 row-span-1">
//             <ul className='text-[20px]'>
//                 <li className='mb-3'>Follow us<div className='w-[85px] h-[2px] bg-red-600'></div></li>
//                 <li className='mt-2 rounded-full w-9 h-9 bg-white text-red-950 items-center flex justify-center'><i class="fa-brands fa-instagram"></i></li>
//                 <li className='mt-2 rounded-full w-9 h-9 bg-white text-red-950 items-center flex justify-center'><i class="fa-brands fa-linkedin"></i></li>
//                 <li className='mt-2 rounded-full w-9 h-9 bg-white text-red-950 items-center flex justify-center'><i class="fa-brands fa-github"></i></li>
//             </ul>
//         </div>
//         <div class="items-center justify-center flex col-span-full text-[17px] text-white">&copy; Copyright Claimed 2024</div> 
//     </div>
//   )
// }
