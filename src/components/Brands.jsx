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
      <div className="container">

        <div className="row justify-content-center align-items-center gy-4">

          <div className="col-6 col-md-4 col-lg text-center">
            <img src={amazonLogo} alt="Amazon" className="brand-logo" />
          </div>

          <div className="col-6 col-md-4 col-lg text-center">
            <img src={dribbbleLogo} alt="Dribbble" className="brand-logo" />
          </div>

          <div className="col-6 col-md-4 col-lg text-center">
            <img src={hubspotLogo} alt="Hubspot" className="brand-logo" />
          </div>

          <div className="col-6 col-md-4 col-lg text-center">
            <img src={notionLogo} alt="Notion" className="brand-logo" />
          </div>

          <div className="col-6 col-md-4 col-lg text-center">
            <img src={netflixLogo} alt="Netflix" className="brand-logo" />
          </div>

          <div className="col-6 col-md-4 col-lg text-center">
            <img src={zoomLogo} alt="Zoom" className="brand-logo" />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Brands;