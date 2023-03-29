import React from "react";
import facebook from "./images/facebook.png";
import twitter from "./images/twitter.png";
import instagram from "./images/instagram.png";
import linkedin from "./images/linkedin.png";
import whatsapp from "./images/whatsapp.png"
import "./Footer.css"


function Footer() {
    return (
        <footer>
            <div class="sm-div">
                <h3>GET IN TOUCH</h3>
                <img src={facebook} alt="" />
                <img src={twitter} alt="" />
                <img src={instagram} alt="" />
                <img src={linkedin} alt="" id="linkedin" />
            </div>
            <div>
                <div>
                    <ul>
                        <li>About</li>
                        <li>Portfolio</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Graphic Design</li>
                        <li>Visual Content</li>
                        <li>Product Branding</li>
                        <li>Digital Printing</li>
                    </ul>
                </div>
                <div></div>
            </div>
            <div className="copyright">
                <p className="first-para">© 2022 Owoyibo Collections</p>
                {/* <img src={whatsapp} alt="" id="whatsapp-icon" /> */}
            </div>
        </footer>
    );
}

export default Footer;