import React, { useState } from 'react';
import { hospitalpost } from '../services/userservice';
import { useForm } from 'react-hook-form';
import { Hospitallist } from './Hospitallist'
export const Hospital = () => {
  const countries = [
    {
      name: 'usa',
      states: [
        {
          name: 'newyork',
          districts: [
            {
              name: 'newyork',
              talukas: [
                {
                  name: 'newyork',
                  hospitals: [{ name: 'hospital1' }],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: 'india',
      states: [
        {
          name: 'Gujarat',
          districts: [
            {
              name: 'gandhinagar',
              talukas: [
                {
                  name: 'gandhinagar',
                  hospitals: [{ name: 'hospital1' }, { name: 'hospital2' }],
                },
                {
                  name: 'dahegam',
                  hospitals: [{ name: 'hospital1' }, { name: 'hospital2' }],
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [formState, setFormState] = useState({
    country: '',
    state: '',
    district: '',
    taluka: '',
    hospital: '',
  });

  const [dropdownOptions, setDropdownOptions] = useState({
    states: [],
    districts: [],
    talukas: [],
    hospitals: [],
  });

  const handleDropdownChange = (field) => (event) => {
    const value = event.target.value;

    setFormState((prev) => ({
      ...prev,
      [field]: value,
      ...(field === 'country' && { state: '', district: '', taluka: '', hospital: '' }),
      ...(field === 'state' && { district: '', taluka: '', hospital: '' }),
      ...(field === 'district' && { taluka: '', hospital: '' }),
      ...(field === 'taluka' && { hospital: '' }),
    }));

    if (field === 'country') {
      const selectedCountry = countries.find((ctr) => ctr.name === value);
      setDropdownOptions({
        states: selectedCountry?.states || [],
        districts: [],
        talukas: [],
        hospitals: [],
      });
    }

    if (field === 'state') {
      const selectedState = dropdownOptions.states.find((st) => st.name === value);
      setDropdownOptions((prev) => ({
        ...prev,
        districts: selectedState?.districts || [],
        talukas: [],
        hospitals: [],
      }));
    }

    if (field === 'district') {
      const selectedDistrict = dropdownOptions.districts.find((dist) => dist.name === value);
      setDropdownOptions((prev) => ({
        ...prev,
        talukas: selectedDistrict?.talukas || [],
        hospitals: [],
      }));
    }

    if (field === 'taluka') {
      const selectedTaluka = dropdownOptions.talukas.find((tlk) => tlk.name === value);
      setDropdownOptions((prev) => ({
        ...prev,
        hospitals: selectedTaluka?.hospitals || [],
      }));
    }
  };

  const submitHandler = async (data) => {
    try {
      const response = await hospitalpost(data);
      console.log('Success:', response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="font-serif min-h-screen bg-gradient-to-r from-[#6f0000] to-[#200122] flex justify-center overflow-x-hidden pt-[100px]">
      <div className="container p-4 shadow-lg rounded-3xl flex-row justify-center items-center bg-white max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl w-full h-auto">
        <h3 className="text-xl font-bold text-center mb-4">Select From Here</h3>
        <form onSubmit={handleSubmit(submitHandler)}>
          <select
            className="form-control w-full p-2 mb-3 border rounded"
            value={formState.country}
            {...register('country', { required: 'Country is required' })}
            onChange={handleDropdownChange('country')}
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country.name} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
          {errors.country && <p className="text-red-500">{errors.country.message}</p>}

          <select
            className="form-control w-full p-2 mb-3 border rounded"
            value={formState.state}
            {...register('state', { required: 'State is required' })}
            onChange={handleDropdownChange('state')}
            disabled={!dropdownOptions.states.length}
          >
            <option value="">Select State</option>
            {dropdownOptions.states.map((state) => (
              <option key={state.name} value={state.name}>
                {state.name}
              </option>
            ))}
          </select>
          {errors.state && <p className="text-red-500">{errors.state.message}</p>}

          <select
            className="form-control w-full p-2 mb-3 border rounded"
            value={formState.district}
            {...register('district', { required: 'District is required' })}
            onChange={handleDropdownChange('district')}
            disabled={!dropdownOptions.districts.length}
          >
            <option value="">Select District</option>
            {dropdownOptions.districts.map((district) => (
              <option key={district.name} value={district.name}>
                {district.name}
              </option>
            ))}
          </select>
          {errors.district && <p className="text-red-500">{errors.district.message}</p>}

          <select
            className="form-control w-full p-2 mb-3 border rounded"
            value={formState.taluka}
            {...register('taluka', { required: 'Taluka is required' })}
            onChange={handleDropdownChange('taluka')}
            disabled={!dropdownOptions.talukas.length}
          >
            <option value="">Select Taluka</option>
            {dropdownOptions.talukas.map((taluka) => (
              <option key={taluka.name} value={taluka.name}>
                {taluka.name}
              </option>
            ))}
          </select>
          {errors.taluka && <p className="text-red-500">{errors.taluka.message}</p>}

          <select
            className="form-control w-full p-2 mb-3 border rounded"
            value={formState.hospital}
            {...register('hospital', { required: 'Hospital is required' })}
            onChange={handleDropdownChange('hospital')}
            disabled={!dropdownOptions.hospitals.length}
          >
            <option value="">Select Hospital</option>
            {dropdownOptions.hospitals.map((hospital) => (
              <option key={hospital.name} value={hospital.name}>
                {hospital.name}
              </option>
            ))}
          </select>
          {errors.hospital && <p className="text-red-500">{errors.hospital.message}</p>}

          <button
            type="submit"
            className="btn bg-blue-500 hover:bg-blue-600 text-white w-full py-2 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};



// import React, { useState } from 'react';
// import { hospitalpost } from '../services/userservice';
// import { useForm } from 'react-hook-form'

// export const Hospital = () => {
//   const countries = [
//     {
//       name: 'usa',
//       states: [
//         {
//           name: 'newyork',
//           districts: [
//             {
//               name: 'newyork',
//               talukas: [
//                 {
//                   name: 'newyork',
//                   hospitals: [{ name: 'hospital1' }],
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//     {
//       name: 'india',
//       states: [
//         {
//           name: 'Gujarat',
//           districts: [
//             {
//               name: 'gandhinagar',
//               talukas: [
//                 {
//                   name: 'gandhinagar',
//                   hospitals: [{ name: 'hospital1' }, { name: 'hospital2' }],
//                 },
//                 {
//                   name: 'dahegam',
//                   hospitals: [{ name: 'hospital1' }, { name: 'hospital2' }],
//                 },
//               ],
//             },
//           ],
//         },
//       ],
//     },
//   ];

//   const { register, handleSubmit, formState: { error } } = useForm();

//   const submintHandler = async (data) => {
//     console.log(data);
//     // hospitalpost(data)
//     //   .then((resp) => {
//     //     console.log(resp);
//     //     console.log("Done it is.");
//     //   })
//     //   .catch((errors) => {
//     //     console.log("error", errors);
//     //   });
//   }

//   const [country, setCountry] = useState('---Country---');
//   const [state, setState] = useState('---State---');
//   const [district, setDistrict] = useState('---District---');
//   const [taluka, setTaluka] = useState('---Taluka---');
//   const [hospital, setHospital] = useState('---Hospital---');

//   const [states, setStates] = useState([]);
//   const [districts, setDistricts] = useState([]);
//   const [talukas, setTalukas] = useState([]);
//   const [hospitals, setHospitals] = useState([]);

//   const changeCountry = (event) => {
//     setCountry(event.target.value);
//     setStates(countries.find((ctr) => ctr.name === event.target.value).states);
//   };

//   const changeState = (event) => {
//     setState(event.target.value);
//     setDistricts(states.find((state) => state.name === event.target.value).districts);
//   };

//   const changeDistrict = (event) => {
//     setDistrict(event.target.value);
//     setTalukas(districts.find((state) => state.name === event.target.value).talukas);
//   };

//   const changeTaluka = (event) => {
//     setTaluka(event.target.value);
//     setHospitals(talukas.find((state) => state.name === event.target.value).hospitals);
//   };

//   const changeHospital = (event) => {
//     setHospital(event.target.value);
//   };

//   return (
//     <div className="font-serif min-h-screen bg-gradient-to-r from-[#6f0000] to-[#200122] flex justify-center overflow-x-hidden pt-[100px]">
//       <div className="container p-4 shadow-lg rounded-3xl flex-row justify-center items-center bg-white max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl w-full h-[400px]">
//         <h3 className="text-xl font-bold text-center mb-4">Select From here</h3>
//         <form action="" onSubmit={handleSubmit(submintHandler)}>
//           <select
//             className="form-control w-full p-2 mb-3 border rounded"
//             value={country}
//             onChange={changeCountry}
//             {...register("country")}
//           >
//             <option>Country</option>
//             {countries.map((country) => (
//               <option key={country.name} value={country.name}>
//                 {country.name}
//               </option>
//             ))}
//           </select>

//           <select
//             className="form-control w-full p-2 mb-3 border rounded"
//             value={state}
//             onChange={changeState}
//             {...register("state")}

//           >
//             <option>State</option>
//             {states.map((state) => (
//               <option key={state.name} value={state.name}>
//                 {state.name}
//               </option>
//             ))}
//           </select>

//           <select
//             className="form-control w-full p-2 mb-3 border rounded"
//             value={district}
//             onChange={changeDistrict}
//             {...register("district")}

//           >
//             <option>District</option>
//             {districts.map((district) => (
//               <option key={district.name} value={district.name}>
//                 {district.name}
//               </option>
//             ))}
//           </select>

//           <select
//             className="form-control w-full p-2 mb-3 border rounded"
//             value={taluka}
//             onChange={changeTaluka}
//             {...register("taluka")}
//           >
//             <option>Taluka</option>
//             {talukas.map((taluka) => (
//               <option key={taluka.name} value={taluka.name}>
//                 {taluka.name}
//               </option>
//             ))}
//           </select>

//           <select
//             className="form-control w-full p-2 mb-3 border rounded"
//             value={hospital}
//             onChange={changeHospital}
//             {...register("hospital")}
//           >
//             <option>Hospital</option>
//             {hospitals.map((hospital) => (
//               <option key={hospital.name} value={hospital.name}>
//                 {hospital.name}
//               </option>
//             ))}
//           </select>
//           <button className='btn' type='submit'>Submit</button>
//         </form>
//       </div>
//     </div>
//   );
// };