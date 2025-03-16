import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import AboutPage from './Pages/AboutPage';
import ServicesPage from './Pages/ServicesPage';
import PricePage from './Pages/PricePage';
import ProjectPage from './Pages/ProjectPage';
import ContactPage from './Pages/ContactPage';
import TestimonialPage from './Pages/TestimonialPage';
import TeamPage from './Pages/TeamPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicesPage />} />
        <Route path="/price" element={<PricePage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/team" element={<TeamPage   />} />
        <Route path="/testimonial" element={<TestimonialPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

