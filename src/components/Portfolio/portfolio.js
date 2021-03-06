import React from "react";
// import Card from "../../components/Card/card";
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./portfolio.css";

function Portfolio({titleStyle}) {

    const projects = [
        {
            img: "/React-Portfolio/assets/ar-chive.png",
            name: "Ar-Chive",
            description: "A mobile first digital cookbook",
            github: "https://github.com/lbburnsy/cookbook",
            deployment: "https://infinite-citadel-91130.herokuapp.com/",
        },
        {
            img: "/React-Portfolio/assets/remoteRecruitHomepage.png",
            name: "remoteRecruit",
            description: "A website that connects freelancers and employers",
            github: "https://github.com/lbburnsy/remoteRecruit",
            deployment: "https://remote-recruit.herokuapp.com/",
        },
        {
            img: "/React-Portfolio/assets/bookHunt1.png",
            name: "Book Hunt",
            description: "Meet your next read and see NYT Best Sellers",
            github: "https://github.com/srad25/Book-Hunt",
            deployment: "https://srad25.github.io/Book-Hunt/",
        },
        {
            img: "/React-Portfolio/assets/teamProfileGenerator.png",
            name: "Team Profile Generator",
            description: "CLI app that creates a webpage displing team basic info",
            github: "https://github.com/NohaAshraf85/Team-Profile-Generator",
            deployment: "https://drive.google.com/file/d/1tDyKklkteBCH80E-3qU6Nj2TzF0YdVxU/view",
        },
        {
            img: "/React-Portfolio/assets/weatherDashboardHomepage.png",
            name: "Weather Dashboard",
            description: "creative design for a weather dashboard for the USA States",
            github: "https://github.com/NohaAshraf85/Weather-Dashboard",
            deployment: "https://nohaashraf85.github.io/Weather-Dashboard/",
        },
        {
            img: "/React-Portfolio/assets/currentTimeEntry1.png",
            name: "Day Planner",
            description: "Day Planner, 9-5 timeblocks, current, present and future tasks",
            github: "https://github.com/NohaAshraf85/Day-Planner",
            deployment: "https://nohaashraf85.github.io/Day-Planner/",
        },
        // {
        //     img: "/React-Portfolio/assets/codeQuiz.png",
        //     name: "Code Quiz",
        //     description: "A Code Quiz Application with timers and scores",
        //     github: "https://github.com/NohaAshraf85/Code-Quiz-Application",
        //     deployment: "https://nohaashraf85.github.io/Code-Quiz-Application/",
        // }
    ]

    const renderCard = (card, index) => {
        return (
            <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 workCard">
            <Card className="card mx-auto" style={{ width: '18rem', height: '20rem' }} key={index}>
            <Card.Img className="card-image" variant="top" src={card.img} />
            <Card.Body>
                <Card.Title>{card.name}</Card.Title>
                <Card.Text>
                {card.description}
                </Card.Text>
                <Button className="mx-1" href={card.github} variant="dark" target="_blank"  rel="noreferrer">GitHub</Button>
                <Button className="mx-1" href={card.deployment} variant="dark" target="_blank"  rel="noreferrer">Project</Button>
                <Button className="mx-1" href={card.deployment} variant="dark" target="_blank"  rel="noreferrer">More</Button>
            </Card.Body>
            </Card>
            </div>
        )
    }

    return (
        <div className="portfolio">
             <h2 id="sampleWork" className={titleStyle + " sampleProjectsSection"}>My Work</h2>
               
            <div className="container my-5">
                    <div className="row projects ">
                      
                        {projects.map(renderCard)}
                  
                    </div>
            </div>
        </div>

    );
}

export default Portfolio;



      