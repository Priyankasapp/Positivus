import { Link } from "react-router-dom";
import { logo } from "../assets/images/images";
import "../App.css";

function Navbar() {
  return (

    <nav
      className="navbar navbar-expand-lg py-4"
      data-aos="fade-down"
      data-aos-duration="1000"
    >

      <div className="container">

        {/* LOGO */}
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center gap-2"
          data-aos="zoom-in"
          data-aos-delay="200"
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
          data-aos="fade-left"
          data-aos-delay="300"
        >

          <i className="bi bi-list fs-1"></i>

        </button>

        {/* NAVBAR CONTENT */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarContent"
        >

          <ul className="navbar-nav align-items-lg-center gap-lg-4">

            <li
              className="nav-item"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <Link className="nav-link fw-medium" to="/">
                About us
              </Link>
            </li>

            <li
              className="nav-item"
              data-aos="fade-down"
              data-aos-delay="500"
            >
              <Link className="nav-link fw-medium" to="/">
                Services
              </Link>
            </li>

            <li
              className="nav-item"
              data-aos="fade-down"
              data-aos-delay="600"
            >
              <Link className="nav-link fw-medium" to="/">
                Use Cases
              </Link>
            </li>

            <li
              className="nav-item"
              data-aos="fade-down"
              data-aos-delay="700"
            >
              <Link className="nav-link fw-medium" to="/">
                Pricing
              </Link>
            </li>

            <li
              className="nav-item"
              data-aos="fade-down"
              data-aos-delay="800"
            >
              <Link className="nav-link fw-medium" to="/">
                Blog
              </Link>
            </li>

            {/* BUTTON */}
            <li
              className="nav-item ms-lg-3"
              data-aos="zoom-in"
              data-aos-delay="900"
            >

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