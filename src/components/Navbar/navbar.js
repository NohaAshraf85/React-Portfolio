import React from "react";
import "./navbar.css";
import { Link }from "react-router-dom";

function Navbar() {
    return(
        <div className="navbarclass">

            <nav className="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <Link to="/">
                    <span className="navbar-brand font-color">Noha Ashraf</span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                             <Link to="/about"> 
                                <li className="nav-item">
                                <span className="nav-link active" aria-current="page">About</span>
                                </li>
                            </Link> 
                            <Link to="/portfoliopage">
                                <li className="nav-item">
                                    <span className="nav-link active" aria-current="page">Portfolio</span>
                                </li>
                            </Link>
                            <Link to="/contact">
                                <li className="nav-item">
                                <span className="nav-link active" aria-current="page">Contact</span>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>

            {/* social media buttons */}
      
            <a className="btn btn-dark bi bi-github mx-1" href="https://github.com/NohaAshraf85" target="_blank"></a>
            <a className="btn btn-dark bi bi-linkedin mx-1" href="https://www.linkedin.com/in/noha-ashraf-4158604b/" target="_blank"></a>
            <a className="btn btn-dark bi bi-twitter mx-1" href="https://twitter.com/nohaashraf" target="_blank"></a>
            <a className="btn btn-dark bi bi-facebook mx-1" href="https://www.facebook.com/noha.ashraf.585" target="_blank"></a>
            <a className="btn btn-dark bi bi-instagram mx-1" href="https://www.instagram.com/nohaashraf85/" target="_blank"></a>
            </nav>

        </div>
    );
}

export default Navbar;

 