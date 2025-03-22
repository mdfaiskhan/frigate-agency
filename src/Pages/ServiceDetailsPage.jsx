import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { serviceDetails } from '../data/serviceData';

const ServiceDetailsPage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = serviceDetails[serviceId];

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle invalid serviceId
  if (!service) {
    return (
      <div className="container text-center my-5">
        <h1 className="display-4 text-danger">404 - Service Not Found</h1>
        <p>Oops! The service you're looking for doesn't exist.</p>
        <button className="btn btn-warning mt-3" onClick={() => navigate("/service")}>
          Back to Services
        </button>
      </div>
    );
  }

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Service Details */}
      <div className="container my-5">
        {/* Service Title */}
        <h1 className="text-center display-4 mb-4" style={{ color: "#ffaa17", fontWeight: "bold" }}>
          {service.title}
        </h1>

        {/* Project Album */}
        {service.album && service.album.length > 0 && (
          <div className="album-container d-flex justify-content-center flex-wrap gap-3 mb-5">
            {service.album.map((image, index) => (
              <img key={index} src={image} alt={`Project ${index + 1}`} className="album-image" />
            ))}
          </div>
        )}

        {/* Service Description */}
        <p className="lead text-center" style={{ color: "#555" }}>
          {service.description}
        </p>

        {/* Service Price */}
        <h4 className="text-center my-4" style={{ color: "#222" }}>
          Price: <span style={{ color: "#ffaa17" }}>{service.price}</span>
        </h4>

        {/* Key Features */}
        {service.keyFeatures && service.keyFeatures.length > 0 && (
          <div className="key-features">
            <h3 className="text-center mb-3" style={{ color: "#222" }}>Key Features:</h3>
            <ul className="list-group">
              {service.keyFeatures.map((feature, index) => (
                <li key={index} className="list-group-item">✔ {feature}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Reviews */}
        {service.reviews && service.reviews.length > 0 && (
          <div className="reviews my-5">
            <h3 className="text-center mb-3" style={{ color: "#222" }}>What Our Clients Say</h3>
            <div className="review-list">
              {service.reviews.map((review, index) => (
                <blockquote key={index} className="blockquote text-center">
                  <p className="mb-0" style={{ fontStyle: "italic", color: "#555" }}>{review}</p>
                </blockquote>
              ))}
            </div>
          </div>
        )}

        {/* Back Button */}
        <div className="text-center mt-5">
          <button className="btn btn-dark" onClick={() => navigate("/service")}>
            Back to Services
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />

      {/* Styles */}
      <style jsx>{`
        .album-image {
          width: 250px;
          height: 200px;
          object-fit: cover;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          transition: transform 0.2s;
        }
        .album-image:hover {
          transform: scale(1.05);
        }
      `}</style>
    </>
  );
};

export default ServiceDetailsPage;
