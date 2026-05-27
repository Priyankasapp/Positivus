import React, { useEffect } from "react";
import "../App.css";
import ScrollReveal from "scrollreveal";

const Testimonials = () => {

  useEffect(() => {

    ScrollReveal().reveal(".services-heading", {
      origin: "top",
      distance: "80px",
      duration: 1000,
      delay: 200,
    });

    ScrollReveal().reveal(".testimonial-card", {
      origin: "top",
      distance: "80px",
      duration: 1000,
      interval: 200,
    });

    ScrollReveal().reveal(".testimonial-navigation", {
      origin: "top",
      distance: "60px",
      duration: 1000,
      delay: 300,
    });

  }, []);

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
    <section className="testimonial-section">

      <div className="container">

        {/* HEADING */}
        <div className="services-heading">

          <h2>Testimonials</h2>

          <p>
            Hear from Our Satisfied Clients: Read Our Testimonials to
            Learn More about Our Digital Marketing Services.
          </p>

        </div>

        {/* TESTIMONIAL BOX */}
        <div className="testimonial-box">

          <div className="row g-4">

            {testimonials.map((item, index) => (

              <div className="col-lg-4" key={index}>

                <div className="testimonial-card">

                  {/* MESSAGE */}
                  <div className="testimonial-message">

                    <p>
                      "{item.text}"
                    </p>

                  </div>

                  {/* USER */}
                  <div className="testimonial-user">

                    <h3>{item.name}</h3>

                    <span>{item.role}</span>

                  </div>

                </div>

              </div>

            ))}

          </div>

          {/* NAVIGATION */}
          <div className="testimonial-navigation">

            <button aria-label="Go to previous section">
              <i
                className="bi bi-arrow-left"
                aria-hidden="true"
              ></i>
            </button>

            <div className="dots">

              <span className="active-dot"></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>

            </div>

            <button aria-label="Go to next section">
              <i
                className="bi bi-arrow-right"
                aria-hidden="true"
              ></i>
            </button>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Testimonials;