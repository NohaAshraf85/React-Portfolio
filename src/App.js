import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Home from "./pages/Home/home";
import Hero from "./components/Hero/hero";
import About from "./pages/About/about";
import Technologies from "./components/Technologies/technologies";
import Portfolio from "./pages/Portfolio/portfolio";
import Contact from "./pages/About/about";
import "./app.css";

function App() {
  return (
    <Router>

    <div className="app d-flex flex-column h-100">

      <Navbar />
      <Switch>

      <Route path="/" exact component={ Home }/>
      <Route path="/about" component={ About }/>
      <Route path="/portfolio" component={ Portfolio }/>
      <Route path="/contact" component={ Contact }/>

      </Switch>


      <div className="sections">

      <Hero />
      <About />
      <Technologies />
      <Portfolio />
      <Contact />

      </div>
      
    </div>

    </Router>
    
  );
}

export default App;
