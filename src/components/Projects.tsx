import React from "react";
import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import "../styles/Projects.css";

const projects = [
  {
    title: "Weg Reserve App",
    description: " Table and Walkin management system for Restaurants and Cafes",
    link: "https://play.google.com/store/apps/details?id=com.wegsoft.reserve&hl=en",
  },
  {
    title: "Weg Waiter App",
    description: "Dynamic Feedback Management System for Businesses",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    link: "https://play.google.com/store/apps/details?id=com.wegsoft.wegwaiter&hl=en"
  },
   {
    title: "Rentify",
    description:
      "Rentify is a marketplace for people in search of houses for rent",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    link: "https://github.com/vamshi1504/Rentify-P",
  },
  {
    title: "Weg Park",
    description: "Valet Management System follow ups customer vehicle records, track customer call and request procedures like delivery vehicle.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    // link: "https://webbook.wegsoft.com/",
  },
  {
    title: "Flutter Getx-MVVM ",
    description: "A Flutter project implementing the MVVM architecture using GetX for state management. Features include efficient API integration, reactive UI updates, and seamless navigation handling.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    // link: "https://webbook.wegsoft.com/",
  },
];

export function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">
          <FaCode />
          Featured Projects
        </h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card"
              >
                <FaExternalLinkAlt className="project-link-icon" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
