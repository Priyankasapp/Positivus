import React, { useEffect } from "react";
import "../App.css";
import { heroIllustration } from "../assets/images/images";
import ScrollReveal from "scrollreveal";

const Hero = () => {

  useEffect(() => {

    ScrollReveal().reveal(".hero-title", {
      origin: "top",
      distance: "80px",
      duration: 1000,
      delay: 200,
    });

    ScrollReveal().reveal(".hero-text", {
      origin: "top",
      distance: "60px",
      duration: 1000,
      delay: 400,
    });

    ScrollReveal().reveal(".hero-btn", {
      origin: "top",
      distance: "40px",
      duration: 1000,
      delay: 600,
    });

    ScrollReveal().reveal(".hero-img", {
      origin: "top",
      distance: "100px",
      duration: 1200,
      delay: 300,
    });

  }, []);

  return (
    <section className="hero-section py-5">

      <div className="container">

        <div className="row align-items-center gy-5">

          {/* LEFT CONTENT */}
          <div className="col-lg-6">

            <h1 className="hero-title">
              Navigating the digital landscape for success
            </h1>

            <p className="hero-text">
              Our digital marketing agency helps businesses grow and
              succeed online through a range of services including SEO,
              PPC, social media marketing, and content creation.
            </p>

            <button className="btn hero-btn">
              Book a consultation
            </button>

          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 text-center">

            <img
              src={heroIllustration}
              alt="Hero Illustration"
              className="img-fluid hero-img"
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;