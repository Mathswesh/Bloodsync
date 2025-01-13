import { Routes , Route} from 'react-router-dom';
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
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path="" element={<Landingpage/>}></Route>
          <Route path="/landingpage" element={<Landingpage/>}></Route>
          <Route path="/signin" element={<Signin/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path='/appointment' element={<Appointment/>}></Route>
          <Route path="/hospital" element={<Hospital/>}></Route>
          <Route path='/passwordreset' element={<Passwordreset/>}></Route>
          <Route path="/otppage" element={<Otppage/>}></Route>
          <Route path='/newpassword' element={<Newpassword/>}></Route>
          <Route path='/hospitallist' element={<Hospitallist/>}></Route>
          <Route path='/profileform' element={<ProfileForm/>}></Route>
          <Route path='/datetimeform' element={<DateTimeForm/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;