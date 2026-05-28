import React, { useEffect } from "react";
import "../App.css";
import ScrollReveal from "scrollreveal";

import { illustration } from "../assets/images/images";

const Contact = () => {

  useEffect(() => {

    ScrollReveal().reveal(".services-heading", {
      origin: "bottom",
      distance: "80px",
      duration: 1000,
      delay: 200,
    });

    ScrollReveal().reveal(".contact-form", {
      origin: "bottom",
      distance: "80px",
      duration: 1000,
      delay: 300,
    });

    ScrollReveal().reveal(".contact-image", {
      origin: "bottom",
      distance: "100px",
      duration: 1200,
      delay: 400,
    });

  }, []);

  return (
    <section className="contact-section">

      <div className="container">

        {/* HEADING */}
        <div className="services-heading">

          <h2>Contact Us</h2>

          <p>
            Connect with Us: Let's Discuss Your Digital Marketing Needs.
          </p>

        </div>

        {/* CONTACT BOX */}
        <div className="contact-box">

          {/* FORM */}
          <div className="contact-form">

            {/* RADIO */}
            <fieldset className="contact-radio">

              <legend>Choose a contact purpose</legend>

              <label htmlFor="sayHi">

                <input
                  id="sayHi"
                  type="radio"
                  name="contact"
                />

                Say Hi

              </label>

              <label htmlFor="getQuote">

                <input
                  id="getQuote"
                  type="radio"
                  name="contact"
                />

                Get a Quote

              </label>

            </fieldset>

            {/* NAME */}
            <div className="form-group">

              <label htmlFor="name">
                Name
              </label>

              <input
                id="name"
                type="text"
                placeholder="Name"
              />

            </div>

            {/* EMAIL */}
            <div className="form-group">

              <label htmlFor="email">
                Email*
              </label>

              <input
                id="email"
                type="email"
                placeholder="Email"
              />

            </div>

            {/* MESSAGE */}
            <div className="form-group">

              <label htmlFor="message">
                Message*
              </label>

              <textarea
                id="message"
                rows="6"
                placeholder="Message"
              ></textarea>

            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="contact-btn"
            >
              Send Message
            </button>

          </div>

          {/* IMAGE */}
          <div className="contact-image">

            <img
              src={illustration}
              alt="Contact Illustration"
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;