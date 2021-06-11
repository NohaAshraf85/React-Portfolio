import React from "react";
import Hero from "./components/Hero/hero";
import Navbar from "./components/Navbar/navbar";
import Portfolio from "./components/Portfolio/portfolio";
import Technologies from "./components/Technologies/technologies";
import Contact from "./components/Contact/contact";
import Projects from "./components/Projects/projects";

function App() {
  return (

    <div className="app">

      <Navbar />
      
      <div className="sections">

      <Hero />
      <Portfolio />
      <Technologies />
      <Projects />
      <Contact />

      </div>
      
    </div>
    
  );
}

export default App;