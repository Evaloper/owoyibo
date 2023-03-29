import "./Aboutme.css";
import profilepics from "./image/Profilepics.png";

export default function Aboutme() {
  return (
    <div className="aboutme" id="aboutsession">
      <h2>ABOUT ME</h2>
      <div className="second-sect">
        <div className="profile-img">
          <img src={profilepics} alt="Display of me" />
        </div>
        <div className="aboutme-sect">
          <div className="div-container">
            <h3>Objective</h3>
            <p className="obj-para">
              Leveraging over 6 years of experience in the corporate world and
              the ability to work with good team management to achieve the
              organization's goal. Also geared and focused on the drive to
              achieve the most results in the organization, where skill and
              excellence is the primary goal, and adding value through my
              excellent communication and interpersonal skills to ensure
              productivity and enable the organization to result in the
              organization meets edge in the corporate market.
            </p>
          </div>
          <div className="div-container">
            <h3>Experience</h3>
            <ul>
              <li>
                <span className="header-span">
                  Concetti Spaziali Ltd. - (2021 - Present)
                </span>
                <br />
                Graphic / Creative Director{" "}
              </li>
              <br />
              <li>
                <span className="header-span">
                  Concetti Spaziali Ltd. - (2021 - Present)
                </span>
                <br />
                Graphic / Creative Director{" "}
              </li>
              <br />
              <li>
                <span className="header-span">
                  Concetti Spaziali Ltd. - (2021 - Present)
                </span>
                <br />
                Graphic / Creative Director{" "}
              </li>
            </ul>
          </div>
          <div className="div-container">
            <h3>Education</h3>
            <p>Delta State University, Nigeria. - (2012 -2016)</p>
            <p>Bachelor's degree, Zoology/Animal Biology.</p>
          </div>
          <div className="div-container">
            <h3>Personal Skills</h3>
            <ul>
              <li>Creative thinking</li>
              <li>Attention to detail</li>
              <li>Communication</li>
              <li>Collaboration</li>
              <li>Problme-solving</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
