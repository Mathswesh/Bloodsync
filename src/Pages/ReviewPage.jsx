import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ReviewPage = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [reviews, setReviews] = useState([]);

  const onSubmit = (data) => {
    setReviews([...reviews, data]);
    reset(); // Reset the form after submission
  };

  return (
    <div className="min-h-screen bg-[#9db4c0] p-[50px] flex flex-col items-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-xl">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Leave a Review</h1>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
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

          {/* Review */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Your Review
            </label>
            <textarea
              {...register("review", { required: "Review is required" })}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              placeholder="Write your review"
              rows="4"
            ></textarea>
            {errors.review && (
              <p className="text-red-500 text-sm">{errors.review.message}</p>
            )}
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Rating (1-5)
            </label>
            <select
              {...register("rating", { required: "Rating is required" })}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-cyan-500 focus:outline-none"
            >
              <option value="">Select a rating</option>
              <option value="1">1 - Poor</option>
              <option value="2">2 - Fair</option>
              <option value="3">3 - Good</option>
              <option value="4">4 - Very Good</option>
              <option value="5">5 - Excellent</option>
            </select>
            {errors.rating && (
              <p className="text-red-500 text-sm">{errors.rating.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#027c68] text-white py-2 rounded-md hover:bg-cyan-700 transition"
          >
            Submit Review
          </button>
        </form>
      </div>

      {/* Display Reviews
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-xl mt-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Reviews</h2>
        {reviews.length > 0 ? (
          <ul className="space-y-4">
            {reviews.map((review, index) => (
              <li
                key={index}
                className="border rounded-md p-4 bg-gray-50 shadow-sm"
              >
                <h3 className="text-lg font-bold text-gray-800">
                  {review.name} - <span className="text-cyan-600">{review.rating}/5</span>
                </h3>
                <p className="text-gray-700">{review.review}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">No reviews yet. Be the first to leave a review!</p>
        )}
      </div> */}
    </div>
  );
};

export default ReviewPage;
