import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Home from "./pages/Home/home";
import About from "./pages/About/about";
import Portfolio from "./pages/Portfolio/portfolio";
import Contact from "./pages/Contact/contact.js";
import Footer from "./components/Footer/footer";
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

      

      
      <Footer />
      
      
      
    </div>

    </Router>
    
  );
}

export default App;
