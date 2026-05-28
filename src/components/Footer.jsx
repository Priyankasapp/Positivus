import React, { useEffect } from "react";
import "../App.css";
import ScrollReveal from "scrollreveal";

import { logo2 } from "../assets/images/images";

const Footer = () => {

  useEffect(() => {

    ScrollReveal().reveal(".footer-logo", {
      origin: "bottom",
      distance: "80px",
      duration: 1000,
      delay: 200,
    });

    ScrollReveal().reveal(".footer-links li", {
      origin: "bottom",
      distance: "60px",
      duration: 1000,
      interval: 150,
    });

    ScrollReveal().reveal(".footer-social button", {
      origin: "bottom",
      distance: "50px",
      duration: 1000,
      interval: 150,
    });

    ScrollReveal().reveal(".footer-contact", {
      origin: "bottom",
      distance: "80px",
      duration: 1000,
      delay: 300,
    });

    ScrollReveal().reveal(".footer-subscribe", {
      origin: "bottom",
      distance: "80px",
      duration: 1000,
      delay: 400,
    });

    ScrollReveal().reveal(".footer-bottom", {
      origin: "bottom",
      distance: "60px",
      duration: 1000,
      delay: 500,
    });

  }, []);

  return (
    <footer className="footer-section">

      <div className="container">

        <div className="footer-box">

          {/* TOP */}
          <div className="footer-top">

            {/* LOGO */}
            <div className="footer-logo">

              <img
                src={logo2}
                alt="Positivus Logo"
              />

              <h2 className="footer-title">
                Positivus
              </h2>

            </div>

            {/* NAVIGATION */}
            <ul className="footer-links">

              <li>About us</li>
              <li>Services</li>
              <li>Use Cases</li>
              <li>Pricing</li>
              <li>Blog</li>

            </ul>

            {/* SOCIAL */}
            <div className="footer-social">

              <button aria-label="Visit Linkedin profile">
                <i
                  className="bi bi-linkedin"
                  aria-hidden="true"
                ></i>
              </button>

              <button aria-label="Visit Facebook profile">
                <i
                  className="bi bi-facebook"
                  aria-hidden="true"
                ></i>
              </button>

              <button aria-label="Visit Twitter profile">
                <i
                  className="bi bi-twitter-x"
                  aria-hidden="true"
                ></i>
              </button>

            </div>

          </div>

          {/* MIDDLE */}
          <div className="footer-middle">

            {/* CONTACT */}
            <div className="footer-contact">

              <h3>Contact us:</h3>

              <p>Email: info@positivus.com</p>

              <p>Phone: 555-567-8901</p>

              <p>
                Address: 1234 Main St <br />
                Moonstone City, Stardust State 12345
              </p>

            </div>

            {/* SUBSCRIBE */}
            <div className="footer-subscribe">

              <label
                htmlFor="subscribeEmail"
                className="visually-hidden"
              >
                Email Address
              </label>

              <input
                id="subscribeEmail"
                type="email"
                placeholder="Email"
              />

              <button>
                Subscribe to news
              </button>

            </div>

          </div>

          <hr />

          {/* BOTTOM */}
          <div className="footer-bottom">

            <p>
              © 2026 Positivus. All Rights Reserved.
            </p>

            <span>
              Privacy Policy
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;