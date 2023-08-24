import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/index';
import Recommended from './pages/Recommended/index';
import Login from './pages/Login/index';
import Signup from './pages/Signup/index';
function App() {
  return (
    <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/Recommended" element={<Recommended/>} />
    </Routes>
  );
}

export default App;
