import React from 'react';
import ProjectCard from '../components/ProjectCard';
import backgroundVideo from '../asserts/background_video.mp4'

const Projects = () => {
  const projects = [
    {
      title: 'Todo-Tracker',
      imageSrc: '/about_me/pr_1.jpg',
      description: `The ReactJS Todo Tracker website is a web application designed to help users manage their daily tasks efficiently. 
                    It allows users to add, edit, and delete tasks, mark them as completed, and view the history of task changes. 
                    Built using React, this application provides a simple and intuitive interface for tracking to-dos and organizing 
                    daily activities, enhancing productivity through an easy-to-use task management system.`,
      link: 'https://reactjs-todo-tracker.netlify.app/'
    },
    {
      title: 'Nasa-Api-App',
      imageSrc: '/about_me/pr_2.jpg',
      description: `The NASA API React App website utilizes NASA's APOD (Astronomy Picture of the Day), NeoWs (Near Earth Object Web Service), 
                    and EPIC (Earth Polychromatic Imaging Camera) APIs. This application allows users to view daily astronomy pictures, 
                    track near-Earth objects, and explore Earth images taken by the EPIC camera. 
                    It provides an interactive and educational experience, showcasing various space-related data through
                    a user-friendly React interface.`,
      link: 'https://nasa-api-react-app.netlify.app/'
    }
  ];

  return (
    <>
      <div className="video-wrapper">
        <video src={backgroundVideo} className="video-background" autoPlay loop muted/>
      </div>
      <h1 className='center p-2' id='title_projects'>My Projects</h1>
      <div className="flex flex-center flex-column">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            imageSrc={project.imageSrc}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;