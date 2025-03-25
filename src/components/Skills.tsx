import React from 'react';
import { FaTools } from 'react-icons/fa';
import '../styles/Skills.css';

const skills = [
 "Flutter", "Dart", "Flutterflow","Getx","Provider",
  "SQL","Firebase",
 "Play Console",  "Github", 
 "Postman","HTML","CSS",,"Excel", "PowerPoint", "Figma",
];

export function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">
          <FaTools />
          Skills & Technologies
        </h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-item">
              <p className="skill-name">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}