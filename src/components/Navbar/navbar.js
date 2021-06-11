import React from "react";
import "./navbar.css";

function Navbar() {
    return(
        <div className="navbarclass">

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Noha Ashraf</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" aria-current="page" href="#">About</a>
                    <a className="nav-link" href="#">Portfolio</a>
                    <a className="nav-link" href="#">Contact</a>
                </div>
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

 