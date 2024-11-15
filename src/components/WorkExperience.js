import React from 'react';
import './WorkExperience.css';

const experiences = [
  {
    company: 'LTIMindtree',
    role: 'Intern',
    duration: 'Feb 2022 - May 2022',
    description: 'Worked on developing internal tools and gained hands-on experience with Java and Spring Boot.',
    image: '/images/mindtree.jpg', // Path to the image
  },
  {
    company: 'Sieve Health',
    role: 'Full Stack Developer',
    duration: 'Aug 2022 - Aug 2024',
    description: 'Specialized in microservices, cloud technologies, and API development for scalable solutions.',
    image: '/images/sieveHealth.jpg', // Path to the image
  },
];

function WorkExperience() {
  return (
    <section id="work-experience" className="work-experience">
      <h2>Work Experience</h2>
      <div className="experience-cards">
        {experiences.map((experience, index) => (
          <div className="experience-card" key={index}>
            <img src={experience.image} alt={experience.company} className="experience-image" />
            <h3>{experience.company}</h3>
            <h4>{experience.role}</h4>
            <p className="duration">{experience.duration}</p>
            <p className="description">{experience.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;
