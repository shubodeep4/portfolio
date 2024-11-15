import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="introduction">
          <h3>Introduction:</h3>
          <p>Proactive IT professional with 2+ years of experience specializing in Full Stack development. Highly skilled in microservices, cloud technologies, and efficient problem-solving. Known for delivering well-documented, tested, and scalable solutions with strong collaborative skills and a focus on continuous improvement.</p>
        </div>
        <div className="cards">
          <div className="card">
          <img src="/images/fullstack.jpg" alt="Full Stack Developer" />

            <p>Full Stack Developer</p>
          </div>
          <div className="card">
            <img src="/images/pngtree-cloud-computing-technology-background-image_877094.jpg" alt="Cloud Technologies" />
            <p>Cloud Specialist</p>
          </div>
          <div className="card">
            <img src="/images/api.jpg" alt="API Development Specialist" />
            <p>API Development Specialist</p>
          </div>
          <div className="card">
            <img src="/images/freelancer.jpg" alt="Freelancer" />
            <p>Freelancer</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
