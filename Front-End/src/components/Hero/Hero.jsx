import React from "react";
import './Hero.css'
import profile from '../../img/nuurzur.svg'
import { Link } from "react-scroll";

const Hero = () => {

    return (
      <div id="home" className="hero">
        <img src={profile} alt="" />
        <h1>
          {" "}
          <span>I'm Bilguun,fullstack developer </span>{" "}
        </h1>
        {/* <p>I am frontend developer from Mongolia</p> */}
        <div className="hero-action">
          <div className="hero-connect">
            <Link
              to="contact"
              className="link"
              href="#contact"
              offset={50}
              smooth={true}
              duration={500}
            >
             Connect With Me
            </Link>
          </div>
          <div className="hero-resume">My CV</div>
        </div>
      </div>
    );
}
export default Hero