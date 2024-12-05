import React from 'react'
import { Link } from 'react-router-dom'
export const Appointment = () => {
  return (
    <div className="font-serif bg-gradient-to-r from-[#6f0000] to-[#200122] flex justify-center overflow-x-hidden">
        <div className='grid grid-cols-1 w-[1200px] gap-3'>
            <div className="col-span-1 container h-[100px] text-[30px] bg-white grid grid-cols-12"><div className='col-span-11 flex items-center '>Blood Donate camp       </div> <div className="flex justify-center items-center"><Link to="/hospital"><button className='btn bg-red-900 text-white hover:bg-cyan-600'>Check</button></Link></div>  </div>
            <div className="col-span-1 container h-[100px] text-[30px] bg-white grid grid-cols-12"><div className='col-span-11 flex items-center '>Eye check camp          </div> <div className="flex justify-center items-center"><Link to="/hospital"><button className='btn bg-red-900 text-white hover:bg-cyan-600'>Check</button></Link></div>  </div>
            <div className="col-span-1 container h-[100px] text-[30px] bg-white grid grid-cols-12"><div className='col-span-11 flex items-center '>Dental check up camp    </div> <div className="flex justify-center items-center"><Link to="/hospital"><button className='btn bg-red-900 text-white hover:bg-cyan-600'>Check</button></Link></div>  </div>
            <div className="col-span-1 container h-[100px] text-[30px] bg-white grid grid-cols-12"><div className='col-span-11 flex items-center '>Himoglobin check up camp</div> <div className="flex justify-center items-center"><Link to="/hospital"><button className='btn bg-red-900 text-white hover:bg-cyan-600'>Check</button></Link></div>  </div>
            <div className="col-span-1 container h-[100px] text-[30px] bg-white grid grid-cols-12"><div className='col-span-11 flex items-center '>Ayurvedic health camp   </div> <div className="flex justify-center items-center"><Link to="/hospital"><button className='btn bg-red-900 text-white hover:bg-cyan-600'>Check</button></Link></div>  </div>
           
        </div>
    </div>
  )
}
