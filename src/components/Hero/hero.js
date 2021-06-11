import React from "react";
import "./hero.css"

function Hero() {
    return(
        <div className="container-fluid hero" style={{
            backgroundImage: `url(${process.env.PUBLIC_URL
                + "/assets/pexels-ken-tomita-389818.jpg"})`
          }}  >
            <div className="row text-center introText">
            <div className="col-4-lg col-12-md col-12-sm col-12-xs">
            <h2>Welcome to my portfolio</h2>
            <p>My name is Noha, I am an aspiring front-end developer</p>
              <a className="btn btn-light px-5 viewMyWorkBtn" href="#sampleWork">View My Work</a>
            </div>
        </div>
        </div>
    );
}

export default Hero;