import "../App.css";

import {
  amazonLogo,
  dribbbleLogo,
  hubspotLogo,
  notionLogo,
  netflixLogo,
  zoomLogo,
} from "../assets/images/images";

function Brands() {
  return (

    <section
      className="brands-section py-5"
      data-aos="fade-up"
    >

      <div
        className="brands-slider"
        data-aos="zoom-in"
        data-aos-delay="200"
      >

        <div className="brands-track">

          {/* FIRST SET */}
          <img
            src={amazonLogo}
            alt="Amazon"
            className="brand-logo"
            data-aos="fade-right"
            data-aos-delay="100"
          />

          <img
            src={dribbbleLogo}
            alt="Dribbble"
            className="brand-logo"
            data-aos="fade-right"
            data-aos-delay="200"
          />

          <img
            src={hubspotLogo}
            alt="Hubspot"
            className="brand-logo"
            data-aos="fade-right"
            data-aos-delay="300"
          />

          <img
            src={notionLogo}
            alt="Notion"
            className="brand-logo"
            data-aos="fade-right"
            data-aos-delay="400"
          />

          <img
            src={netflixLogo}
            alt="Netflix"
            className="brand-logo"
            data-aos="fade-right"
            data-aos-delay="500"
          />

          <img
            src={zoomLogo}
            alt="Zoom"
            className="brand-logo"
            data-aos="fade-right"
            data-aos-delay="600"
          />

          {/* DUPLICATE SET FOR SMOOTH LOOP */}
          <img src={amazonLogo} alt="Amazon" className="brand-logo" />
          <img src={dribbbleLogo} alt="Dribbble" className="brand-logo" />
          <img src={hubspotLogo} alt="Hubspot" className="brand-logo" />
          <img src={notionLogo} alt="Notion" className="brand-logo" />
          <img src={netflixLogo} alt="Netflix" className="brand-logo" />
          <img src={zoomLogo} alt="Zoom" className="brand-logo" />

        </div>

      </div>

    </section>
  );
}

export default Brands;