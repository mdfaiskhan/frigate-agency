import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../Assests/testimonial-1.png";
import img2 from "../Assests/testimonial-2.png";
import img3 from "../Assests/testimonial-3.png";
import img4 from "../Assests/testimonial-4.png";

const testimonials = [
  {
    name: "John Doe",
    profession: "Software Engineer",
    image: img1,
    feedback: "Tempor lorem dolor sea et ipsum, lorem justo kasd dolore vero eos.",
  },
  {
    name: "Emily Smith",
    profession: "Entrepreneur",
    image: img2,
    feedback: "Absolutely loved the service! The team was professional and quick.",
  },
  {
    name: "Michael Brown",
    profession: "Marketing Manager",
    image: img3,
    feedback: "The best experience I've had with a company. Would definitely recommend!",
  },
  {
    name: "Sophia Williams",
    profession: "UX Designer",
    image: img4,
    feedback: "The process was smooth and the end result was stunning!",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="container-fluid py-5">
      <div className="container py-5">
        <h1 className="display-4 text-uppercase text-center mb-5">
          Our Client's Say
        </h1>

        <Slider {...settings} className="testimonial-carousel">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-item position-relative text-center p-4">
              <div className="testimonial-image-wrapper mx-auto mb-4">
                <img className="testimonial-img img-fluid" src={testimonial.image} alt={testimonial.name} />
              </div>
              <h5 className="text-uppercase">{testimonial.name}</h5>
              <p className="text-muted">{testimonial.profession}</p>
              <p className="text-secondary">{testimonial.feedback}</p>
            </div>
          ))}
        </Slider>
      </div>

      {/* CSS */}
      <style jsx>{`
        .testimonial-image-wrapper {
          width: 150px;
          height: 150px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 4px solid #ffaa17;
          padding: 5px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          animation: zoomIn 0.8s ease;
          margin-bottom: 20px;
        }

        .testimonial-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 50%; /* Circular */
        }

        @keyframes zoomIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Testimonial;
