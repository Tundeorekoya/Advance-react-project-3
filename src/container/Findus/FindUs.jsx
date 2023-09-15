
import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
        {" "}
        Find Us
      </h1>
      <div className="app__wrapper-content">
        <p
          className="p__opensans"
          style={{ margin: "2rem 0", color: "#DCCA8a" }}
        >
          Wayne Close ,Beside Cash Street,CRA 456
        </p>
        <p
          style={{
            fontFamily: "Cormorant Upright",
            color: "#DCCA8A",
            margin: "1rem 0",
          }}
        >
          Opening Hours
        </p>
        <p className="p__opensans">Mon-Fri:10:00am -02:00</p>
        <p className="p__opensans">Sat-Sun:10:00am-03:00</p>
      </div>

      <button className="custom__button" style={{ margin: "2rem 0" }}>
        {" "}
        Visit Us
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus" />
    </div>
  </div>
);

export default FindUs;
