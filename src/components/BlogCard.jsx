import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogCard({i, blog}) {
  const theme = ["bg-blue-400","bg-yellow-400","bg-red-400","bg-sky-400","bg-gray-400"];

  return (
    <Link to={`/blog/${blog?._id}`} className='max-w-[400px] shadow-[0px_0px_30px_rgba(0,0,0,0.2)] mx-auto'>
        <div className={`aspect-[4/3] p-10 text-white flex justify-center items-center text-xl md:text-2xl lg:text-3xl font-semibold ${theme[i % theme.length]}`}>{blog?.title}</div>
        <div className='flex gap-5 p-5 items-center'>
            <div><img src={blog?.author?.profileImg || 'user-icon.jpeg'} alt={blog?.name} className='h-16 w-16 rounded-full' /></div>
            <div className=''>
                <div className='font-semibold'>{blog?.author?.username}</div>
                <div className='text-gray-700 text-sm'>{new Date(blog?.updatedAt)?.toLocaleDateString("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}</div>
            </div>
        </div>
    </Link>
  )
}
