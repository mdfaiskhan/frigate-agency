import img from "../Assests/head.png"
import React from "react";

const Header = () => {
  return (
    <div className="header-container">
      {/* Image Section */}
      <div className="header-image">
        <img src={img} alt="Digital Marketing" className="img-fluid" />
      </div>

      {/* Content Section */}
      <div className="header-content">
        <h1 className="header-title">Best Digital Marketing Agency</h1>
        <p className="header-text">
          Transform your brand’s online presence with cutting-edge strategies and creative solutions tailored just for you.
        </p>
        <a href="/about" className="header-btn">Learn More</a>
      </div>

      {/* CSS */}
      <style jsx>{`
        /* === Header Container === */
        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100vh;
          max-height: 700px;
          padding: 40px;
          background: #ffaa17;
          border-radius: 20px;
          margin: 40px auto;
          width: 90%;
          max-width: 1400px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
          animation: fadeIn 1s ease-in-out;
          overflow: hidden;
          gap: 40px;
        }

        /* === Image Section === */
        .header-image {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          animation: slideInFromLeft 1s ease-out;
        }

        /* Scoped img-fluid - Only affects this page */
        .header-container .img-fluid {
          width: 100%;
          max-width: 300px;
          object-fit: contain;
          border-radius: 20px;
          box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2), -5px -5px 15px rgba(255, 255, 255, 0.8);
          animation: float 3s ease-in-out infinite, zoomIn 0.8s ease;
        }

        /* === Content Section === */
        .header-content {
          flex: 1;
          color: #212529;
          display: flex;
          flex-direction: column;
          justify-content: center;
          text-align: left;
          max-width: 500px;
          animation: slideInFromRight 1s ease-out;
          gap: 20px;
        }

        .header-title {
          font-size: 3.2rem;
          font-weight: bold;
          text-transform: uppercase;
          line-height: 1.2;
          margin-bottom: 10px;
        }

        .header-text {
          font-size: 1.2rem;
          line-height: 1.6;
        }

        /* === CTA Button === */
        .header-btn {
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
          margin: 0 auto;
        }

        .header-btn:hover {
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

        @keyframes zoomIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
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

        /* === Laptop Screens === */
        @media (max-width: 1024px) {
          .header-container {
            flex-direction: column;
            height: auto;
            padding: 30px;
            gap: 20px;
          }

          .header-content {
            max-width: 100%;
            text-align: center;
            padding: 20px;
            gap: 15px;
          }

          .header-title {
            font-size: 2.8rem;
          }

          .header-text {
            font-size: 1.1rem;
          }

          .header-btn {
            padding: 10px 25px;
            font-size: 1rem;
          }

          .header-container .img-fluid {
            max-width: 250px;
          }
        }

        /* === Mobile Responsiveness === */
        @media (max-width: 768px) {
          .header-title {
            font-size: 2rem;
          }

          .header-text {
            font-size: 1rem;
          }

          .header-btn {
            padding: 10px 20px;
            font-size: 0.9rem;
          }

          .header-container .img-fluid {
            max-width: 220px;
          }
        }
      `}</style>
    </div>
  );
};

export default Header;
