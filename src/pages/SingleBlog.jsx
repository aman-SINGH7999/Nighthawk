import React from 'react'
import { useParams } from 'react-router-dom'
import BlogCard from '../components/BlogCard'
import Navbar from "../components/Navbar"
import Footer from '../components/Footer'

export default function SingleBlog() {
    const { id } = useParams();
  return (
    <>
    <Navbar />
    
    <div className='w-11/12 sm:w-3/4 lg:w-8/12 xl:w-1/2 mx-auto'>

        {/* about the blog */}
        <div className=''>
            <h1 className='text-4xl font-semibold mt-10'>Heading of my blog {id}</h1>
            <div className='text-gray-600'>Updated 11 April 2025</div>
            <div className='my-10'>
                <img src="/woman2.jpg" alt="imgBlog" />
                <div className='text-xs'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quidem.</div>
            </div>
            <h3 className='text-lg font-semibold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <p>
                <span className='text-3xl'>L</span>orem ipsum, dolor sit amet consectetur adipisicing elit. Vero nobis quam accusamus cumque unde delectus amet iste atque pariatur, doloremque nam culpa! Tempore quia aperiam, veritatis et aut tenetur necessitatibus ipsam laboriosam. Nesciunt nostrum magni ab illo eaque laboriosam rem. Quas, dolorem totam maxime facilis alias ipsa quis ea ipsum neque deleniti, reiciendis quam exercitationem architecto repellat officia! Alias dolore ea voluptatum iure quos quasi quis culpa odit sapiente expedita! Quasi qui aliquam numquam assumenda illum? Exercitationem tempore consequuntur atque natus deleniti at culpa tempora id quas eius impedit nemo perspiciatis ducimus, repudiandae quia asperiores! Omnis sunt rem minus aliquid!
            </p>
            <h4 className='font-semibold mt-5'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, aspernatur?</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ipsa dicta praesentium cumque consequuntur magni sit officia dolorem natus tempore! Eum voluptatibus quae eos vitae ad nobis vel numquam odit ipsum, exercitationem totam harum reiciendis delectus ut laborum tenetur. Eveniet.</p>
        </div>

        {/* Posted by */}
        <div className='py-5 text-xl'>
        <div className='text-gray-600 border-b border-dashed w-1/3'>Created by -</div>
            <div className='flex gap-5 py-3'>
                <img src="/icon-logo.png" alt="" className='w-10 h-10' />
                <div>
                    <div className='font-semibold'>Creater Name</div>
                    <div className='text-xs text-gray-500'>11 Apr, 2025</div>
                </div>
            </div>
        </div>
        

        {/* Related bloge section */}
        <div>
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
        </div>



        {/* add a comment section */}
        <div className='mb-20'>
            <h2 className='text-3xl text-gray-500 border-b border-gray-300 mt-20 mb-10'>coments</h2>
            <div>
                <h4 className='font-semibold text-xl'>Leave a Comment</h4>
                <p className='text-gray-600 font-thin'>Your email address will not be published. Required fields are marked*</p>
                <form action="" className='flex flex-col gap-5 my-5 text-gray-600' >
                    <div>
                        <label htmlFor="comment">Comment*</label>
                        <textarea name="comment" id="comment" rows={3} className='w-full border border-gray-300 rounded-sm p-2'></textarea>
                    </div>
                    <div>
                        <label htmlFor="name">Name*</label>
                        <input type="text" id='name' className='w-full border border-gray-300 rounded-sm p-2' />
                    </div>
                    <div>
                        <label htmlFor="email">Email*</label>
                        <input type="email" id='email' className='w-full border border-gray-300 rounded-sm p-2' />
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

