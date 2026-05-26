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
    <section className="brands-section py-5">

      <div className="brands-slider">

        <div className="brands-track">

          {/* FIRST SET */}
          <img src={amazonLogo} alt="Amazon" className="brand-logo" />
          <img src={dribbbleLogo} alt="Dribbble" className="brand-logo" />
          <img src={hubspotLogo} alt="Hubspot" className="brand-logo" />
          <img src={notionLogo} alt="Notion" className="brand-logo" />
          <img src={netflixLogo} alt="Netflix" className="brand-logo" />
          <img src={zoomLogo} alt="Zoom" className="brand-logo" />

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