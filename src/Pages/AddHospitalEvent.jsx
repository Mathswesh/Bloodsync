import React from "react";
import { useForm } from "react-hook-form";

export const AddHospitalEvent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
    // Add logic to send form data to your backend (e.g., using Axios or Fetch)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-teal-600 mb-6">
          Create Hospital Event
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Event Name */}
          <div className="mb-4">
            <label htmlFor="eventname" className="block text-sm font-medium text-gray-700">
              Event Name
            </label>
            <input
              type="text"
              id="eventname"
              className={`w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.eventname ? "border-red-500 focus:ring-red-500" : "focus:ring-teal-600"
              }`}
              {...register("eventname", { required: "Event Name is required" })}
            />
            {errors.eventname && (
              <p className="mt-1 text-sm text-red-500">{errors.eventname.message}</p>
            )}
          </div>

          {/* Event Date */}
          <div className="mb-4">
            <label htmlFor="eventdate" className="block text-sm font-medium text-gray-700">
              Event Date
            </label>
            <input
              type="date"
              id="eventdate"
              className={`w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.eventdate ? "border-red-500 focus:ring-red-500" : "focus:ring-teal-600"
              }`}
              {...register("eventdate", { required: "Event Date is required" })}
            />
            {errors.eventdate && (
              <p className="mt-1 text-sm text-red-500">{errors.eventdate.message}</p>
            )}
          </div>

          {/* Event Time */}
          <div className="mb-4">
            <label htmlFor="eventtime" className="block text-sm font-medium text-gray-700">
              Event Time
            </label>
            <input
              type="time"
              id="eventtime"
              className={`w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.eventtime ? "border-red-500 focus:ring-red-500" : "focus:ring-teal-600"
              }`}
              {...register("eventtime", { required: "Event Time is required" })}
            />
            {errors.eventtime && (
              <p className="mt-1 text-sm text-red-500">{errors.eventtime.message}</p>
            )}
          </div>

          {/* Event Location */}
          <div className="mb-4">
            <label htmlFor="eventlocation" className="block text-sm font-medium text-gray-700">
              Event Location
            </label>
            <input
              type="text"
              id="eventlocation"
              className={`w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.eventlocation ? "border-red-500 focus:ring-red-500" : "focus:ring-teal-600"
              }`}
              {...register("eventlocation", { required: "Event Location is required" })}
            />
            {errors.eventlocation && (
              <p className="mt-1 text-sm text-red-500">{errors.eventlocation.message}</p>
            )}
          </div>

          {/* Event Description */}
          <div className="mb-6">
            <label htmlFor="eventdescription" className="block text-sm font-medium text-gray-700">
              Event Description
            </label>
            <textarea
              id="eventdescription"
              rows="4"
              className={`w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.eventdescription ? "border-red-500 focus:ring-red-500" : "focus:ring-teal-600"
              }`}
              {...register("eventdescription", { required: "Event Description is required" })}
            />
            {errors.eventdescription && (
              <p className="mt-1 text-sm text-red-500">{errors.eventdescription.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
          >
            Submit Event
          </button>
        </form>
      </div>
    </div>
  );
};