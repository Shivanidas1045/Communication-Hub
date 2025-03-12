import React from "react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-dark py-4">
      <div className="container">
        <div className="row">
          
          <div className="col-md-4">
          <a class="navbar-brand" href="/"><span class="badge bg-primary text-black me-1 p-3 mb-3">Communication💬</span><span class="badge bg-white text-black p-3">Hub</span></a>

            <p>Connecting people of all faiths through events and community support.</p>
          </div>

        
          <div className="col-md-4">
            <h5> <span class='badge border fs-6'>Company</span></h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-dark text-decoration-none">Home</a></li>
              <li><a href="/event" className="text-dark text-decoration-none">Events</a></li>
              <li><a href="/about" className="text-dark text-decoration-none">About</a></li>
              <li><a href="/contact" className="text-dark text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-4">
            <h5> <span class='badge border fs-6 mb-7'>Follow us</span></h5>
            <a href="https://facebook.com" className="text-dark me-3">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://twitter.com" className="text-dark me-3">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="https://instagram.com" className="text-dark me-3">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="https://linkedin.com" className="text-dark">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>

        <hr className="bg-light" />
        <p className="text-center mb-0">&copy; 2025 Communication Hub. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
