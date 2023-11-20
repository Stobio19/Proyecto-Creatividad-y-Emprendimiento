import React from "react";
import "./AboutUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faExchangeAlt,
  faPercent,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

export const AboutUs = () => {
  return (
    <div className="about">
      <section className="__div-section-1">
        <div className="container-about-section-1">
          <h2>About Us</h2>
          <p>
            Dear customers, It is a pleasure to introduce you to our electronic
            products sales company. In our online store, we offer a wide variety
            of high-quality electronic products, from mobile phones to smart TVs
            and audio devices
          </p>
          </div>
      </section>
      <section className="__div-section-2">
        <div>
          <div>
            <h2 className="title-about">Our Services</h2>
            <p className="flex-container-about-section-2-span-1">
              At our company, we strive to offer the highest quality products at
              competitive prices.
            </p>
          </div>
        </div>
        <div className="__div_section-2-father-about">
          <div className="transition-section-2-about shadow">
            <div className="__div_section-2-child-about">
              <div>
                <FontAwesomeIcon
                  icon={faTruck}
                  className="about-icons-section-2"
                />
              </div>
              <h2 className="about-services-section-2">Delivery Services</h2>
            </div>
          </div>
          <div className="transition-section-2-about shadow">
            <div className="__div_section-2-child-about">
              <div>
                <FontAwesomeIcon
                  icon={faExchangeAlt}
                  className="about-icons-section-2"
                />
              </div>
              <h2 className="about-services-section-2 ">Shipping & Return</h2>
            </div>
          </div>
          <div className="transition-section-2-about shadow">
            <div className="__div_section-2-child-about">
              <div>
                <FontAwesomeIcon
                  icon={faPercent}
                  className="about-icons-section-2"
                />
              </div>
              <h2 className="about-services-section-2 ">Promotion</h2>
            </div>
          </div>
          <div className="transition-section-2-about shadow">
            <div className="__div_section-2-child-about">
              <div>
                <FontAwesomeIcon
                  icon={faUser}
                  className="about-icons-section-2"
                />
              </div>
              <h2 className="about-services-section-2 ">24 Hours Service</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
