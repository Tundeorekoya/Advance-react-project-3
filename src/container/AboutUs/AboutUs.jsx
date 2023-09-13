import React from "react";
import images from "../../constants/images";

import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding "
    id="#About"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, illo ad
          sequi voluptatum repudiandae cumque qui eum voluptates praesentium
          eaque beatae nisi repellat officiis debitis sapiente quae ut quas
          explicabo.
        </p>
        <button type="button" className="custom__button">
          {" "}
          know More
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, illo ad
          sequi voluptatum repudiandae cumque qui eum voluptates praesentium
          eaque beatae nisi repellat officiis debitis sapiente quae ut quas
          explicabo.
        </p>
        <button type="button" className="custom__button">
          {" "}
          know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
