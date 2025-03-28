import React from 'react'
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ContactSection from '../Components/ContactSection';

const ContactPage = () => {
  return (
    <div>
    <Navbar />
    {/* Page Header Section */}
    <div className="page-header container-fluid bg-primary d-flex flex-column align-items-center justify-content-center">
      <h1 className="display-3 text-uppercase mb-3">Contact</h1>
      <div className="d-inline-flex text-white">
        <h6 className="text-uppercase m-0">
          <a className="text-white" href="/">Home</a>
        </h6>
        <h6 className="m-0 px-3">/</h6>
        <h6 className="text-uppercase m-0">Contact</h6>
      </div>
    </div>
    
    {/* About Section */}
    <ContactSection />
    {/* Footer Section */}
    <Footer />
  </div>
  )
}

export default ContactPage