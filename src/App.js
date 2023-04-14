import logo from './logo.svg';
import './App.css';
import Home from './Components/demohome2';
import Bestpractices from './Components/bestpractices';
import DSsample from './Components/sampleds';
import PMsample from './Components/samplepm';
import Userform from './Components/demo';
import Userlist from './Components/userlist';
import DemoHome from './Components/demohome';
import DemoHometwo from './Components/home';
import Newdemo from './Components/newdemo';
import {
  Routes,
  Route,
  Navigate,

} from "react-router-dom";
function App() {
  return (
    <Routes>
    <Route path='/' element={<Newdemo />} />
    <Route path='/bestpractices' element={<Bestpractices />} />
    <Route path='/sample/DS' element={<DSsample />} />
    <Route path='/sample/PM' element={<PMsample />} />
    <Route path='/form' element={<Userform />} />
    <Route path='/list' element={<Userlist />} />
    <Route path='/DemoHome' element={<DemoHome/>} />
    <Route path='/HomeDemo' element={<DemoHometwo/>} />
    <Route path='/Newdemo' element={<Newdemo/>} />

    </Routes>
  );
}

export default App;
