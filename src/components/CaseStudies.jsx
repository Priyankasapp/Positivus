import React from "react";
import "../App.css";

const CaseStudies = () => {
  return (
    <section
      className="case-section"
      data-aos="fade-up"
    >

      <div className="container">

        {/* HEADING */}
        <div
          className="services-heading"
          data-aos="fade-down"
        >

          <h2>Case Studies</h2>

          <p>
            Explore Real-Life Examples of Our Proven Digital Marketing
            Success through Our Case Studies.
          </p>

        </div>

        {/* CASE BOX */}
        <div className="case-box">

          {/* ITEM 1 */}
          <div
            className="case-item"
            data-aos="fade-right"
            data-aos-delay="100"
          >

            <p>
              For a local restaurant, we implemented a targeted PPC
              campaign that resulted in a 50% increase in website
              traffic and a 25% increase in sales.
            </p>

            <button>
              Learn more
              <i className="bi bi-arrow-up-right"></i>
            </button>

          </div>

          {/* ITEM 2 */}
          <div
            className="case-item"
            data-aos="zoom-in"
            data-aos-delay="300"
          >

            <p>
              For a B2B software company, we developed an SEO strategy
              that resulted in a first page ranking for key keywords
              and a 200% increase in organic traffic.
            </p>

            <button>
              Learn more
              <i className="bi bi-arrow-up-right"></i>
            </button>

          </div>

          {/* ITEM 3 */}
          <div
            className="case-item border-0"
            data-aos="fade-left"
            data-aos-delay="500"
          >

            <p>
              For a national retail chain, we created a social media
              marketing campaign that increased followers by 25% and
              generated a 20% increase in online sales.
            </p>

            <button>
              Learn more
              <i className="bi bi-arrow-up-right"></i>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CaseStudies;