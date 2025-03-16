import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <div className="container py-5">
      {/* Page Title */}
      <div className="text-center mb-4 d-flex flex-column gap-3">
        <h1 className="text-uppercase font-weight-bold">Contact Us</h1>
        <p className="text-muted">
          Have questions, feedback, or want to work together? Drop us a message or reach out directly — we’d love to hear from you!
        </p>
      </div>

      {/* Contact Container */}
      <div className="row justify-content-center">
        {/* Contact Form */}
        <div className="col-lg-6 col-md-8 mb-4">
          <div
            className="contact-form rounded p-4"
            style={{
              backgroundColor: '#FFAA17',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h4 className="mb-4 text-center">Send Us a Message</h4>
            <form name="sentMessage" id="contactForm" noValidate="novalidate">
              {/* Name and Email Fields */}
              <div className="form-row mb-3">
                <div className="control-group mb-3">
                  <input
                    type="text"
                    className="form-control bg-light border-0 p-2"
                    id="name"
                    placeholder="Your Name"
                    required="required"
                    style={{ fontSize: '0.9rem' }}
                  />
                </div>
                <div className="control-group">
                  <input
                    type="email"
                    className="form-control bg-light border-0 p-2"
                    id="email"
                    placeholder="Your Email"
                    required="required"
                    style={{ fontSize: '0.9rem' }}
                  />
                </div>
              </div>

              {/* Subject Field */}
              <div className="control-group mb-3">
                <input
                  type="text"
                  className="form-control bg-light border-0 p-3"
                  id="subject"
                  placeholder="Subject"
                  required="required"
                />
              </div>

              {/* Message Field */}
              <div className="control-group mb-3">
                <textarea
                  className="form-control bg-light border-0 p-3"
                  rows="5"
                  id="message"
                  placeholder="Your Message"
                  required="required"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  className="btn text-uppercase py-2 px-4"
                  type="submit"
                  id="sendMessageButton"
                  style={{
                    backgroundColor: 'white',
                    color: 'black',
                    border: '1px solid black',
                    transition: '0.2s ease',
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = 'black';
                    e.target.style.color = 'white';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = 'white';
                    e.target.style.color = 'black';
                  }}
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Contact Info */}
        <div className="col-lg-4 col-md-8">
          <div
            className="contact-info bg-light p-4 rounded text-center"
            style={{
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            }}
          >
            <h4 className="mb-4">Contact Information</h4>

            {/* Location */}
            <div className="mb-3 d-flex align-items-center justify-content-center">
              <FaMapMarkerAlt className="text-primary mr-2" />
              <span>Frazer Town, Bengaluru, India</span>
            </div>

            {/* Phone */}
            <div className="mb-3 d-flex align-items-center justify-content-center">
              <FaPhoneAlt className="text-primary mr-2" />
              <span>+91 93804 88227</span>
            </div>

            {/* Email */}
            <div className="d-flex align-items-center justify-content-center">
              <FaEnvelope className="text-primary mr-2" />
              <span>frigateagency1@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .contact-form,
          .contact-info {
            padding: 20px;
          }

          .form-row {
            display: flex;
            flex-direction: column;
            gap: 10px;
          }

          input,
          textarea {
            font-size: 0.9rem;
          }

          .contact-info div {
            flex-direction: row;
            gap: 8px;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactSection;
