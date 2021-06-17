import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="position">
    <footer className="pt-4 my-md-5 pt-md-5 footerStyle">
    <div className="row mt-5">
      <div className="col-12 col-md mx-5">
        <img className="mb-2" src="/assets/a087a3f66722495ab1bfd316db1337ce.png" alt="logo" width="150" height="150" />
        <small className="d-block mb-3 text-muted">© 2021</small>
      </div>
      <div className="col-6 col-md">
        <h5>Portfolio</h5>
        <ul className="list-unstyled text-small">
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#aboutMe">About Me</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#techSection">Technologies and Tools</a></li>
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5>Get in contact</h5>
        <ul className="list-unstyled text-small">
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Resource</a></li>
        </ul>
      </div>
      <div className="col-6 col-md">
        <h5>Social</h5>
        <ul className="list-unstyled text-small">
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Team</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Locations</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Privacy</a></li>
          <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Terms</a></li>
        </ul>
      </div>
    </div>
  </footer>
  <div class="custom-shape-divider-top-1623943669">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
  </div>
    </div>
  );
}

export default Footer;