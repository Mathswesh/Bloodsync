import React from 'react';
import { Link } from 'react-router-dom';

export const Appointment = () => {
  return (
    <div className="font-serif bg-gradient-to-r from-[#6f0000] to-[#200122] flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-4 w-full max-w-5xl">
        {[
          "Blood Donate Camp",
          "Eye Check Camp",
          "Dental Checkup Camp",
          "Hemoglobin Checkup Camp",
          "Ayurvedic Health Camp",
        ].map((camp, index) => (
          <div
            key={index}
            className="bg-white grid grid-cols-12 gap-4 items-center p-4 rounded-md shadow-md"
          >
            <div className="col-span-10 text-lg sm:text-xl lg:text-2xl font-semibold">
              {camp}
            </div>
            <div className="col-span-2 flex justify-center">
              <Link to="/hospital">
                <button className="btn bg-red-900 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition-all">
                  Check
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


// import React from 'react'
// import { Link } from 'react-router-dom'
// export const Appointment = () => {
//   return (
//     <div className="font-serif bg-gradient-to-r from-[#6f0000] to-[#200122] flex justify-center overflow-x-hidden">
//         <div className='grid grid-cols-1 w-[1200px] gap-3'>
//             <div className="col-span-1 container h-[100px] text-[30px] bg-white grid grid-cols-12"><div className='col-span-11 flex items-center '>Blood Donate camp       </div> <div className="flex justify-center items-center"><Link to="/hospital"><button className='btn bg-red-900 text-white hover:bg-cyan-600'>Check</button></Link></div>  </div>
//             <div className="col-span-1 container h-[100px] text-[30px] bg-white grid grid-cols-12"><div className='col-span-11 flex items-center '>Eye check camp          </div> <div className="flex justify-center items-center"><Link to="/hospital"><button className='btn bg-red-900 text-white hover:bg-cyan-600'>Check</button></Link></div>  </div>
//             <div className="col-span-1 container h-[100px] text-[30px] bg-white grid grid-cols-12"><div className='col-span-11 flex items-center '>Dental check up camp    </div> <div className="flex justify-center items-center"><Link to="/hospital"><button className='btn bg-red-900 text-white hover:bg-cyan-600'>Check</button></Link></div>  </div>
//             <div className="col-span-1 container h-[100px] text-[30px] bg-white grid grid-cols-12"><div className='col-span-11 flex items-center '>Himoglobin check up camp</div> <div className="flex justify-center items-center"><Link to="/hospital"><button className='btn bg-red-900 text-white hover:bg-cyan-600'>Check</button></Link></div>  </div>
//             <div className="col-span-1 container h-[100px] text-[30px] bg-white grid grid-cols-12"><div className='col-span-11 flex items-center '>Ayurvedic health camp   </div> <div className="flex justify-center items-center"><Link to="/hospital"><button className='btn bg-red-900 text-white hover:bg-cyan-600'>Check</button></Link></div>  </div>
           
//         </div>
//     </div>
//   )
// }
