import React from "react";
import Portfolio from "../../components/Portfolio/portfolio";
import "./PortfolioPage.css";
import Header from "../../components/Header/header";

function PortfolioPage() {

    return (
        <>
        <Header title="Portfolio"></Header>
        <div className="home">
          
        <Portfolio background="bgColor"/>
        </div>
</>
    );
}

export default PortfolioPage;



      