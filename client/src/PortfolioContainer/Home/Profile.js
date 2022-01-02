import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a href="https://github.com/AlexGroat">
              <i className="fa fa-github-square"></i>
            </a>
            <a href="https://www.linkedin.com/in/alex-groat-0a382513b/">
              <i className="fa fa-linkedin-square"></i>
            </a>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Alex</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical 
                loop={Infinity}
                steps={[
                  "Full Stack Developer 💻",
                  3000,
                  "React Developer 📱",
                  3000,
                  "Passion For Innovation 👨‍💻",
                  3000,
                ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Keen interest in building applications with front and back end operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {" "}
              Want to know more? {" "}
            </button>
            <a href="myresume.pdf" download="Alex Groat myresume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
