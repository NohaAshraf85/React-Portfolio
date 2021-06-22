import React from "react";

function Aboutme({titleStyle}) {
    return (

      <div className="about">
      <section className="section-about">
          <div className="container">
              <div className="row pt-5">
              <h2 id="aboutMe" className={ titleStyle + " sampleProjectsSection"}>About Me</h2>
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 d-flex">
                  <img src="/React-Portfolio/assets/EZZ-Studio-9578.jpg" className="img-thumbnail m-3 mx-auto" alt="profile picture" width="300px" />
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12 col-xs-12 introduction">
                  <p>My name is Noha, i am an aspiring fron-end developer located in CT, USA. I love creating websites that serve their purpose with clean and easy user interface.</p>
                  <p>Having lived in 3 continents and accumulating 7 years of experience in the sales department of a software development company and seeing the end result that clients got based on their requirements, so i decided to create these websites.</p>
                  <p>e-mail: noha_ashraf85@hotmail.com</p>
                  <p>Phone: 860-8777218</p>
                  <a className="btn btn-primary px-5 viewMyWorkBtn" href="./assets/resume/NOHA ASHRAF_Resume_2019.pdf" target="_blank" download>My Resume</a>
              </div>
              </div>
          </div>
      </section>            

  </div>

    );
}

export default Aboutme;