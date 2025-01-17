import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
// import { AddHospital } from "./AddHospital";

export const AddHospitalSignin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/hospitalregistrationsignin', data);
      localStorage.setItem('authToken', response.data.token); // Save token in localStorage
      alert('Login successful');
      console.log(response.data); // You can use this data for further app functionality
    } catch (error) {
      alert('Login failed');
      console.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#9db4c0]">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-[#027c68] mb-6">
          Sign In
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className={`w-full px-3 py-2 mt-1 text-gray-900 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#027c68] focus:border-[#027c68] ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className={`w-full px-3 py-2 mt-1 text-gray-900 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#027c68] focus:border-[#027c68] ${
                errors.password ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-[#027c68] rounded-lg hover:bg-[#026a5b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#027c68]"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};
