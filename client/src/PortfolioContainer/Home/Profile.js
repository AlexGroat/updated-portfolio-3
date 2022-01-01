import React from "react";
import Typical from "react-typical";

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
        </div>
        <div className="profile-details-name">
          <span className="primary-text">
            {" "}
            Hello, I'm <span className="highlighted-text"> Alex</span>
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
                  "Full stack developer",
                  3000,
                  "Passion for innovation",
                  3000,
                  "React/React native developer",
                  3000,
                ]}
              />
            </h1>
          </span>
        </div>
      </div>
    </div>
  );
}
