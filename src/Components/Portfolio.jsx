import React, { useState } from "react";
import port1 from "../Assests/portfolio-1.jpg";
import port2 from "../Assests/portfolio-2.jpg";
import port3 from "../Assests/portfolio-3.jpg";
import port4 from "../Assests/portfolio-4.jpg";
import port5 from "../Assests/portfolio-5.jpg";
import port6 from "../Assests/portfolio-6.jpg";

const portfolioItems = [
  { id: 1, image: port1, category: "first" },
  { id: 2, image: port2, category: "second" },
  { id: 3, image: port3, category: "first" },
  { id: 4, image: port4, category: "second" },
  { id: 5, image: port5, category: "first" },
  { id: 6, image: port6, category: "second" },
];

const Portfolio = () => {
  const [filter, setFilter] = useState("*");

  const filteredItems =
    filter === "*"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  return (
    <div className="container-fluid py-5">
      <div className="container pt-5 pb-3">
        <h1 className="display-4 text-uppercase text-center mb-5">Visit Our Projects</h1>

        <div className="row">
          <div className="col-12 text-center mb-2">
            <ul className="list-inline mb-4">
              <li
                className={`btn btn-outline-dark text-uppercase py-2 px-4 ${filter === "*" ? "active" : ""}`}
                onClick={() => setFilter("*")}
              >
                <i className="fa fa-star text-primary mr-2"></i>All
              </li>
              <li
                className={`btn btn-outline-dark text-uppercase py-2 px-4 ${filter === "first" ? "active" : ""}`}
                onClick={() => setFilter("first")}
              >
                <i className="fa fa-laptop-code text-primary mr-2"></i>Design
              </li>
              <li
                className={`btn btn-outline-dark text-uppercase py-2 px-4 ${filter === "second" ? "active" : ""}`}
                onClick={() => setFilter("second")}
              >
                <i className="fa fa-mobile-alt text-primary mr-2"></i>Development
              </li>
            </ul>
          </div>
        </div>

        <div className="row portfolio-container">
          {filteredItems.map((item) => (
            <div key={item.id} className={`col-lg-4 col-md-6 mb-4 portfolio-item ${item.category}`}>
              <div className="position-relative rounded overflow-hidden mb-2">
                <img className="img-fluid w-100" src={item.image} alt={`Portfolio ${item.id}`} />
                <div className="portfolio-btn d-flex align-items-center justify-content-center">
                  <a href={item.image} data-lightbox="portfolio">
                    <i className="fa fa-4x fa-plus text-primary"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Portfolio;

