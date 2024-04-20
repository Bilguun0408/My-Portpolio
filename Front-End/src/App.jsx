import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from './components/Hero/Hero';
import About from './components/About/About'
import Services from "./components/Services/services";
import MyWork from "./components/MyWork/MyWork";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/Footer";



function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
