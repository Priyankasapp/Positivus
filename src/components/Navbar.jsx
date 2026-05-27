import { Link } from "react-router-dom";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

import { logo } from "../assets/images/images";
import "../App.css";

function Navbar() {

  useEffect(() => {

    ScrollReveal().reveal(".navbar", {
      origin: "top",
      distance: "80px",
      duration: 1000,
      delay: 200,
      reset: false,
    });

    ScrollReveal().reveal(".nav-item", {
      origin: "top",
      distance: "50px",
      duration: 1000,
      interval: 150,
    });

  }, []);

  return (
    <nav className="navbar navbar-expand-lg py-4">

      <div className="container">

        {/* LOGO */}
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center gap-2"
        >
          <img
            src={logo}
            alt="Positivus Logo"
            className="logo-img"
          />

          <span className="fw-bold fs-3">
            Positivus
          </span>
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list fs-1"></i>
        </button>

        {/* NAVBAR CONTENT */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarContent"
        >

          <ul className="navbar-nav align-items-lg-center gap-lg-4">

            <li className="nav-item">
              <Link className="nav-link fw-medium" to="/">
                About us
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-medium" to="/">
                Services
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-medium" to="/">
                Use Cases
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-medium" to="/">
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-medium" to="/">
                Blog
              </Link>
            </li>

            <li className="nav-item ms-lg-3">
              <button className="btn btn-outline-dark rounded-4 px-4 py-3 fw-medium">
                Request a quote
              </button>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;