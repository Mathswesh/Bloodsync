import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom'

const ProfileForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isCm, setIsCm] = useState(true); // Toggle state for cm or feet/inches

  // const onSubmit = (data) => {
  //   console.log("Profile Data:", data);
  //   alert("Form submitted successfully!");
  // };

  // Framer Motion Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };
  const submithandler = async (data) => {
    console.log(data)
    
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#9db4c0] p-[50px]">
      <motion.div
        className="max-w-lg w-full bg-white p-6 rounded-lg shadow-md"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <h1 className="text-3xl font-bold text-black text-center mb-6">
          Profile Information
        </h1>
        <form onSubmit={handleSubmit(submithandler)}>
          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-black" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              {...register("name", {
                required: "Name is required",
                maxLength: { value: 50, message: "Name cannot exceed 50 characters" },
              })}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none ${errors.name ? "border-red-500" : "border-red-200"
                }`}
              type="text"
              placeholder="Enter your name"
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          {/* Gender */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-black">Gender</label>
            <select
              {...register("gender", { required: "Gender is required" })}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none ${errors.gender ? "border-red-500" : "border-red-200"
                }`}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <p className="text-black text-sm">{errors.gender.message}</p>}
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-black" htmlFor="phone">
              Phone Number
            </label>
            <input
              id="phone"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Phone number must be 10 digits",
                },
              })}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none ${errors.phone ? "border-red-500" : "border-red-200"
                }`}
              type="tel"
              placeholder="Enter your phone number"
            />
            {errors.phone && <p className="text-black text-sm">{errors.phone.message}</p>}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-black" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Enter a valid email address",
                },
              })}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none ${errors.email ? "border-red-500" : "border-red-200"
                }`}
              type="email"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-black text-sm">{errors.email.message}</p>}
          </div>

          {/* Weight */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1 text-black" htmlFor="weight">
              Weight (kg)
            </label>
            <input
              id="weight"
              {...register("weight", {
                required: "Weight is required",
                min: { value: 1, message: "Weight must be at least 1 kg" },
                max: { value: 500, message: "Weight must be less than 500 kg" },
              })}
              className={`w-full px-4 py-2 border rounded-md focus:outline-none ${errors.weight ? "border-red-500" : "border-red-200"
                }`}
              type="number"
              placeholder="Enter your weight"
            />
            {errors.weight && <p className="text-red-500 text-sm">{errors.weight.message}</p>}
          </div>

          {/* Height */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-black">Height</label>
              <div className="text-sm text-black">
                <span
                  className={`cursor-pointer px-2 ${isCm ? "font-bold underline" : "opacity-50"
                    }`}
                  onClick={() => setIsCm(true)}
                >
                  cm
                </span>
                <span>|</span>
                <span
                  className={`cursor-pointer px-2 ${!isCm ? "font-bold underline" : "opacity-50"
                    }`}
                  onClick={() => setIsCm(false)}
                >
                  ft/in
                </span>
              </div>
            </div>

            {isCm ? (
              <input
                {...register("heightCm", {
                  required: "Height is required",
                  min: { value: 30, message: "Height must be at least 30 cm" },
                  max: { value: 300, message: "Height must be less than 300 cm" },
                })}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none ${errors.heightCm ? "border-red-500" : "border-red-200"
                  }`}
                type="number"
                placeholder="Enter your height in cm"
              />
            ) : (
              <div className="flex gap-4">
                <div className="flex-1">
                  <input
                    {...register("heightFeet", {
                      required: "Feet is required",
                      min: { value: 1, message: "Feet must be at least 1" },
                      max: { value: 8, message: "Feet must be less than 8" },
                    })}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none ${errors.heightFeet ? "border-red-500" : "border-red-200"
                      }`}
                    type="number"
                    placeholder="Feet"
                  />
                  {errors.heightFeet && (
                    <p className="text-black text-sm">{errors.heightFeet.message}</p>
                  )}
                </div>
                <div className="flex-1">
                  <input
                    {...register("heightInches", {
                      required: "Inches is required",
                      min: { value: 0, message: "Inches must be at least 0" },
                      max: { value: 11, message: "Inches must be less than 12" },
                    })}
                    className={`w-full px-4 py-2 border rounded-md focus:outline-none ${errors.heightInches ? "border-red-500" : "border-red-200"
                      }`}
                    type="number"
                    placeholder="Inches"
                  />
                  {errors.heightInches && (
                    <p className="text-black text-sm">{errors.heightInches.message}</p>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-[#027c68] text-white py-2 rounded-md hover:bg-cyan-600 transition"
          >
            Submit
          </motion.button>
          <br />
          <br />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full  bg-[#027c68] text-white py-2 rounded-md hover:bg-cyan-600 transition"
          >
            <Link to="/datetimeform">Next</Link>
          </motion.button>

        </form>
      </motion.div>
    </div>
  );
};

export default ProfileForm;
