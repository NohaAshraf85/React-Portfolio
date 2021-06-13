import React from "react";
import "./projects.css";

function Projects() {
    return(
        <div className="projects">

        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src="./assets/remoteRecruitHomepage.png" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
                <h5>FreeCruiter</h5>
                <p>Some representative placeholder content for the first slide.</p>
            </div>
            </div>
            <div className="carousel-item">
            <img src="./assets/bookHunt1.png" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
                <h5>Book Hunt</h5>
                <p>Some representative placeholder content for the second slide.</p>
            </div>
            </div>
            <div className="carousel-item">
            <img src="./assets/weatherDashboardHomepage.png" className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
                <h5>Weather dashboard</h5>
                <p>Some representative placeholder content for the third slide.</p>
            </div>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>

        </div>
    );
}

export default Projects;