import React, { useEffect } from "react";
import "../App.css";
import ScrollReveal from "scrollreveal";

import { ctaImage, frame } from "../assets/images/images";

const Cta = () => {

  useEffect(() => {

    ScrollReveal().reveal(".cta-content", {
      origin: "top",
      distance: "80px",
      duration: 1000,
      delay: 200,
    });

    ScrollReveal().reveal(".cta-image", {
      origin: "top",
      distance: "100px",
      duration: 1200,
      delay: 400,
    });

  }, []);

  return (
    <section className="cta-section">

      <div className="container">

        <div className="cta-box">

          {/* LEFT CONTENT */}
          <div className="cta-content">

            <h2>
              Let’s make things happen
            </h2>

            <p>
              Contact us today to learn more about how our digital
              marketing services can help your business grow and
              succeed online.
            </p>

            <button className="cta-btn">
              Get your free proposal
            </button>

          </div>

          {/* RIGHT IMAGE */}
          <div className="cta-image">

            <img
              src={frame}
              alt="CTA Illustration"
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default Cta;