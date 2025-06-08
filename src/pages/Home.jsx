import Brands from "../components/Brands";
import Card from "../components/Card";
import Hero from "../components/Hero";
import ProductSection from "../components/ProductSection";
import Navbar from '../components/Navbar'
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import KeyFeatures from "../components/KeyFeatures";
import Technologies from "../components/Technologies";
import FeaturedCaseStudies from "../components/FeaturedCaseStudies";
import FAQSection from "../components/FAQSection";
import WhyChooseUs from "../components/WhyChooseUs";
import ContactUs from "../components/ContactUs";
import CustomerSuccessStories from "../components/CustomerSuccessStories";


export default function Home() {
  return (
    <>
    <Navbar />
    <div className="">
      <Hero />
      <KeyFeatures />
      <ProductSection />


      <div className="flex flex-col items-center text-center w-full max-w-4xl mx-auto px-4 py-12">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-blue-950 leading-tight">
          Empowering Digital Transformation with Nighthawk
        </h1>
        <p className="mt-6 text-gray-700 md:w-3/4">
          Nighthawk is your trusted partner in software products and services. We bring together cutting-edge technology, seamless integration, and reliable support to help your business soar to new heights.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto justify-center">
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-transform transform hover:scale-105">
            Start Free Trial
          </button>
          <button className="bg-white border-2 border-indigo-600 text-indigo-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-indigo-50 transition-transform transform hover:scale-105">
            Watch Demo
          </button>
        </div>
      </div>


      <Technologies />
      
      <CustomerSuccessStories />
      <Brands />
    
      <FeaturedCaseStudies />

       <Card 
          img={"/card-img.webp"}
          title={"Try Nighthawk for free. No credit card required, no software to install."} 
          btn_text1={"Start Free Trial"} 
          btn_text2={"Watch Demo"} 
      />


    <WhyChooseUs />
     

      <FAQSection />

     
      <div className="bg-gradient-to-tr from-blue-400 via-pink-50 to-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-purple-600">
            About Nighthawk
          </h2>

          {/* Paragraphs */}
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              At <span className="font-semibold text-blue-900">Nighthawk</span>, we are committed to delivering cutting-edge software solutions and exceptional services that empower businesses to thrive in the digital world.
            </p>
            <p>
              Our team of dedicated experts brings together creativity, technology, and strategic thinking to build products that solve real-world challenges — making innovation accessible and impactful for every client.
            </p>
            <p>
              With a passion for innovation and a focus on client success, we aim to bridge the gap between ideas and execution. From scalable software products to customized solutions, we help our partners stay ahead of the curve and unlock their true potential.
            </p>
            <p className="italic text-gray-600">
              Join us on our journey to transform businesses, one solution at a time.
            </p>
          </div>
        </div>
      </div>

      <ContactUs />


    </div>
    <Footer />
    </>
  );
}