import React from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import footerlogo from '../assets/images/footerlogo.png'
export const Footer = () => {
  return (
    <footer className="bg-teal-800 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center lg:items-start space-y-8 lg:space-y-0">
        {/* Logo & Description */}
        <div className="flex flex-col items-center lg:items-start">
          {/* <img
            src={footerlogo}
            alt="Logo"
            className="w-20 h-20 mb-4"
          /> */}
          <p className="text-center lg:text-left text-sm">
            Inspiring people to donate blood and make significant
            societal contributions through kindness <FavoriteIcon fontSize="10px"/> , since 2024
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-lg font-bold mb-4 text-green-300">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-green-300">Home</a></li>
            <li><a href="#hackathons" className="hover:text-green-300">Blogs</a></li>
            <li><a href="#events" className="hover:text-green-300">Events</a></li>
            <li><a href="#achievements" className="hover:text-green-300">Achievements</a></li>
            <li><a href="#contact" className="hover:text-green-300">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-lg font-bold mb-4 text-green-300">Contact Us</h3>
          <p className="text-sm">Bloodsync </p>
          <p className="text-sm">KSV University, Gandhinagar, Gujarat, India</p>
          <p className="text-sm">Phone: 999-999-99999</p>
          <p className="text-sm">Email: <a href="mailto:bloodsync@gmail.com" className="hover:text-green-300">bloodsync@gmail.com</a></p>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-center lg:items-start">
          <h3 className="text-lg font-bold mb-4 text-green-300">Follow Us</h3>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-green-300"
          >
            <span className="text-xl">in</span>
            <span className="text-sm">@bloodsync</span>
          </a>
        </div>
      </div>

      <div className="mt-8 border-t border-teal-700 pt-4 text-center text-sm text-teal-400">
        © 2025 Bloodsync. All rights reserved.
      </div>
    </footer>
  );
};