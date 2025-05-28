import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { MdNavigateNext } from "react-icons/md";
import axios from 'axios'

export default function Careers() {
    const [allJobs, setAllJobs] = useState([]);
    const [loading, setLoading] = useState(true);


const getAllJobs = async ()=>{
    try{
      const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/jobs/get-all-jobs`);
      console.log(data)
      if (Array.isArray(data?.jobs)) {
        setAllJobs(data.jobs);
      } else {
        setAllJobs([]);
      }
    }catch(err){
      console.log(err);
    }finally {
      setLoading(false);
    }
  }

  useEffect(()=>{
    getAllJobs();
  },[]);

  return (
    <>
    <Navbar />

    <div className='w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto my-20'>
        <div className='text-center text-6xl font-bold my-5'>Open Positions</div>
        <div className='text-center text-xl text-gray-500 mb-10'>Here is the list of open positions that we are currently hiring.</div>
        
        <div className='my-10'>
            {loading ? (
                    <p className="text-center text-gray-500">Loading Jobs...</p>
                ) : allJobs.length === 0 ? (
                    <p className="text-center text-gray-500">No Jobs found.</p>
                ) : (
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                    {allJobs.map((job) => (
                        <JobRoleCard key={job._id} job={job} />
                    ))}
                    </div>
                )
            }
        </div>
    </div>

    <Footer />
    </>
  )
}


const JobRoleCard = ({job})=>{
    return (
        <Link to={`/careers/${job?._id}`}  className='bg-sky-100 rounded-md flex justify-between items-center p-5 hover:bg-sky-50 border hover:border-gray-500'>
            <div className='text-gray-700'>
                <div className='text-lg text-gray-800 font-semibold'>{job?.jobRole}</div>
                <div>Experience: {job?.experience}</div>
                <div>Open Position: {job?.openings}</div>
            </div>
            <MdNavigateNext />
        </Link>
    )
}