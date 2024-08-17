import React from "react";
import "./Footer.css";
import user_icon from "../../assets/user_icon.svg";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={assets.logo} alt="" />
          <p>
            I am a frontend developer from Dehradun, Uttarakhand. I am
            passionate about web development and committed to continuously
            learning and improving my craft.
          </p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>@2024 Harsh Thakur. All rights reserved</p>
        </div>
        <div className="footer-bottom-right">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
