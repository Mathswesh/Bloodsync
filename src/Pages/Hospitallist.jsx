import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchhospitaldata } from '../services/slices/hospitalslice';

export const Hospitallist = () => {
  const dispatch = useDispatch();
  const { isLoading, data, isError } = useSelector((state) => state.hospitaldata);
  console.log(data)
  useEffect(() => {
    dispatch(fetchhospitaldata());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-600 text-lg">Failed to load hospital data. Please try again later.</p>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-500 text-lg">No hospital data available.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold text-blue-600 mb-4">Hospital Data</h1>

      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-4">
        <table className="table-auto w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-blue-100">
              <th className="border border-gray-300 px-4 py-2">State</th>
              <th className="border border-gray-300 px-4 py-2">District</th>
              <th className="border border-gray-300 px-4 py-2">Taluka</th>
              <th className="border border-gray-300 px-4 py-2">Hospital Name</th>
              <th className="border border-gray-300 px-4 py-2">Address</th>
              <th className="border border-gray-300 px-4 py-2">Email</th>
              <th className="border border-gray-300 px-4 py-2">Contact</th>
            </tr>
          </thead>
          <tbody>
            {data.data.map((hospital, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{hospital.state || 'N/A'}</td>
                <td className="border border-gray-300 px-4 py-2">{hospital.district || 'N/A'}</td>
                <td className="border border-gray-300 px-4 py-2">{hospital.taluka || 'N/A'}</td>
                <td className="border border-gray-300 px-4 py-2">{hospital.hname || 'N/A'}</td>
                <td className="border border-gray-300 px-4 py-2">{hospital.haddress || 'N/A'}</td>
                <td className="border border-gray-300 px-4 py-2">{hospital.email || 'N/A'}</td>
                <td className="border border-gray-300 px-4 py-2">{hospital.contact || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};