import { Routes , Route} from 'react-router-dom';
import { Navbar } from './Pages/Navbar';
import { Landingpage } from './Pages/Landingpage';
import { Footer } from './Pages/Footer';
function App() {
  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path="" element={<Landingpage/>}></Route>
          <Route path="/landingpage" element={<Landingpage/>}></Route>
          <Route path="/footer" element={<Footer/>}></Route>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;