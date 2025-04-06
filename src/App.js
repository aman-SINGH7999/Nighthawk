import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import Login from "./pages/Login"
import Signup from "./pages/Signup"



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Home />} />
        <Route path='/services' element={<Home />} />
        <Route path='/technologies' element={<Home />} />
        <Route path='/open-source' element={<Home />} />
        <Route path='/customers' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/carrers' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
