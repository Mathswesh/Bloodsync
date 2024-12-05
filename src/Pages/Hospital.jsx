// import React from 'react'
import * as React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const Hospital = () => {

    const [Country, setCountry] = React.useState('');
    const [State, setState] = React.useState('');
    const [District, setDistrict] = React.useState('');
    const [Taluka, setTaluka] = React.useState('');
    const [Hospital, setHospital] = React.useState('');
   
    const handleChange = (event) => {
        setCountry(event.target.value)
        setState(event.target.value)
        setDistrict(event.target.value)
        setTaluka(event.target.value)
        setHospital(event.target.value)
    };

    return (
        <div className='font-serif bg-gradient-to-r from-[#6f0000] to-[#200122] flex justify-center overflow-x-hidden'>
            <div className="container p-4 shadow-lg rounded-3xl flex-row justify-center items-center bg-white w-[300px] h-[500px]">
                <Box sx={{ minWidth: 120,mt:'25px',mb:'25px' }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Country</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={Country}
                            label="country"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>India</MenuItem>
                            <MenuItem value={20}>Usa</MenuItem>
                            <MenuItem value={30}>Canada</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ minWidth: 120,mt:'25px',mb:'25px'}}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">State</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={State}
                            label="State"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Gujarat</MenuItem>
                            <MenuItem value={20}>Goa</MenuItem>
                            <MenuItem value={30}>Rajasthan</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ minWidth: 120,mt:'25px',mb:'25px' }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">District</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={District}
                            label="District"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Gandhinagar</MenuItem>
                            <MenuItem value={20}>Ahmedabad</MenuItem>
                            <MenuItem value={30}>Surat</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ minWidth: 120,mt:'25px',mb:'25px' }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Taluka</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={Taluka}
                            label="Taluka"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Dahegam</MenuItem>
                            <MenuItem value={20}>Mansa</MenuItem>
                            <MenuItem value={30}>Gandhinagar</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ minWidth: 120,mt:'25px',mb:'25px' }}>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Hospital</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={Hospital}
                            label="Hospital"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Hospital1</MenuItem>
                            <MenuItem value={20}>Hospital2</MenuItem>
                            <MenuItem value={30}>Hospital2</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>
        </div>
    )
}
