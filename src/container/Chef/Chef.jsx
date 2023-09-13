
import React from "react";
import { images } from "../../constants";
import { SubHeading } from "../../components";

import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_img" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="chef's word " />
      <h1 className="headtext__cormorant">What We Believe In </h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            consectetur excepturi ducimus, natus harum corporis laudantium dolor
            accusamus maiores sequi totam assumenda culpa accusantium
            reiciendis, obcaecati dignissimos quos nam laborum.
          </p>
        </div>
        <p className="p__opensans"></p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin luo</p>
        <p className="p__opensans">CHEF & Founder</p>
        <img src={images.sign} alt="" />
      </div>
    </div>
  </div>
);

export default Chef;
