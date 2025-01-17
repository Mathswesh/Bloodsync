import React from "react";
import { useForm } from "react-hook-form";

const ContactUs = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Your message has been sent successfully!");
    reset(); // Reset the form after submission
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-xl">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">Contact Us</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="name">
              Your Name
            </label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="email">
              Your Email
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Enter a valid email address"
                },
              })}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Subject */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="subject">
              Subject
            </label>
            <input
              type="text"
              {...register("subject", { required: "Subject is required" })}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              placeholder="Enter the subject"
            />
            {errors.subject && (
              <p className="text-red-500 text-sm">{errors.subject.message}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="message">
              Your Message
            </label>
            <textarea
              {...register("message", { required: "Message is required" })}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              placeholder="Enter your message"
              rows="4"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
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

      {/* Contact Information */}
      <div className="mt-8 text-center text-gray-600">
        <h2 className="text-xl font-semibold">Our Office</h2>
        <p className="mt-2">1234 Some Street, City, State, ZIP</p>
        <p>Email: contact@yourdomain.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
    </div>
  );
};

export default ContactUs;
