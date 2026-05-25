import React from 'react'
import "../App.css";
import {ctaImage} from "../assets/images/images"

const Cta = () => {
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
              src={ctaImage}
              alt="CTA Illustration"
            />

          </div>
            </div>
        </div>
    </section>
  )
}

export default Cta;
