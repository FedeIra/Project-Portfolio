import React from 'react';
import Card from './MinorProject';
import './Other_Projects.css';

import minorProjects from './minorProjects.json';

function Cards() {
  return (
    <div className="general_content">
      {minorProjects.map((project, index) => (
        <Card
          name={project.name}
          technologies={project.technologies}
          avatar={project.avatar}
          link={project.link}
          key={index}
        />
      ))}
    </div>
  );
}

export default Cards;
