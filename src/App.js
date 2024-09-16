import { Routes , Route} from 'react-router-dom';

import { Navbar } from './Navbar';
import { Landingpage} from "./landing/Landingpage";
import { Dashboard } from './dashboard/Dashboard';
import { Hospital } from './hospital/Hospital';
import { Appointment } from './appointment/Appointment';
import { Report } from './report/Report'
import { Explore } from './explore/Explore';

import { Search } from './search/Search';
import { Signin } from "./signin/Signin";
import { Login } from './login/Login';
import { Profile} from './profile/Profile';

import { Footer } from './footer/Footer';
import { Error404 } from './error/Error404';
// import { Loaderlogic } from './components/Loaderlogic';
// import { Loader } from './loader/Loader'

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
function App() {
  return (
    <div className="App">
        {/* <Loaderlogic/> */}
        {/* <Loader/> */}
        <Navbar/>
        <Routes>
          <Route path="" element={<Landingpage/>}></Route>
          <Route path="/landingpage" element={<Landingpage/>}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/hospital" element={<Hospital/>}></Route>
          <Route path="/Appointment" element={<Appointment/>}></Route>
          <Route path="/report" element={<Report/>}></Route>
          <Route path="/explore" element={<Explore/>}></Route>
          
          <Route path="/search" element={<Search/>}></Route>
          <Route path="/signin" element={<Signin/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path = "/*" element = {<Error404/>}></Route>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;