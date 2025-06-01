// import React, { useEffect, useState } from 'react'
// import Navbar from '../components/Navbar'
// import Footer from "../components/Footer"
// import BlogCard from '../components/BlogCard'
// import axios from 'axios'

// export default function Blog() {
//     const [blogs, setBlogs] = useState([]);
//     const [loading, setLoading] = useState(true);

//       const getAllBlogs = async ()=>{
//     try{
//       const { data } = await axios.get(`${process.env.REACT_APP_SERVER_URL}/contents/blogs`);
//         console.log(data.allBlogs)
//       if (Array.isArray(data?.allBlogs)) {
//         setBlogs(data.allBlogs);
//       } else {
//         setBlogs([]);
//       }
//     }catch(err){
//       console.log(err);
//     }finally {
//       setLoading(false);
//     }
//   }

//   useEffect(()=>{
//     getAllBlogs();
//   },[]);
 
//   return (
//     <>
//     <Navbar />
//     <div className='w-10/11 md:w-4/5 lg:w-8/11 mx-auto'>
//         <div className='flex justify-center items-center text-center h-[500px] w-full text-6xl font-semibold bg-gradient-to-l  from-cyan-400 to-blue-800'>Open Source DAM ( Digital Asset Management )</div>
//         <div className='flex flex-col gap-10 mt-15'>
//             <div className='flex flex-col justify-center my-10'>
//                 <div className='flex justify-between border-b-[1px] border-gray-300'>
//                     <div className='font-semibold text-gray-500 text-2xl'>Recent Blogs</div>
//                 </div>
//                 {loading ? (
//                     <p className="text-center text-gray-500">Loading blogs...</p>
//                 ) : blogs.length === 0 ? (
//                     <p className="text-center text-gray-500">No blogs found.</p>
//                 ) : (
//                     <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10 my-10'>
//                     {blogs.map((blog, i) => (
//                         <BlogCard 
//                         key={blog?._id}
//                         blog={blog}
//                         i={i}
//                     />
//                     ))}
//                     </div>
//                 )}
//             </div>
//         </div>
//     </div>
//     <Footer />
//     </>
//   )
// }


import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import BlogCard from '../components/BlogCard';
import axios from 'axios';

export default function Blog() {
  // 🔥 States
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 6; // blogs per page

  // 🔥 Fetch Blogs
  const getAllBlogs = async (page = 1) => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_SERVER_URL}/contents/blogs?page=${page}&limit=${limit}`
      );
      console.log(data.allBlogs);

      if (Array.isArray(data?.allBlogs)) {
        setBlogs(data.allBlogs);
        setTotalPages(data.totalPages || 1);
      } else {
        setBlogs([]);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // 🔥 useEffect
  useEffect(() => {
    getAllBlogs(currentPage);
  }, [currentPage]);

  return (
    <>
      <Navbar />

      {/* 🔥 Page Heading */}
      <div className='w-10/11 md:w-4/5 lg:w-8/11 mx-auto'>
        <div className='flex justify-center items-center text-center h-[500px] w-full text-6xl font-semibold bg-gradient-to-l from-cyan-400 to-blue-800'>
          Open Source DAM ( Digital Asset Management )
        </div>

        {/* 🔥 Recent Blogs */}
        <div className='flex flex-col gap-10 mt-15'>
          <div className='flex flex-col justify-center my-10'>
            <div className='flex justify-between border-b-[1px] border-gray-300'>
              <div className='font-semibold text-gray-500 text-2xl'>Recent Blogs</div>
            </div>

            {/* 🔥 Blogs List */}
            {loading ? (
              <p className="text-center text-gray-500">Loading blogs...</p>
            ) : blogs.length === 0 ? (
              <p className="text-center text-gray-500">No blogs found.</p>
            ) : (
              <>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10 my-10'>
                  {blogs.map((blog, i) => (
                    <BlogCard 
                      key={blog?._id}
                      blog={blog}
                      i={i}
                    />
                  ))}
                </div>

                {/* 🔥 Pagination Controls */}
                <div className="flex justify-center my-5 gap-2">
                  {/* Previous Button */}
                  <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    className={`px-4 py-2 rounded ${currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
                  >
                    Previous
                  </button>

                  {/* Page Numbers */}
                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(index + 1)}
                      className={`px-4 py-2 rounded ${
                        currentPage === index + 1 ? 'bg-blue-700 text-white' : 'bg-gray-200 hover:bg-gray-300'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}

                  {/* Next Button */}
                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    className={`px-4 py-2 rounded ${
                      currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'
                    }`}
                  >
                    Next
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
