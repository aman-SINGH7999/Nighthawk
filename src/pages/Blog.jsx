import React from 'react'
import Navbar from '../components/Navbar'
import Footer from "../components/Footer"
import BlogCard from '../components/BlogCard'

export default function page() {
  return (
    <>
    <Navbar />
    <div className='w-10/11 md:w-4/5 lg:w-8/11 mx-auto'>
        <div className='flex justify-center items-center text-center h-[500px] w-full text-6xl font-semibold bg-gradient-to-l  from-cyan-400 to-blue-800'>Open Source DAM ( Digital Asset Management )</div>
        <div className='flex flex-col gap-10 mt-15'>
            <div className='flex flex-col justify-center'>
                <div className='flex justify-between border-b-[1px] border-gray-300'>
                    <div className='font-semibold text-gray-500 text-2xl'>Latest</div>
                    <button className='cursor-pointer font-semibold text-blue-800 text-sm'>View All</button>
                </div>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10 my-10'> 
                    <BlogCard 
                        id={1}
                        bgColor="bg-cyan-600"
                        title="MCP Servers: The New AI Ecosystem"
                        author={{name:"Travish Tulla", profileImg:"/user-circle.webp",postedAt:"21 March 2025"}}
                    />
                    <BlogCard
                        id={2}
                        bgColor="bg-blue-600"
                        title="MCP Servers: The New AI Ecosystem"
                        author={{name:"Travish Tulla", profileImg:"/user-circle.webp",postedAt:"21 March 2025"}}
                    />
                    <BlogCard 
                        id={3}
                        bgColor="bg-red-400"
                        title="MCP Servers: The New AI Ecosystem"
                        author={{name:"Travish Tulla", profileImg:"/user-circle.webp",postedAt:"21 March 2025"}}
                    />
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
                        id={6}
                        bgColor="bg-black"
                        title="MCP Servers: The New AI Ecosystem"
                        author={{name:"Travish Tulla", profileImg:"/user-circle.webp",postedAt:"21 March 2025"}}
                    />
                </div>
            </div>
            <div>
                <div className='flex justify-between border-b-[1px] border-gray-300'>
                    <div className='font-semibold text-gray-500 text-2xl'>Articles</div>
                    <button className='cursor-pointer font-semibold text-blue-800 text-sm'>View All</button>
                </div>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10 my-10'> 
                    <BlogCard 
                        id={7}
                        bgColor="bg-gray-600"
                        title="MCP Servers: The New AI Ecosystem"
                        author={{name:"Travish Tulla", profileImg:"/user-circle.webp",postedAt:"21 March 2025"}}
                    />
                    <BlogCard 
                        id={8}
                        bgColor="bg-green-800"
                        title="MCP Servers: The New AI Ecosystem"
                        author={{name:"Travish Tulla", profileImg:"/user-circle.webp",postedAt:"21 March 2025"}}
                    />
                    <BlogCard 
                        id={9}
                        bgColor="bg-cyan-900"
                        title="MCP Servers: The New AI Ecosystem"
                        author={{name:"Travish Tulla", profileImg:"/user-circle.webp",postedAt:"21 March 2025"}}
                    />
                    <BlogCard 
                        id={10}
                        bgColor="bg-yellow-900"
                        title="MCP Servers: The New AI Ecosystem"
                        author={{name:"Travish Tulla", profileImg:"/user-circle.webp",postedAt:"21 March 2025"}}
                    />
                    <BlogCard 
                        id={11}
                        bgColor="bg-yellow-600"
                        title="MCP Servers: The New AI Ecosystem"
                        author={{name:"Travish Tulla", profileImg:"/user-circle.webp",postedAt:"21 March 2025"}}
                    />
                    <BlogCard 
                        id={12}
                        bgColor="bg-blue-400"
                        title="MCP Servers: The New AI Ecosystem"
                        author={{name:"Travish Tulla", profileImg:"/user-circle.webp",postedAt:"21 March 2025"}}
                    />
                </div>
            </div>
            <div>
                <div className='flex justify-between border-b-[1px] border-gray-300'>
                    <div className='font-semibold text-gray-500 text-2xl'>Dev</div>
                    <button className='cursor-pointer font-semibold text-blue-800 text-sm'>View All</button>
                </div>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-10 my-10'> 
                    <BlogCard 
                        id={13}
                        bgColor="bg-gray-800"
                        title="MCP Servers: The New AI Ecosystem"
                        author={{name:"Travish Tulla", profileImg:"/user-circle.webp",postedAt:"21 March 2025"}}
                    />
                    <BlogCard 
                        id={14}
                        bgColor="bg-cyan-600"
                        title="MCP Servers: The New AI Ecosystem"
                        author={{name:"Travish Tulla", profileImg:"/user-circle.webp",postedAt:"21 March 2025"}}
                    />
                    <BlogCard 
                        id={15}
                        bgColor="bg-pink-600"
                        title="MCP Servers: The New AI Ecosystem"
                        author={{name:"Travish Tulla", profileImg:"/user-circle.webp",postedAt:"21 March 2025"}}
                    />
                </div>
            </div>
        </div>
    </div>
    <Footer />
    </>
  )
}
