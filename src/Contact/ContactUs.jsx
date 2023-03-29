import React from "react";
import "./Contact.css";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";

export default function ContactUs() {
  return (
    <div>
      <Navbar />
      <div className="contact-section">
      <div className="info">
          <h3 className="contact-txt">CONTACT US</h3>
          <p>
            For enquires. Please fill the form. We will get back to you
            soon.
          </p>
          {/* <h2>Contact Information</h2>
          <div>
            <a href="http://">
              <img src="" alt="" />
              <p>info@woyibo.com</p>
            </a>
            <a href="tel: (234)805-467-8934">
              <img src="" alt="" />
              <p>+234 805-467-8934</p>
            </a>
          </div> */}
        </div>
        <div className="form">
          <form>
            <div className="fullname">
              <input
                type="text"
                placeholder="First name"
                className="input right-input"
                required
              />
              <input
                type="text"
                placeholder="Last name"
                className="input left-input"
                required
              />
            </div>
            <div className="address">
              <input
                type="text"
                placeholder="Email"
                className="input right-input"
                required
              />
              <input
                type="text"
                placeholder="Phone number"
                className="input left-input"
                readonly
              />
            </div>
            <div className="textarea">
              <textarea
                name=""
                id=""
                cols="40"
                rows="5"
                placeholder="How Can we be of help?"
              ></textarea>
            </div>
            <div className="button">
              <input type="button" value="Send Message" />
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
