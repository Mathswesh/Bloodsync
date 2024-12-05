import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../assets/images/img1.png';

export const Navbar = () => {
  // Sidebar
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Dropdown
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
      <div className="w-full max-w-[1200px] p-3 text-white items-center grid grid-cols-12 gap-4">
        {/* Logo */}
        <div className="col-span-6 sm:col-span-4 md:col-span-6 lg:col-span-4 text-2xl sm:text-3xl">
          <Link to="/landingpage">BLOODSYNC</Link>
        </div>

        {/* Main Links */}
        <div className="hidden sm:col-span-5 md:col-span-5 lg:col-span-5 xl:col-span-6 sm:flex justify-between text-sm md:text-lg">
          <ul className="flex space-x-4">
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/hospital">Hospital</Link></li>
            <li><Link to="/appointment">Appointment</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </div>

        {/* Hamburger Menu and Dropdown */}
        <div className="col-span-6 sm:col-span-3 md:col-span-2 lg:col-span-1 flex justify-end items-center space-x-4">
          {/* Hamburger Menu */}
          <button onClick={toggleSidebar} className="text-xl">
            <i className="fa-solid fa-bars"></i>
          </button>

          {/* User Dropdown */}
          <div className="relative dropdown-wrapper">
            <button
              onClick={toggleDropdown}
              className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden"
            >
              <img src={img1} alt="Profile" className="rounded-full w-9 h-9" />
            </button>

            {/* Dropdown Menu */}
            {isdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </Link>
                <Link
                  to="/settings"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Settings
                </Link>
                <Link
                  to="/logout"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div
        id="sidebar"
        className={`backdrop-blur-2xl fixed left-0 top-0 h-full w-64  shadow-lg transform transition-transform duration-300 z-20 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <ul className="p-4 text-white space-y-4 text-base">
          <li>
            <button onClick={toggleSidebar} className="text-xl">
              <i className="fa-solid fa-bars"></i>
            </button>
          </li>
          <li><Link to="/home" className="block hover:bg-cyan-700 p-2 rounded">Home</Link></li>
          <li><Link to="/contact" className="block hover:bg-cyan-700 p-2 rounded">Contact</Link></li>
          <li><Link to="/hospital" className="block hover:bg-cyan-700 p-2 rounded">Hospital</Link></li>
          <li><Link to="/appointment" className="block hover:bg-cyan-700 p-2 rounded">Appointment</Link></li>
          <li><Link to="/dashboard" className="block hover:bg-cyan-700 p-2 rounded">Dashboard</Link></li>
          <li><Link to="/profile" className="block hover:bg-cyan-700 p-2 rounded">Profile</Link></li>
          <li><Link to="/signin" className="block hover:bg-cyan-700 p-2 rounded">Sign In</Link></li>
          <li><Link to="/signup" className="block hover:bg-cyan-700 p-2 rounded">Sign Up</Link></li>
          <li><Link to="/certificate" className="block hover:bg-cyan-700 p-2 rounded">Certificate</Link></li>
          <li><Link to="/reviews" className="block hover:bg-cyan-700 p-2 rounded">Reviews</Link></li>
          <li><Link to="/publiccorner" className="block hover:bg-cyan-700 p-2 rounded">Public Corner</Link></li>
          <li><Link to="/payment" className="block hover:bg-cyan-700 p-2 rounded">Payment</Link></li>
          <li><Link to="/chatbot" className="block hover:bg-cyan-700 p-2 rounded">Chatbot</Link></li>
        </ul>
      </div>
    </div>
  );
};


// import { useState } from 'react'
// import React from 'react';
// import { Link } from 'react-router-dom'
// import img1 from '../assets/images/img1.png'
// export const Navbar = () => {
//   //sidebar
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   //dropdown
//   const [isdown, setIsdown] = useState(false);
//   const toggleDropdown = () => {
//     setIsdown(!isdown);
//   };
//   const handleClickOutside = (event) => {
//     if (!event.target.closest('.dropdown-wrapper')) {
//       setIsdown(false);
//     }
//   };
//   React.useEffect(() => {
//     document.addEventListener('click', handleClickOutside);
//     return () => {
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="font-serif bg-gradient-to-r from-[#6f0000] to-[#200122] flex justify-center">
//       <div className='w-[1200px] pt-3 pb-3 text-white items-center grid grid-cols-12 grid-rows-1'>
//         <div className="row-span-1 col-span-6 text-3xl"><Link to='/landingpage'>BLOODSYNC</Link></div>
//         <div className='col-span-5'>
//           <ul className='container flex justify-between text-xl'>
//             <li><Link to='/contact'>Contact</Link></li>
//             <li><Link to='/hospital'>Hospital</Link></li>
//             <li><Link to='/appointment'>Appointment</Link></li>
//             <li><Link to='/dashboard'>Dashboard</Link></li>
//           </ul>
//         </div>
//         <div className="col-span-1">
//           <ul className='flex items-center justify-end text-xl'>
//             <li><div className='mr-6'><button onClick={toggleSidebar}><i class="fa-solid fa-bars"></i></button></div></li>
//             <li>
//                 <div className="relative dropdown-wrapper z-20">
//                   {/* Dropdown Button */}
//                   <button onClick={toggleDropdown} className="w-10 h-10  bg-white rounded-full flex items-center justify-center"><img src={img1} className='rounded-full w-9 h-9' /></button>
//                   {/* Dropdown Menu */}
//                   {isdown && (
//                     <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
//                       <div className="block px-4 py-2 text-gray-700 hover:bg-gray-100" ><Link to="/profile">Profile</Link></div>
//                       <div className="block px-4 py-2 text-gray-700 hover:bg-gray-100" ><Link to="/settings">Settings</Link></div>
//                       <div className="block px-4 py-2 text-gray-700 hover:bg-gray-100" ><Link to="/logout">Logout</Link></div>
//                     </div>
//                   )}
//                 </div>
//               </li>
//           </ul>
//         </div>
//       </div>
//       <div id="sidebar" className={`fixed left-0 top-0 h-full w-64 backdrop-blur-3xl shadow-lg transform transition-transform duration-300 z-20 ${isOpen ? 'translate-x-0' : '-translate-x-full'
//         }`}>
//         <ul className='flex-row justify-between text-xl'>
//           <li><div className='text-white container'><button onClick={toggleSidebar}><i class="fa-solid fa-bars"></i></button></div></li>
//           <li><Link to='/home'> <button className='btn rounded-none text-left w-full text-white hover:bg-cyan-700'>Home</button></Link></li>
//           <li><Link to='/contact'> <button className='btn rounded-none text-left w-full text-white hover:bg-cyan-700'>Contact</button></Link></li>
//           <li><Link to='/hospital'> <button className='btn rounded-none text-left w-full text-white hover:bg-cyan-700'>Hospital</button></Link></li>
//           <li><Link to='/appointment'> <button className='btn rounded-none text-left w-full text-white hover:bg-cyan-700'>Appointment</button></Link></li>
//           <li><Link to='/dashboard'> <button className='btn rounded-none text-left w-full text-white hover:bg-cyan-700'>Dashboard</button></Link></li>
//           <li><Link to='/profile'> <button className='btn rounded-none text-left w-full text-white hover:bg-cyan-700'>Profile</button></Link></li>
//           <li><Link to='/signin'> <button className='btn rounded-none text-left w-full text-white hover:bg-cyan-700'>Singin</button></Link></li>
//           <li><Link to='/signup'> <button className='btn rounded-none text-left w-full text-white hover:bg-cyan-700'>Signup</button></Link></li>
//           <li><Link to='/certificate'> <button className='btn rounded-none text-left w-full text-white hover:bg-cyan-700'>Certificate</button></Link></li>
//           <li><Link to='/reviews'> <button className='btn rounded-none text-left w-full text-white hover:bg-cyan-700'>Reviews</button></Link></li>
//           <li><Link to='/publiccorner'> <button className='btn rounded-none text-left w-full text-white hover:bg-cyan-700'>Public corner</button></Link></li>
//           <li><Link to='/payment'> <button className='btn rounded-none text-left w-full text-white hover:bg-cyan-700'>Payment</button></Link></li>
//           <li><Link to='/chatbot'> <button className='btn rounded-none text-left w-full text-white hover:bg-cyan-700'>Chatbot</button></Link></li>
//         </ul>
//       </div>
//     </div>
//   )
// }