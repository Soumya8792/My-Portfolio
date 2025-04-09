import React from 'react';
import { FaBriefcase } from 'react-icons/fa';
import '../styles/Experience.css';

const experiences = [
  {
    title: "Frontend Developer - Flutter",
    company: "Wegsoft Technologies",
    period: "2023 - Present",
    description: "Developed and maintained projects using modern technologies and Led the development of dynamic and high-performance mobile applications using Flutter. Specialized in state management with GetX and Provider, ensuring smooth and responsive user experiences."
  },

];

export function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">
          <FaBriefcase />
          Work Experience
        </h2>
        <div className="experience-list">
          {experiences.map((job, index) => (
            <div key={index} className="experience-item">
              <h3 className="experience-title">{job.title}</h3>
              <p className="experience-company">{job.company}</p>
              <p className="experience-period">{job.period}</p>
              <p className="experience-description">{job.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}