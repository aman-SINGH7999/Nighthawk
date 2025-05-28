import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'


export default function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [password2, setPassword2] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();


    const handleSignup = async (e)=>{
        e.preventDefault();

        if(password !== password2){
            toast.warning("Your Password are not same!");
            return;
        }
        if(!username || username.trim().length < 3){
            toast.warning("Username is too short. Minimum 3 characters required.");
            return;
        }
        
        try{
            setLoading(true); // 👈 API call shuru ho gaya, ab loading true

            await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/signup`,{username, email, password});
            toast.success(`User Signup Successfully!`);
            setUsername(""); setEmail(""); 
            setPassword(""); setPassword2("");
            navigate("/login")
        }catch(err){
            console.log("ERROR : ",err);
            const errorMessage = err.response?.data?.message || "Signup failed!";
            toast.error(errorMessage);
        }finally {
            setLoading(false); // 👈 Kaam ho gaya, ab loading false
        }
    }

  return (
   <>
   <Navbar />
    <div className='flex flex-col md:flex-row gap-5 px-10 my-10 lg:px-20'>
        <div className='hidden md:w-1/2 md:flex flex-col justify-center gap-5 items-center text-center relative'>
        <img src="/signup.jpg" alt="login-img" className='w-full h-full object-cover absolute -z-10 opacity-52' />
            <div className='text-4xl font-bold p-2'>Welcome to ORIGINAL</div>
            <div className='text-sm md:w-9/10 lg:w-4/5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, illum!</div>
        </div>
        <div className='md:w-1/2 flex flex-col justify-center items-center'>
            <img src="/logo3.png" alt="logo" className='w-1/2 mb-10' />
            <form action="" onSubmit={handleSignup} className='flex flex-col gap-5 justify-center items-start border-[1px] shadow-[0px_0px_100px_rgba(0,0,0,0.1)] border-gray-400 p-5 w-[350px] rounded-sm'>
                <div className='w-full flex flex-col gap-1'>
                    <label htmlFor="username" className='text-gray-500 text-sm'>Username</label>
                    <input type="text" id='username' className='border-[1px] border-gray-400 rounded-sm p-2' value={username} onChange={(e)=>setUsername(e.target.value)} required/>
                </div>
                <div className='w-full flex flex-col gap-1'>
                    <label htmlFor="email" className='text-gray-500 text-sm'>Email</label>
                    <input type="email" id='email' className='border-[1px] border-gray-400 rounded-sm p-2' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                </div>
                <div className='w-full flex flex-col gap-1'>
                    <label htmlFor="password" className='text-gray-500 text-sm'>Password</label>
                    <input type="password" id='password' className='border-[1px] border-gray-400 rounded-sm p-2' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                </div>
                <div className='w-full flex flex-col gap-1'>
                    <label htmlFor="confirm-password" className='text-gray-500 text-sm'>Confirm Password</label>
                    <input type="password" id='confirm-password' className='border-[1px] border-gray-400 rounded-sm p-2' value={password2} onChange={(e)=>setPassword2(e.target.value)} required/>
                </div>
                
                <button type='submit' disabled={loading} className={`w-full rounded-sm text-white p-2 ${loading ? "bg-blue-400 hover:bg-blue-400" : "bg-blue-700 hover:bg-blue-800"}`} >{loading ? "Signing up..." : "Signup"}</button>
                <div className='flex justify-between items-center w-full text-sm text-blue-700'>
                    <Link to={"/login"}>Already Have an Account?</Link>
                </div>
            </form>
        </div>
    </div>
    <Footer />
   </>
  )
}
