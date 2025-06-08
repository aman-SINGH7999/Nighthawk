import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import axios from 'axios';

export default function SingleBlog() {
  const [blog, setBlog] = useState("");
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const { id } = useParams();

  const getBlogDetail = async () => {
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/contents/blog/${id}`);
      console.log(data);
      setBlog(data?.blog);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBlogDetail();
  }, []);

  return (
    <>
      <Navbar />

      <div className='w-11/12 sm:w-3/4 lg:w-8/12 xl:w-1/2 mx-auto'>

        {/* About the blog */}
        {loading ? (
          <p className="text-center text-gray-500">Loading blogs...</p>
        ) : !blog ? (
          <p className="text-center text-gray-500">No Detail found.</p>
        ) : (
          <main className='shadow-[10px_10px_10px_rgba(0,0,0,0.5) bg-white'>
            {/* Blog Title */}
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center text-gray-600 hover:text-gray-900 transition-colors my-2"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
              Back
            </button>
            <h1 className='text-4xl font-semibold mb-10'>{blog?.title}</h1>
            <div className='text-gray-600'>
              Updated {new Date(blog?.updatedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </div>

            {/* Blog Image */}
            <div className='my-10'>
              <img src={blog?.imageURL} alt="imgBlog" className='w-full object-cover rounded-lg shadow' />
            </div>

            {/* Blog Tags */}
            <div className='flex flex-wrap gap-2 my-5'>
              {blog?.tags?.map((tag, i) => (
                <span key={i} className='py-1 px-3 bg-gray-300 rounded-2xl text-sm'>
                  #{tag}
                </span>
              ))}
            </div>

            {/* Blog Description */}
            <div className='font-semibold text-gray-800 text-xl my-5'>
              {blog?.description}
            </div>

            {/* Blog Content */}
            <div
              className='flex flex-col gap-4 mb-5 prose prose-lg max-w-none'
              dangerouslySetInnerHTML={{ __html: blog?.content }}
            ></div>

            {/* Author Section */}
            <div className='py-5 text-xl'>
              <div className='text-gray-600 border-b border-dashed w-1/3'>Created by -</div>
              <div className='flex gap-5 py-3'>
                <img src="/user-icon.jpeg" alt="" className='w-10 h-10 rounded-full object-cover' />
                <div>
                  <div className='font-semibold'>{blog?.author?.username}</div>
                  <div className='text-xs text-gray-500'>
                    {new Date(blog?.createdAt).toLocaleDateString("en-US", {
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

        {/* Related Blogs Section (Optional, commented out) */}
        {/* 
        <div>
          <h2 className='text-3xl text-gray-500 border-b border-gray-300 mt-20 mb-10'>Related Articles</h2>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10 my-10'>
            <BlogCard 
              id={4}
              bgColor="bg-green-700"
              title="MCP Servers: The New AI Ecosystem"
              author={{ name: "Travish Tulla", profileImg: "/user-circle.webp", postedAt: "21 March 2025" }}
            />
            ...
          </div>
        </div> 
        */}

        {/* Add a Comment Section */}
        {/* <div className='mb-20'>
          <h2 className='text-3xl text-gray-500 border-b border-gray-300 mt-20 mb-10'>Comments</h2>
          <div>
            <h4 className='font-semibold text-xl'>Leave a Comment</h4>
            <p className='text-gray-600 font-thin'>Your email address will not be published. Required fields are marked*</p>
            <form action="" className='flex flex-col gap-5 my-5 text-gray-600'>
              <div>
                <label htmlFor="comment">Comment*</label>
                <textarea
                  name="comment"
                  id="comment"
                  rows={3}
                  className='w-full border border-gray-300 rounded-sm p-2'
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </div>
              <div>
                <label htmlFor="name">Name*</label>
                <input
                  type="text"
                  id='name'
                  className='w-full border border-gray-300 rounded-sm p-2'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  id='email'
                  className='w-full border border-gray-300 rounded-sm p-2'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <button
                  type='submit'
                  className='py-2 px-4 bg-blue-400 rounded-sm text-white font-semibold hover:bg-blue-500'
                >
                  Submit Comment
                </button>
              </div>
            </form>
          </div>
        </div> */}
      </div>

      <Footer />
    </>
  );
}
