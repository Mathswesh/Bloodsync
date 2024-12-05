import React, { useState } from "react";
import { Link } from "react-router-dom";
const Otppage = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [error, setError] = useState("");

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return;

    let newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Focus next input
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const handleSubmit = () => {
    if (otp.join("").length !== 6) {
      setError("Please enter a 6-digit OTP.");
    } else {
      setError("");
      alert(`OTP Submitted: ${otp.join("")}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Verify OTP
        </h2>
        <p className="text-center text-gray-600 mb-4">
          Enter the 6-digit OTP sent to your phone.
        </p>
        <div className="flex justify-center space-x-2">
          {otp.map((data, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onFocus={(e) => e.target.select()}
              className="w-12 h-12 text-lg text-center border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-500"
            />
          ))}
        </div>
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        <button
          onClick={handleSubmit}
          className="mt-6 w-full py-2 bg-red-900 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          <Link to="/newpassword">SUBMIT</Link>
        </button>
      </div>
    </div>
  );
};

export default Otppage;
