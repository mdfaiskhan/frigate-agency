import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      {/* Footer Start */}
      <div
        className="container-fluid bg-dark text-white-50 py-5 px-4"
        style={{ marginTop: '20px' }}
      >
        <div className="row pt-3">
          {/* Brand & About Section */}
          <div className="col-lg-4 col-md-6 mb-4">
            <a href="/" className="navbar-brand text-decoration-none">
              <h1 className="m-0 text-white display-4">FRIGATE</h1>
            </a>
            <p className="mt-3">
              Empowering brands with creativity and strategy. Let’s bring your ideas to life with bold designs and impactful storytelling.
            </p>

            {/* Social Links */}
            <h6 className="text-uppercase text-white mt-4 mb-3">Follow Us</h6>
            <div className="d-flex flex-wrap gap-3">
              <a className="btn btn-primary social-icon" href="https://twitter.com">
                <FaTwitter />
              </a>
              <a className="btn btn-primary social-icon" href="https://www.facebook.com/profile.php?id=100091527078136">
                <FaFacebookF />
              </a>
              <a className="btn btn-primary social-icon" href="https://www.linkedin.com/company/frigate-agency/">
                <FaLinkedinIn />
              </a>
              <a className="btn btn-primary social-icon" href="https://www.instagram.com/frigateagency/">
                <FaInstagram />
              </a>
              <a className="btn btn-primary social-icon" href="#">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Get In Touch Section */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h4 className="text-uppercase text-white mb-3">Get In Touch</h4>
            <p className="d-flex align-items-center mb-2">
              <FaMapMarkerAlt className="text-primary mr-2" />
              <span>Frazer Town, Bengaluru.</span>
            </p>
            <p className="d-flex align-items-center mb-2">
              <FaPhoneAlt className="text-primary mr-2" />
              <span>+91 9380488227</span>
            </p>
            <p className="d-flex align-items-center">
              <FaEnvelope className="text-primary mr-2" />
              <span>frigateagency1@gmail.com</span>
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="col-lg-4 col-md-12 mb-4">
            <h4 className="text-uppercase text-white mb-3">Quick Links</h4>
            <div className="d-flex flex-column">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/service', label: 'Our Services' },
                { href: '/price', label: 'Pricing Plan' },
                { href: '/team', label: 'Meet The Team' },
                { href: '/contact', label: 'Contact Us' },
              ].map((link, index) => (
                <a key={index} className="quick-link" href={link.href}>
                  <i className="fa fa-angle-right text-white mr-2"></i>{link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="container-fluid py-3" style={{ background: '#111111' }}>
        <p className="mb-0 text-center text-white-50">
          &copy; 2025 <a href="/" className="text-white text-decoration-none">FRIGATE</a>. All Rights Reserved.
        </p>
      </div>

      {/* Mobile Styles */}
      <style jsx>{`
        .social-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          margin-right: 8px;
          text-decoration: none;
        }
        
        .quick-link {
          color: #adb5bd;
          margin-bottom: 8px;
          text-decoration: none;
        }

        .quick-link:hover {
          color: #ffffff;
        }

        @media (max-width: 768px) {
          h1 {
            font-size: 2rem;
          }
          .social-icon {
            width: 36px;
            height: 36px;
            font-size: 1rem;
            margin-right: 6px;
          }
          .quick-link {
            font-size: 0.9rem;
          }
          h4 {
            font-size: 1.2rem;
          }
          p {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
