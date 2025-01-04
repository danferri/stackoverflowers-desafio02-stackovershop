import React from "react";
import linkedinLogo from "../assets/fotos/linkedin.png";
import githubLogo from "../assets/fotos/githublogo.png";

interface UserProps {
  avatar_url: string;
  dev_name: string;
  dev_linkedin: string;
  dev_github: string;
  userLoc: string;
}

const User: React.FC<UserProps> = ({
  avatar_url,
  dev_name,
  dev_linkedin,
  dev_github,
  userLoc,
}) => {
  return (
    <div className="user_profile">
      <img id="user_photo" src={avatar_url} alt={`${dev_name}'s avatar`} />
      <h2>{dev_name}</h2>
      <div id="social-container">
        <a>
          <span id="loc">📍 {userLoc}</span>
        </a>
        <a href={dev_linkedin} target="_blank" rel="noopener noreferrer">
          <img className="social" src={linkedinLogo} alt="LinkedIn logo" />
          <span>LinkedIn</span>
        </a>
        <a href={dev_github} target="_blank" rel="noopener noreferrer">
          <img
            id="github"
            className="social"
            src={githubLogo}
            alt="GitHub logo"
          />
          <span>GitHub</span>
        </a>
      </div>
    </div>
  );
};

export default User;
