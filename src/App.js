import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Home from "./pages/Home"
import Blog from "./pages/Blog"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import SingleBlog from './pages/SingleBlog';
import Careers from './pages/Careers';
import CareerForm from './pages/CareerForm';
import Services from './pages/Services';
import ScrollToTop from './components/ScrollToTop';
import TechnologyPage from './pages/TechnologyPage';
import Products from './pages/Products';





function App() {
  return (
    <>
    <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/services' element={<Services />} />
        <Route path='/technologies' element={<TechnologyPage />} />
        <Route path='/open-source' element={<Home />} />
        <Route path='/customers' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:id' element={<SingleBlog />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/careers/:jobId' element={<CareerForm />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>

      <ToastContainer />
    </>
  );
}

export default App;
