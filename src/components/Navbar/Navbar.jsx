/** @format */

import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";

const Menu = () => (
  <>
    <li className="p__opensans">
      <a href="#home">Home</a>
    </li>
    <li className="p__opensans">
      <a href="#about">About</a>
    </li>
    <li className="p__opensans">
      <a href="#menu">Menu</a>
    </li>
    <li className="p__opensans">
      <a href="#award">Awards</a>
    </li>
    <li className="p__opensans">
      <a href="#contact">Contact</a>
    </li>
  </>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="App__navbar">
      <div className="App__navbar-logo">
        <img src={images.gericht} alt="app logo" />
      </div>
      <div className="App__navbar-links">
        <Menu />
      </div>
      <div className="App__navbar-login">
        <a href="#login" className="p__opensans">
          Login / Register
        </a>
        <div />
        <a href="/" className="p__opensans">
          Book Table
        </a>
      </div>
      <div className="App__navbar-smallScreen">
        <GiHamburgerMenu
          color="#ffff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="App__navbar-smallScreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              color="#ffff"
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <div className="App__navbar-smallScreen_links">
            <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Navbar;
