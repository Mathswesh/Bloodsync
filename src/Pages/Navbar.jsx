import { useState } from 'react'
import React from 'react';
import { Link } from 'react-router-dom'
import img1 from '../assets/images/img1.png'
export const Navbar = () => {
  //sidebar
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  //dropdown
  const [isdown, setIsdown] = useState(false);
  const toggleDropdown = () => {
    setIsdown(!isdown);
  };
  const handleClickOutside = (event) => {
    if (!event.target.closest('.dropdown-wrapper')) {
      setIsdown(false);
    }
  };
  React.useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className="font-serif bg-gradient-to-r from-[#6f0000] to-[#200122] flex justify-center">
      <div className='w-[1200px] pt-3 pb-3 text-white items-center grid grid-cols-12 grid-rows-1'>
        <div className="row-span-1 col-span-6 text-3xl"><Link to='/landingpage'>BLOODSYNC</Link></div>
        <div className='col-span-5'>
          <ul className='container flex justify-between text-xl'>
            <li><Link to='/contact'>Contact</Link></li>
            <li><Link to='/hospital'>Hospital</Link></li>
            <li><Link to='/appointment'>Appointment</Link></li>
            <li><Link to='/dashboard'>Dashboard</Link></li>
          </ul>
        </div>
        <div className="col-span-1">
          <ul className='flex items-center justify-end text-xl'>
            <li><div className='mr-6'><button onClick={toggleSidebar}><i class="fa-solid fa-bars"></i></button></div></li>
            <li>
                <div className="relative dropdown-wrapper z-20">
                  {/* Dropdown Button */}
                  <button onClick={toggleDropdown} className="w-10 h-10  bg-white rounded-full flex items-center justify-center"><img src={img1} className='rounded-full w-9 h-9' /></button>
                  {/* Dropdown Menu */}
                  {isdown && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
                      <div className="block px-4 py-2 text-gray-700 hover:bg-gray-100" ><Link to="/profile">Profile</Link></div>
                      <div className="block px-4 py-2 text-gray-700 hover:bg-gray-100" ><Link to="/settings">Settings</Link></div>
                      <div className="block px-4 py-2 text-gray-700 hover:bg-gray-100" ><Link to="/logout">Logout</Link></div>
                    </div>
                  )}
                </div>
              </li>
          </ul>
        </div>
      </div>
      <div id="sidebar" className={`fixed left-0 top-0 h-full w-64 backdrop-blur-3xl shadow-lg transform transition-transform duration-300 z-20 ${isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
        <ul className='flex-row justify-between text-xl'>
          <li><div className='text-white container'><button onClick={toggleSidebar}><i class="fa-solid fa-bars"></i></button></div></li>
          <li><Link to='/home'> <button className='btn rounded-none text-left w-full text-white hover:bg-cyan-700'>Home</button></Link></li>
          <li><Link to='/contact'> <button className='btn rounded-none text-left w-full text-white hover:bg-cyan-700'>Contact</button></Link></li>
          <li><Link to='/hospital'> <button className='btn rounded-none text-left w-full text-white hover:bg-cyan-700'>Hospital</button></Link></li>
          <li><Link to='/appointment'> <button className='btn rounded-none text-left w-full text-white hover:bg-cyan-700'>Appointment</button></Link></li>
          <li><Link to='/dashboard'> <button className='btn rounded-none text-left w-full text-white hover:bg-cyan-700'>Dashboard</button></Link></li>
          <li><Link to='/profile'> <button className='btn rounded-none text-left w-full text-white hover:bg-cyan-700'>Profile</button></Link></li>
          <li><Link to='/signin'> <button className='btn rounded-none text-left w-full text-white hover:bg-cyan-700'>Singin</button></Link></li>
          <li><Link to='/signup'> <button className='btn rounded-none text-left w-full text-white hover:bg-cyan-700'>Signup</button></Link></li>
          <li><Link to='/certificate'> <button className='btn rounded-none text-left w-full text-white hover:bg-cyan-700'>Certificate</button></Link></li>
          <li><Link to='/reviews'> <button className='btn rounded-none text-left w-full text-white hover:bg-cyan-700'>Reviews</button></Link></li>
          <li><Link to='/publiccorner'> <button className='btn rounded-none text-left w-full text-white hover:bg-cyan-700'>Public corner</button></Link></li>
          <li><Link to='/payment'> <button className='btn rounded-none text-left w-full text-white hover:bg-cyan-700'>Payment</button></Link></li>
          <li><Link to='/chatbot'> <button className='btn rounded-none text-left w-full text-white hover:bg-cyan-700'>Chatbot</button></Link></li>
        </ul>
      </div>
    </div>
  )
}