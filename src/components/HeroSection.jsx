import React from 'react'
import { Link } from 'react-router-dom'

export default function HeroSection({title, description, btnText, btnUrl="#", bgImg, imgUrl, bgColor="bg-gradient-to-r from-gray-800 via-gray-700 to-transparent"}) {
  return (
      <section className="relative bg-cover bg-center h-96 md:h-[400px] flex justify-center items-center">
        <div
          className={`${bgColor} absolute inset-0`}
        />
        
        { 
            bgImg ? 
            <img
                src={bgImg}
                alt="HeroImage"
                className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
            : null
        }
        
        <div className="relative max-w-5xl mx-auto px-4 py-16 flex flex-col items-center md:flex-row justify-between">
          <div className={ imgUrl ? "text-white space-y-4" : "text-white space-y-4 text-center" }>
            <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
            <p className="text-xl text-gray-300">
              {description}
            </p>
            {
                btnText ?
                <div className='my-5' >
                  <Link to={btnUrl} >
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-md transition">
                        {btnText} 
                    </button>
                  </Link>
                </div>
                : null
            }
          </div>
          {
            imgUrl ?
                <div className="md:w-1/2 hidden md:block">
                    <img
                    src={imgUrl} 
                    alt="Leaf Icon"
                    className="w-48 h-48 object-cover rounded-md"
                    />
                </div>
            : null
          }
          
        </div>
      </section>
  )
}
