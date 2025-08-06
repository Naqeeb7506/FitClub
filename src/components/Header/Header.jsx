import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand logo" href="#">
            <img src="image/navlogo.png" alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link active" aria-current="page" href="#home">
                Home
              </a>
              <a className="nav-link" href="#programs">
                Programs
              </a>
              <a className="nav-link" href="#reason">
                Why Us
              </a>
              <a className="nav-link" href="#plans">
                Plans
              </a>
              <a className="nav-link" href="#testimonials">
                Testimonials
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
