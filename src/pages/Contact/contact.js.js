import React from "react";
import "./contact.css";

function Contact() {
    return (
        <div className="contact">

            <div className="container-fluid m-5 font" id="contactSection">
                <div className="row">
            <h2 id="sampleWork" className="sampleProjectsSection pt-5">Get in touch</h2>

                <div className="col-ls-6 col-md-6 col-sm-6">
                <form className="d-flex flex-column px-4" action="mailto:noha_ashraf85@hotmail.com?subject=contact me&amp;" method="post" enctype="text/plain">
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

            </div>

            </div>
            


    );
}

export default Contact;

