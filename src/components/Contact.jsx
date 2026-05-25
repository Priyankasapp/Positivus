import React from "react";
import "../App.css";

// import { contactImage } from "../assets/images/images";

const Contact = () => {
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
            <div className="form-group">

              <label>Name</label>

              <input
                type="text"
                placeholder="Name"
              />

            </div>

            {/* INPUT */}
            <div className="form-group">

              <label>Email*</label>

              <input
                type="email"
                placeholder="Email"
              />

            </div>

            {/* TEXTAREA */}
            <div className="form-group">

              <label>Message*</label>

              <textarea
                rows="6"
                placeholder="Message"
              ></textarea>

            </div>

            {/* BUTTON */}
            <button className="contact-btn">
              Send Message
            </button>

          </div>

          {/* IMAGE */}
          <div className="contact-image">
{/* 
            <img
              src={contactImage}
              alt=""
            /> */}

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;