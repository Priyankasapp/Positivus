import React from "react";
import "../App.css";
import {
  SEO,
  ppcImage,
  aatImage,
  ccImage,
  emImage,
  smmImage,
} from "../assets/images/images";

const Services = () => {
  return (
    <section
      className="service-section"
      data-aos="fade-up"
    >

      <div className="container">

        {/* SECTION TITLE */}
        <div
          className="services-heading"
          data-aos="fade-down"
        >

          <h2>Services</h2>

          <p>
            At our digital marketing agency, we offer a range of services to
            help businesses grow and succeed online.
          </p>

        </div>

        {/* CARDS */}
        <div>

          {/* ROW 1 */}
          <div className="row g-4">

            {/* CARD 1 */}
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-delay="100"
            >

              <div className="service-card">

                <div className="service-content">

                  <h3>Search engine optimization</h3>

                  <button className="learn-btn">

                    <i
                      className="bi bi-arrow-up-right"
                      style={{ color: "#b9ff66" }}
                    ></i>

                    Learn more

                  </button>

                </div>

                <div
                  className="service-image"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                >

                  <img src={SEO} alt="" />

                </div>

              </div>

            </div>

            {/* CARD 2 */}
            <div
              className="col-lg-6"
              data-aos="fade-left"
              data-aos-delay="200"
            >

              <div className="service-card green-card">

                <div className="service-content">

                  <h3>Pay-per-Click advertising</h3>

                  <button className="learn-btn">

                    <i className="bi bi-arrow-up-right"></i>

                    Learn more

                  </button>

                </div>

                <div
                  className="service-image"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >

                  <img src={ppcImage} alt="" />

                </div>

              </div>

            </div>

          </div>

          {/* ROW 2 */}
          <div className="row g-4">

            {/* CARD 3 */}
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-delay="300"
            >

              <div className="service-card black-card">

                <div className="service-content">

                  <h3 style={{ background: "#f3f3f3" }}>
                    Social Media Marketing
                  </h3>

                  <button
                    className="learn-btn"
                    style={{ color: "#fff" }}
                  >

                    <i
                      className="bi bi-arrow-up-right"
                      style={{ background: "#fff", color: "#000" }}
                    ></i>

                    Learn more

                  </button>

                </div>

                <div
                  className="service-image"
                  data-aos="zoom-in"
                  data-aos-delay="500"
                >

                  <img src={smmImage} alt="" />

                </div>

              </div>

            </div>

            {/* CARD 4 */}
            <div
              className="col-lg-6"
              data-aos="fade-left"
              data-aos-delay="400"
            >

              <div className="service-card">

                <div className="service-content">

                  <h3>Email Marketing</h3>

                  <button className="learn-btn">

                    <i className="bi bi-arrow-up-right"></i>

                    Learn more

                  </button>

                </div>

                <div
                  className="service-image"
                  data-aos="zoom-in"
                  data-aos-delay="600"
                >

                  <img src={emImage} alt="" />

                </div>

              </div>

            </div>

          </div>

          {/* ROW 3 */}
          <div className="row g-4">

            {/* CARD 5 */}
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-delay="500"
            >

              <div className="service-card green-card">

                <div className="service-content">

                  <h3>Content Creation</h3>

                  <button className="learn-btn">

                    <i className="bi bi-arrow-up-right"></i>

                    Learn more

                  </button>

                </div>

                <div
                  className="service-image"
                  data-aos="zoom-in"
                  data-aos-delay="700"
                >

                  <img src={ccImage} alt="" />

                </div>

              </div>

            </div>

            {/* CARD 6 */}
            <div
              className="col-lg-6"
              data-aos="fade-left"
              data-aos-delay="600"
            >

              <div className="service-card black-card">

                <div className="service-content">

                  <h3>Analytics and Tracking</h3>

                  <button
                    className="learn-btn"
                    style={{ color: "#fff" }}
                  >

                    <i
                      className="bi bi-arrow-up-right"
                      style={{ background: "#fff", color: "#000" }}
                    ></i>

                    Learn more

                  </button>

                </div>

                <div
                  className="service-image"
                  data-aos="zoom-in"
                  data-aos-delay="800"
                >

                  <img src={aatImage} alt="" />

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Services;