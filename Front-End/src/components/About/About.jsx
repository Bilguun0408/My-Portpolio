import React from "react";
import "./About.css";
import Pro from '../../assets/pro.jpg'
import theme from '../../assets/theme.svg'

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={Pro} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>Hello my name is Bilguun, 22 years old software engineer</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, dolor.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "40%" }} />
            </div>
            <div className="about-skill">
              <p>Python</p>
              <hr style={{ width: "30%" }} />
            </div>
            <div className="about-skill">
              <p>Javascript</p>
              <hr style={{ width: "30%" }} />
            </div>
            <div className="about-skill">
              <p>React js</p>
              <hr style={{ width: "40%" }} />
            </div>
            <div className="about-skill">
              <p>Next js</p>
              <hr style={{ width: "20%" }} />
            </div>
            <div className="about-skill">
              <p>React Native</p>
              <hr style={{ width: "30%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achivements">
        <div className="about-achivement">
          <h1>1 year</h1>
          <p style={{color: 'gray'}}>EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>6</h1>
          <p style={{color: 'gray'}}>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achivement">
          <h1>hi</h1>
          <p style={{color: 'gray'}}>NO EXPERIENCE</p>
        </div>
      </div>
    </div>
  );
};
export default About;
