import React from "react";
import "../App.css";

// import { contactImage } from "../assets/images/images";

const Contact = () => {
  return (
    <section
      className="contact-section"
      data-aos="fade-up"
    >

      <div className="container">

        {/* HEADING */}
        <div
          className="services-heading"
          data-aos="fade-down"
        >

          <h2>Contact Us</h2>

          <p>
            Connect with Us: Let's Discuss Your Digital Marketing Needs.
          </p>

        </div>

        {/* CONTACT BOX */}
        <div className="contact-box">

          {/* FORM */}
          <div
            className="contact-form"
            data-aos="fade-right"
            data-aos-delay="200"
          >

            {/* RADIO */}
            <div className="contact-radio">

              <label>
                <input type="radio" name="contact" />
                Say Hi
              </label>

              <label>
                <input type="radio" name="contact" />
                Get a Quote
              </label>

            </div>

            {/* INPUT */}
            <div
              className="form-group"
              data-aos="fade-up"
              data-aos-delay="300"
            >

              <label>Name</label>

              <input
                type="text"
                placeholder="Name"
              />

            </div>

            {/* INPUT */}
            <div
              className="form-group"
              data-aos="fade-up"
              data-aos-delay="400"
            >

              <label>Email*</label>

              <input
                type="email"
                placeholder="Email"
              />

            </div>

            {/* TEXTAREA */}
            <div
              className="form-group"
              data-aos="fade-up"
              data-aos-delay="500"
            >

              <label>Message*</label>

              <textarea
                rows="6"
                placeholder="Message"
              ></textarea>

            </div>

            {/* BUTTON */}
            <button
              className="contact-btn"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              Send Message
            </button>

          </div>

          {/* IMAGE */}
          <div
            className="contact-image"
            data-aos="fade-left"
            data-aos-delay="400"
          >

            {/*
            <img
              src={contactImage}
              alt=""
            />
            */}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;