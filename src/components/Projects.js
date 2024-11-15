import React from 'react';
import './Projects.css';

const projectData = [
  {
    title: 'Text to Speech',
    description: 'A simple app that converts text input into spoken words using the Web Speech API.',
    image: '/images/textToSpeech.png', // Path from public folder
  },
  {
    title: 'Voice-Controlled To-Do List',
    description: 'An interactive to-do list that can be controlled using voice commands.',
    image: '/images/voiceControlledToDo.jpeg', // Path from public folder
  },
  {
    title: 'Personal Finance Tracker',
    description: 'Track your income and expenses, and view monthly summaries with this finance tracking app.',
    image: '/images/personalFinanceTracker.jpg', // Path from public folder
  },
  {
    title: 'Recipe Finder App',
    description: 'Search and find recipes based on ingredients you have at home.',
    image: '/images/recipeFinder.png', // Path from public folder
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-cards">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
