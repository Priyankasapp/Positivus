import React from "react";
import "../App.css";

import { logo2 } from "../assets/images/images";

const Footer = () => {
  return (
    <footer
      className="footer-section"
      data-aos="fade-up"
      aria-labelledby="footer-heading"
    >

      <div className="container">

        <div className="footer-box">

          {/* TOP */}
          <div className="footer-top">

            {/* LOGO */}
            <div
              className="footer-logo"
              data-aos="zoom-in"
              data-aos-delay="100"
            >

              <img
                src={logo2}
                alt="Positivus company logo"
              />

              <h2
                className="footer-title"
                id="footer-heading"
              >
                Positivus
              </h2>

            </div>

            {/* NAVIGATION */}
            <nav
              aria-label="Footer navigation"
              data-aos="fade-up"
              data-aos-delay="200"
            >

              <ul className="footer-links">

                <li>
                  <a href="#about">
                    About us
                  </a>
                </li>

                <li>
                  <a href="#services">
                    Services
                  </a>
                </li>

                <li>
                  <a href="#use-cases">
                    Use Cases
                  </a>
                </li>

                <li>
                  <a href="#pricing">
                    Pricing
                  </a>
                </li>

                <li>
                  <a href="#blog">
                    Blog
                  </a>
                </li>

              </ul>

            </nav>

            {/* SOCIAL */}
            <div
              className="footer-social"
              data-aos="fade-left"
              data-aos-delay="300"
              aria-label="Social media links"
            >

              <a
                href="/"
                aria-label="Visit our LinkedIn page"
                className="social-btn"
              >
                <i
                  className="bi bi-linkedin"
                  aria-hidden="true"
                ></i>
              </a>

              <a
                href="/"
                aria-label="Visit our Facebook page"
                className="social-btn"
              >
                <i
                  className="bi bi-facebook"
                  aria-hidden="true"
                ></i>
              </a>

              <a
                href="/"
                aria-label="Visit our Twitter page"
                className="social-btn"
              >
                <i
                  className="bi bi-twitter-x"
                  aria-hidden="true"
                ></i>
              </a>

            </div>

          </div>

          {/* MIDDLE */}
          <div className="footer-middle">

            {/* CONTACT */}
            <address
              className="footer-contact"
              data-aos="fade-right"
              data-aos-delay="400"
            >

              <h3>Contact us:</h3>

              <p>
                Email:
                <a href="mailto:info@positivus.com">
                  info@positivus.com
                </a>
              </p>

              <p>
                Phone:
                <a href="tel:5555678901">
                  555-567-8901
                </a>
              </p>

              <p>
                Address: 1234 Main St <br />
                Moonstone City, Stardust State 12345
              </p>

            </address>

            {/* SUBSCRIBE */}
            <form
              className="footer-subscribe"
              data-aos="fade-left"
              data-aos-delay="500"
            >

              <label
                htmlFor="subscribe-email"
                className="visually-hidden"
              >
                Enter your email
              </label>

              <input
                id="subscribe-email"
                type="email"
                placeholder="Email"
                autoComplete="email"
                required
                aria-required="true"
              />

              <button
                type="submit"
                aria-label="Subscribe to newsletter"
              >
                Subscribe to news
              </button>

            </form>

          </div>

          <hr
            data-aos="zoom-in"
            data-aos-delay="600"
          />

          {/* BOTTOM */}
          <div
            className="footer-bottom"
            data-aos="fade-up"
            data-aos-delay="700"
          >

            <p>
              © 2026 Positivus. All Rights Reserved.
            </p>

            <a href="/privacy-policy">
              Privacy Policy
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;