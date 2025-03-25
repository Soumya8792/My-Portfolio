import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown } from 'react-icons/fa';
import '../styles/Hero.css';

export function Hero() {
  return (
    <header className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>
            Hi, I'm <span>Soumya Malavade</span>
          </h1>
          <p className="hero-description">
Flutter Developer specializing in building high-performance, cross-platform mobile applications with exceptional user experiences.          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary">
              Get in touch
            </a>
            <a href="#projects" className="btn btn-outline">
              View my work
            </a>
          </div>
          <div className="hero-social">
            <a href="https://github.com/Soumya8792">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com/in/soumya-malavade-195821220/">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:soumyaengg1234@gmail.com">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <FaChevronDown size={32} />
      </div>
    </header>
  );
}