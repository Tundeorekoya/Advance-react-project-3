
import React from "react";
import '../../'
import "./Header.css";
import images from "../../constants/images";
import SubHeading from "../../components/SubHeading/SubHeading";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">

    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__heading-h1">The Key To Fine Dining</h1>
      <p className="p__text" style={{ margin: "2rem 0" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Voluptate obcaecati fugiat
        minus sequi quis ex ipsam, illum nobis esse accusantium corrupti
        officiis, quam modi, odio voluptatum magni eius aliquid iure.
      </p>
      
    <button type="button" className="custom__button">
      Explore More
    </button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="welcome" />
    </div>
  </div>
);

export default Header;
