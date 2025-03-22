import React, { useState } from "react";
import port1 from "../Assests/portfolio-1.jpg";
import port2 from "../Assests/portfolio-2.jpg";
import port3 from "../Assests/portfolio-3.jpg";
import port4 from "../Assests/portfolio-4.jpg";
import port5 from "../Assests/portfolio-5.jpg";
import port6 from "../Assests/portfolio-6.jpg";

// Portfolio Data
const portfolioItems = [
  { id: 1, image: port1, category: "photos", title: "Beautiful Landscape" },
  { id: 2, image: port2, category: "videos", title: "Nature Documentary" },
  { id: 3, image: port3, category: "photos", title: "City Skyline" },
  { id: 4, image: port4, category: "videos", title: "Event Highlight" },
  { id: 5, image: port5, category: "photos", title: "Wildlife Capture" },
  { id: 6, image: port6, category: "etc", title: "Creative Concept" },
];

// Portfolio Component
const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const filteredItems =
    filter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <div className="portfolio-container">
      {/* Section Title */}
      <h1 className="portfolio-title">Our Portfolio</h1>
      <br></br>

      {/* Filter Buttons */}
      <div className="portfolio-filters">
        {["all", "photos", "videos", "etc"].map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="portfolio-grid">
        {filteredItems.map((item) => (
          <div key={item.id} className="portfolio-item">
            <img src={item.image} alt={item.title} className="portfolio-image" />
            <div className="overlay">
              <div className="overlay-text">{item.title}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Styles */}
      <style jsx>{`
        /* Container */
        .portfolio-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 60px 20px;
          text-align: center;
        }

        /* Title */
        .portfolio-title {
          font-size: 3.5rem;
          color: #1d3557;
          margin-bottom: 40px;
        }

        /* Filters */
        .portfolio-filters {
          margin-bottom: 40px;
          display: flex;
          justify-content: center;
          gap: 15px;
        }

        .filter-btn {
          background: transparent;
          color: #1d3557;
          border: 2px solid #1d3557;
          padding: 12px 24px;
          margin: 0;
          cursor: pointer;
          border-radius: 30px;
          font-size: 1rem;
          transition: all 0.2s;
        }

        .filter-btn.active,
        .filter-btn:hover {
          background: #1d3557;
          color: #fff;
        }

        /* Portfolio Grid */
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px; /* Space between items */
          padding-top: 20px;
        }

        /* Portfolio Item */
        .portfolio-item {
          position: relative;
          overflow: hidden;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .portfolio-image {
          width: 100%;
          height: 220px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .portfolio-item:hover .portfolio-image {
          transform: scale(1.05);
        }

        /* Overlay */
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .portfolio-item:hover .overlay {
          opacity: 1;
        }

        .overlay-text {
          color: #fff;
          font-size: 1.2rem;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .portfolio-title {
            font-size: 2.5rem;
          }
          .filter-btn {
            padding: 8px 16px;
            font-size: 0.9rem;
          }
          .portfolio-image {
            height: 180px;
          }
          .portfolio-grid {
            gap: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
