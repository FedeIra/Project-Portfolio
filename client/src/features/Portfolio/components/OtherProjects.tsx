import type { FC } from 'react';
import minorProjects from '../config/minorProjects.json';
import type { MinorProject } from '../../../utils/types';

const projectImages = import.meta.glob('../../../assets/images/other-projects/*.png', { eager: true }) as Record<string, { default: string }>;

const MinorProjectCard: FC<MinorProject> = ({ name, technologies, avatar, link }) => {
  const key = Object.keys(projectImages).find((k) => k.endsWith(`/${avatar}`));
  const imageSrc = key ? projectImages[key].default : '';

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="flip-card-back">
          <h2>{name}</h2>
          <a href={link} target="_blank" rel="noopener noreferrer" className="view-site-btn">
            View Site
          </a>
          <p>
            {technologies.map((tech, index) => (
              <span key={tech}>
                {index === technologies.length - 1 ? tech : `${tech} | `}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

const OtherProjects: FC = () => {
  return (
    <div className="flex flex-wrap justify-center w-4/5 mb-[5%] gap-[30px]">
      {(minorProjects as MinorProject[]).map((project) => (
        <MinorProjectCard key={project.name} {...project} />
      ))}
    </div>
  );
};

export default OtherProjects;
