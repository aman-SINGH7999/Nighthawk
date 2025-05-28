import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { HiCurrencyRupee } from "react-icons/hi2";
import { MdOutlineLoop } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { PiStudentFill } from "react-icons/pi";
import { toast } from 'react-toastify';
import axios from 'axios';
import { useParams } from 'react-router-dom';


export default function CareerForm() {
  const [job, setJob] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [experience, setExperience] = useState("");
  const [city, setCity] = useState("");
  const [cover, setCover] = useState("");
  const [resume, setResume] = useState(null)
  const [loading, setLoading] = useState(false);
  const { jobId } = useParams();


      
  // Fetch job details
  useEffect(() => {
    const fetchJob = async () => {
      try {
        const {data} = await axios.get(`${process.env.REACT_APP_SERVER_URL}/jobs/get-job/${jobId}`);
        setJob(data?.job);
      } catch (err) {
        toast.error("Failed to load job details");
      }
    };

    fetchJob();
  }, [jobId]);


  const handleCareerForm = async (e)=>{
    e.preventDefault();
    if(phone.length < 10){
      toast.warning("Phone Number is not correct!");
      return;
    }
    if(name.trim().length < 3){
      toast.warning("Name should be greater then 3 letter!");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("experience", experience);
    formData.append("city", city);
    formData.append("cover", cover);
    formData.append("resume", resume);
    formData.append("jobID",jobId);

    try{
      setLoading(true);

      await axios.post(`${process.env.REACT_APP_SERVER_URL}/career/job-application`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        toast.success("Your application submitted successfully!");
        setName(""); setEmail(""); setCity("");
        setPhone(""); setExperience(""); setCover("");
        setResume(null);
    }catch(err){
      const errorMessage = err.response?.data?.message || "Failed to submit!";
      toast.error(errorMessage);
    }finally{
      setLoading(false);
    }
  }
  

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileSize = file.size / 1024 / 1024; // Convert bytes to MB
      if (fileSize > 1) {
        toast.error("File size should not exceed 1MB!");
        e.target.value = null; // Clear the file input
        return;
      }
      setResume(file); // Set the file if it's valid
    }
  };



  return (
    <>
    <Navbar />
    <div className='w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto my-20'>
        <div className='text-center text-6xl font-bold my-5'>{job?.jobRole}</div>
        <div className='text-center text-xl text-gray-500 mb-10'>{job?.description}</div>

        <div className='flex flex-col bg-blue-50 gap-5 p-5 text-gray-700'>
          <div className='flex flex-col sm:flex-row justify-between gap-2'>
              <div>
                <div className='flex items-center gap-1 text-xl'><MdOutlineAccessTimeFilled className='text-blue-800 text-2xl'/> Experience</div>
                <div className='ml-7'>{job?.experience}</div>
              </div>
              <div>
                <div className='flex items-center gap-1 text-xl'><FaUser className='text-blue-800 text-2xl'/> Openings</div>
                <div className='ml-7'>{job?.openings}</div>
              </div>
              <div>
                <div className='flex items-center gap-1 text-xl'><HiCurrencyRupee className='text-blue-800 text-2xl'/> CTC</div>
                <div className='ml-7'>{job?.ctc}</div>
              </div>
          </div>

          <div>
            <div className='flex items-center gap-1 text-xl'><MdOutlineLoop className='text-blue-800 text-2xl'/>Interview Process</div>
            <div className='ml-7'>
              <ul>
                {
                    job?.interviewProcess?.map((points,i)=>{
                        return <li>{i}) {points}</li>
                    })
                }
              </ul>
                 
            </div>
          </div>

          <div>
            <div className='flex items-center gap-1 text-xl'><FaLocationDot className='text-blue-800 text-2xl'/>Job Location</div>
            <div className='ml-7'>{job?.jobLocation}</div>
          </div>

          <div>
            <div className='flex items-center gap-1 text-xl'><PiStudentFill className='text-blue-800 text-2xl'/> Education</div>
            <div className='ml-7'>{job?.education}</div>
          </div>
          
        </div>

        <div className='my-10'>
            <div className='font-semibold text-gray-800 text-lg'>What Are we looking for?</div>
            <ul className='list-disc list-inside text-gray-800'>
            {
                job?.about?.map((points)=>{
                    return (<li>{points}</li>)
                })
            }
            </ul>
          </div>

          <div>
              <h4 className='font-semibold text-2xl text-blue-900'>Apply Here</h4>
              <form action="" onSubmit={handleCareerForm} className='flex flex-col gap-5 my-5 text-gray-600' >
                  <div>
                      <label htmlFor="name">Full Name<span className='text-red-600'>*</span></label>
                      <input type="text" id='name' className='w-full border border-gray-300 rounded-sm p-2' value={name} onChange={(e)=>setName(e.target.value)} required/>
                  </div>
                  <div>
                      <label htmlFor="email">Email Address<span className='text-red-600'>*</span></label>
                      <input type="email" id='email' className='w-full border border-gray-300 rounded-sm p-2' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                  </div>
                  <div>
                      <label htmlFor="phone">Phone Number<span className='text-red-600'>*</span></label>
                      <input type="number" id='phone' className='w-full border border-gray-300 rounded-sm p-2' value={phone} onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))} required/>
                  </div>
                  <div>
                      <label htmlFor="experience">Experience (in years)<span className='text-red-600'>*</span></label>
                      <input type="number" id='experience' className='w-full border border-gray-300 rounded-sm p-2' value={experience} onChange={(e)=>setExperience(e.target.value)} required/>
                  </div>
                  <div>
                      <label htmlFor="city">Current City<span className='text-red-600'>*</span></label>
                      <input type="text" id='city' className='w-full border border-gray-300 rounded-sm p-2' value={city} onChange={(e)=>setCity(e.target.value)} required/>
                  </div>
                  <div>
                      <label htmlFor="cover">Cover Letter / Short Message</label>
                      <textarea name="cover" id="cover" rows={4} className='w-full border border-gray-300 rounded-sm p-2' value={cover} onChange={(e)=>setCover(e.target.value)}></textarea>
                  </div>
                  <div>
                      <label htmlFor="resume">Resume Upload<span className='text-red-600'>*</span></label>
                      <input type="file" name="resume" accept=".pdf,.doc,.docx" id='resume' className='w-full p-2' onChange={handleFileChange} required/>
                  </div>

                  <div>
                      <button type='submit' disabled={loading} className={`py-2 px-4 rounded-sm text-white font-semibold  ${loading ? "bg-blue-300 hover:bg-blue-300" : "bg-blue-400 hover:bg-blue-500"}`}>{loading ? "Applying..." : "Apply"}</button>
                  </div>
              </form>
          </div>

    </div>
    <Footer />
    </>
  )
}
