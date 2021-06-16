import React from "react";
// import Card from "../../components/Card/card";
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./portfolio.css";

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

function Portfolio() {

    const projects = [
        {
            img: "/assets/remoteRecruitHomepage.png",
            name: "remoteRecruit",
            description: "A website that connects freelancers and employers",
            github: "https://github.com/lbburnsy/remoteRecruit",
            deployment: "https://remote-recruit.herokuapp.com/"
        },
        {
            img: "/assets/bookHunt1.png",
            name: "Book Hunt",
            description: "Meet your next read and see NYT Best Sellers",
            github: "https://github.com/srad25/Book-Hunt",
            deployment: "https://srad25.github.io/Book-Hunt/"
        },
        {
            img: "/assets/teamProfileGenerator.png",
            name: "Team Profile Generator",
            description: "A CLI app that creates a webpage display team basic information",
            github: "https://github.com/NohaAshraf85/Team-Profile-Generator",
            deployment: "https://drive.google.com/file/d/1tDyKklkteBCH80E-3qU6Nj2TzF0YdVxU/view"
        },
        {
            img: "/assets/weatherDashboardHomepage.png",
            name: "Weather Dashboard",
            description: "creative design for a weather dashboard for the USA States",
            github: "https://github.com/NohaAshraf85/Weather-Dashboard",
            deployment: "https://nohaashraf85.github.io/Weather-Dashboard/"
        },
        {
            img: "/assets/currentTimeEntry1.png",
            name: "Day Planner",
            description: "Day Planner, 9-5 timeblocks, current, present and future tasks",
            github: "https://github.com/NohaAshraf85/Code-Quiz-Application",
            deployment: "https://github.com/NohaAshraf85/Day-Planner"
        },
        {
            img: "/assets/codeQuiz.png",
            name: "Code Quiz",
            description: "A Code Quiz Application with timers and scores",
            github: "https://github.com/NohaAshraf85/Code-Quiz-Application",
            deployment: "https://nohaashraf85.github.io/Code-Quiz-Application/"
        }
    ]

    const renderCard = (card, index) => {
        return (
            <Card style={{ width: '18rem' }} key={index}>
            <Card.Img variant="top" src={card.img} />
            <Card.Body>
                <Card.Title>{card.name}</Card.Title>
                <Card.Text>
                {card.description}
                </Card.Text>
                <Button variant="primary">GitHub</Button>
                <Button variant="primary">Project</Button>
            </Card.Body>
            </Card>

        )
    }

    return (
        <div className="portfolio">

            {projects.map(renderCard)}

        </div>

    );
}

export default Portfolio;