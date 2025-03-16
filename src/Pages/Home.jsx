import React from 'react'
import Header from '../Components/Header'
import About from '../Components/About'
import Services from '../Components/Services'
import Testimonial from '../Components/Testimonial'
import Team from '../Components/Team'
import PricingPlan from '../Components/PricingPlan'
import ContactSection from '../Components/ContactSection'
import Portfolio from '../Components/PricingPlan'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
        <Navbar />
        <Header />
        <About />
            <Services />
                <Portfolio />
                <Team />
                <Testimonial />
                <ContactSection />
                <Footer/>
    </>
  )
}

export default Home