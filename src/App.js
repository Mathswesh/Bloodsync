import { Routes , Route} from 'react-router-dom';
import { Navbar } from './Pages/Navbar';
import { Landingpage } from './Pages/Landingpage';
import { Footer } from './Pages/Footer';
import { Signin } from './Pages/Signin';
import { Signup } from './Pages/Signup';
import { Appointment } from './Pages/Appointment';
import { Hospital } from './Pages/Hospital';
import { Passwordreset } from './Pages/Passwordreset';
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
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;