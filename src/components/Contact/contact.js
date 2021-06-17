import React from "react";
import "./contact.css";

function Contact() {
    return (
        <div className="contact">
            <section class="section-3">
            <div class="container-fluid font" id="contactSection">
            <h2 id="sampleWork" class="sampleProjectsSection pt-5">Contact Me</h2>

            <form class="d-flex flex-column px-4" action="mailto:noha_ashraf85@hotmail.com?subject=contact me&amp;" method="post" encType="text/plain">
            Name<br>
            <input class="form-control" type="text" name="name" /><br>
            Email<br>
            <input class="form-control" type="text" name="mail" /><br>
            Message<br>
            <textarea class="form-control" type="text" name="message" size="50"></textarea><br><br>
            <input class="btn btn-dark mb-2" type="submit" value="Send" />
            <input class="btn btn-dark mb-2" type="reset" value="Reset" />
            </form>

            </div>
            </div>
  </section>

        </div>

    );
}

export default Contact;

