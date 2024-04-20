import React, { useState, useRef } from "react";
import "./Navbar.css";
import Logo from "../../assets/Logo.svg";
import underline from "../../img/Underline.svg";
import { Link } from "react-scroll";
import menu_open from "../../img/menu_open.svg";
import menu_close from "../../img/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  };

  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  };

  return (
    <div className="navbar">
      <img className="logo" src={Logo} alt="" />
      <img src={menu_open} width={60} onClick={openMenu} alt="" className="nav-mob-open" />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close}  onClick={closeMenu} alt="" className="nav-mob-close" />
        <li>
          <Link
            to="hero"
            className="link"
            href="#home"
            spy={true}
            offset={50}
            smooth={true}
            duration={500}
          >
            <p onClick={() => setMenu("hero")}>Home</p>
          </Link>
          {menu === "home" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <Link
            to="about"
            className="link"
            href="#about"
            spyt={true}
            offset={50}
            smooth={true}
            duration={500}
          >
            <p onClick={() => setMenu("about")}>About</p>
          </Link>
          {menu === "about" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <Link
            to="services"
            className="link"
            href="#services"
            spyt={true}
            offset={50}
            smooth={true}
            duration={500}
          >
            <p onClick={() => setMenu("services")}>Services</p>
          </Link>
          {menu === "services" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <Link
            to="work"
            className="link"
            href="#work"
            spyt={true}
            offset={50}
            smooth={true}
            duration={500}
          >
            <p onClick={() => setMenu("work")}>Portfolio</p>
          </Link>
          {menu === "work" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <Link
            to="contact"
            className="link"
            href="#contact"
            spy={true}
            offset={50}
            smooth={true}
            duration={500}
          >
            <p onClick={() => setMenu("contact")}>Contact</p>
          </Link>
          {menu === "contact" ? <img src={underline} alt="" /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">
        <Link to="contact" className="link" href="#contact">
          Connect With Me
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
