import React from "react";
import about from "../Assests/about.png";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="about-row">
          {/* Left Section (Image) */}
          <div className="about-image">
            <img className="about-img" src={about} alt="About Us" />
          </div>

          {/* Right Section (Text) */}
          <div className="about-text">
            <h1 className="about-title">Empowering Brands with Digital Excellence</h1>
            <h5 className="about-subtitle">
              Elevate your digital presence with creative strategies and data-driven results.
            </h5>
            <p className="about-description">
              At our digital marketing agency, we craft innovative solutions tailored to your business goals. From compelling storytelling to performance-driven campaigns, we ensure your brand stands out in the digital landscape.  
              <br /><br />
              Our team of experts dives deep into understanding your brand, analyzing market trends, and delivering personalized strategies that drive growth, engagement, and lasting impact. Let us help you write your digital success story.
            </p>
            <a href="/about" className="about-btn">Read More</a>
          </div>
        </div>
      </div>

      {/* CSS */}
      <style jsx>{`
        /* === Container === */
        .about-container {
          padding: 60px 20px;
          background: #f8f9fa;
          border-radius: 20px;
          margin: 40px auto;
          width: 90%;
          max-width: 1400px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.05);
          animation: fadeIn 1s ease-in-out;
        }

        /* === Row === */
        .about-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
        }

        /* === Image Section === */
        .about-image {
          flex: 1;
          display: flex;
          justify-content: center;
          animation: slideInFromLeft 1s ease-out;
        }

        .about-img {
          width: 100%;
          max-width: 400px;
          object-fit: contain;
          border-radius: 15px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          animation: float 3s ease-in-out infinite;
        }

        /* === Text Section === */
        .about-text {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: left;
          animation: slideInFromRight 1s ease-out;
          gap: 20px;
        }

        .about-title {
          font-size: 3rem;
          font-weight: bold;
          color: #212529;
          margin-bottom: 10px;
          line-height: 1.2;
        }

        .about-subtitle {
          font-size: 1.2rem;
          color: #ffaa17;
          margin-bottom: 15px;
        }

        .about-description {
          font-size: 1rem;
          color: #555;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        /* === CTA Button === */
        .about-btn {
          display: inline-block;
          padding: 12px 30px;
          font-size: 1.1rem;
          text-transform: uppercase;
          background: #212529;
          color: #fff;
          border-radius: 5px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          text-decoration: none;
          animation: pulse 1.5s infinite;
          width: fit-content;
        }

        .about-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          animation: none;
        }

        /* === Animations === */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInFromLeft {
          from { transform: translateX(-50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes slideInFromRight {
          from { transform: translateX(50px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }

        /* === Responsiveness === */
        @media (max-width: 1024px) {
          .about-row {
            flex-direction: column;
            text-align: center;
          }

          .about-title {
            font-size: 2.5rem;
          }

          .about-subtitle {
            font-size: 1.1rem;
          }

          .about-description {
            font-size: 1rem;
          }

          .about-img {
            max-width: 300px;
          }

          .about-btn {
            margin: 0 auto;
            padding: 10px 25px;
            font-size: 1rem;
          }
        }

        @media (max-width: 768px) {
          .about-title {
            font-size: 2rem;
          }

          .about-subtitle {
            font-size: 1rem;
          }

          .about-description {
            font-size: 0.95rem;
          }

          .about-btn {
            padding: 10px 20px;
            font-size: 0.9rem;
          }

          .about-img {
            max-width: 250px;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
