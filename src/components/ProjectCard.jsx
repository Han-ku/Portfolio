import React, { useState } from 'react';

const ProjectCard = ({ title, imageSrc, description, link }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const firstSentence = description.split('. ')[0] + '.';

  return (
    <div className='p-2 project-container'>
      <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
      <div className="project_title">
        <h3>{title}</h3>
        <img src={imageSrc} alt={title} className='img-responsive' />
      </div>
        <p>{isExpanded ? description : firstSentence}</p>
      </a>
      <button onClick={handleToggle}>
        {isExpanded ? 'Show Less' : 'Read More'}
      </button>
    </div>
  );
};

export default ProjectCard;