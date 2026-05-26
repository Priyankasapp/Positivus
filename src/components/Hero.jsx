import React from 'react'
import "../App.css"
import { heroIllustration } from "../assets/images/images";

const Hero = () => {
  return (

    <section
      className="hero-section py-5"
      data-aos="fade-up"
    >

      <div className="container">

        <div className="row align-items-center gy-5">

          {/* LEFT CONTENT */}
          <div
            className="col-lg-6"
            data-aos="fade-right"
            data-aos-delay="200"
          >

            <h1
              className="hero-title"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              Navigating the digital landscape for success
            </h1>

            <p
              className="hero-text"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Our digital marketing agency helps businesses grow and
              succeed online through a range of services including SEO,
              PPC, social media marketing, and content creation.
            </p>

            <button
              className="btn hero-btn"
              data-aos="zoom-in"
              data-aos-delay="700"
            >
              Book a consultation
            </button>

          </div>

          {/* RIGHT IMAGE */}
          <div
            className="col-lg-6 text-center"
            data-aos="fade-left"
            data-aos-delay="400"
          >

            <img
              src={heroIllustration}
              alt="Hero Illustration"
              className="img-fluid hero-img"
            />

          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero;