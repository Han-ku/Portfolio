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
    },
    {
      title: 'Task-Tracker-Landing-Page',
      imageSrc: '/about_me/landing.png',
      description: `The Task Tracker website is a versatile tool designed to enhance productivity through efficient task management. 
      It features a task tracker where users can add, edit, and delete tasks seamlessly. The site also incorporates a Quotes API, 
      providing daily motivational quotes to inspire users. Additionally, the platform includes a user registration system 
      and a comments section, both integrated with a MySQL database to ensure secure and reliable data handling. 
      This application offers an intuitive interface, making task management and user interaction both straightforward and effective`,
      link: 'https://task-tracker-landing-page.netlify.app'
    },
    {
      title: 'Tic Tac Toe',
      imageSrc: '/about_me/ttt.png',
      description: `The "TTT R JS" website is an interactive Tic-Tac-Toe game built with JavaScript. 
      Players can compete against each other on a virtual board by selecting their symbols (X or O) and taking turns to make moves. 
      The site allows players to track the history of moves, and it also offers the option to reset the game and start a new round.`,
      link: 'https://master--ttt-r-js.netlify.app/'
    },
    {
      title: 'Calculator + Converter',
      imageSrc: '/about_me/calc.png',
      description: `This web application allows users to perform basic calculations and unit conversions. 
      Developed with React, it provides a user-friendly interface where you can switch between different modes like length, 
      temperature, and time conversions. 
      Simply input your values, select the units, and the app will calculate and convert between selected units in real-time.`,
      link: 'https://master--calculator-converter-react.netlify.app/converter'
    },
    {
      title: 'User Management Table',
      imageSrc: '/about_me/users.png',
      description: `The User Management Table is a web application designed for managing user data dynamically. 
      It features an interactive table that allows users to filter, search, and sort through various fields such as name, username, 
      email, and phone. Users can input data into the filter fields located in the table headers to dynamically narrow down the dataset. 
      The table provides real-time updates based on search queries or filter input. 
      Additionally, a "Reset all filters" button is provided to clear all filters and restore the full dataset view. 
      This user-friendly interface is ideal for managing large datasets with ease and efficiency.`,
      link: 'https://master--user-management-table-ts.netlify.app/'
    }
  ];

  return (
    <>
      <div className="video-wrapper">
        <video src={backgroundVideo} className="video-background" autoPlay loop muted/>
      </div>
      <h1 className='center p-2 title'>My Projects</h1>
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
      <p id='info'>Each project listed on this site is meticulously crafted to demonstrate my skills and expertise. 
      The source code for all these projects can be found on my GitHub repository, providing transparency 
      and insight into my development process.</p>
    </>
  );
};

export default Projects;