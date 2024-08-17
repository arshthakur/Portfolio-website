import React from "react";
import "./Hero.css";
import { assets } from "../../assets/assets";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={assets.profile} alt="" />
      <h1>
        <span>I'm Harsh Thakur,</span> frontend developer based in India.
      </h1>
      <p>I am a frontend developer from Dehradun, Uttarakhand </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">my resume</div>
      </div>
    </div>
  );
};

export default Hero;
