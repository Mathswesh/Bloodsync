import React, {useState , useEffect} from 'react'
import { useForm } from 'react-hook-form'
import { signin } from '../services/userservice'
import { Link } from 'react-router-dom'
import { CustomLoder } from './CustomLoder'
export const Signup = () => {
  
  // method 1
  // const [isLoding, setisLoding] = useState(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm()

  const submitHandler = async (data) => {
    // console.log(data)
    // setisLoding(true);
    signin(data)
      .then((resp) => {
        console.log(resp)
        console.log("Done it is.")
      })
      .catch((errors) => {
        console.log("error", errors)
      })
      // setisLoding(false);
  }

  // method 2
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a data fetch
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds
    
    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  if (isLoading) {
    return <CustomLoder />;
  }
  
  return (
    <div className="font-serif bg-gradient-to-r from-[#6f0000] to-[#200122] flex items-center justify-center min-h-screen">
      {/* {isLoding && <CustomLoder/>} */}

      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4">Sign Up</h2>
        <p className="text-sm sm:text-base text-gray-600 text-center mb-6">Welcome back! Please enter your details.</p>
        <form className="space-y-4" onSubmit={handleSubmit(submitHandler)}>
          {/* First Name */}
          <div>
            <label htmlFor="firstname" className="block text-sm sm:text-base font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              required
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              {...register("firstname")}
            />
          </div>
          
          {/* Last Name */}
          <div>
            <label htmlFor="lastname" className="block text-sm sm:text-base font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              required
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              {...register("lastname")}
            />
          </div>
          
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              {...register("email")}
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm sm:text-base font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              {...register("password")}
            />
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <span className="ml-2 text-sm sm:text-base text-gray-600">Remember me</span>
            </label>
            <div className="text-sm sm:text-base text-blue-600 hover:underline">
              <Link to="/passwordreset">Forgot password?</Link> 
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Sign Up
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-2 text-sm text-gray-500">or continue with</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Social Sign-In Buttons */}
        <div className="flex space-x-4">
          <button className="flex-1 flex items-center justify-center bg-gray-100 text-gray-600 py-2 px-4 rounded-lg shadow hover:bg-gray-200">
            <img
              src="https://www.svgrepo.com/show/355037/google.svg"
              alt="Google"
              className="h-5 w-5 mr-2"
            />
            Google
          </button>
          <button className="flex-1 flex items-center justify-center bg-gray-100 text-gray-600 py-2 px-4 rounded-lg shadow hover:bg-gray-200">
            <img
              src="https://www.svgrepo.com/show/157806/facebook.svg"
              alt="Facebook"
              className="h-5 w-5 mr-2"
            />
            Facebook
          </button>
        </div>

        {/* Sign-Up Link */}
        <p className="text-sm sm:text-base text-center text-gray-600 mt-6">
          Don't have an account?{' '}
          <span className="text-blue-600 hover:underline">
            <Link to="/signin">Sign in</Link>
          </span>
        </p>
      </div>
    </div>
  )
}


// import React from 'react'
// import { useForm } from 'react-hook-form'
// import { signin } from '../services/userservice'
// import { Link } from 'react-router-dom'
// export const Signup = () => {

//   const {register , handleSubmit , formState:{errors} } = useForm()
  
//   const submintHandler= async (data) =>{
//     console.log(data)
//     signin(data)
//     .then((resp)=>{
//         console.log(resp)
//         console.log("Done it is.")
//     })
//     .catch((errors)=>{
//         console.log("error",errors)
//     })
//   }

//   return (
//       <div className="font-serif bg-gradient-to-r from-[#6f0000] to-[#200122] flex items-center justify-center min-h-screen">
//         <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
//           <h2 className="text-2xl font-bold text-center text-gray-800">Sign Up</h2>
//           <p className="text-sm text-gray-600 text-center mb-6">Welcome back! Please enter your details.</p>
//           <form className="space-y-4" onSubmit={handleSubmit(submintHandler)}>
//             {/* Email Input */}
//             <div>
//               <label htmlFor="username" className="block text-sm font-medium text-gray-700">
//                 FirstName
//               </label>
//               <input
//                 type="text"
//                 id="firstname"
//                 name="firstname"
//                 required
//                 className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                 {...register("firstname")}
//               />
//             </div>
//             <div>
//               <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
//                 LastName
//               </label>
//               <input
//                 type="text"
//                 id="lastname"
//                 name="lastname"
//                 required
//                 className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                 {...register("lastname")}
//               />
//             </div>
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 required
//                 className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                 {...register("email")}
//               />
//             </div>
  
//             {/* Password Input */}
//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 required
//                 className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                 {...register("password")}
//               />
//             </div>
  
//             {/* Remember Me and Forgot Password */}
//             <div className="flex items-center justify-between">
//               <label className="flex items-center">
//                 <input
//                   type="checkbox"
//                   className="h-4 w-4 text-blue-600 border-gray-300 rounded"
//                 />
//                 <span className="ml-2 text-sm text-gray-600">Remember me</span>
//               </label>
//               <a href="#" className="text-sm text-blue-600 hover:underline">
//                 Forgot password?
//               </a>
//             </div>
  
//             {/* Submit Button */}
//             <div>
//               <button
//                 type="submit"
//                 className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//               >
//                 <Link to="/singin">Sign Up</Link>
//               </button>
//             </div>
//           </form>
  
//           {/* Divider */}
//           <div className="flex items-center my-6">
//             <div className="flex-grow border-t border-gray-300"></div>
//             <span className="px-2 text-sm text-gray-500">or continue with</span>
//             <div className="flex-grow border-t border-gray-300"></div>
//           </div>
  
//           {/* Social Sign-In Buttons */}
//           <div className="flex space-x-4">
//             <button className="flex-1 flex items-center justify-center bg-gray-100 text-gray-600 py-2 px-4 rounded-lg shadow hover:bg-gray-200">
//               <img
//                 src="https://www.svgrepo.com/show/355037/google.svg"
//                 alt="Google"
//                 className="h-5 w-5 mr-2"
//               />
//               Google
//             </button>
//             <button className="flex-1 flex items-center justify-center bg-gray-100 text-gray-600 py-2 px-4 rounded-lg shadow hover:bg-gray-200">
//               <img
//                 src="https://www.svgrepo.com/show/157806/facebook.svg"
//                 alt="Facebook"
//                 className="h-5 w-5 mr-2"
//               />
//               Facebook
//             </button>
//           </div>
  
//           {/* Sign-Up Link */}
//           <p className="text-sm text-center text-gray-600 mt-6">
//             Don't have an account?{' '}
//             <span className="text-blue-600 hover:underline"><Link to="/signin">Sign in</Link></span>
//           </p>
//         </div>
//       </div>
//   )
// }