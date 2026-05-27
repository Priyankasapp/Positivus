import React, { useEffect } from "react";
import "../App.css";
import ScrollReveal from "scrollreveal";

const CaseStudies = () => {

  useEffect(() => {

    ScrollReveal().reveal(".services-heading", {
      origin: "top",
      distance: "80px",
      duration: 1000,
      delay: 200,
    });

    ScrollReveal().reveal(".case-item", {
      origin: "top",
      distance: "80px",
      duration: 1000,
      interval: 200,
    });

  }, []);

  return (
    <section className="case-section">

      <div className="container">

        {/* HEADING */}
        <div className="services-heading">

          <h2>Case Studies</h2>

          <p>
            Explore Real-Life Examples of Our Proven Digital Marketing
            Success through Our Case Studies.
          </p>

        </div>

        {/* CASE BOX */}
        <div className="case-box">

          {/* ITEM 1 */}
          <div className="case-item">

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
          <div className="case-item">

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
          <div className="case-item border-0">

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