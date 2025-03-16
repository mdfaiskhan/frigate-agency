import React from 'react'
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Testimonial from '../Components/Testimonial';

const TestimonialPage = () => {
  return (
    <div>
    <Navbar />
    {/* Page Header Section */}
    <div className="page-header container-fluid bg-primary d-flex flex-column align-items-center justify-content-center">
      <h1 className="display-3 text-uppercase mb-3">Testimonial</h1>
      <div className="d-inline-flex text-white">
        <h6 className="text-uppercase m-0">
          <a className="text-white" href="/">Home</a>
        </h6>
        <h6 className="m-0 px-3">/</h6>
        <h6 className="text-uppercase m-0">Testimonial</h6>
      </div>
    </div>
    
    {/* About Section */}
    <Testimonial />
    {/* Footer Section */}
    <Footer />
  </div>
  )
}

export default TestimonialPage