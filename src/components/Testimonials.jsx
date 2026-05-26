import React from "react";
import "../App.css";

const Testimonials = () => {

  const testimonials = [
    {
      text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads.",
      name: "John Smith",
      role: "Marketing Director",
    },

    {
      text: "The team is professional, responsive, and truly understands digital marketing strategies that work.",
      name: "Sarah Johnson",
      role: "Business Owner",
    },

    {
      text: "Their SEO and PPC campaigns helped us grow our online sales faster than expected.",
      name: "Michael Brown",
      role: "E-commerce Manager",
    },
  ];

  return (
    <section
      className="testimonial-section"
      data-aos="fade-up"
      aria-labelledby="testimonial-heading"
    >

      <div className="container">

        {/* HEADING */}
        <header
          className="services-heading"
          data-aos="fade-down"
        >

          <h2 id="testimonial-heading">
            Testimonials
          </h2>

          <p>
            Hear from Our Satisfied Clients: Read Our Testimonials to
            Learn More about Our Digital Marketing Services.
          </p>

        </header>

        {/* TESTIMONIAL BOX */}
        <div className="testimonial-box">

          <div
            className="row g-4"
            role="list"
            aria-label="Client testimonials"
          >

            {testimonials.map((item, index) => (

              <article
                className="col-lg-4"
                key={index}
                data-aos="zoom-in-up"
                data-aos-delay={index * 200}
                role="listitem"
              >

                <div className="testimonial-card">

                  {/* MESSAGE */}
                  <blockquote className="testimonial-message">

                    <p>
                      “{item.text}”
                    </p>

                  </blockquote>

                  {/* USER */}
                  <div className="testimonial-user">

                    <h3>{item.name}</h3>

                    <span>{item.role}</span>

                  </div>

                </div>

              </article>

            ))}

          </div>

          {/* NAVIGATION */}
          <nav
            className="testimonial-navigation"
            data-aos="fade-up"
            data-aos-delay="700"
            aria-label="Testimonials navigation"
          >

            {/* PREVIOUS */}
            <button
              type="button"
              aria-label="View previous testimonial"
            >
              <i
                className="bi bi-arrow-left"
                aria-hidden="true"
              ></i>
            </button>

            {/* DOTS */}
            <div
              className="dots"
              role="tablist"
              aria-label="Testimonial slides"
            >

              <button
                className="active-dot"
                aria-label="Go to testimonial 1"
                aria-selected="true"
                role="tab"
                type="button"
              ></button>

              <button
                aria-label="Go to testimonial 2"
                aria-selected="false"
                role="tab"
                type="button"
              ></button>

              <button
                aria-label="Go to testimonial 3"
                aria-selected="false"
                role="tab"
                type="button"
              ></button>

              <button
                aria-label="Go to testimonial 4"
                aria-selected="false"
                role="tab"
                type="button"
              ></button>

              <button
                aria-label="Go to testimonial 5"
                aria-selected="false"
                role="tab"
                type="button"
              ></button>

            </div>

            {/* NEXT */}
            <button
              type="button"
              aria-label="View next testimonial"
            >
              <i
                className="bi bi-arrow-right"
                aria-hidden="true"
              ></i>
            </button>

          </nav>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;