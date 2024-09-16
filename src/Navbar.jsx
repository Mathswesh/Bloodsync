import React from 'react'
import './assets/css/navbardesign.css'
import { Link } from 'react-router-dom'
import './b2.svg'
import '../src/assets/css/bloodsyncsvg.css'
export const Navbar = () => {
  
  return (
    <div>
      <nav className='navbarbloodsync'>
        <div className="navbarContent">
          <div className="logo">
            <Link className='nav-link' to={"/landingpage"}>
            BL<i class="fa-solid fa-droplet"></i><i class="fa-solid fa-droplet"></i>DSYNC
            {/* here will be svg */}
          </Link>
          </div>
          <div className="navbarList">
            <ol>
              <li><Link className='nav-link' to={"/landingpage"}><button>Home</button></Link></li>
              <li><Link className='nav-link' to={"/dashboard"}><button> DashBoard</button></Link></li>
              <li><Link className='nav-link' to={"/hospital"}><button>Hospital</button></Link></li>
              <li><Link className='nav-link' to={"/appointment"}><button>Appointment</button></Link></li>
              <li><Link className='nav-link' to={"/report"}><button>Report</button></Link></li>
              <li><Link className='nav-link' to={"/explore"}><button>Explore</button></Link></li>
            </ol>
          </div>
          <div className="navbarMode">
            <Link className='nav-link' to={"/search"}><i class="fa-solid fa-magnifying-glass"></i></Link>
            <Link className='nav-link' to={"/profile"}><i class="fa-regular fa-address-card"></i></Link>
            <Link className='nav-link' to={"/signin"}><i class="fa-solid fa-user"></i></Link>
            <div className="navbarcolormode"><input type="checkbox" class="theme-checkbox"/></div>
          </div>
        </div>
      </nav>
    </div>
  )
}
