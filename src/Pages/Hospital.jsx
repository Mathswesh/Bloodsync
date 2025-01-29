import React, { useState } from 'react';
import { hospitalregestrationpost } from '../services/userservice';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { userhospitalareapost } from '../services/userservice';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export const Hospital = () => {
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
    // hname: '',
    // haddress: '',
    // email: '',
    // password: '',
    // contact: '',
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
  const [responseData, setResponseData] = useState(null); // Store API response
  const submitHandler = async (data) => {
    console.log(data)
    userhospitalareapost(data)
      .then((resp) => {
        console.log(resp.data)
        console.log("Done it is.")
        const responseData = resp.data;
        navigate('/usereventshowcase', { state: { responseData } });
      })
      .catch((errors) => {
        console.log("error", errors)
      })
  };
  <div>
  
  
</div>
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


          {/* Submit Button */}
          <button
            type="submit"
            className="btn bg-[#027c68] hover:bg-cyan-600 text-white w-full py-2 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}