import React from "react";
import { useForm } from "react-hook-form";
import { userregistration } from '../services/userservice'


const BloodDonationForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Form Data Submitted:", data);
        alert("Form submitted successfully!");
        userregistration(data)
            .then((resp) => {
                console.log(resp)
                console.log("Done it is.")
            })
            .catch((errors) => {
                console.log("error", errors)
            })
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#9db4c0] p-4">
            <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-gray-700 text-center mb-6">
                    Blood Donation Form
                </h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* First Name */}
                    <div className="mb-4">
                        <label
                            className="block text-sm font-medium text-gray-700 mb-1"
                            htmlFor="firstname"
                        >
                            First Name
                        </label>
                        <input
                            id="firstname"
                            type="text"
                            {...register("firstname", { required: "First name is required" })}
                            className={`w-full px-4 py-2 border rounded-md focus:outline-none ${errors.firstname ? "border-red-500" : "border-gray-300"
                                }`}
                            placeholder="Enter your first name"
                        />
                        {errors.firstname && (
                            <p className="text-red-500 text-sm">{errors.firstname.message}</p>
                        )}
                    </div>

                    {/* Last Name */}
                    <div className="mb-4">
                        <label
                            className="block text-sm font-medium text-gray-700 mb-1"
                            htmlFor="lastname"
                        >
                            Last Name
                        </label>
                        <input
                            id="lastname"
                            type="text"
                            {...register("lastname", { required: "Last name is required" })}
                            className={`w-full px-4 py-2 border rounded-md focus:outline-none ${errors.lastname ? "border-red-500" : "border-gray-300"
                                }`}
                            placeholder="Enter your last name"
                        />
                        {errors.lastname && (
                            <p className="text-red-500 text-sm">{errors.lastname.message}</p>
                        )}
                    </div>

                    {/* Age */}
                    <div className="mb-4">
                        <label
                            className="block text-sm font-medium text-gray-700 mb-1"
                            htmlFor="age"
                        >
                            Age
                        </label>
                        <input
                            id="age"
                            type="number"
                            {...register("age", {
                                required: "Age is required",
                                min: { value: 18, message: "Minimum age is 18" },
                                max: { value: 65, message: "Maximum age is 65" },
                            })}
                            className={`w-full px-4 py-2 border rounded-md focus:outline-none ${errors.age ? "border-red-500" : "border-gray-300"
                                }`}
                            placeholder="Enter your age"
                        />
                        {errors.age && (
                            <p className="text-red-500 text-sm">{errors.age.message}</p>
                        )}
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label
                            className="block text-sm font-medium text-gray-700 mb-1"
                            htmlFor="email"
                        >
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "Enter a valid email address",
                                },
                            })}
                            className={`w-full px-4 py-2 border rounded-md focus:outline-none ${errors.email ? "border-red-500" : "border-gray-300"
                                }`}
                            placeholder="Enter your email"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Phone Number */}
                    <div className="mb-4">
                        <label
                            className="block text-sm font-medium text-gray-700 mb-1"
                            htmlFor="phone"
                        >
                            Phone Number
                        </label>
                        <input
                            id="phone"
                            type="text"
                            {...register("phone", {
                                required: "Phone number is required",
                                pattern: {
                                    value: /^\d{10}$/,
                                    message: "Phone number must be 10 digits",
                                },
                            })}
                            className={`w-full px-4 py-2 border rounded-md focus:outline-none ${errors.phone ? "border-red-500" : "border-gray-300"
                                }`}
                            placeholder="Enter your phone number"
                        />
                        {errors.phone && (
                            <p className="text-red-500 text-sm">{errors.phone.message}</p>
                        )}
                    </div>

                    {/* City */}
                    <div className="mb-4">
                        <label
                            className="block text-sm font-medium text-gray-700 mb-1"
                            htmlFor="city"
                        >
                            City
                        </label>
                        <input
                            id="city"
                            type="text"
                            {...register("city", { required: "City is required" })}
                            className={`w-full px-4 py-2 border rounded-md focus:outline-none ${errors.city ? "border-red-500" : "border-gray-300"
                                }`}
                            placeholder="Enter your city"
                        />
                        {errors.city && (
                            <p className="text-red-500 text-sm">{errors.city.message}</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#027c68] text-white py-2 rounded-md hover:bg-cyan-700 transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BloodDonationForm;
