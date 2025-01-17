import React from 'react';
import { Link } from 'react-router-dom';

export const Appointment = () => {
  return (
    <div className="p-[50px] font-serif min-h-screen bg-[#9db4c0] flex justify-center px-4 sm:px-6 lg:px-8">
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
                <button className="btn bg-[#027c68] text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition-all">
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