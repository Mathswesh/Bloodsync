import React from 'react'
import { useState } from 'react';
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
                                    name: "newyork",
                                    hospitals: [
                                        {
                                            name: "hospital1",
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
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
                                    name: "gandhinagar",
                                    hospitals: [
                                        {
                                            name: "hospital1",
                                        },
                                        {
                                            name: "hospital2",
                                        }
                                    ]
                                },
                                {
                                    name: "dahegam",
                                    hospitals: [
                                        {
                                            name: "hospital1",
                                        },
                                        {
                                            name: "hospital2",
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]

    const [country, setcountry] = useState('---Country---');
    const [state, setstate] = useState('---state---');
    const [district, setdistrict] = useState('---District---');
    const [taluka, settaluka] = useState('---Taluka---');
    const [hospital, sethospital] =useState('---Hospital---');

    
    const [states, setstates] = useState([])
    const [districts, setdistricts] = useState([])
    const [talukas, settalukas] = useState([])
    const [hospitals, sethospitals] = useState([])

    const changeCountry = (event) => {
        setcountry(event.target.value)
        setstates(countries.find(ctr => ctr.name == event.target.value).states)
    }
    const changeState = (event) => {
        setstate(event.target.value)
        setdistricts(states.find(state => state.name == event.target.value).districts)
    }
    const changeDistrict = (event) => {
        setdistrict(event.target.value)
        settalukas(districts.find(state => state.name == event.target.value).talukas)
    }
    const changeTaluka = (event) => {
        settaluka(event.target.value)
        sethospitals(talukas.find(state => state.name == event.target.value).hospitals)
    }
    const changeHospital = (event) => {
        sethospital(event.target.value)
    }
    return (
        <div className='font-serif bg-gradient-to-r from-[#6f0000] to-[#200122] flex justify-center overflow-x-hidden'>
            <div className="container p-4 shadow-lg rounded-3xl flex-row justify-center items-center bg-white w-[300px] h-[500px]">
                <h3>Select From here</h3>
                <select className='form-control mt-[25px]' value={country} onChange={changeCountry}>
                    <option>Country</option>
                    {countries.map(country => (
                        <option value={country.name}>{country.name}</option>
                    ))}
                </select>

                <select className='form-control mt-[25px]' value={state} onChange={changeState}>
                    <option>State</option>
                    {states.map(state => (
                        <option value={state.name}>{state.name}</option>
                    ))}
                </select>

                <select className='form-control mt-[25px]' value={district} onChange={changeDistrict}>
                    <option>District</option>
                    {districts.map(district => (
                        <option value={district.name}>{district.name}</option>
                    ))}
                </select>

                <select className='form-control mt-[25px]' value={taluka} onChange={changeTaluka}>
                    <option>Taluka</option>
                    {talukas.map(taluka => (
                        <option value={taluka.name}>{taluka.name}</option>
                    ))}
                </select>

                <select className='form-control mt-[25px]' value={hospital} onChange={changeHospital}>
                    <option>Hospital</option>
                    {hospitals.map(hospital => (
                        <option value={hospital.name}>{hospital.name}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}
