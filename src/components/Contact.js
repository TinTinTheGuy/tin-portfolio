import React from 'react';
import { motion } from 'framer-motion';
import CoffeeParticles from './CoffeeParticles';
import './Contact.css';

const Contact = () => {
  const contactMethods = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'ttanton2001@gmail.com',
      link: 'mailto:ttanton2001@gmail.com',
      color: '#006241'
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      value: '+1 (669) 203-7383',
      link: 'tel:+16692037383',
      color: '#28a745'
    },
    {
      icon: 'fab fa-linkedin',
      title: 'LinkedIn',
      value: 'linkedin.com/in/tanthatthienton',
      link: 'https://www.linkedin.com/in/tanthatthienton/',
      color: '#0077b5'
    },
    {
      icon: 'fab fa-github',
      title: 'GitHub',
      value: 'github.com/TinTinTheGuy',
      link: 'https://github.com/TinTinTheGuy',
      color: '#333'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      value: 'Elk Grove, CA',
      link: null,
      color: '#dc3545'
    }
  ];

  const quickActions = [
    {
      icon: 'fas fa-download',
      title: 'Download Resume',
      description: 'Get my professional resume',
      action: () => window.open('/resume/Resume.pdf', '_blank'),
      color: '#006241'
    },
    {
      icon: 'fas fa-certificate',
      title: 'View Certifications',
      description: 'See my professional credentials',
      action: () => document.getElementById('resume').scrollIntoView({ behavior: 'smooth' }),
      color: '#8B4513'
    },
    {
      icon: 'fas fa-coffee',
      title: 'Coffee Chat',
      description: 'Let\'s discuss over coffee',
      action: () => window.open('https://calendly.com/your-link', '_blank'),
      color: '#FF6B35'
    }
  ];

  return (
    <section id="contact" className="contact">
      <CoffeeParticles count={1} />
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Let's Connect ☕
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Ready to discuss opportunities? Here's how to reach me
        </motion.p>
        
        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="contact-section-title">
              <i className="fas fa-address-book"></i>
              Contact Information
            </h3>
            {contactMethods.map((method, index) => (
              <motion.div 
                key={method.title}
                className="contact-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="contact-icon" style={{ background: method.color }}>
                  <i className={method.icon}></i>
                </div>
                <div className="contact-details">
                  <h4>{method.title}</h4>
                  {method.link ? (
                    <a href={method.link} target="_blank" rel="noopener noreferrer">
                      {method.value}
                    </a>
                  ) : (
                    <p>{method.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="quick-actions"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="contact-section-title">
              <i className="fas fa-bolt"></i>
              Quick Actions
            </h3>
            <div className="actions-grid">
              {quickActions.map((action, index) => (
                <motion.button
                  key={action.title}
                  className="action-card"
                  onClick={action.action}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  style={{ '--action-color': action.color }}
                >
                  <div className="action-icon">
                    <i className={action.icon}></i>
                  </div>
                  <div className="action-content">
                    <h4>{action.title}</h4>
                    <p>{action.description}</p>
                  </div>
                </motion.button>
              ))}
            </div>
            
            <motion.div 
              className="availability-status"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="status-indicator">
                <div className="status-dot"></div>
                <span>Available for new opportunities</span>
              </div>
              <p className="status-description">
                I'm currently open to networking, collaboration, and new professional opportunities. 
                Feel free to reach out!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 