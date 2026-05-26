import React, { useEffect } from 'react';

import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Brands from '../components/Brands';
import Services from '../components/Services';
import Cta from '../components/Cta';
import CaseStudies from '../components/CaseStudies';
import Process from "../components/Process";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {

  useEffect(() => {

    AOS.init({
      duration: 1200,
      once: true,
    });

  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Brands />
      <Services />
      <Cta />
      <CaseStudies />
      <Process />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;