import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import BlogCard from '../components/BlogCard'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'
import axios from 'axios'

export default function SingleBlog() {
    const [blog, setBlog] = useState("");
    const [loading, setLoading] = useState(true);
    const [comment, setComment] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState(""); 

    const { id } = useParams();

      const getBlogDetail = async ()=>{
    try{
      const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/contents/blog/${id}`);
      console.log(data)
      setBlog(data?.blog);
    }catch(err){
      console.log(err);
    }finally {
      setLoading(false);
    }
  }

  useEffect(()=>{
    getBlogDetail();
  }, [])


  return (
    <>
    <Navbar />
    
    <div className='w-11/12 sm:w-3/4 lg:w-8/12 xl:w-1/2 mx-auto'>

        {/* about the blog */}
        {loading ? (
        <p className="text-center text-gray-500">Loading blogs...</p>
        ) : !blog ? (
          <p className="text-center text-gray-500">No Detail found.</p>
        ) : (
          <main className="">
            {/* about the blog */}
            <div className=''>
                <h1 className='text-4xl font-semibold mt-10'>{blog?.title}</h1>
                <div className='text-gray-600'>Updated {new Date(blog?.updatedAt)?.toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}</div>
               
                <div className='my-10'>
                    <img src={blog?.imageURL} alt="imgBlog" />
                </div>
                 <div className='flex my-5'>
                  {
                    blog?.tags?.map((tag,i)=>{
                      return <span key={i} className='py-1 px-3 bg-gray-300 rounded-2xl'>{tag}</span>
                    })
                  }
                </div>
                <div className='font-semibold text-gray-800 text-xl my-5'>{blog?.description}</div>
                
                <div className='flex flex-col gap-4 mb-5'>
                  {
                    blog?.content?.map((value, i)=>{
                      return <div key={i}>{value}</div>
                    })
                  }
                </div>
            </div>

            {/* Posted by */}
            <div className='py-5 text-xl'>
            <div className='text-gray-600 border-b border-dashed w-1/3'>Created by -</div>
                <div className='flex gap-5 py-3'>
                    <img src="/user-icon.jpeg" alt="" className='w-10 h-10' />
                    <div>
                        <div className='font-semibold'>{blog?.author?.username}</div>
                        <div className='text-xs text-gray-500'>
                          {new Date(blog?.createdAt)?.toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </div>
                    </div>
                </div>
            </div>
          </main>
      )}


        {/* Related bloge section */}
        {/* <div>
            <h2 className='text-3xl text-gray-500 border-b border-gray-300 mt-20 mb-10'>Related Articles</h2>
            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10 my-10'>
                <BlogCard 
                    id={4}
                    bgColor="bg-green-700"
                    title="MCP Servers: The New AI Ecosystem"
                    author={{name:"Travish Tulla", profileImg:"/user-circle.webp",postedAt:"21 March 2025"}}
                />
                <BlogCard 
                    id={5}
                    bgColor="bg-orange-800"
                    title="MCP Servers: The New AI Ecosystem"
                    author={{name:"Travish Tulla", profileImg:"/user-circle.webp",postedAt:"21 March 2025"}}
                />
                <BlogCard 
                    id={7}
                    bgColor="bg-gray-600"
                    title="MCP Servers: The New AI Ecosystem"
                    author={{name:"Travish Tulla", profileImg:"/user-circle.webp",postedAt:"21 March 2025"}}
                />
            </div>
        </div> */}



        {/* add a comment section */}
        <div className='mb-20'>
            <h2 className='text-3xl text-gray-500 border-b border-gray-300 mt-20 mb-10'>coments</h2>
            <div>
                <h4 className='font-semibold text-xl'>Leave a Comment</h4>
                <p className='text-gray-600 font-thin'>Your email address will not be published. Required fields are marked*</p>
                <form action="" className='flex flex-col gap-5 my-5 text-gray-600' >
                    <div>
                        <label htmlFor="comment">Comment*</label>
                        <textarea name="comment" id="comment" rows={3} className='w-full border border-gray-300 rounded-sm p-2' value={comment} onChange={(e)=>setComment(e.target.value)}></textarea>
                    </div>
                    <div>
                        <label htmlFor="name">Name*</label>
                        <input type="text" id='name' className='w-full border border-gray-300 rounded-sm p-2' value={name} onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email*</label>
                        <input type="email" id='email' className='w-full border border-gray-300 rounded-sm p-2' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>

                    <div>
                        <button type='submit' className='py-2 px-4 bg-blue-400 rounded-sm text-white font-semibold hover:bg-blue-500'>Submit Comment</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

