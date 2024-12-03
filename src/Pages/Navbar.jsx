import { useState } from 'react'
export const Navbar = () => {

  return (
    <div className="font-serif bg-gradient-to-r from-[#6f0000] to-[#200122] flex justify-center">
      <div className='w-[1200px] pt-3 pb-3 text-white items-center grid grid-cols-12 grid-rows-1'>
        <div className="row-span-1 col-span-6 text-3xl">BLOODSYNC</div>
        <div className='col-span-5'>
          <ul className='container flex justify-between text-xl'>
            <li>Contact</li>
            <li>Hospital</li>
            <li>Appointment</li>
            <li>Dashboard</li>
          </ul>
        </div>
        <div className="col-span-1">
          <ul className='flex items-center justify-end text-xl'>
            <li><div className='mr-6'><i class="fa-solid fa-bars"></i></div></li>
            <li><div className="w-10 h-10  bg-white rounded-full">.</div></li>
          </ul>
        </div>        
      </div>    
    </div>
  )
}