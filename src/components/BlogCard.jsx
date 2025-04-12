import React from 'react'
import { Link } from 'react-router-dom'

export default function BlogCard({id,bgColor,title,author}) {
  return (
    <Link key={id} to={`/blog/${id}`} className='max-w-[400px] shadow-[0px_0px_30px_rgba(0,0,0,0.2)] mx-auto'>
        <div className={`aspect-[4/3] p-10 text-white flex justify-center items-center text-xl md:text-2xl lg:text-3xl font-semibold ${bgColor}`}>{title}</div>
        <div className='flex gap-5 p-5 items-center'>
            <div><img src={author.profileImg} alt={author?.name} className='h-16 w-16' /></div>
            <div className=''>
                <div className='font-semibold'>{author?.name}</div>
                <div className='text-gray-700 text-sm'>{author?.postedAt}</div>
            </div>
        </div>
    </Link>
  )
}
