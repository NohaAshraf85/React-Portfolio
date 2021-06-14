import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Hero from "./components/Hero/hero";
import Navbar from "./components/Navbar/navbar";
import Portfolio from "./components/Portfolio/portfolio";
import Technologies from "./components/Technologies/technologies";
import Contact from "./components/Contact/contact";
import Projects from "./components/Projects/projects";
import Aboutme from "./components/AboutMe/aboutMe";
import "./app.css";

function App() {
  return (
    <Router>

    <div className="app d-flex flex-column h-100">

      <Navbar />

      <div className="sections">

      <Hero />
      <Aboutme />
      <Portfolio />
      <Technologies />
      <Projects />
      <Contact />

      </div>
      
    </div>

    </Router>
    
  );
}

export default App;
