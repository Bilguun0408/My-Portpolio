import React from "react";
import './Footer.css'
import user from '../../img/user.svg'



const Footer = () => {
    return (
      <div className="footer">
        <div className="footer-top">
          <div className="footer-top-left">
            <img src="" alt="" />
            <p>
              Get updates on fun stuff you probably want to know about in your
              inbox.
            </p>
          </div>
          <div className="footer-top-right">
            <div className="footer-email-input">
              <img src={user} alt="" />
              <input type="email" placeholder="Enter your email" />
            </div>
            <div className="footer-subscribe">Subscribe</div>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <p className="footer-bottom-left">
            {" "}
            Copyright © 2021 Portfolio - All rights reserved || Designed By:
            Mandah Bilguun
          </p>
          <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect width me</p>
          </div>
        </div>
      </div>
    );
}
export default Footer