import React from 'react';
import { FaUser } from 'react-icons/fa';
import '../styles/About.css';

export function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <img 
              src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80" 
              alt="Profile"
            />
          </div>
          <div className="about-text">
            <h2 className="section-title">
              <FaUser />
              About Me
            </h2>
            <p className="about-description">
            "I'm a passionate Flutter Developer with 2 years of experience, specializing in state management with GetX and Provider. I excel at creating high-performance, cross-platform mobile applications for Android and iOS with a focus on responsive UI, pixel-perfect design, and smooth user experiences.            </p>
            <p className="about-description">
            Building cross-platform mobile apps for Android and iOS using Flutter. Currently working on B2B and customer applications for a startup, focusing on performance, scalability, and a seamless user experience
            </p>
            <p className="about-description">
              When I'm not coding, you can find me contributing to open-source projects, writing technical 
              blog posts, or exploring new technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}