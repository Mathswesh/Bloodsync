import React from 'react';

export const Getapp = () => {
  return (
    <div className="container p-5 mx-auto grid gap-4 grid-cols-1 sm:grid-cols-2">
      {/* Header Section */}
      <div className="flex items-center justify-center col-span-1 sm:col-span-2 bg-gradient-to-r from-red-600 to-red-900 rounded-md p-4">
        <h2 className="text-center text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          Get the App from Playstore
        </h2>
      </div>

      {/* Microsoft Store Section */}
      <div className="flex flex-col items-center justify-center text-center bg-red-800 rounded-md p-4">
        <div className="text-white text-3xl mb-3">
          <i className="fa-brands fa-microsoft"></i>
        </div>
        <button className="bg-white text-red-900 py-2 px-4 rounded-lg text-sm sm:text-base md:text-lg">
          Get App From Microsoft Store
        </button>
      </div>

      {/* Google Store Section */}
      <div className="flex flex-col items-center justify-center text-center bg-red-800 rounded-md p-4">
        <div className="text-white text-3xl mb-3">
          <i className="fa-brands fa-google"></i>
        </div>
        <button className="bg-white text-red-900 py-2 px-4 rounded-lg text-sm sm:text-base md:text-lg">
          Get App From Google Store
        </button>
      </div>
    </div>
  );
};


// import React from 'react'
// export const Getapp = () => {
//     return (
//         <div class="container p-5 w-[1000px] mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-2 grid-rows-2 gap-3">
//             <div class="items-center justify-center flex col-span-2 row-span-1 rounded-md">
//                 <div className="container text-[30px] h-[100px] text-white flex justify-center items-center">Get the App from Playstore</div>
//             </div>
//             <div class="items-center justify-center text-center flex-row col-span-1 row-span-1 rounded-md bg-red-900">
//                 <div className="text-white text-2x"><i class="fa-brands fa-microsoft"></i></div>
//                 <div className="btn bg-white text-red-900">Get App From Microsoft Store.</div>
//             </div>
//             <div class="flex-row items-center justify-center text-center col-span-1 row-span-1 rounded-md bg-red-900">
//                 <div className="text-white text-2xl"><i class="fa-brands fa-google"></i></div>   
//                 <div className="btn bg-white text-red-900">Get App From Google Store.</div>
//             </div>
//         </div>
//     )
// }
