import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { addhospitaleventpost } from '../services/userservice';

export const AddHospitalEvent = () => {
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
    eventname: '',
    eventdate: '',
    eventtime: '',
    eventend: '',
    eventlocation: '',
    eventdescription: '',
  });

  const [dropdownOptions, setDropdownOptions] = useState({
    states: Object.keys(countries.India.states),
    districts: [],
    talukas: [],
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleDropdownChange = (field) => (event) => {
    const value = event.target.value;
    setFormState((prev) => ({
      ...prev,
      [field]: value,
      ...(field === 'state' && { district: '', taluka: '' }),
      ...(field === 'district' && { taluka: '' }),
    }));

    if (field === 'state') {
      const selectedState = countries.India.states[value];
      setDropdownOptions((prev) => ({
        ...prev,
        districts: Object.keys(selectedState.districts),
        talukas: [],
      }));
    }

    if (field === 'district') {
      const selectedDistrict = countries.India.states[formState.state]?.districts[value];
      setDropdownOptions((prev) => ({
        ...prev,
        talukas: selectedDistrict?.talukas || [],
      }));
    }
  };

  const navigate = useNavigate();

  const submitHandler = async (data) => {
    console.log(data);
    try {
      const response = await addhospitaleventpost(data);
      console.log('Success:', response);
      navigate('/hospitaldashboard');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="font-serif min-h-screen bg-[#9db4c0] flex justify-center overflow-x-hidden p-[100px]">
      <div className="container p-4 shadow-lg rounded-3xl bg-white max-w-lg w-full h-auto">
        <h3 className="text-xl font-bold text-center mb-4">Add Hospital Event</h3>
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

{/* Event Details */}
<div className="mb-3">
            <label htmlFor="hospitalname" className="block text-sm font-medium text-gray-700">Hospital Name</label>
            <input
              type="text"
              id="hospitalname"
              className="form-control w-full p-2 mb-3 border rounded"
              placeholder="Hospital Name"
              {...register('hname', { required: 'Hospital name is required' })}
            />
            {errors.eventname && <p className="text-red-500">{errors.eventname.message}</p>}
          </div>
          {/* Event Details */}
          <div className="mb-3">
            <label htmlFor="eventname" className="block text-sm font-medium text-gray-700">Event Name</label>
            <input
              type="text"
              id="eventname"
              className="form-control w-full p-2 mb-3 border rounded"
              placeholder="Event Name"
              {...register('eventname', { required: 'Event name is required' })}
            />
            {errors.eventname && <p className="text-red-500">{errors.eventname.message}</p>}
          </div>

          <div className="mb-3">
            <label htmlFor="eventdate" className="block text-sm font-medium text-gray-700">Event Date</label>
            <input
              type="date"
              id="eventdate"
              className="form-control w-full p-2 mb-3 border rounded"
              {...register('eventdate', { required: 'Event date is required' })}
            />
            {errors.eventdate && <p className="text-red-500">{errors.eventdate.message}</p>}
          </div>

          <div className="mb-3">
            <label htmlFor="eventtime" className="block text-sm font-medium text-gray-700">Start Time</label>
            <input
              type="time"
              id="eventtime"
              className="form-control w-full p-2 mb-3 border rounded"
              {...register('eventtime', { required: 'Start time is required' })}
            />
            {errors.eventtime && <p className="text-red-500">{errors.eventtime.message}</p>}
          </div>

          <div className="mb-3">
            <label htmlFor="eventend" className="block text-sm font-medium text-gray-700">End Time</label>
            <input
              type="time"
              id="eventend"
              className="form-control w-full p-2 mb-3 border rounded"
              {...register('eventend', { required: 'End time is required' })}
            />
            {errors.eventend && <p className="text-red-500">{errors.eventend.message}</p>}
          </div>

          <div className="mb-3">
            <label htmlFor="eventlocation" className="block text-sm font-medium text-gray-700">Event Location</label>
            <input
              type="text"
              id="eventlocation"
              className="form-control w-full p-2 mb-3 border rounded"
              {...register('eventlocation', { required: 'Event location is required' })}
            />
            {errors.eventlocation && <p className="text-red-500">{errors.eventlocation.message}</p>}
          </div>

          <div className="mb-3">
            <label htmlFor="eventdescription" className="block text-sm font-medium text-gray-700">Event Description</label>
            <textarea
              id="eventdescription"
              className="form-control w-full p-2 mb-3 border rounded"
              placeholder="Provide a brief description of the event"
              {...register('eventdescription', { required: 'Event description is required' })}
            ></textarea>
            {errors.eventdescription && <p className="text-red-500">{errors.eventdescription.message}</p>}
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn bg-[#027c68] hover:bg-cyan-600 text-white w-full py-2 rounded">
            Submit
          </button>
          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full text-blue-500 py-2 rounded-md transition mt-3"
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
// import { Link , useNavigate } from 'react-router-dom';
// import VisibilityIcon from '@mui/icons-material/Visibility';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
// import { addhospitaleventpost } from "../services/userservice";


// export const AddHospitalEvent = () => {
//   const countries = {
//   "India": {
//     "states": {
//       "Gujarat": {
//         "districts": {
//           "Ahmedabad": {
//             "talukas": [
//               "Ahmedabad City",
//               "Sanand",
//               "Daskroi",
//               "Viramgam",
//               "Bavla",
//               "Mandal"
//             ]
//           },
//           "Amreli": {
//             "talukas": [
//               "Amreli",
//               "Lathi",
//               "Rajula",
//               "Khambha",
//               "Jafrabad"
//             ]
//           },
//           "Anand": {
//             "talukas": [
//               "Anand",
//               "Khambhat",
//               "Borsad",
//               "Petlad",
//               "Nadiad"
//             ]
//           },
//           "Aravalli": {
//             "talukas": [
//               "Modasa",
//               "Bhiloda",
//               "Malpur",
//               "Dhansura"
//             ]
//           },
//           "Banaskantha": {
//             "talukas": [
//               "Palanpur",
//               "Deesa",
//               "Tharad",
//               "Bhanvad",
//               "Vav"
//             ]
//           },
//           "Bharuch": {
//             "talukas": [
//               "Bharuch",
//               "Jhagadia",
//               "Ankleshwar",
//               "Vagra",
//               "Valia"
//             ]
//           },
//           "Bhavnagar": {
//             "talukas": [
//               "Bhavnagar City",
//               "Gadhada",
//               "Valia",
//               "Sihor"
//             ]
//           },
//           "Botad": {
//             "talukas": [
//               "Botad",
//               "Barvala",
//               "Gadhada"
//             ]
//           },
//           "Chhota Udepur": {
//             "talukas": [
//               "Chhota Udepur",
//               "Bodeli",
//               "Kavant",
//               "Dediapada"
//             ]
//           },
//           "Dahod": {
//             "talukas": [
//               "Dahod",
//               "Limkheda",
//               "Jhalod",
//               "Panchmahal"
//             ]
//           },
//           "Dang": {
//             "talukas": [
//               "Ahwa",
//               "Subir"
//             ]
//           },
//           "Gandhinagar": {
//             "talukas": [
//               "Gandhinagar",
//               "Kalol",
//               "Mansa",
//               "Dehgam"
//             ]
//           },
//           "Gir Somnath": {
//             "talukas": [
//               "Veraval",
//               "Gir Gadhda",
//               "Una"
//             ]
//           },
//           "Jamnagar": {
//             "talukas": [
//               "Jamnagar City",
//               "Jodiya",
//               "Kalavad",
//               "Khambhalia",
//               "Paddhari"
//             ]
//           },
//           "Junagadh": {
//             "talukas": [
//               "Junagadh City",
//               "Veraval",
//               "Mangrol",
//               "Bantva"
//             ]
//           },
//           "Kachchh": {
//             "talukas": [
//               "Bhuj",
//               "Mandvi",
//               "Nakhtrana",
//               "Anjar",
//               "Abdasa"
//             ]
//           },
//           "Kheda": {
//             "talukas": [
//               "Kheda",
//               "Nadiad",
//               "Matar",
//               "Mahudha"
//             ]
//           },
//           "Mahisagar": {
//             "talukas": [
//               "Lunawada",
//               "Halol",
//               "Godhra",
//               "Shehera"
//             ]
//           },
//           "Mehsana": {
//             "talukas": [
//               "Mehsana",
//               "Visnagar",
//               "Kadi",
//               "Unjha",
//               "Vadnagar"
//             ]
//           },
//           "Morbi": {
//             "talukas": [
//               "Morbi",
//               "Wankaner",
//               "Halvad",
//               "Maliya"
//             ]
//           },
//           "Narmada": {
//             "talukas": [
//               "Rajpipla",
//               "Dediapada",
//               "Nandod",
//               "Shahera"
//             ]
//           },
//           "Navsari": {
//             "talukas": [
//               "Navsari",
//               "Chikhli",
//               "Gandevi",
//               "Jalalpore"
//             ]
//           },
//           "Panchmahal": {
//             "talukas": [
//               "Godhra",
//               "Halol",
//               "Shehera",
//               "Pavagadh"
//             ]
//           },
//           "Patan": {
//             "talukas": [
//               "Patan",
//               "Sidhpur",
//               "Radhanpur",
//               "Harij"
//             ]
//           },
//           "Porbandar": {
//             "talukas": [
//               "Porbandar",
//               "Ranavav",
//               "Kutiyana"
//             ]
//           },
//           "Rajkot": {
//             "talukas": [
//               "Rajkot City",
//               "Jamnagar",
//               "Bharuch",
//               "Junagadh",
//               "Patan"
//             ]
//           },
//           "Sabarkantha": {
//             "talukas": [
//               "Himmatnagar",
//               "Prantij",
//               "Idar",
//               "Khedbrahma"
//             ]
//           },
//           "Surat": {
//             "talukas": [
//               "Surat City",
//               "Ichhpur",
//               "Olpad",
//               "Palsana",
//               "Kosamba",
//               "Mandvi"
//             ]
//           },
//           "Surendranagar": {
//             "talukas": [
//               "Surendranagar",
//               "Chotila",
//               "Wadhwan",
//               "Chuda"
//             ]
//           },
//           "Tapi": {
//             "talukas": [
//               "Vyara",
//               "Songadh",
//               "Dhabhu"
//             ]
//           },
//           "Vadodara": {
//             "talukas": [
//               "Vadodara City",
//               "Karjan",
//               "Waghodia",
//               "Padra",
//               "Savli"
//             ]
//           },
//           "Valsad": {
//             "talukas": [
//               "Valsad",
//               "Vapi",
//               "Pardi",
//               "Kaprada"
//             ]
//           }
//         }
//       }
//     }
//   }
// }
// const {
//   register,
//   handleSubmit,
//   formState: { errors },
// } = useForm();

// const [formState, setFormState] = useState({
//   state: '',
//   district: '',
//   taluka: '',
//   hname: '',
//   eventname: '',
//   eventdate: '',
//   eventtime: '',
//   eventend:'',
//   eventlocation: '',
//   eventdescription:''
// });

// const [dropdownOptions, setDropdownOptions] = useState({
//   states: Object.keys(countries["India"].states),
//   districts: [],
//   talukas: [],
// });

// const [showPassword, setShowPassword] = useState(false); // Manage password visibility

// const handleDropdownChange = (field) => (event) => {
//   const value = event.target.value;
//   setFormState((prev) => ({
//     ...prev,
//     [field]: value,
//     ...(field === 'state' && { district: '', taluka: '' }),
//     ...(field === 'district' && { taluka: '' }),
//   }));

//   if (field === 'state') {
//     const selectedState = countries["India"].states[value];
//     setDropdownOptions((prev) => ({
//       ...prev,
//       districts: Object.keys(selectedState.districts),
//       talukas: [],
//     }));
//   }

//   if (field === 'district') {
//     const selectedDistrict = countries["India"].states[formState.state].districts[value];
//     setDropdownOptions((prev) => ({
//       ...prev,
//       talukas: selectedDistrict?.talukas || [],
//     }));
//   }
// };
// const navigate = useNavigate();
// const submitHandler = async (data) => {
//   console.log(data)
//   try {
//     const response = await addhospitaleventpost(data);
//     console.log('Success:', response);
//     navigate('/hospitaldashboard');
//   } catch (error) {
//     console.error('Error:', error);
//   }
// };

// return (
//   <div className="font-serif min-h-screen bg-[#9db4c0] flex justify-center overflow-x-hidden p-[100px]">
//     <div className="container p-4 shadow-lg rounded-3xl flex-row justify-center items-center bg-white max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl w-full h-auto">
//       <h3 className="text-xl font-bold text-center mb-4">Hospital Form</h3>
//       <form onSubmit={handleSubmit(submitHandler)}>
//         {/* State Selection */}
//         <div className="mb-3">
//           <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
//           <select
//             id="state"
//             className="form-control w-full p-2 mb-3 border rounded"
//             value={formState.state}
//             {...register('state', { required: 'State is required' })}
//             onChange={handleDropdownChange('state')}
//           >
//             <option value="">Select State</option>
//             {dropdownOptions.states.map((state) => (
//               <option key={state} value={state}>
//                 {state}
//               </option>
//             ))}
//           </select>
//           {errors.state && <p className="text-red-500">{errors.state.message}</p>}
//         </div>

//         {/* District Selection */}
//         <div className="mb-3">
//           <label htmlFor="district" className="block text-sm font-medium text-gray-700">District</label>
//           <select
//             id="district"
//             className="form-control w-full p-2 mb-3 border rounded"
//             value={formState.district}
//             {...register('district', { required: 'District is required' })}
//             onChange={handleDropdownChange('district')}
//             disabled={!dropdownOptions.districts.length}
//           >
//             <option value="">Select District</option>
//             {dropdownOptions.districts.map((district) => (
//               <option key={district} value={district}>
//                 {district}
//               </option>
//             ))}
//           </select>
//           {errors.district && <p className="text-red-500">{errors.district.message}</p>}
//         </div>

//         {/* Taluka Selection */}
//         <div className="mb-3">
//           <label htmlFor="taluka" className="block text-sm font-medium text-gray-700">Taluka</label>
//           <select
//             id="taluka"
//             className="form-control w-full p-2 mb-3 border rounded"
//             value={formState.taluka}
//             {...register('taluka', { required: 'Taluka is required' })}
//             onChange={handleDropdownChange('taluka')}
//             disabled={!dropdownOptions.talukas.length}
//           >
//             <option value="">Select Taluka</option>
//             {dropdownOptions.talukas.map((taluka) => (
//               <option key={taluka} value={taluka}>
//                 {taluka}
//               </option>
//             ))}
//           </select>
//           {errors.taluka && <p className="text-red-500">{errors.taluka.message}</p>}
//         </div>

//         {/* Hospital Name */}
//         <div className="mb-3">
//           <label htmlFor="hname" className="block text-sm font-medium text-gray-700">Hospital Name</label>
//           <input
//             type="text"
//             id="hname"
//             className="form-control w-full p-2 mb-3 border rounded"
//             placeholder="Hospital Name"
//             value={formState.hname}
//             {...register('hname', { required: 'Hospital name is required' })}
//             onChange={(e) => setFormState({ ...formState, hname: e.target.value })}
//           />
//           {errors.hname && <p className="text-red-500">{errors.hname.message}</p>}
//         </div>

//         {/* Hospital Address */}
//         <div className="mb-3">
//           <label htmlFor="haddress" className="block text-sm font-medium text-gray-700">Hospital Address</label>
//           <input
//             type="text"
//             id="haddress"
//             className="form-control w-full p-2 mb-3 border rounded"
//             placeholder="Hospital Address"
//             value={formState.haddress}
//             {...register('haddress', { required: 'Hospital address is required' })}
//             onChange={(e) => setFormState({ ...formState, haddress: e.target.value })}
//           />
//           {errors.haddress && <p className="text-red-500">{errors.haddress.message}</p>}
//         </div>

//         {/* Email */}
//         <div className="mb-3">
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//           <input
//             type="email"
//             id="email"
//             className="form-control w-full p-2 mb-3 border rounded"
//             placeholder="Email"
//             value={formState.email}
//             {...register('email', { required: 'Email is required' })}
//             onChange={(e) => setFormState({ ...formState, email: e.target.value })}
//           />
//           {errors.email && <p className="text-red-500">{errors.email.message}</p>}
//         </div>

//         {/* Password with show/hide feature */}
//         <div className="relative mb-3">
//           <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//           <input
//             type={showPassword ? 'text' : 'password'}
//             id="password"
//             className="form-control w-full p-2 mb-3 border rounded"
//             placeholder="Password"
//             value={formState.password}
//             {...register('password', { required: 'Password is required' })}
//             onChange={(e) => setFormState({ ...formState, password: e.target.value })}
//           />
//           <button
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//             className="absolute right-3 top-3 text-gray-600"
//           >
//             {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
//           </button>
//           {errors.password && <p className="text-red-500">{errors.password.message}</p>}
//         </div>

//         {/* Contact */}
//         <div className="mb-3">
//           <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact</label>
//           <input
//             type="text"
//             id="contact"
//             className="form-control w-full p-2 mb-3 border rounded"
//             placeholder="Contact"
//             value={formState.contact}
//             {...register('contact', { required: 'Contact is required' })}
//             onChange={(e) => setFormState({ ...formState, contact: e.target.value })}
//           />
//           {errors.contact && <p className="text-red-500">{errors.contact.message}</p>}
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="btn bg-[#027c68] hover:bg-cyan-600 text-white w-full py-2 rounded"
//         >
//           Submit
//         </button>

//          <motion.button
//           type="submit"
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//           className="w-full text-blue-500 py-2 rounded-md transition"
//         >
//           <Link to="/addhospitalsignin">Signin</Link>
//         </motion.button>
//       </form>
//     </div>
//   </div>
// );
// };

// // export const AddHospitalEvent = () => {
  
// //   const {
// //     register,
// //     handleSubmit,
// //     formState: { errors },
// //   } = useForm();

// //   const onSubmit = (data) => {
// //     console.log("Form Data Submitted:", data);
// //     console.log(data);
// //     addhospitaleventpost(data)
// //       .then((resp) => {
// //         console.log(resp);
// //         console.log("Done it is.");
// //         // navigate('/landingpage');
// //       })
// //       .catch((errors) => {
// //         console.log("error", errors);
// //       });
// //     // Add logic to send form data to your backend (e.g., using Axios or Fetch)
// //   };

// //   return (
// //     <div className="flex items-center justify-center min-h-screen bg-gray-100">
// //       <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
// //         <h2 className="text-2xl font-bold text-center text-teal-600 mb-6">
// //           Create Hospital Event
// //         </h2>
// //         <form onSubmit={handleSubmit(onSubmit)}>
// //           <div className="mb-4">
// //             <label htmlFor="hospitalname" className="block text-sm font-medium text-gray-700">
// //               Hospital Name
// //             </label>
// //             <input
// //               type="text"
// //               id="hospitalname"
// //               className={`w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 ${errors.eventname ? "border-red-500 focus:ring-red-500" : "focus:ring-teal-600"
// //                 }`}
// //               {...register("hname", { required: "Hospital Name is required" })}
// //             />
// //             {errors.eventname && (
// //               <p className="mt-1 text-sm text-red-500">{errors.eventname.message}</p>
// //             )}
// //           </div>
// //           {/* Event Name */}
// //           <div className="mb-4">
// //             <label htmlFor="eventname" className="block text-sm font-medium text-gray-700">
// //               Event Name
// //             </label>
// //             <input
// //               type="text"
// //               id="eventname"
// //               className={`w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 ${errors.eventname ? "border-red-500 focus:ring-red-500" : "focus:ring-teal-600"
// //                 }`}
// //               {...register("eventname", { required: "Event Name is required" })}
// //             />
// //             {errors.eventname && (
// //               <p className="mt-1 text-sm text-red-500">{errors.eventname.message}</p>
// //             )}
// //           </div>

// //           {/* Event Date */}
// //           <div className="mb-4">
// //             <label htmlFor="eventdate" className="block text-sm font-medium text-gray-700">
// //               Event Date
// //             </label>
// //             <input
// //               type="date"
// //               id="eventdate"
// //               className={`w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 ${errors.eventdate ? "border-red-500 focus:ring-red-500" : "focus:ring-teal-600"
// //                 }`}
// //               {...register("eventdate", { required: "Event Date is required" })}
// //             />
// //             {errors.eventdate && (
// //               <p className="mt-1 text-sm text-red-500">{errors.eventdate.message}</p>
// //             )}
// //           </div>

// //           {/* Event Time */}
// //           <div className="mb-4">
// //             <label htmlFor="eventtime" className="block text-sm font-medium text-gray-700">
// //               Event Time
// //             </label>
// //             <input
// //               type="time"
// //               id="eventtime"
// //               className={`w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 ${errors.eventtime ? "border-red-500 focus:ring-red-500" : "focus:ring-teal-600"
// //                 }`}
// //               {...register("eventtime", { required: "Event Time is required" })}
// //             />
// //             {errors.eventtime && (
// //               <p className="mt-1 text-sm text-red-500">{errors.eventtime.message}</p>
// //             )}
// //           </div>

// //           {/* Event Location */}
// //           <div className="mb-4">
// //             <label htmlFor="eventlocation" className="block text-sm font-medium text-gray-700">
// //               Event Location
// //             </label>
// //             <input
// //               type="text"
// //               id="eventlocation"
// //               className={`w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 ${errors.eventlocation ? "border-red-500 focus:ring-red-500" : "focus:ring-teal-600"
// //                 }`}
// //               {...register("eventlocation", { required: "Event Location is required" })}
// //             />
// //             {errors.eventlocation && (
// //               <p className="mt-1 text-sm text-red-500">{errors.eventlocation.message}</p>
// //             )}
// //           </div>

// //           {/* Event Description */}
// //           <div className="mb-6">
// //             <label htmlFor="eventdescription" className="block text-sm font-medium text-gray-700">
// //               Event Description
// //             </label>
// //             <textarea
// //               id="eventdescription"
// //               rows="4"
// //               className={`w-full px-3 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 ${errors.eventdescription ? "border-red-500 focus:ring-red-500" : "focus:ring-teal-600"
// //                 }`}
// //               {...register("eventdescription", { required: "Event Description is required" })}
// //             />
// //             {errors.eventdescription && (
// //               <p className="mt-1 text-sm text-red-500">{errors.eventdescription.message}</p>
// //             )}
// //           </div>

// //           {/* Submit Button */}
// //           <button
// //             type="submit"
// //             className="w-full px-4 py-2 text-white bg-teal-600 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
// //           >
// //             Submit Event
// //           </button>
// //         </form>
// //       </div>
// //     </div>
// //   );
// // };