import React from "react";
import "./home.css";
import Hero from "../../components/Hero/hero";
import About from "../About/about";
import Technologies from "../../components/Technologies/technologies";
import Portfolio from "../../pages/Portfolio/portfolio";



function Home() {
    return (
        <div className="home">

        <Hero />
        <About />
        <Technologies />
        <Portfolio />

        </div>

    );
}

export default Home;