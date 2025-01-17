import React, { useState } from 'react';
import { hospitalregestrationpost } from '../services/userservice';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Link , useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export const AddHospital = () => {
    const countries = {
    "India": {
      "states": {
        "Gujarat": {
          "districts": {
            "Ahmedabad": {
              "talukas": [
                "Ahmedabad City",
                "Sanand",
                "Daskroi",
                "Viramgam",
                "Bavla",
                "Mandal"
              ]
            },
            "Amreli": {
              "talukas": [
                "Amreli",
                "Lathi",
                "Rajula",
                "Khambha",
                "Jafrabad"
              ]
            },
            "Anand": {
              "talukas": [
                "Anand",
                "Khambhat",
                "Borsad",
                "Petlad",
                "Nadiad"
              ]
            },
            "Aravalli": {
              "talukas": [
                "Modasa",
                "Bhiloda",
                "Malpur",
                "Dhansura"
              ]
            },
            "Banaskantha": {
              "talukas": [
                "Palanpur",
                "Deesa",
                "Tharad",
                "Bhanvad",
                "Vav"
              ]
            },
            "Bharuch": {
              "talukas": [
                "Bharuch",
                "Jhagadia",
                "Ankleshwar",
                "Vagra",
                "Valia"
              ]
            },
            "Bhavnagar": {
              "talukas": [
                "Bhavnagar City",
                "Gadhada",
                "Valia",
                "Sihor"
              ]
            },
            "Botad": {
              "talukas": [
                "Botad",
                "Barvala",
                "Gadhada"
              ]
            },
            "Chhota Udepur": {
              "talukas": [
                "Chhota Udepur",
                "Bodeli",
                "Kavant",
                "Dediapada"
              ]
            },
            "Dahod": {
              "talukas": [
                "Dahod",
                "Limkheda",
                "Jhalod",
                "Panchmahal"
              ]
            },
            "Dang": {
              "talukas": [
                "Ahwa",
                "Subir"
              ]
            },
            "Gandhinagar": {
              "talukas": [
                "Gandhinagar",
                "Kalol",
                "Mansa",
                "Dehgam"
              ]
            },
            "Gir Somnath": {
              "talukas": [
                "Veraval",
                "Gir Gadhda",
                "Una"
              ]
            },
            "Jamnagar": {
              "talukas": [
                "Jamnagar City",
                "Jodiya",
                "Kalavad",
                "Khambhalia",
                "Paddhari"
              ]
            },
            "Junagadh": {
              "talukas": [
                "Junagadh City",
                "Veraval",
                "Mangrol",
                "Bantva"
              ]
            },
            "Kachchh": {
              "talukas": [
                "Bhuj",
                "Mandvi",
                "Nakhtrana",
                "Anjar",
                "Abdasa"
              ]
            },
            "Kheda": {
              "talukas": [
                "Kheda",
                "Nadiad",
                "Matar",
                "Mahudha"
              ]
            },
            "Mahisagar": {
              "talukas": [
                "Lunawada",
                "Halol",
                "Godhra",
                "Shehera"
              ]
            },
            "Mehsana": {
              "talukas": [
                "Mehsana",
                "Visnagar",
                "Kadi",
                "Unjha",
                "Vadnagar"
              ]
            },
            "Morbi": {
              "talukas": [
                "Morbi",
                "Wankaner",
                "Halvad",
                "Maliya"
              ]
            },
            "Narmada": {
              "talukas": [
                "Rajpipla",
                "Dediapada",
                "Nandod",
                "Shahera"
              ]
            },
            "Navsari": {
              "talukas": [
                "Navsari",
                "Chikhli",
                "Gandevi",
                "Jalalpore"
              ]
            },
            "Panchmahal": {
              "talukas": [
                "Godhra",
                "Halol",
                "Shehera",
                "Pavagadh"
              ]
            },
            "Patan": {
              "talukas": [
                "Patan",
                "Sidhpur",
                "Radhanpur",
                "Harij"
              ]
            },
            "Porbandar": {
              "talukas": [
                "Porbandar",
                "Ranavav",
                "Kutiyana"
              ]
            },
            "Rajkot": {
              "talukas": [
                "Rajkot City",
                "Jamnagar",
                "Bharuch",
                "Junagadh",
                "Patan"
              ]
            },
            "Sabarkantha": {
              "talukas": [
                "Himmatnagar",
                "Prantij",
                "Idar",
                "Khedbrahma"
              ]
            },
            "Surat": {
              "talukas": [
                "Surat City",
                "Ichhpur",
                "Olpad",
                "Palsana",
                "Kosamba",
                "Mandvi"
              ]
            },
            "Surendranagar": {
              "talukas": [
                "Surendranagar",
                "Chotila",
                "Wadhwan",
                "Chuda"
              ]
            },
            "Tapi": {
              "talukas": [
                "Vyara",
                "Songadh",
                "Dhabhu"
              ]
            },
            "Vadodara": {
              "talukas": [
                "Vadodara City",
                "Karjan",
                "Waghodia",
                "Padra",
                "Savli"
              ]
            },
            "Valsad": {
              "talukas": [
                "Valsad",
                "Vapi",
                "Pardi",
                "Kaprada"
              ]
            }
          }
        }
      }
    }
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [formState, setFormState] = useState({
    state: '',
    district: '',
    taluka: '',
    hname: '',
    haddress: '',
    email: '',
    password: '',
    contact: '',
  });

  const [dropdownOptions, setDropdownOptions] = useState({
    states: Object.keys(countries["India"].states),
    districts: [],
    talukas: [],
  });

  const [showPassword, setShowPassword] = useState(false); // Manage password visibility

  const handleDropdownChange = (field) => (event) => {
    const value = event.target.value;
    setFormState((prev) => ({
      ...prev,
      [field]: value,
      ...(field === 'state' && { district: '', taluka: '' }),
      ...(field === 'district' && { taluka: '' }),
    }));

    if (field === 'state') {
      const selectedState = countries["India"].states[value];
      setDropdownOptions((prev) => ({
        ...prev,
        districts: Object.keys(selectedState.districts),
        talukas: [],
      }));
    }

    if (field === 'district') {
      const selectedDistrict = countries["India"].states[formState.state].districts[value];
      setDropdownOptions((prev) => ({
        ...prev,
        talukas: selectedDistrict?.talukas || [],
      }));
    }
  };
  const navigate = useNavigate();
  const submitHandler = async (data) => {
    console.log(data)
    try {
      const response = await hospitalregestrationpost(data);
      console.log('Success:', response);
      navigate('/hospitaldashboard');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="font-serif min-h-screen bg-[#9db4c0] flex justify-center overflow-x-hidden p-[100px]">
      <div className="container p-4 shadow-lg rounded-3xl flex-row justify-center items-center bg-white max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl w-full h-auto">
        <h3 className="text-xl font-bold text-center mb-4">Hospital Form</h3>
        <form onSubmit={handleSubmit(submitHandler)}>
          {/* State Selection */}
          <div className="mb-3">
            <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
            <select
              id="state"
              className="form-control w-full p-2 mb-3 border rounded"
              value={formState.state}
              {...register('state', { required: 'State is required' })}
              onChange={handleDropdownChange('state')}
            >
              <option value="">Select State</option>
              {dropdownOptions.states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            {errors.state && <p className="text-red-500">{errors.state.message}</p>}
          </div>

          {/* District Selection */}
          <div className="mb-3">
            <label htmlFor="district" className="block text-sm font-medium text-gray-700">District</label>
            <select
              id="district"
              className="form-control w-full p-2 mb-3 border rounded"
              value={formState.district}
              {...register('district', { required: 'District is required' })}
              onChange={handleDropdownChange('district')}
              disabled={!dropdownOptions.districts.length}
            >
              <option value="">Select District</option>
              {dropdownOptions.districts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
            {errors.district && <p className="text-red-500">{errors.district.message}</p>}
          </div>

          {/* Taluka Selection */}
          <div className="mb-3">
            <label htmlFor="taluka" className="block text-sm font-medium text-gray-700">Taluka</label>
            <select
              id="taluka"
              className="form-control w-full p-2 mb-3 border rounded"
              value={formState.taluka}
              {...register('taluka', { required: 'Taluka is required' })}
              onChange={handleDropdownChange('taluka')}
              disabled={!dropdownOptions.talukas.length}
            >
              <option value="">Select Taluka</option>
              {dropdownOptions.talukas.map((taluka) => (
                <option key={taluka} value={taluka}>
                  {taluka}
                </option>
              ))}
            </select>
            {errors.taluka && <p className="text-red-500">{errors.taluka.message}</p>}
          </div>

          {/* Hospital Name */}
          <div className="mb-3">
            <label htmlFor="hname" className="block text-sm font-medium text-gray-700">Hospital Name</label>
            <input
              type="text"
              id="hname"
              className="form-control w-full p-2 mb-3 border rounded"
              placeholder="Hospital Name"
              value={formState.hname}
              {...register('hname', { required: 'Hospital name is required' })}
              onChange={(e) => setFormState({ ...formState, hname: e.target.value })}
            />
            {errors.hname && <p className="text-red-500">{errors.hname.message}</p>}
          </div>

          {/* Hospital Address */}
          <div className="mb-3">
            <label htmlFor="haddress" className="block text-sm font-medium text-gray-700">Hospital Address</label>
            <input
              type="text"
              id="haddress"
              className="form-control w-full p-2 mb-3 border rounded"
              placeholder="Hospital Address"
              value={formState.haddress}
              {...register('haddress', { required: 'Hospital address is required' })}
              onChange={(e) => setFormState({ ...formState, haddress: e.target.value })}
            />
            {errors.haddress && <p className="text-red-500">{errors.haddress.message}</p>}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="form-control w-full p-2 mb-3 border rounded"
              placeholder="Email"
              value={formState.email}
              {...register('email', { required: 'Email is required' })}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>

          {/* Password with show/hide feature */}
          <div className="relative mb-3">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              className="form-control w-full p-2 mb-3 border rounded"
              placeholder="Password"
              value={formState.password}
              {...register('password', { required: 'Password is required' })}
              onChange={(e) => setFormState({ ...formState, password: e.target.value })}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-600"
            >
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </button>
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </div>

          {/* Contact */}
          <div className="mb-3">
            <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact</label>
            <input
              type="text"
              id="contact"
              className="form-control w-full p-2 mb-3 border rounded"
              placeholder="Contact"
              value={formState.contact}
              {...register('contact', { required: 'Contact is required' })}
              onChange={(e) => setFormState({ ...formState, contact: e.target.value })}
            />
            {errors.contact && <p className="text-red-500">{errors.contact.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn bg-[#027c68] hover:bg-cyan-600 text-white w-full py-2 rounded"
          >
            Submit
          </button>

           <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full text-blue-500 py-2 rounded-md transition"
          >
            <Link to="/addhospitalsignin">Signin</Link>
          </motion.button>
        </form>
      </div>
    </div>
  );
};


// import React, { useState } from 'react';
// import { hospitalpost } from '../services/userservice';
// import { useForm } from 'react-hook-form';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

// export const AddHospital = () => {
//   const countries = {
//     "India": {
//       "states": {
//         "Gujarat": {
//           "districts": {
//             "Ahmedabad": {
//               "talukas": [
//                 "Ahmedabad City",
//                 "Sanand",
//                 "Daskroi",
//                 "Viramgam",
//                 "Bavla",
//                 "Mandal"
//               ]
//             },
//             "Amreli": {
//               "talukas": [
//                 "Amreli",
//                 "Lathi",
//                 "Rajula",
//                 "Khambha",
//                 "Jafrabad"
//               ]
//             },
//             "Anand": {
//               "talukas": [
//                 "Anand",
//                 "Khambhat",
//                 "Borsad",
//                 "Petlad",
//                 "Nadiad"
//               ]
//             },
//             "Aravalli": {
//               "talukas": [
//                 "Modasa",
//                 "Bhiloda",
//                 "Malpur",
//                 "Dhansura"
//               ]
//             },
//             "Banaskantha": {
//               "talukas": [
//                 "Palanpur",
//                 "Deesa",
//                 "Tharad",
//                 "Bhanvad",
//                 "Vav"
//               ]
//             },
//             "Bharuch": {
//               "talukas": [
//                 "Bharuch",
//                 "Jhagadia",
//                 "Ankleshwar",
//                 "Vagra",
//                 "Valia"
//               ]
//             },
//             "Bhavnagar": {
//               "talukas": [
//                 "Bhavnagar City",
//                 "Gadhada",
//                 "Valia",
//                 "Sihor"
//               ]
//             },
//             "Botad": {
//               "talukas": [
//                 "Botad",
//                 "Barvala",
//                 "Gadhada"
//               ]
//             },
//             "Chhota Udepur": {
//               "talukas": [
//                 "Chhota Udepur",
//                 "Bodeli",
//                 "Kavant",
//                 "Dediapada"
//               ]
//             },
//             "Dahod": {
//               "talukas": [
//                 "Dahod",
//                 "Limkheda",
//                 "Jhalod",
//                 "Panchmahal"
//               ]
//             },
//             "Dang": {
//               "talukas": [
//                 "Ahwa",
//                 "Subir"
//               ]
//             },
//             "Gandhinagar": {
//               "talukas": [
//                 "Gandhinagar",
//                 "Kalol",
//                 "Mansa",
//                 "Dehgam"
//               ]
//             },
//             "Gir Somnath": {
//               "talukas": [
//                 "Veraval",
//                 "Gir Gadhda",
//                 "Una"
//               ]
//             },
//             "Jamnagar": {
//               "talukas": [
//                 "Jamnagar City",
//                 "Jodiya",
//                 "Kalavad",
//                 "Khambhalia",
//                 "Paddhari"
//               ]
//             },
//             "Junagadh": {
//               "talukas": [
//                 "Junagadh City",
//                 "Veraval",
//                 "Mangrol",
//                 "Bantva"
//               ]
//             },
//             "Kachchh": {
//               "talukas": [
//                 "Bhuj",
//                 "Mandvi",
//                 "Nakhtrana",
//                 "Anjar",
//                 "Abdasa"
//               ]
//             },
//             "Kheda": {
//               "talukas": [
//                 "Kheda",
//                 "Nadiad",
//                 "Matar",
//                 "Mahudha"
//               ]
//             },
//             "Mahisagar": {
//               "talukas": [
//                 "Lunawada",
//                 "Halol",
//                 "Godhra",
//                 "Shehera"
//               ]
//             },
//             "Mehsana": {
//               "talukas": [
//                 "Mehsana",
//                 "Visnagar",
//                 "Kadi",
//                 "Unjha",
//                 "Vadnagar"
//               ]
//             },
//             "Morbi": {
//               "talukas": [
//                 "Morbi",
//                 "Wankaner",
//                 "Halvad",
//                 "Maliya"
//               ]
//             },
//             "Narmada": {
//               "talukas": [
//                 "Rajpipla",
//                 "Dediapada",
//                 "Nandod",
//                 "Shahera"
//               ]
//             },
//             "Navsari": {
//               "talukas": [
//                 "Navsari",
//                 "Chikhli",
//                 "Gandevi",
//                 "Jalalpore"
//               ]
//             },
//             "Panchmahal": {
//               "talukas": [
//                 "Godhra",
//                 "Halol",
//                 "Shehera",
//                 "Pavagadh"
//               ]
//             },
//             "Patan": {
//               "talukas": [
//                 "Patan",
//                 "Sidhpur",
//                 "Radhanpur",
//                 "Harij"
//               ]
//             },
//             "Porbandar": {
//               "talukas": [
//                 "Porbandar",
//                 "Ranavav",
//                 "Kutiyana"
//               ]
//             },
//             "Rajkot": {
//               "talukas": [
//                 "Rajkot City",
//                 "Jamnagar",
//                 "Bharuch",
//                 "Junagadh",
//                 "Patan"
//               ]
//             },
//             "Sabarkantha": {
//               "talukas": [
//                 "Himmatnagar",
//                 "Prantij",
//                 "Idar",
//                 "Khedbrahma"
//               ]
//             },
//             "Surat": {
//               "talukas": [
//                 "Surat City",
//                 "Ichhpur",
//                 "Olpad",
//                 "Palsana",
//                 "Kosamba",
//                 "Mandvi"
//               ]
//             },
//             "Surendranagar": {
//               "talukas": [
//                 "Surendranagar",
//                 "Chotila",
//                 "Wadhwan",
//                 "Chuda"
//               ]
//             },
//             "Tapi": {
//               "talukas": [
//                 "Vyara",
//                 "Songadh",
//                 "Dhabhu"
//               ]
//             },
//             "Vadodara": {
//               "talukas": [
//                 "Vadodara City",
//                 "Karjan",
//                 "Waghodia",
//                 "Padra",
//                 "Savli"
//               ]
//             },
//             "Valsad": {
//               "talukas": [
//                 "Valsad",
//                 "Vapi",
//                 "Pardi",
//                 "Kaprada"
//               ]
//             }
//           }
//         }
//       }
//     }
//   }
  

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const [formState, setFormState] = useState({
//     state: '',
//     district: '',
//     taluka: '',
//     hname: '',
//     haddress: '',
//     email: '',
//     password: '',
//     contact: '',
//   });

//   const [dropdownOptions, setDropdownOptions] = useState({
//     states: [],
//     districts: [],
//     talukas: [],
//   });

//   const [showPassword, setShowPassword] = useState(false); // Manage password visibility

//   const handleDropdownChange = (field) => (event) => {
//     const value = event.target.value;

//     setFormState((prev) => ({
//       ...prev,
//       [field]: value,
//       ...(field === 'state' && { district: '', taluka: '' }),
//       ...(field === 'district' && { taluka: '' }),
//     }));

//     if (field === 'state') {
//       const selectedState = countries.flatMap((country) => country.states).find((st) => st.name === value);
//       setDropdownOptions((prev) => ({
//         ...prev,
//         districts: selectedState?.districts || [],
//         talukas: [],
//       }));
//     }

//     if (field === 'district') {
//       const selectedDistrict = dropdownOptions.districts.find((dist) => dist.name === value);
//       setDropdownOptions((prev) => ({
//         ...prev,
//         talukas: selectedDistrict?.talukas || [],
//       }));
//     }
//   };

//   const submitHandler = async (data) => {
//     try {
//       const response = await hospitalpost(data);
//       console.log('Success:', response);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <div className="font-serif min-h-screen bg-[#9db4c0] flex justify-center overflow-x-hidden p-[100px]">
//       <div className="container p-4 shadow-lg rounded-3xl flex-row justify-center items-center bg-white max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl w-full h-auto">
//         <h3 className="text-xl font-bold text-center mb-4">Hospital Form</h3>
//         <form onSubmit={handleSubmit(submitHandler)}>
//           {/* Removed country selection */}
          
//           {/* State Selection */}
//           <select
//             className="form-control w-full p-2 mb-3 border rounded"
//             value={formState.state}
//             {...register('state', { required: 'State is required' })}
//             onChange={handleDropdownChange('state')}
//           >
//             <option value="">Select State</option>
//             {countries.flatMap((country) => country.states).map((state) => (
//               <option key={state.name} value={state.name}>
//                 {state.name}
//               </option>
//             ))}
//           </select>
//           {errors.state && <p className="text-red-500">{errors.state.message}</p>}

//           {/* District Selection */}
//           <select
//             className="form-control w-full p-2 mb-3 border rounded"
//             value={formState.district}
//             {...register('district', { required: 'District is required' })}
//             onChange={handleDropdownChange('district')}
//             disabled={!dropdownOptions.districts.length}
//           >
//             <option value="">Select District</option>
//             {dropdownOptions.districts.map((district) => (
//               <option key={district.name} value={district.name}>
//                 {district.name}
//               </option>
//             ))}
//           </select>
//           {errors.district && <p className="text-red-500">{errors.district.message}</p>}

//           {/* Taluka Selection */}
//           <select
//             className="form-control w-full p-2 mb-3 border rounded"
//             value={formState.taluka}
//             {...register('taluka', { required: 'Taluka is required' })}
//             onChange={handleDropdownChange('taluka')}
//             disabled={!dropdownOptions.talukas.length}
//           >
//             <option value="">Select Taluka</option>
//             {dropdownOptions.talukas.map((taluka) => (
//               <option key={taluka.name} value={taluka.name}>
//                 {taluka.name}
//               </option>
//             ))}
//           </select>
//           {errors.taluka && <p className="text-red-500">{errors.taluka.message}</p>}

//           {/* Hospital Name */}
//           <input
//             type="text"
//             className="form-control w-full p-2 mb-3 border rounded"
//             placeholder="Hospital Name"
//             value={formState.hname}
//             {...register('hname', { required: 'Hospital name is required' })}
//             onChange={(e) => setFormState({ ...formState, hname: e.target.value })}
//           />
//           {errors.hname && <p className="text-red-500">{errors.hname.message}</p>}

//           {/* Hospital Address */}
//           <input
//             type="text"
//             className="form-control w-full p-2 mb-3 border rounded"
//             placeholder="Hospital Address"
//             value={formState.haddress}
//             {...register('haddress', { required: 'Hospital address is required' })}
//             onChange={(e) => setFormState({ ...formState, haddress: e.target.value })}
//           />
//           {errors.haddress && <p className="text-red-500">{errors.haddress.message}</p>}

//           {/* Email */}
//           <input
//             type="email"
//             className="form-control w-full p-2 mb-3 border rounded"
//             placeholder="Email"
//             value={formState.email}
//             {...register('email', { required: 'Email is required' })}
//             onChange={(e) => setFormState({ ...formState, email: e.target.value })}
//           />
//           {errors.email && <p className="text-red-500">{errors.email.message}</p>}

//           {/* Password with show/hide feature */}
//           <div className="relative mb-3">
//             <input
//               type={showPassword ? 'text' : 'password'}
//               className="form-control w-full p-2 mb-3 border rounded"
//               placeholder="Password"
//               value={formState.password}
//               {...register('password', { required: 'Password is required' })}
//               onChange={(e) => setFormState({ ...formState, password: e.target.value })}
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute right-3 top-3 text-gray-600"
//             >
//               {showPassword ? <VisibilityIcon />: <VisibilityOffIcon />}
//             </button>
//           </div>
//           {errors.password && <p className="text-red-500">{errors.password.message}</p>}

//           {/* Contact */}
//           <input
//             type="text"
//             className="form-control w-full p-2 mb-3 border rounded"
//             placeholder="Contact"
//             value={formState.contact}
//             {...register('contact', { required: 'Contact is required' })}
//             onChange={(e) => setFormState({ ...formState, contact: e.target.value })}
//           />
//           {errors.contact && <p className="text-red-500">{errors.contact.message}</p>}

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="btn bg-blue-500 hover:bg-blue-600 text-white w-full py-2 rounded"
//           >
//             Submit
//           </button>

//           {/* Next Button (motion for animation) */}
//           <motion.button
//             type="submit"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
//           >
//             <Link to="/blooddonationform">Next</Link>
//           </motion.button>
//         </form>
//       </div>
//     </div>
//   );
// };


// // import React, { useState } from 'react';
// // import { hospitalpost } from '../services/userservice';
// // import { useForm } from 'react-hook-form';
// // import { motion } from 'framer-motion';
// // import { Link } from 'react-router-dom';

// // export const AddHospital = () => {
// //   const countries = [
// //     {
// //       name: 'usa',
// //       states: [
// //         {
// //           name: 'newyork',
// //           districts: [
// //             {
// //               name: 'newyork',
// //               talukas: [
// //                 {
// //                   name: 'newyork',
// //                   hospitals: [{ name: 'hospital1' }],
// //                 },
// //               ],
// //             },
// //           ],
// //         },
// //       ],
// //     },
// //     {
// //       name: 'india',
// //       states: [
// //         {
// //           name: 'Gujarat',
// //           districts: [
// //             {
// //               name: 'gandhinagar',
// //               talukas: [
// //                 {
// //                   name: 'gandhinagar',
// //                   hospitals: [{ name: 'hospital1' }, { name: 'hospital2' }],
// //                 },
// //                 {
// //                   name: 'dahegam',
// //                   hospitals: [{ name: 'hospital1' }, { name: 'hospital2' }],
// //                 },
// //               ],
// //             },
// //           ],
// //         },
// //       ],
// //     },
// //   ];

// //   const {
// //     register,
// //     handleSubmit,
// //     formState: { errors },
// //   } = useForm();

// //   const [formState, setFormState] = useState({
// //     state: '',
// //     district: '',
// //     taluka: '',
// //     hname: '',
// //     haddress: '',
// //     email: '',
// //     password: '',
// //     contact: '',
// //   });

// //   const [dropdownOptions, setDropdownOptions] = useState({
// //     states: [],
// //     districts: [],
// //     talukas: [],
// //   });

// //   const handleDropdownChange = (field) => (event) => {
// //     const value = event.target.value;

// //     setFormState((prev) => ({
// //       ...prev,
// //       [field]: value,
// //       ...(field === 'state' && { district: '', taluka: '' }),
// //       ...(field === 'district' && { taluka: '' }),
// //     }));

// //     if (field === 'state') {
// //       const selectedState = countries.flatMap((country) => country.states).find((st) => st.name === value);
// //       setDropdownOptions((prev) => ({
// //         ...prev,
// //         districts: selectedState?.districts || [],
// //         talukas: [],
// //       }));
// //     }

// //     if (field === 'district') {
// //       const selectedDistrict = dropdownOptions.districts.find((dist) => dist.name === value);
// //       setDropdownOptions((prev) => ({
// //         ...prev,
// //         talukas: selectedDistrict?.talukas || [],
// //       }));
// //     }
// //   };

// //   const submitHandler = async (data) => {
// //     try {
// //       const response = await hospitalpost(data);
// //       console.log('Success:', response);
// //     } catch (error) {
// //       console.error('Error:', error);
// //     }
// //   };

// //   return (
// //     <div className="font-serif min-h-screen bg-[#9db4c0] flex justify-center overflow-x-hidden p-[100px]">
// //       <div className="container p-4 shadow-lg rounded-3xl flex-row justify-center items-center bg-white max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl w-full h-auto">
// //         <h3 className="text-xl font-bold text-center mb-4">Hospital Form</h3>
// //         <form onSubmit={handleSubmit(submitHandler)}>
// //           {/* Removed country selection */}
          
// //           <select
// //             className="form-control w-full p-2 mb-3 border rounded"
// //             value={formState.state}
// //             {...register('state', { required: 'State is required' })}
// //             onChange={handleDropdownChange('state')}
// //           >
// //             <option value="">Select State</option>
// //             {countries.flatMap((country) => country.states).map((state) => (
// //               <option key={state.name} value={state.name}>
// //                 {state.name}
// //               </option>
// //             ))}
// //           </select>
// //           {errors.state && <p className="text-red-500">{errors.state.message}</p>}

// //           <select
// //             className="form-control w-full p-2 mb-3 border rounded"
// //             value={formState.district}
// //             {...register('district', { required: 'District is required' })}
// //             onChange={handleDropdownChange('district')}
// //             disabled={!dropdownOptions.districts.length}
// //           >
// //             <option value="">Select District</option>
// //             {dropdownOptions.districts.map((district) => (
// //               <option key={district.name} value={district.name}>
// //                 {district.name}
// //               </option>
// //             ))}
// //           </select>
// //           {errors.district && <p className="text-red-500">{errors.district.message}</p>}

// //           <select
// //             className="form-control w-full p-2 mb-3 border rounded"
// //             value={formState.taluka}
// //             {...register('taluka', { required: 'Taluka is required' })}
// //             onChange={handleDropdownChange('taluka')}
// //             disabled={!dropdownOptions.talukas.length}
// //           >
// //             <option value="">Select Taluka</option>
// //             {dropdownOptions.talukas.map((taluka) => (
// //               <option key={taluka.name} value={taluka.name}>
// //                 {taluka.name}
// //               </option>
// //             ))}
// //           </select>
// //           {errors.taluka && <p className="text-red-500">{errors.taluka.message}</p>}

// //           {/* New Hospital Fields */}
// //           <input
// //             type="text"
// //             className="form-control w-full p-2 mb-3 border rounded"
// //             placeholder="Hospital Name"
// //             value={formState.hname}
// //             {...register('hname', { required: 'Hospital name is required' })}
// //             onChange={(e) => setFormState({ ...formState, hname: e.target.value })}
// //           />
// //           {errors.hname && <p className="text-red-500">{errors.hname.message}</p>}

// //           <input
// //             type="text"
// //             className="form-control w-full p-2 mb-3 border rounded"
// //             placeholder="Hospital Address"
// //             value={formState.haddress}
// //             {...register('haddress', { required: 'Hospital address is required' })}
// //             onChange={(e) => setFormState({ ...formState, haddress: e.target.value })}
// //           />
// //           {errors.haddress && <p className="text-red-500">{errors.haddress.message}</p>}

// //           <input
// //             type="email"
// //             className="form-control w-full p-2 mb-3 border rounded"
// //             placeholder="Email"
// //             value={formState.email}
// //             {...register('email', { required: 'Email is required' })}
// //             onChange={(e) => setFormState({ ...formState, email: e.target.value })}
// //           />
// //           {errors.email && <p className="text-red-500">{errors.email.message}</p>}

// //           <input
// //             type="password"
// //             className="form-control w-full p-2 mb-3 border rounded"
// //             placeholder="Password"
// //             value={formState.password}
// //             {...register('password', { required: 'Password is required' })}
// //             onChange={(e) => setFormState({ ...formState, password: e.target.value })}
// //           />
// //           {errors.password && <p className="text-red-500">{errors.password.message}</p>}

// //           <input
// //             type="text"
// //             className="form-control w-full p-2 mb-3 border rounded"
// //             placeholder="Contact"
// //             value={formState.contact}
// //             {...register('contact', { required: 'Contact is required' })}
// //             onChange={(e) => setFormState({ ...formState, contact: e.target.value })}
// //           />
// //           {errors.contact && <p className="text-red-500">{errors.contact.message}</p>}

// //           <button
// //             type="submit"
// //             className="btn bg-blue-500 hover:bg-blue-600 text-white w-full py-2 rounded"
// //           >
// //             Submit
// //           </button>

// //           <motion.button
// //             type="submit"
// //             whileHover={{ scale: 1.05 }}
// //             whileTap={{ scale: 0.95 }}
// //             className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
// //           >
// //             <Link to="/blooddonationform">Next</Link>
// //           </motion.button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };



// // import React, { useState } from 'react';
// // import { hospitalpost } from '../services/userservice';
// // import { useForm } from 'react-hook-form';
// // import { motion } from 'framer-motion';
// // import { Link } from 'react-router-dom';

// // export const AddHospital = () => {
// //   const countries = [
// //     {
// //       name: 'usa',
// //       states: [
// //         {
// //           name: 'newyork',
// //           districts: [
// //             {
// //               name: 'newyork',
// //               talukas: [
// //                 {
// //                   name: 'newyork',
// //                   hospitals: [{ name: 'hospital1' }],
// //                 },
// //               ],
// //             },
// //           ],
// //         },
// //       ],
// //     },
// //     {
// //       name: 'india',
// //       states: [
// //         {
// //           name: 'Gujarat',
// //           districts: [
// //             {
// //               name: 'gandhinagar',
// //               talukas: [
// //                 {
// //                   name: 'gandhinagar',
// //                   hospitals: [{ name: 'hospital1' }, { name: 'hospital2' }],
// //                 },
// //                 {
// //                   name: 'dahegam',
// //                   hospitals: [{ name: 'hospital1' }, { name: 'hospital2' }],
// //                 },
// //               ],
// //             },
// //           ],
// //         },
// //       ],
// //     },
// //   ];

// //   const {
// //     register,
// //     handleSubmit,
// //     formState: { errors },
// //   } = useForm();

// //   const [formState, setFormState] = useState({
// //     country: '',
// //     state: '',
// //     district: '',
// //     taluka: '',
// //     hospital: '',
// //     hname: '',
// //     haddress: '',
// //     email: '',
// //     password: '',
// //     contact: '',
// //   });

// //   const [dropdownOptions, setDropdownOptions] = useState({
// //     states: [],
// //     districts: [],
// //     talukas: [],
// //     hospitals: [],
// //   });

// //   const handleDropdownChange = (field) => (event) => {
// //     const value = event.target.value;

// //     setFormState((prev) => ({
// //       ...prev,
// //       [field]: value,
// //       ...(field === 'country' && { state: '', district: '', taluka: '', hospital: '' }),
// //       ...(field === 'state' && { district: '', taluka: '', hospital: '' }),
// //       ...(field === 'district' && { taluka: '', hospital: '' }),
// //       ...(field === 'taluka' && { hospital: '' }),
// //     }));

// //     if (field === 'country') {
// //       const selectedCountry = countries.find((ctr) => ctr.name === value);
// //       setDropdownOptions({
// //         states: selectedCountry?.states || [],
// //         districts: [],
// //         talukas: [],
// //         hospitals: [],
// //       });
// //     }

// //     if (field === 'state') {
// //       const selectedState = dropdownOptions.states.find((st) => st.name === value);
// //       setDropdownOptions((prev) => ({
// //         ...prev,
// //         districts: selectedState?.districts || [],
// //         talukas: [],
// //         hospitals: [],
// //       }));
// //     }

// //     if (field === 'district') {
// //       const selectedDistrict = dropdownOptions.districts.find((dist) => dist.name === value);
// //       setDropdownOptions((prev) => ({
// //         ...prev,
// //         talukas: selectedDistrict?.talukas || [],
// //         hospitals: [],
// //       }));
// //     }

// //     if (field === 'taluka') {
// //       const selectedTaluka = dropdownOptions.talukas.find((tlk) => tlk.name === value);
// //       setDropdownOptions((prev) => ({
// //         ...prev,
// //         hospitals: selectedTaluka?.hospitals || [],
// //       }));
// //     }
// //   };

// //   const submitHandler = async (data) => {
// //     try {
// //       const response = await hospitalpost(data);
// //       console.log('Success:', response);
// //     } catch (error) {
// //       console.error('Error:', error);
// //     }
// //   };

// //   return (
// //     <div className="font-serif min-h-screen bg-[#9db4c0] flex justify-center overflow-x-hidden p-[100px]">
// //       <div className="container p-4 shadow-lg rounded-3xl flex-row justify-center items-center bg-white max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl w-full h-auto">
// //         <h3 className="text-xl font-bold text-center mb-4">Hospital Form</h3>
// //         <form onSubmit={handleSubmit(submitHandler)}>
// //           <select
// //             className="form-control w-full p-2 mb-3 border rounded"
// //             value={formState.country}
// //             {...register('country', { required: 'Country is required' })}
// //             onChange={handleDropdownChange('country')}
// //           >
// //             <option value="">Select Country</option>
// //             {countries.map((country) => (
// //               <option key={country.name} value={country.name}>
// //                 {country.name}
// //               </option>
// //             ))}
// //           </select>
// //           {errors.country && <p className="text-red-500">{errors.country.message}</p>}

// //           <select
// //             className="form-control w-full p-2 mb-3 border rounded"
// //             value={formState.state}
// //             {...register('state', { required: 'State is required' })}
// //             onChange={handleDropdownChange('state')}
// //             disabled={!dropdownOptions.states.length}
// //           >
// //             <option value="">Select State</option>
// //             {dropdownOptions.states.map((state) => (
// //               <option key={state.name} value={state.name}>
// //                 {state.name}
// //               </option>
// //             ))}
// //           </select>
// //           {errors.state && <p className="text-red-500">{errors.state.message}</p>}

// //           <select
// //             className="form-control w-full p-2 mb-3 border rounded"
// //             value={formState.district}
// //             {...register('district', { required: 'District is required' })}
// //             onChange={handleDropdownChange('district')}
// //             disabled={!dropdownOptions.districts.length}
// //           >
// //             <option value="">Select District</option>
// //             {dropdownOptions.districts.map((district) => (
// //               <option key={district.name} value={district.name}>
// //                 {district.name}
// //               </option>
// //             ))}
// //           </select>
// //           {errors.district && <p className="text-red-500">{errors.district.message}</p>}

// //           <select
// //             className="form-control w-full p-2 mb-3 border rounded"
// //             value={formState.taluka}
// //             {...register('taluka', { required: 'Taluka is required' })}
// //             onChange={handleDropdownChange('taluka')}
// //             disabled={!dropdownOptions.talukas.length}
// //           >
// //             <option value="">Select Taluka</option>
// //             {dropdownOptions.talukas.map((taluka) => (
// //               <option key={taluka.name} value={taluka.name}>
// //                 {taluka.name}
// //               </option>
// //             ))}
// //           </select>
// //           {errors.taluka && <p className="text-red-500">{errors.taluka.message}</p>}

// //           <select
// //             className="form-control w-full p-2 mb-3 border rounded"
// //             value={formState.hospital}
// //             {...register('hospital', { required: 'Hospital is required' })}
// //             onChange={handleDropdownChange('hospital')}
// //             disabled={!dropdownOptions.hospitals.length}
// //           >
// //             <option value="">Select Hospital</option>
// //             {dropdownOptions.hospitals.map((hospital) => (
// //               <option key={hospital.name} value={hospital.name}>
// //                 {hospital.name}
// //               </option>
// //             ))}
// //           </select>
// //           {errors.hospital && <p className="text-red-500">{errors.hospital.message}</p>}

// //           {/* New Hospital Fields */}
// //           <input
// //             type="text"
// //             className="form-control w-full p-2 mb-3 border rounded"
// //             placeholder="Hospital Name"
// //             value={formState.hname}
// //             {...register('hname', { required: 'Hospital name is required' })}
// //             onChange={(e) => setFormState({ ...formState, hname: e.target.value })}
// //           />
// //           {errors.hname && <p className="text-red-500">{errors.hname.message}</p>}

// //           <input
// //             type="text"
// //             className="form-control w-full p-2 mb-3 border rounded"
// //             placeholder="Hospital Address"
// //             value={formState.haddress}
// //             {...register('haddress', { required: 'Hospital address is required' })}
// //             onChange={(e) => setFormState({ ...formState, haddress: e.target.value })}
// //           />
// //           {errors.haddress && <p className="text-red-500">{errors.haddress.message}</p>}

// //           <input
// //             type="email"
// //             className="form-control w-full p-2 mb-3 border rounded"
// //             placeholder="Email"
// //             value={formState.email}
// //             {...register('email', { required: 'Email is required' })}
// //             onChange={(e) => setFormState({ ...formState, email: e.target.value })}
// //           />
// //           {errors.email && <p className="text-red-500">{errors.email.message}</p>}

// //           <input
// //             type="password"
// //             className="form-control w-full p-2 mb-3 border rounded"
// //             placeholder="Password"
// //             value={formState.password}
// //             {...register('password', { required: 'Password is required' })}
// //             onChange={(e) => setFormState({ ...formState, password: e.target.value })}
// //           />
// //           {errors.password && <p className="text-red-500">{errors.password.message}</p>}

// //           <input
// //             type="text"
// //             className="form-control w-full p-2 mb-3 border rounded"
// //             placeholder="Contact"
// //             value={formState.contact}
// //             {...register('contact', { required: 'Contact is required' })}
// //             onChange={(e) => setFormState({ ...formState, contact: e.target.value })}
// //           />
// //           {errors.contact && <p className="text-red-500">{errors.contact.message}</p>}

// //           <button
// //             type="submit"
// //             className="btn bg-blue-500 hover:bg-blue-600 text-white w-full py-2 rounded"
// //           >
// //             Submit
// //           </button>

// //           <motion.button
// //             type="submit"
// //             whileHover={{ scale: 1.05 }}
// //             whileTap={{ scale: 0.95 }}
// //             className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition"
// //           >
// //             <Link to="/blooddonationform">Next</Link>
// //           </motion.button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };

// // // import React from "react";
// // // import { useForm } from "react-hook-form";
// // // import axios from "axios"; // For making API requests

// // // const AddHospitalForm = () => {
// // //   const {
// // //     register,
// // //     handleSubmit,
// // //     formState: { errors },
// // //   } = useForm();

// // //   const onSubmit = (data) => {
// // //     // Make API request to the backend to store hospital data
// // //     axios
// // //       .post("/api/hospitals", data)
// // //       .then((response) => {
// // //         console.log("Hospital Added:", response.data);
// // //       })
// // //       .catch((error) => {
// // //         console.error("There was an error adding the hospital!", error);
// // //       });
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
// // //       <div className="bg-white shadow-md rounded-lg w-full max-w-lg p-8">
// // //         <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
// // //           Add Hospital
// // //         </h1>
// // //         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
// // //           {/* Hospital Name */}
// // //           <div>
// // //             <label
// // //               htmlFor="hname"
// // //               className="block text-gray-700 font-medium mb-2"
// // //             >
// // //               Hospital Name
// // //             </label>
// // //             <input
// // //               type="text"
// // //               id="hname"
// // //               {...register("hname", { required: "Hospital name is required" })}
// // //               placeholder="Enter hospital name"
// // //               className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
// // //                 errors.hname ? "border-red-500 focus:ring-red-400" : "focus:ring-blue-400"
// // //               }`}
// // //             />
// // //             {errors.hname && (
// // //               <p className="text-red-500 text-sm mt-1">{errors.hname.message}</p>
// // //             )}
// // //           </div>

// // //           {/* Country */}
// // //           <div>
// // //             <label
// // //               htmlFor="country"
// // //               className="block text-gray-700 font-medium mb-2"
// // //             >
// // //               Country
// // //             </label>
// // //             <input
// // //               type="text"
// // //               id="country"
// // //               {...register("country", { required: "Country is required" })}
// // //               placeholder="Enter country"
// // //               className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
// // //                 errors.country ? "border-red-500 focus:ring-red-400" : "focus:ring-blue-400"
// // //               }`}
// // //             />
// // //             {errors.country && (
// // //               <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>
// // //             )}
// // //           </div>

// // //           {/* State */}
// // //           <div>
// // //             <label
// // //               htmlFor="state"
// // //               className="block text-gray-700 font-medium mb-2"
// // //             >
// // //               State
// // //             </label>
// // //             <input
// // //               type="text"
// // //               id="state"
// // //               {...register("state", { required: "State is required" })}
// // //               placeholder="Enter state"
// // //               className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
// // //                 errors.state ? "border-red-500 focus:ring-red-400" : "focus:ring-blue-400"
// // //               }`}
// // //             />
// // //             {errors.state && (
// // //               <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>
// // //             )}
// // //           </div>

// // //           {/* District */}
// // //           <div>
// // //             <label
// // //               htmlFor="district"
// // //               className="block text-gray-700 font-medium mb-2"
// // //             >
// // //               District
// // //             </label>
// // //             <input
// // //               type="text"
// // //               id="district"
// // //               {...register("district", { required: "District is required" })}
// // //               placeholder="Enter district"
// // //               className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
// // //                 errors.district ? "border-red-500 focus:ring-red-400" : "focus:ring-blue-400"
// // //               }`}
// // //             />
// // //             {errors.district && (
// // //               <p className="text-red-500 text-sm mt-1">{errors.district.message}</p>
// // //             )}
// // //           </div>

// // //           {/* City */}
// // //           <div>
// // //             <label
// // //               htmlFor="city"
// // //               className="block text-gray-700 font-medium mb-2"
// // //             >
// // //               City
// // //             </label>
// // //             <input
// // //               type="text"
// // //               id="city"
// // //               {...register("city", { required: "City is required" })}
// // //               placeholder="Enter city"
// // //               className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
// // //                 errors.city ? "border-red-500 focus:ring-red-400" : "focus:ring-blue-400"
// // //               }`}
// // //             />
// // //             {errors.city && (
// // //               <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>
// // //             )}
// // //           </div>

// // //           {/* Address */}
// // //           <div>
// // //             <label
// // //               htmlFor="haddress"
// // //               className="block text-gray-700 font-medium mb-2"
// // //             >
// // //               Hospital Address
// // //             </label>
// // //             <input
// // //               type="text"
// // //               id="haddress"
// // //               {...register("haddress", { required: "Address is required" })}
// // //               placeholder="Enter hospital address"
// // //               className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
// // //                 errors.haddress ? "border-red-500 focus:ring-red-400" : "focus:ring-blue-400"
// // //               }`}
// // //             />
// // //             {errors.haddress && (
// // //               <p className="text-red-500 text-sm mt-1">{errors.haddress.message}</p>
// // //             )}
// // //           </div>

// // //           {/* Email */}
// // //           <div>
// // //             <label
// // //               htmlFor="email"
// // //               className="block text-gray-700 font-medium mb-2"
// // //             >
// // //               Email Address
// // //             </label>
// // //             <input
// // //               type="email"
// // //               id="email"
// // //               {...register("email", {
// // //                 required: "Email is required",
// // //                 pattern: {
// // //                   value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
// // //                   message: "Invalid email address",
// // //                 },
// // //               })}
// // //               placeholder="Enter email address"
// // //               className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
// // //                 errors.email ? "border-red-500 focus:ring-red-400" : "focus:ring-blue-400"
// // //               }`}
// // //             />
// // //             {errors.email && (
// // //               <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
// // //             )}
// // //           </div>

// // //           {/* Password */}
// // //           <div>
// // //             <label
// // //               htmlFor="password"
// // //               className="block text-gray-700 font-medium mb-2"
// // //             >
// // //               Password
// // //             </label>
// // //             <input
// // //               type="password"
// // //               id="password"
// // //               {...register("password", { required: "Password is required" })}
// // //               placeholder="Enter password"
// // //               className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
// // //                 errors.password ? "border-red-500 focus:ring-red-400" : "focus:ring-blue-400"
// // //               }`}
// // //             />
// // //             {errors.password && (
// // //               <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
// // //             )}
// // //           </div>

// // //           {/* Contact Number */}
// // //           <div>
// // //             <label
// // //               htmlFor="contact"
// // //               className="block text-gray-700 font-medium mb-2"
// // //             >
// // //               Contact Number
// // //             </label>
// // //             <input
// // //               type="tel"
// // //               id="contact"
// // //               {...register("contact", { required: "Contact number is required" })}
// // //               placeholder="Enter contact number"
// // //               className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
// // //                 errors.contact ? "border-red-500 focus:ring-red-400" : "focus:ring-blue-400"
// // //               }`}
// // //             />
// // //             {errors.contact && (
// // //               <p className="text-red-500 text-sm mt-1">{errors.contact.message}</p>
// // //             )}
// // //           </div>

// // //           {/* Submit Button */}
// // //           <button
// // //             type="submit"
// // //             className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
// // //           >
// // //             Submit
// // //           </button>
// // //         </form>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default AddHospitalForm;
