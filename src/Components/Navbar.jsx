import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  // Function to check if the path is active
  const isActive = (path) =>
    location.pathname === path ? "nav-item nav-link active" : "nav-item nav-link";

  return (
    <div className="navbar-container">
      <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
        <Link to="/" className="navbar-brand text-secondary">
          <h1 className="display-4 text-uppercase">FRIGATE</h1>
        </Link>
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0 pe-3 border-right">
            <Link to="/" className={isActive("/")}>
              Home
            </Link>
            <Link to="/about" className={isActive("/about")}>
              About
            </Link>
            <Link to="/service" className={isActive("/service")}>
              Services
            </Link>
            <Link to="/price" className={isActive("/price")}>
              Prices
            </Link>
            <Link to="/project" className={isActive("/project")}>
              Projects
            </Link>
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Pages
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link to="/team" className="dropdown-item">
                    Meet The Team
                  </Link>
                </li>
                <li>
                  <Link to="/testimonial" className="dropdown-item">
                    Testimonial
                  </Link>
                </li>
              </ul>
            </div>
            <Link to="/contact" className={isActive("/contact")}>
              Contact
            </Link>
          </div>
          <div className="d-none d-lg-flex align-items-center ps-4">
            <i className="fa fa-2x fa-mobile-alt text-primary me-3"></i>
            <div>
              <h6 className="text-body text-uppercase mb-1">
                <small>Call Anytime</small>
              </h6>
              <h6 className="m-0">+91 9380488227</h6>
            </div>
          </div>
        </div>
      </nav>

      {/* CSS */}
      <style jsx>{`
        .navbar-container {
          width: 100%;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1050;
          background: white;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .navbar {
          width: 90%;
          margin: 0 auto; /* Center the navbar */
        }

        /* Add padding to body so content doesn't hide behind navbar */
        body {
          padding-top: 80px; /* Adjust based on navbar height */
        }
      `}</style>
    </div>
  );
};

export default Navbar;


