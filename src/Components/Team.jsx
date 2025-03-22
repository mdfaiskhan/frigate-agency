import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../Assests/team-1.png";
import img2 from "../Assests/team-2.png";
import img3 from "../Assests/team-3.png";

const Team = () => {
  const sliderRef = useRef(null);

  const teamMembers = [
    { name: "MD Absar", role: "CEO & Founder", image: img1 },
    { name: "Shahid Alam", role: "Editor", image: img2 },
    { name: "Aniket", role: "Graphic designer", image: img3 },
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
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
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
            {/* Team Member Card */}
            <div className="text-center">
              <img src={member.image} alt={member.name} className="team-image img-fluid mb-3" />
              <h5 className="mb-1">{member.name}</h5>
              <p className="text-muted">{member.role}</p>
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

      {/* CSS */}
      <style jsx>{`
        .team-image {
          width: 100%;
          max-width: 200px;
          object-fit: contain;
          border-radius: 20px;
          padding: 5px;
          background: #fff;
          box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
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


