import React from "react";
import "./contact.css";

function Contact() {
    return (
        <div className="contact">

            <div className="container-fluid font" id="contactSection">
                <div className="row">
                    <div className="contactHeaderBackground">
                        <h2 id="sampleWork" className="sampleProjectsSection pt-5">Get in touch</h2>
                    </div>

                <div className="col-ls-6 col-md-6 col-sm-6">
                    <div className="formBackground p-5">
                    <form className="d-flex flex-column px-4" action="mailto:noha_ashraf85@hotmail.com?subject=contact me&amp;" method="post" encType="text/plain">
                Name<br />
                    <input className="form-control" type="text" name="name" /><br />
                Email<br />
                    <input className="form-control" type="text" name="mail" /><br />
                Message<br />
                    <textarea className="form-control" type="text" name="message" size="50"></textarea><br /><br />
                        <input className="btn btn-dark mb-2" type="submit" value="Send" />
                        <input className="btn btn-dark mb-2" type="reset" value="Reset" />
                </form>
                </div>

                
                </div>

                <div className="col-ls-6 col-md-6 col-sm-6 pe-0">
                <img className="" src="/assets/pexels-oleg-magni-2764678.jpg" alt="get in touch image" width="100%" />
                </div>
                </div>
            </div>
            

            
        </div>
            


    );
}

export default Contact;

