import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Link } from 'react-router-dom';
import MedicationIcon from '@mui/icons-material/Medication';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import ScrollToTop from './ScrollToTop';
import ScrollHeaderBar from './ScrollHeaderBar';

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
    <StyledWrapper>
      <div className="h-6 bg-[#9db4c0]"></div>
      <div className="navwrap bg-[#9db4c0]">
        <motion.div
          className="button-container"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <button className="button">
            <Link to="/landingpage"><HomeIcon /></Link>
          </button>
          <button className="button">
            <Link to="/hospitallist"><BookOnlineIcon /></Link>
          </button>
          <button className="button">
            <Link to="/appointment"><NoteAltIcon/></Link>
          </button>
          <button className="button" onClick={toggleSidebar}>
            {isOpen ? <CloseIcon /> : <FormatListBulletedIcon />}
          </button>
        </motion.div>
        <ScrollToTop/>
        <ScrollHeaderBar/>
        {/* Sidebar */}
        <motion.div
          id="sidebar"
          className={`backdrop-blur-2xl fixed z-20 left-0 top-0 h-full w-64 shadow-lg  ${isOpen ? 'open' : 'closed'}`}
          initial={{ x: '-100%' }}
          animate={{ x: isOpen ? '0%' : '-100%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <ul className="p-4 text-white space-y-4 text-base">
            <li>
              <button onClick={toggleSidebar} className="text-xl">
                <i className="fa-solid fa-circle-xmark"></i>
              </button>
            </li>
            <li><Link to="/landingpage" className="block hover:bg-cyan-700 p-2 rounded">Home</Link></li>
            <li><Link to="/addhospitalform" className="block hover:bg-cyan-700 p-2 rounded">Add Hospital</Link></li>
            <li><Link to="/contact" className="block hover:bg-cyan-700 p-2 rounded">Contact</Link></li>
            <li><Link to="/hospitallist" className="block hover:bg-cyan-700 p-2 rounded">Hospitals</Link></li>
            <li><Link to="/appointment" className="block hover:bg-cyan-700 p-2 rounded">Appointment</Link></li>
            <li><Link to="/hospitaldashboard" className="block hover:bg-cyan-700 p-2 rounded">Dashboard</Link></li>
            <li><Link to="/profile" className="block hover:bg-cyan-700 p-2 rounded">Profile</Link></li>
            <li><Link to="/signin" className="block hover:bg-cyan-700 p-2 rounded">Sign In</Link></li>
            <li><Link to="/signup" className="block hover:bg-cyan-700 p-2 rounded">Sign Up</Link></li>
            <li><Link to="/certificate" className="block hover:bg-cyan-700 p-2 rounded">Certificate</Link></li>
            <li><Link to="/reviews" className="block hover:bg-cyan-700 p-2 rounded">Reviews</Link></li>
            <li><Link to="/publiccorner" className="block hover:bg-cyan-700 p-2 rounded">Public Corner</Link></li>
            <li><Link to="/chatbot" className="block hover:bg-cyan-700 p-2 rounded">Chatbot</Link></li>
          </ul>
        </motion.div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .navwrap {
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;
    z-index: 10;
  }
  .button-container {
    display: flex;
    background-color: #027c68;
    width: 250px;
    height: 40px;
    align-items: center;
    justify-content: space-around;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px, rgba(27, 133, 219, 0.5) 5px 10px 15px;
  }
  .button {
    outline: 0 !important;
    border: 0 !important;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    transition: all ease-in-out 0.3s;
    cursor: pointer;
  }
  .button:hover {
    transform: translateY(-3px);
  }
  #sidebar {
    background-color: #027c68;
    color: white;
    height: 100vh;
  }
`;

// import React from 'react';
// import styled from 'styled-components';
// import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
// import { Link } from 'react-router-dom'
// import MedicationIcon from '@mui/icons-material/Medication';
// import BookOnlineIcon from '@mui/icons-material/BookOnline';
// import { useState } from 'react';
// import CloseIcon from '@mui/icons-material/Close';
// import HomeIcon from '@mui/icons-material/Home';

// export const Navbar = () => {
//   //   // Sidebar
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   // Dropdown
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
//     <StyledWrapper>
//       <div className="navwrap">
//         <div className="button-container">
//           <button className="button" >
//             <Link to="/landingpage"><HomeIcon/></Link>
//           </button>
//           <button className="button">
//             <Link to="/hospitallist"><BookOnlineIcon /></Link>
//           </button>
//           <button className="button">
//             <Link to="/hospital"><MedicationIcon /></Link>
//           </button>
//           <button className="button" onClick={toggleSidebar}>
//             {
//               isOpen == true
//                 ?
//                 <CloseIcon />
//                 :
//                 <FormatListBulletedIcon />
//             }
//           </button>
//         </div>
//         {/* Sidebar */}
//         <div
//           id="sidebar"
//           className={`backdrop-blur-2xl fixed left-0 top-0 h-full w-64  shadow-lg transform transition-transform duration-300 z-20 ${isOpen ? 'translate-x-0' : '-translate-x-full'
//             }`}
//         >
//           <ul className="p-4 text-white space-y-4 text-base">
//             <li>
//               <button onClick={toggleSidebar} className="text-xl">
//                 <i class="fa-solid fa-circle-xmark"></i>
//               </button>
//             </li>
//             <li><Link to="/landingpage" className="block hover:bg-cyan-700 p-2 rounded">Home</Link></li>
//             <li><Link to="/contact" className="block hover:bg-cyan-700 p-2 rounded">Contact</Link></li>
//             <li><Link to="/hospital" className="block hover:bg-cyan-700 p-2 rounded">Hospital</Link></li>
//             <li><Link to="/appointment" className="block hover:bg-cyan-700 p-2 rounded">Appointment</Link></li>
//             <li><Link to="/dashboard" className="block hover:bg-cyan-700 p-2 rounded">Dashboard</Link></li>
//             <li><Link to="/profile" className="block hover:bg-cyan-700 p-2 rounded">Profile</Link></li>
//             <li><Link to="/signin" className="block hover:bg-cyan-700 p-2 rounded">Sign In</Link></li>
//             <li><Link to="/signup" className="block hover:bg-cyan-700 p-2 rounded">Sign Up</Link></li>
//             <li><Link to="/certificate" className="block hover:bg-cyan-700 p-2 rounded">Certificate</Link></li>
//             <li><Link to="/reviews" className="block hover:bg-cyan-700 p-2 rounded">Reviews</Link></li>
//             <li><Link to="/publiccorner" className="block hover:bg-cyan-700 p-2 rounded">Public Corner</Link></li>
//             <li><Link to="/payment" className="block hover:bg-cyan-700 p-2 rounded">Payment</Link></li>
//             <li><Link to="/chatbot" className="block hover:bg-cyan-700 p-2 rounded">Chatbot</Link></li>
//           </ul>
//         </div>
//       </div>
//     </StyledWrapper>
//   );
// }

// const StyledWrapper = styled.div`
//   .navwrap{
//     display:flex;
//     align-items: center;
//     justify-content: space-around;  
//     position:relative;
//     top:20px;
//     z-index:10;
//     // background-color:#027c68;
//   }
//   .button-container {
//     display: flex;
//     // background-color: rgb(27, 133, 219);
//     background-color: #027c68;
//     width: 250px;
//     height: 40px;
//     align-items: center;
//     justify-content: space-around;
//     border-radius: 10px;
//     box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px,
//       rgba(27, 133, 219, 0.5) 5px 10px 15px;
//   }

//   .button {
//     outline: 0 !important;
//     border: 0 !important;
//     width: 40px;
//     height: 40px;
//     border-radius: 50%;
//     background-color: transparent;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     color: #fff;
//     transition: all ease-in-out 0.3s;
//     cursor: pointer;
//   }

//   .button:hover {
//     transform: translateY(-3px);
//   }

//   .icon {
//     font-size: 20px;
//   }`;



// import { useState } from 'react';
// import React from 'react';
// import { Link } from 'react-router-dom';
// import img1 from '../assets/images/img1.png';

// export const Navbar = () => {
//   // Sidebar
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   // Dropdown
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
//     <div className="font-serif text-white bg-[#253237] flex justify-center">
//       <div className="w-full max-w-[1536px] p-3 items-center grid grid-cols-12 gap-4">
//         {/* Logo */}
//         <div className="col-span-6 sm:col-span-4 md:col-span-6 lg:col-span-4 text-2xl sm:text-3xl">
//           <Link to="/landingpage">BLOODSYNC</Link>
//         </div>

//         {/* Main Links */}
//         <div className="hidden sm:col-span-5 md:col-span-5 lg:col-span-5 xl:col-span-6 sm:flex justify-between text-sm md:text-lg">
//           <ul className="flex space-x-4">
//             <li><Link to="/hospitallist">Hospitals</Link></li>
//             <li><Link to="/hospital">Appointment</Link></li>
//             <li><Link to="/dashboard">Dashboard</Link></li>
//           </ul>
//         </div>

//         {/* Hamburger Menu and Dropdown */}
//         <div className="col-span-6 sm:col-span-3 md:col-span-2 lg:col-span-1 flex justify-end items-center space-x-4">
//           {/* Hamburger Menu */}
//           <button onClick={toggleSidebar} className="text-xl">
//             {
//             isOpen==true
//             ?
//             <i class="fa-solid fa-circle-xmark text-3xl"></i>
//             :
//             <i className="fa-solid fa-bars text-3xl"></i>

//             }
//           </button>

//           {/* User Dropdown */}
//           <div className="relative dropdown-wrapper">
//             <button
//               onClick={toggleDropdown}
//               className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden"
//             >
//               <img src={img1} alt="Profile" className="rounded-full w-9 h-9" />
//             </button>

//             {/* Dropdown Menu */}
//             {isdown && (
//               <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
//                 <Link
//                   to="/profile"
//                   className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                 >
//                   Profile
//                 </Link>
//                 <Link
//                   to="/settings"
//                   className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                 >
//                   Settings
//                 </Link>
//                 <Link
//                   to="/logout"
//                   className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
//                 >
//                   <button>LogOut</button>
//                 </Link>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Sidebar */}
//       <div
//         id="sidebar"
//         className={`backdrop-blur-2xl fixed left-0 top-0 h-full w-64  shadow-lg transform transition-transform duration-300 z-20 ${isOpen ? 'translate-x-0' : '-translate-x-full'
//           }`}
//       >
//         <ul className="p-4 text-white space-y-4 text-base">
//           <li>
//             <button onClick={toggleSidebar} className="text-xl">
//             <i class="fa-solid fa-circle-xmark"></i>
//             </button>
//           </li>
//           <li><Link to="/home" className="block hover:bg-cyan-700 p-2 rounded">Home</Link></li>
//           <li><Link to="/contact" className="block hover:bg-cyan-700 p-2 rounded">Contact</Link></li>
//           <li><Link to="/hospital" className="block hover:bg-cyan-700 p-2 rounded">Hospital</Link></li>
//           <li><Link to="/appointment" className="block hover:bg-cyan-700 p-2 rounded">Appointment</Link></li>
//           <li><Link to="/dashboard" className="block hover:bg-cyan-700 p-2 rounded">Dashboard</Link></li>
//           <li><Link to="/profile" className="block hover:bg-cyan-700 p-2 rounded">Profile</Link></li>
//           <li><Link to="/signin" className="block hover:bg-cyan-700 p-2 rounded">Sign In</Link></li>
//           <li><Link to="/signup" className="block hover:bg-cyan-700 p-2 rounded">Sign Up</Link></li>
//           <li><Link to="/certificate" className="block hover:bg-cyan-700 p-2 rounded">Certificate</Link></li>
//           <li><Link to="/reviews" className="block hover:bg-cyan-700 p-2 rounded">Reviews</Link></li>
//           <li><Link to="/publiccorner" className="block hover:bg-cyan-700 p-2 rounded">Public Corner</Link></li>
//           <li><Link to="/payment" className="block hover:bg-cyan-700 p-2 rounded">Payment</Link></li>
//           <li><Link to="/chatbot" className="block hover:bg-cyan-700 p-2 rounded">Chatbot</Link></li>
//         </ul>
//       </div>
//     </div>
//   );
// };