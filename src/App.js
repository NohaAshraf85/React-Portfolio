import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Home from "./pages/Home/home";
import Hero from "./components/Hero/hero";
import About from "./pages/About/about";
import Technologies from "./components/Technologies/technologies";
import Portfolio from "./pages/Portfolio/portfolio";
import Contact from "./pages/About/about";
import card from "./components/Card/card";
import Footer from "./components/Footer/footer";
import "./app.css";

const projects = [
  {
      id: 1,
      img: "/assets/remoteRecruitHomepage.png",
      name: "remoteRecruit",
      description: "A website that connects freelancers and employers",
      github: "https://github.com/lbburnsy/remoteRecruit",
      deployment: "https://remote-recruit.herokuapp.com/"
  },
  {
      id: 2,
      img: "/assets/bookHunt1.png",
      name: "Book Hunt",
      description: "Meet your next read and see NYT Best Sellers",
      github: "https://github.com/srad25/Book-Hunt",
      deployment: "https://srad25.github.io/Book-Hunt/"
  },
  {
      id: 3,
      img: "/assets/teamProfileGenerator.png",
      name: "Team Profile Generator",
      description: "A CLI app that creates a webpage display team basic information",
      github: "https://github.com/NohaAshraf85/Team-Profile-Generator",
      deployment: "https://drive.google.com/file/d/1tDyKklkteBCH80E-3qU6Nj2TzF0YdVxU/view"
  },
  {
      id: 4,
      img: "/assets/weatherDashboardHomepage.png",
      name: "Weather Dashboard",
      description: "creative design for a weather dashboard for the USA States",
      github: "https://github.com/NohaAshraf85/Weather-Dashboard",
      deployment: "https://nohaashraf85.github.io/Weather-Dashboard/"
  },
  {
      id: 5,
      img: "/assets/currentTimeEntry1.png",
      name: "Day Planner",
      description: "Day Planner, 9-5 timeblocks, current, present and future tasks",
      github: "https://github.com/NohaAshraf85/Code-Quiz-Application",
      deployment: "https://github.com/NohaAshraf85/Day-Planner"
  },
  {
      id: 6,
      img: "/assets/codeQuiz.png",
      name: "Code Quiz",
      description: "A Code Quiz Application with timers and scores",
      github: "https://github.com/NohaAshraf85/Code-Quiz-Application",
      deployment: "https://nohaashraf85.github.io/Code-Quiz-Application/"
  }
]

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
      <Footer />
      
      </div>
      
    </div>

    </Router>
    
  );
}

export default App;
