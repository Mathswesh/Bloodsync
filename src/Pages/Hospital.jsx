import React, { useState } from 'react';

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

  const [country, setCountry] = useState('---Country---');
  const [state, setState] = useState('---State---');
  const [district, setDistrict] = useState('---District---');
  const [taluka, setTaluka] = useState('---Taluka---');
  const [hospital, setHospital] = useState('---Hospital---');

  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [talukas, setTalukas] = useState([]);
  const [hospitals, setHospitals] = useState([]);

  const changeCountry = (event) => {
    setCountry(event.target.value);
    setStates(countries.find((ctr) => ctr.name === event.target.value).states);
  };

  const changeState = (event) => {
    setState(event.target.value);
    setDistricts(states.find((state) => state.name === event.target.value).districts);
  };

  const changeDistrict = (event) => {
    setDistrict(event.target.value);
    setTalukas(districts.find((state) => state.name === event.target.value).talukas);
  };

  const changeTaluka = (event) => {
    setTaluka(event.target.value);
    setHospitals(talukas.find((state) => state.name === event.target.value).hospitals);
  };

  const changeHospital = (event) => {
    setHospital(event.target.value);
  };

  return (
    <div className="font-serif bg-gradient-to-r from-[#6f0000] to-[#200122] flex justify-center overflow-x-hidden">
      <div className="container p-4 shadow-lg rounded-3xl flex-row justify-center items-center bg-white max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl w-full h-auto">
        <h3 className="text-xl font-bold text-center mb-4">Select From here</h3>

        <select
          className="form-control w-full p-2 mb-3 border rounded"
          value={country}
          onChange={changeCountry}
        >
          <option>Country</option>
          {countries.map((country) => (
            <option key={country.name} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>

        <select
          className="form-control w-full p-2 mb-3 border rounded"
          value={state}
          onChange={changeState}
        >
          <option>State</option>
          {states.map((state) => (
            <option key={state.name} value={state.name}>
              {state.name}
            </option>
          ))}
        </select>

        <select
          className="form-control w-full p-2 mb-3 border rounded"
          value={district}
          onChange={changeDistrict}
        >
          <option>District</option>
          {districts.map((district) => (
            <option key={district.name} value={district.name}>
              {district.name}
            </option>
          ))}
        </select>

        <select
          className="form-control w-full p-2 mb-3 border rounded"
          value={taluka}
          onChange={changeTaluka}
        >
          <option>Taluka</option>
          {talukas.map((taluka) => (
            <option key={taluka.name} value={taluka.name}>
              {taluka.name}
            </option>
          ))}
        </select>

        <select
          className="form-control w-full p-2 mb-3 border rounded"
          value={hospital}
          onChange={changeHospital}
        >
          <option>Hospital</option>
          {hospitals.map((hospital) => (
            <option key={hospital.name} value={hospital.name}>
              {hospital.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};


// import React from 'react'
// import { useState } from 'react';
// export const Hospital = () => {

//     const countries = [
//         {
//             name: 'usa',
//             states: [
//                 {
//                     name: 'newyork',
//                     districts: [
//                         {
//                             name: 'newyork',
//                             talukas: [
//                                 {
//                                     name: "newyork",
//                                     hospitals: [
//                                         {
//                                             name: "hospital1",
//                                         }
//                                     ]
//                                 }
//                             ]
//                         }
//                     ]
//                 }
//             ]
//         },
//         {
//             name: 'india',
//             states: [
//                 {
//                     name: 'Gujarat',
//                     districts: [
//                         {
//                             name: 'gandhinagar',
//                             talukas: [
//                                 {
//                                     name: "gandhinagar",
//                                     hospitals: [
//                                         {
//                                             name: "hospital1",
//                                         },
//                                         {
//                                             name: "hospital2",
//                                         }
//                                     ]
//                                 },
//                                 {
//                                     name: "dahegam",
//                                     hospitals: [
//                                         {
//                                             name: "hospital1",
//                                         },
//                                         {
//                                             name: "hospital2",
//                                         }
//                                     ]
//                                 }
//                             ]
//                         }
//                     ]
//                 }
//             ]
//         }
//     ]

//     const [country, setcountry] = useState('---Country---');
//     const [state, setstate] = useState('---state---');
//     const [district, setdistrict] = useState('---District---');
//     const [taluka, settaluka] = useState('---Taluka---');
//     const [hospital, sethospital] =useState('---Hospital---');

    
//     const [states, setstates] = useState([])
//     const [districts, setdistricts] = useState([])
//     const [talukas, settalukas] = useState([])
//     const [hospitals, sethospitals] = useState([])

//     const changeCountry = (event) => {
//         setcountry(event.target.value)
//         setstates(countries.find(ctr => ctr.name == event.target.value).states)
//     }
//     const changeState = (event) => {
//         setstate(event.target.value)
//         setdistricts(states.find(state => state.name == event.target.value).districts)
//     }
//     const changeDistrict = (event) => {
//         setdistrict(event.target.value)
//         settalukas(districts.find(state => state.name == event.target.value).talukas)
//     }
//     const changeTaluka = (event) => {
//         settaluka(event.target.value)
//         sethospitals(talukas.find(state => state.name == event.target.value).hospitals)
//     }
//     const changeHospital = (event) => {
//         sethospital(event.target.value)
//     }
//     return (
//         <div className='font-serif bg-gradient-to-r from-[#6f0000] to-[#200122] flex justify-center overflow-x-hidden'>
//             <div className="container p-4 shadow-lg rounded-3xl flex-row justify-center items-center bg-white w-[300px] h-[500px]">
//                 <h3>Select From here</h3>
//                 <select className='form-control mt-[25px]' value={country} onChange={changeCountry}>
//                     <option>Country</option>
//                     {countries.map(country => (
//                         <option value={country.name}>{country.name}</option>
//                     ))}
//                 </select>

//                 <select className='form-control mt-[25px]' value={state} onChange={changeState}>
//                     <option>State</option>
//                     {states.map(state => (
//                         <option value={state.name}>{state.name}</option>
//                     ))}
//                 </select>

//                 <select className='form-control mt-[25px]' value={district} onChange={changeDistrict}>
//                     <option>District</option>
//                     {districts.map(district => (
//                         <option value={district.name}>{district.name}</option>
//                     ))}
//                 </select>

//                 <select className='form-control mt-[25px]' value={taluka} onChange={changeTaluka}>
//                     <option>Taluka</option>
//                     {talukas.map(taluka => (
//                         <option value={taluka.name}>{taluka.name}</option>
//                     ))}
//                 </select>

//                 <select className='form-control mt-[25px]' value={hospital} onChange={changeHospital}>
//                     <option>Hospital</option>
//                     {hospitals.map(hospital => (
//                         <option value={hospital.name}>{hospital.name}</option>
//                     ))}
//                 </select>
//             </div>
//         </div>
//     )
// }