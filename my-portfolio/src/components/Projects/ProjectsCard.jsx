import React from 'react';
import PropTypes from 'prop-types';

const ProjectsCard = ({ project }) => {
  // Başlığı ana başlık ve alt başlık olarak ayır
  const [mainTitle, subTitle] = project.title.split('|').map(part => part.trim());

  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
            Projeyi Görüntüle
          </a>
        </div>
      </div>
      <div className="project-content">
        <div className="project-title">
          <h3 className="main-title">{mainTitle}</h3>
          {subTitle && <span className="sub-title">{subTitle}</span>}
        </div>
        <p dangerouslySetInnerHTML={{ __html: project.description }} />
        <div className="project-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

ProjectsCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectsCard;