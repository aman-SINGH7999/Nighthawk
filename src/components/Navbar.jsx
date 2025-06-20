import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { RiUser3Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { HiMiniBars3 } from "react-icons/hi2";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <div className='sticky top-0 bg-white z-50 shadow-[0px_1px_10px_rgba(0,0,0,0.1)]'>
      <div className='flex flex-row items-center p-4 lg:p-8 bg-white relative'>
        {
          open ? < RxCross1 className='mr-4 text-5xl sm:text-3xl block lg:hidden text-blue-900' onClick={()=>setOpen(!open)}/>
          : < HiMiniBars3 className='mr-4 text-5xl sm:text-3xl block lg:hidden text-blue-900' onClick={()=>setOpen(!open)}/>
        }
        <Link to={"/"} scroll={true} className='hover:text-blue-400 flex items-center'>
            <img src="/main-logo.png" className='h-10 w-10' alt='logo' />
            <img src="/logo-name.png" className='h-5 lg:hidden' alt='logo-name' />
        </Link>
        <div className='flex flex-row lg:justify-between justify-end items-center w-full text-blue-900'>
          <div className='lg:flex flex-row gap-5 mx-10 text-sm hidden'>
              <Link to={"/"} scroll={true} className='hover:text-blue-400'>Home</Link>
              <Link to={"/services"} scroll={true} className='hover:text-blue-400'>Services</Link>
              <Link to={"/products"} scroll={true} className='hover:text-blue-400'>Products</Link>
              <Link to={"/technologies"} scroll={true} className='hover:text-blue-400'>Technologies</Link>
              <Link to={"/open-source"} scroll={true} className='hover:text-blue-400'>Open Source</Link>
              <Link to={"/about"} scroll={true} className='hover:text-blue-400'>About</Link>
              <Link to={"/contact"} scroll={true} className='hover:text-blue-400'>Contact</Link>
              <Link to={"/blog"} scroll={true} className='hover:text-blue-400'>Blog</Link>
              <Link to={"/careers"} scroll={true} className='hover:text-blue-400'>Careers</Link>
          </div>
          <Link to={"/login"}>
            <button className='hidden md:flex flex-row gap-2 items-center py-2 px-4 rounded-2xl text-sm cursor-pointer hover:bg-gray-300 hover:text-blue-400'>< RiUser3Fill />Login</button>
          </Link>
        </div>
        {open && (
          <motion.div drag className='absolute top-16 flex flex-col gap-5 mx-10 text-sm lg:hidden text-blue-900 bg-white z-20 px-10 py-3'>
                <Link to={"/"} scroll={true} className='hover:text-blue-400'>Home</Link>
                <Link to={"/services"} scroll={true} className='hover:text-blue-400'>Services</Link>
                <Link to={"/products"} scroll={true} className='hover:text-blue-400'>Products</Link>
                <Link to={"/technologies"} scroll={true} className='hover:text-blue-400'>Technologies</Link>
                <Link to={"/open-source"} scroll={true} className='hover:text-blue-400'>Open Source</Link>
                <Link to={"/about"} scroll={true} className='hover:text-blue-400'>About</Link>
                <Link to={"/contact"} scroll={true} className='hover:text-blue-400'>Contact</Link>
                <Link to={"/blog"} scroll={true} className='hover:text-blue-400'>Blog</Link>
                <Link to={"/careers"} scroll={true} className='hover:text-blue-400'>Careers</Link>
                <hr />
                <Link to={"/login"}>
                    <button className='flex flex-row gap-2 items-center text-sm cursor-pointer hover:text-blue-400'>< RiUser3Fill />Login</button>
                </Link>
          </motion.div>
        )}
      </div>
    </div>
  )
}
