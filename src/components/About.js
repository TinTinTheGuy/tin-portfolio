import React from 'react';
import { motion } from 'framer-motion';
import CoffeeParticles from './CoffeeParticles';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <CoffeeParticles count={2} />
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </motion.h2>
        
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Hi, I'm Tin! 👋</h3>
            <p>I'm a passionate IT professional specializing in network infrastructure and cybersecurity. When I'm not configuring networks, you'll find me:</p>
            
            <div className="interests">
              <div className="interest-item">
                <i className="fas fa-coffee"></i>
                <span>Enjoying a perfect cup of coffee</span>
              </div>
              <div className="interest-item">
                <i className="fas fa-mountain"></i>
                <span>Exploring hiking trails</span>
              </div>
              <div className="interest-item">
                <i className="fas fa-users"></i>
                <span>Hanging out with friends</span>
              </div>
              <div className="interest-item">
                <i className="fas fa-network-wired"></i>
                <span>Building professional networks</span>
              </div>
            </div>
            
            <p>I believe that great network infrastructure, like great coffee, requires precision, attention to detail, and a passion for reliability.</p>
            
            <div className="skills">
              <h4>Skills & Technologies</h4>
              <div className="skill-tags">
                <span className="skill-tag">Cisco IOS</span>
                <span className="skill-tag">Network Security</span>
                <span className="skill-tag">TCP/IP</span>
                <span className="skill-tag">VMware</span>
                <span className="skill-tag">Linux</span>
                <span className="skill-tag">Windows Server</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="coffee-mug">
              <div className="mug-body">
                <div className="mug-coffee">
                  <div className="mug-foam"></div>
                  <div className="mug-bubbles">
                    <div className="mug-bubble"></div>
                    <div className="mug-bubble"></div>
                    <div className="mug-bubble"></div>
                  </div>
                </div>
                <div className="mug-steam"></div>
              </div>
              <div className="mug-handle"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 