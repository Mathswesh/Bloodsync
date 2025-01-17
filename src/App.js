import { Routes, Route } from 'react-router-dom';
import { Navbar } from './Pages/Navbar';
import { Landingpage } from './Pages/Landingpage';
import { Footer } from './Pages/Footer';
import { Signin } from './Pages/Signin';
import { Signup } from './Pages/Signup';
import { Appointment } from './Pages/Appointment';
import { Hospital } from './Pages/Hospital';
import { Passwordreset } from './Pages/Passwordreset';
import Otppage from './Pages/Otppage';
import Newpassword from './Pages/Newpassword';
import { Hospitallist } from './Pages/Hospitallist';
import ProfileForm from './Pages/ProfileForm';
import DateTimeForm from './Pages/DateTimeForm';
import Dashboard from './Pages/Dashboard';
import BloodDonationForm from './Pages/BloodDonationForm';
import ReviewPage from './Pages/ReviewPage';
import ContactUs from './Pages/ContactUs';
import { AddHospital } from './Pages/AddHospital';
import { HospitalDashboard } from './Pages/HospitalDashboard';
import { AddHospitalSignin } from './Pages/AddHospitalSignin';
import InPageNavigation from './Pages/InpageNavigation';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="" element={<Landingpage />}></Route>
        <Route path="/landingpage" element={<Landingpage />}></Route>
        <Route path='/addhospitalform' element={<AddHospital />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path='/appointment' element={<Appointment />}></Route>
        <Route path="/hospital" element={<Hospital />}></Route>
        <Route path='/passwordreset' element={<Passwordreset />}></Route>
        <Route path="/otppage" element={<Otppage />}></Route>
        <Route path='/newpassword' element={<Newpassword />}></Route>
        <Route path='/hospitallist' element={<Hospitallist />}></Route>
        <Route path='/profileform' element={<ProfileForm />}></Route>
        <Route path='/datetimeform' element={<DateTimeForm />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/blooddonationform' element={<BloodDonationForm />}></Route>
        <Route path='reviews' element={<ReviewPage />}></Route>
        <Route path='/contact' element={<ContactUs />}></Route>
        <Route path='/hospitaldashboard' element={<HospitalDashboard />}></Route>
        <Route path='/addhospitalsignin' element={<AddHospitalSignin />}></Route>
        <Route path='/inpagenavigation' element={<InPageNavigation />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;