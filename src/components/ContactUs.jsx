import React, { useState } from 'react';
import axios from 'axios'
import { toast } from 'react-toastify'
import Spinner from './Spinner';
 
export default function ContactUs() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [source, setSource] = useState("");


  const handleSubmit = async ()=>{
    try{
      setLoading(true);
      console.log(name)
      await axios.post(`${process.env.REACT_APP_SERVER_URL}/customer`, {name, email, message, phone, source});
      toast.success("message sent successfully.");
    }catch(err){
      console.log(err);
      toast.error("Something went wrong.")
    }finally{
      setLoading(false);
    }
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-400 via-pink-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Get in Touch With Us
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Have questions or need help? Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-xl shadow-lg text-white transform transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="opacity-90">support@nighthawk.com</p>
            </div>
            <div className="bg-gradient-to-br from-green-400 to-teal-500 p-6 rounded-xl shadow-lg text-white transform transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="opacity-90">+1 (800) 123-4567</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-6 rounded-xl shadow-lg text-white transform transition-all duration-300 hover:scale-105">
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className="opacity-90">123 Business Ave, Tech City, USA</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-200 space-y-6 transition-all duration-300 hover:shadow-2xl">
              
              {/* Name and Email */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full">
                  <label className="block text-slate-700 font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="w-full">
                  <label className="block text-slate-700 font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    required
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>

              {/* Phone and Source */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full">
                  <label className="block text-slate-700 font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Your Phone Number"
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="w-full">
                  <label className="block text-slate-700 font-medium mb-2">How did you hear about us?</label>
                  <select
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                  >
                    <option value="">Select source</option>
                    <option value="website">Website</option>
                    <option value="referral">Referral</option>
                    <option value="advertisement">Advertisement</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-slate-700 font-medium mb-2">Message</label>
                <textarea
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your Message"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-6 py-3 rounded-md font-semibold hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-1"
              >
                {loading ? <Spinner /> : "Send Message"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}