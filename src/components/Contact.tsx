import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import '../styles/Contact.css';

export function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-content">
          <h2>Get In Touch</h2>
          <p className="contact-description">
            I'm currently open to new opportunities and open to freelance. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>
          <a href="mailto:soumyaengg1234@gmail.com" className="btn btn-primary">
            <FaEnvelope />
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
}