import React from "react";
import "../App.css";

import {  logo2 } from "../assets/images/images";

const Footer = () => {
  return (
    <footer className="footer-section">

      <div className="container">

        <div className="footer-box">

          {/* TOP */}
          <div className="footer-top">

            {/* LOGO */}
            <div className="footer-logo">

              <img src={logo2} alt="" />

              <h3>Positivus</h3>

            </div>

            {/* LINKS */}
            <ul className="footer-links">

              <li>About us</li>
              <li>Services</li>
              <li>Use Cases</li>
              <li>Pricing</li>
              <li>Blog</li>

            </ul>

            {/* SOCIAL */}
            <div className="footer-social">

              <button>
                <i className="bi bi-linkedin"></i>
              </button>

              <button>
                <i className="bi bi-facebook"></i>
              </button>

              <button>
                <i className="bi bi-twitter-x"></i>
              </button>

            </div>

          </div>

          {/* MIDDLE */}
          <div className="footer-middle">

            {/* CONTACT */}
            <div className="footer-contact">

              <h4>Contact us:</h4>

              <p>Email: info@positivus.com</p>

              <p>Phone: 555-567-8901</p>

              <p>
                Address: 1234 Main St <br />
                Moonstone City, Stardust State 12345
              </p>

            </div>

            {/* SUBSCRIBE */}
            <div className="footer-subscribe">

              <input
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