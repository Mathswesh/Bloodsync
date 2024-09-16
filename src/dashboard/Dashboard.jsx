import React from 'react'
import '../assets/css/dashboarddesign.css'
import bg1 from '../dashboard/dashboard1.png'
import {Blank} from '../Blank'
export const Dashboard = () => {
  return (
    <div>
      <div className="dashboardcontainer">
        <div className="dashboardnavbar">
          <div class="dashboardcard">
            <p><span>HOSPITAL</span></p>
            <p><span>USER</span></p>
            <p><span>STAFF</span></p>
          </div>
        </div>
      </div>
      <div className="dashboardcontainer">
        <div className="dashboardbg1">
          <img src={bg1} alt="" />
        </div>
      </div>
      <Blank/>
    </div>
  )
}
