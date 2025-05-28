import { Link } from 'react-router-dom';
import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaSquareYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className='pt-10'>
        <div className='flex text-sm flex-col items-center gap-10 md:gap-5 md:items-start md:flex-row md:justify-between px-5 md:px-10 lg:px-20 pb-10'>
            <div className='flex flex-col gap-8 text-sm items-center md:items-start'>
                <img src="/logo2.png" alt="logo" className='md:w-[20vw]' />
                <div className='flex gap-2 text-2xl '>
                    <FaFacebookSquare />
                    <FaSquareXTwitter />
                    <FaLinkedin />
                    <FaInstagramSquare />
                    <FaSquareYoutube />
                </div>
                <div>Call us at <p>1800-420-7332</p></div>
            </div>
            <div className='flex flex-col gap-2 md:gap-4 text-sky-700 w-full text-center'>
                <div className='font-semibold text-blue-950 md:mb-5'>New to Salesforce?</div>
                <Link to={"#"} >Why Salesforce</Link>
                <Link to={"#"} >What is CRM?</Link>
                <Link to={"#"} >Explore All Products</Link>
                <Link to={"#"} >SaaS</Link>
                <Link to={"#"} >Customer Success</Link>
                <Link to={"#"} >Product Pricing</Link>
            </div>
            <div className='flex flex-col gap-2 md:gap-4 text-sky-700 w-full text-center'>
                <div className='font-semibold text-blue-950 md:mb-5'>About Salesforce</div>
                <Link to={"#"} >Our Story</Link>
                <Link to={"#"} >Careers</Link>
                <Link to={"#"} >Press</Link>
                <Link to={"#"} >Blog</Link>
                <Link to={"#"} >Security and Performance</Link>
                <Link to={"#"} >Salesforce.org</Link>
                <Link to={"#"} >Best CRM Software</Link>
                <Link to={"#"} >Sustainability</Link>
                <Link to={"#"} >Security and Performance</Link>
                <Link to={"#"} >Legal</Link>
                <Link to={"#"} >Give us your Feedback</Link>
            </div>
            <div className='flex flex-col gap-2 md:gap-4 text-sky-700 w-full text-center'>
                <div className='font-semibold text-blue-950 md:mb-5'>About Salesforce</div>
                <Link to={"#"} >Our Story</Link>
                <Link to={"#"} >Careers</Link>
                <Link to={"#"} >Press</Link>
                <Link to={"#"} >Blog</Link>
                <Link to={"#"} >Security and Performance</Link>
                <Link to={"#"} >Salesforce.org</Link>
                <Link to={"#"} >Best CRM Software</Link>
                <Link to={"#"} >Sustainability</Link>
                <Link to={"#"} >Security and Performance</Link>
                <Link to={"#"} >Legal</Link>
                <Link to={"#"} >Give us your Feedback</Link>
            </div>
        </div>
        <div className='flex flex-col text-center items-center sm:text-start sm:items-start sm:flex-row text-[13px] px-5 md:px-10 lg:px-20 py-10 gap-10 bg-blue-950 text-white'>
            <div className='w-1/5 flex justify-center'>
                <img src="/icon-logo.png" alt="logo" className='w-10 h-10'/>
            </div>
            <div className='w-3/4 flex flex-col gap-2'>
                <div className='flex flex-wrap gap-4 justify-center sm:justify-start'>
                    <Link to={"#"} className='hover:text-sky-500 underline'>Legal</Link>
                    <Link to={"#"} className='hover:text-sky-500 underline'>Terms of Service</Link>
                    <Link to={"#"} className='hover:text-sky-500 underline'>Privacy</Link>
                    <Link to={"#"} className='hover:text-sky-500 underline'>Responsible Disclosure</Link>
                    <Link to={"#"} className='hover:text-sky-500 underline'>Trust</Link>
                    <Link to={"#"} className='hover:text-sky-500 underline'>Contact</Link>
                    <Link to={"#"} className='hover:text-sky-500 underline'>Cookie Preferences</Link>
                </div>
                <Link to={"#"} className='hover:text-sky-500 underline mb-5'>Your Privacy Choices</Link>
                <div>© Copyright 2025 Salesforce, Inc. <Link to={"#"} className='hover:text-sky-500 underline'>All rights reserved</Link>. Various trademarks held by their respective owners.</div>
            </div>
        </div>
    </footer>
  )
}