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
    >

      <div className="container">

        {/* HEADING */}
        <div
          className="services-heading"
          data-aos="fade-down"
        >

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

              <div
                className="col-lg-4"
                key={index}
                data-aos="zoom-in-up"
                data-aos-delay={index * 200}
              >

                <div className="testimonial-card">

                  {/* MESSAGE */}
                  <div className="testimonial-message">

                    <p>
                      "{item.text}"
                    </p>

                  </div>

                  {/* USER */}
                  <div className="testimonial-user">

                    <h4>{item.name}</h4>

                    <span>{item.role}</span>

                  </div>

                </div>

              </div>

            ))}

          </div>

          {/* NAVIGATION */}
          <div
            className="testimonial-navigation"
            data-aos="fade-up"
            data-aos-delay="700"
          >

            <button>
              <i className="bi bi-arrow-left"></i>
            </button>

            <div className="dots">

              <span className="active-dot"></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>

            </div>

            <button>
              <i className="bi bi-arrow-right"></i>
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Testimonials;