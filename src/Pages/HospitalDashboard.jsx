import React from 'react'
import Dashboard from './Dashboard'
import { Link , Route , Routes } from "react-router-dom";
import { Addevent } from './Addevent';
export const HospitalDashboard = () => {
  return (
    <div>
        <Dashboard/>
        <Routes>
          <Route path="/addevent" element={<Addevent/>}></Route>
        </Routes>
    </div>
  )
}
