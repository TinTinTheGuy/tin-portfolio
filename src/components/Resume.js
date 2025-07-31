import React from 'react';
import { motion } from 'framer-motion';
import CoffeeParticles from './CoffeeParticles';
import { usePDFDownload } from '../hooks/usePDFDownload';
import './Resume.css';

const Resume = () => {
  const { downloadPDF } = usePDFDownload();
  
  return (
    <section id="resume" className="resume-section">
      <CoffeeParticles count={3} />
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Resume & Certifications 📋
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Professional credentials and achievements that showcase my expertise
        </motion.p>
        
        <div className="resume-content">
          <motion.div 
            className="resume-main"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="resume-card">
              <div className="resume-header">
                <div className="resume-icon">
                  <i className="fas fa-file-alt"></i>
                </div>
                <div className="resume-info">
                  <h3>Professional Resume</h3>
                  <p className="resume-description">Comprehensive overview of my IT networking experience, technical skills, and professional achievements</p>
                </div>
              </div>
              <div className="resume-highlights">
                <div className="highlight-item">
                  <i className="fas fa-briefcase"></i>
                  <span>2+ Years IT Experience</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-graduation-cap"></i>
                  <span>B.S in Computer Science</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-certificate"></i>
                  <span>2 Professional Certifications</span>
                </div>
                <div className="highlight-item">
                  <i className="fas fa-network-wired"></i>
                  <span>Network Infrastructure Expert</span>
                </div>
              </div>
              <div className="resume-actions">
                <button 
                  className="btn btn-primary" 
                  onClick={() => downloadPDF('/resume/Resume.pdf', 'Resume.pdf')}
                >
                  <i className="fas fa-download"></i>
                  <span>Download PDF</span>
                </button>
                <a href="/resume/Resume.pdf" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-eye"></i>
                  <span>View Online</span>
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="certifications-section"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="certifications-header">
              <h3 className="certifications-title">
                <i className="fas fa-award"></i>
                Professional Certifications
              </h3>
              <p className="certifications-subtitle">Industry-recognized credentials validating my technical expertise</p>
            </div>
            
            <div className="certifications-grid">
              <motion.div 
                className="certification-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="cert-icon">
                  <i className="fas fa-shield-alt"></i>
                </div>
                <div className="cert-content">
                  <div className="cert-header">
                    <h4>CompTIA Security+</h4>
                  </div>
                  <p>Validates baseline cybersecurity skills and provides a springboard to intermediate-level cybersecurity jobs.</p>
                  <div className="cert-meta">
                    <div className="cert-details">
                      <span className="cert-date">
                        <i className="fas fa-calendar"></i>
                        2025
                      </span>
                      <span className="cert-status active">
                        <i className="fas fa-check-circle"></i>
                        Active
                      </span>
                    </div>
                    <div className="cert-skills">
                      <span>Cybersecurity</span>
                      <span>Threat Detection</span>
                      <span>Access Control</span>
                    </div>
                    <div className="cert-actions">
                      <button 
                        className="btn btn-sm btn-primary" 
                        onClick={() => downloadPDF('/certificates/CompTIA Security+ ce certificate.pdf', 'CompTIA Security+ ce certificate.pdf')}
                      >
                        <i className="fas fa-download"></i>
                        Download Certificate
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                className="certification-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="cert-icon">
                  <i className="fas fa-network-wired"></i>
                </div>
                <div className="cert-content">
                  <div className="cert-header">
                    <h4>CompTIA Network+</h4>
                  </div>
                  <p>Validates essential knowledge and skills needed to confidently design, configure, manage and troubleshoot networks.</p>
                  <div className="cert-meta">
                    <div className="cert-details">
                      <span className="cert-date">
                        <i className="fas fa-calendar"></i>
                        2025
                      </span>
                      <span className="cert-status active">
                        <i className="fas fa-check-circle"></i>
                        Active
                      </span>
                    </div>
                    <div className="cert-skills">
                      <span>Network Design</span>
                      <span>Troubleshooting</span>
                      <span>TCP/IP</span>
                    </div>
                    <div className="cert-actions">
                      <button 
                        className="btn btn-sm btn-primary" 
                        onClick={() => downloadPDF('/certificates/CompTIA Network+ ce certificate.pdf', 'CompTIA Network+ ce certificate.pdf')}
                      >
                        <i className="fas fa-download"></i>
                        Download Certificate
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div 
              className="resume-footer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="skills-summary">
                <div className="skills-header">
                  <h4>
                    <i className="fas fa-tools"></i>
                    Technical Skills Summary
                  </h4>
                  <p>Core competencies across networking, infrastructure, and security domains</p>
                </div>
                <div className="skills-categories">
                  <div className="skill-category">
                    <div className="category-header">
                      <i className="fas fa-network-wired"></i>
                      <h5>Networking</h5>
                    </div>
                    <div className="skill-tags">
                      <span>Cisco IOS</span>
                      <span>TCP/IP</span>
                      <span>VLANs</span>
                      <span>Routing</span>
                      <span>Switching</span>
                      <span>Wireless</span>
                    </div>
                  </div>
                  <div className="skill-category">
                    <div className="category-header">
                      <i className="fas fa-server"></i>
                      <h5>Infrastructure</h5>
                    </div>
                    <div className="skill-tags">
                      <span>VMware</span>
                      <span>Windows Server</span>
                      <span>Linux</span>
                      <span>Cloud Computing</span>
                      <span>Virtualization</span>
                      <span>AWS</span>
                    </div>
                  </div>
                  <div className="skill-category">
                    <div className="category-header">
                      <i className="fas fa-shield-alt"></i>
                      <h5>Security</h5>
                    </div>
                    <div className="skill-tags">
                      <span>Firewall</span>
                      <span>VPN</span>
                      <span>Encryption</span>
                      <span>Access Control</span>
                      <span>Threat Detection</span>
                      <span>Compliance</span>
                    </div>
                  </div>
                  <div className="skill-category">
                    <div className="category-header">
                      <i className="fas fa-code"></i>
                      <h5>Programming & Web Development</h5>
                    </div>
                    <div className="skill-tags">
                      <span>Python</span>
                      <span>Bash Scripting</span>
                      <span>HTML/CSS</span>
                      <span>JavaScript</span>
                      <span>React</span>
                      <span>Network Automation</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Resume; 