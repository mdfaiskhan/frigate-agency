import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../Assests/team-1.png";
import img2 from "../Assests/team-2.png";
import img3 from "../Assests/team-3.png";
import img4 from "../Assests/team-4.jpg";

const Team = () => {
  const sliderRef = useRef(null);

  const teamMembers = [
    {
      name: "MD Absar",
      role: "CEO & Founder",
      image: img1,
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Shahid Alam",
      role: "Editor",
      image: img2,
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
    },
    {
      name: "Aniket",
      role: "Graphic designer",
      image: img3,
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com",
    },
    
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container text-center py-5 position-relative">
      <h2 className="mb-4">Meet Our Team</h2>

      {/* Left Button */}
      <button
        className="btn btn-dark position-absolute start-0 top-50 translate-middle-y"
        style={{ zIndex: 10 }}
        onClick={() => sliderRef.current.slickPrev()}
      >
        ❮
      </button>

      {/* Slider */}
      <Slider ref={sliderRef} {...settings}>
        {teamMembers.map((member, index) => (
          <div key={index} className="p-3">
            <div className="card border-0 shadow text-center">
              {/* Updated Image Section */}
              <div className="team-image">
                <img src={member.image} alt={member.name} className="img-fluid" />
              </div>
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <p className="card-text text-muted">{member.role}</p>
                <div className="d-flex justify-content-center">
                  <a href={member.twitter} target="_blank" rel="noopener noreferrer" className="btn btn-primary mx-1">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href={member.facebook} target="_blank" rel="noopener noreferrer" className="btn btn-primary mx-1">
                    <i className="fab fa-facebook"></i>
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-primary mx-1">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Right Button */}
      <button
        className="btn btn-dark position-absolute end-0 top-50 translate-middle-y"
        style={{ zIndex: 10 }}
        onClick={() => sliderRef.current.slickNext()}
      >
        ❯
      </button>

      {/* Image Design CSS */}
      <style jsx>{`
        .team-image {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 20px;
        }

        .img-fluid {
          width: 100%;
          max-width: 200px;
          object-fit: contain;
          border: 6px solid #212529;
          border-radius: 20px;
          padding: 10px;
          background: #fff;
          box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2), -5px -5px 15px rgba(255, 255, 255, 0.8);
          animation: float 3s ease-in-out infinite, zoomIn 0.8s ease;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes zoomIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Team;

