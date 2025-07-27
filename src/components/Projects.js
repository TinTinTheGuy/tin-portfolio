import React from 'react';
import { motion } from 'framer-motion';
import CoffeeParticles from './CoffeeParticles';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <CoffeeParticles count={2} />
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Showcasing my work and achievements
        </motion.p>
        
        <div className="projects-grid">
          <motion.div 
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className="project-icon">
              <i className="fas fa-cloud"></i>
            </div>
            <h3>Cloud Computing</h3>
            <p>Developed cloud-based solutions and infrastructure using modern cloud technologies and best practices.</p>
            <div className="project-tags">
              <span>Python</span>
              <span>Cloud</span>
              <span>Infrastructure</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/TinTinTheGuy/Cloud-Computing" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
                View Project
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className="project-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3>Digital Defense</h3>
            <p>Cybersecurity project focusing on digital defense strategies and threat mitigation techniques.</p>
            <div className="project-tags">
              <span>Python</span>
              <span>Security</span>
              <span>Defense</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/TinTinTheGuy/Digital-Defense" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
                View Project
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
          >
            <div className="project-icon">
              <i className="fas fa-search"></i>
            </div>
            <h3>Forensics Practice</h3>
            <p>Digital forensics practice repository for developing investigation and analysis skills.</p>
            <div className="project-tags">
              <span>Python</span>
              <span>Forensics</span>
              <span>Analysis</span>
            </div>
            <div className="project-links">
              <a href="https://github.com/TinTinTheGuy/Forensics-Practice" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
                View Project
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 