import React from "react";
import "./Minor_Project.css";

function Card({ name, technologies, avatar, link }) {
  const imageProject = require(`./Images/${avatar}`);

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={imageProject} alt="project_image" />
        </div>
        <div className="flip-card-back">
          <h2>{name}</h2>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            class="button"
          >
            View Site
          </a>
          <p>
            {technologies.map((technology, index) => (
              <span key={index}>
                {index === technologies.length - 1
                  ? technology
                  : `${technology} | `}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
