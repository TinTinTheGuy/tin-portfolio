import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CoffeeParticles from './CoffeeParticles';
import './PortfolioGallery.css';

const PortfolioGallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Cardinal IT Website',
      category: 'web',
      description: 'Developed a modern IT services website with professional design, responsive layout, and call-to-action features for Cardinal IT.',
      image: '/portfolio/cardinal-it-website.png',
      technologies: ['React', 'JavaScript', 'HTML/CSS', 'Web Development'],
      github: null,
      demo: 'https://cardit.us',
      featured: true
    },
    {
      id: 2,
      title: 'Network Infrastructure Setup',
      category: 'networking',
      description: 'Installed and configured enterprise network equipment including switches, routers, and access points. Set up VLANs and network security protocols.',
      image: '/portfolio/network-setup.jpg',
      technologies: ['Cisco IOS', 'Network Equipment', 'VLANs', 'Security'],
      github: null,
      demo: null,
      featured: true
    },
    {
      id: 3,
      title: 'Fiber Optic Installation',
      category: 'infrastructure',
      description: 'Installed and terminated fiber optic cables for high-speed data transmission. Configured fiber switches and tested connectivity.',
      image: '/portfolio/fiber-installation.jpg',
      technologies: ['Fiber Optics', 'Cable Termination', 'Network Testing', 'Infrastructure'],
      github: null,
      demo: null,
      featured: false
    },
    {
      id: 4,
      title: 'Ethernet Cable Management',
      category: 'networking',
      description: 'Organized and installed Ethernet cables for network infrastructure. Implemented proper cable management and labeling systems.',
      image: '/portfolio/ethernet-cables.jpg',
      technologies: ['Ethernet', 'Cable Management', 'Network Setup', 'Infrastructure'],
      github: null,
      demo: null,
      featured: false
    },
    {
      id: 5,
      title: 'Security Camera Systems',
      category: 'security',
      description: 'Installed and configured IP security camera systems. Set up monitoring software and remote access capabilities.',
      image: '/portfolio/camera-systems.jpg',
      technologies: ['IP Cameras', 'Security Systems', 'Monitoring', 'Network Setup'],
      github: null,
      demo: null,
      featured: false
    },
    {
      id: 6,
      title: 'Network Equipment Configuration',
      category: 'networking',
      description: 'Configured and optimized network equipment including switches, routers, and wireless access points for optimal performance.',
      image: '/portfolio/equipment-config.jpg',
      technologies: ['Network Equipment', 'Configuration', 'Optimization', 'Troubleshooting'],
      github: null,
      demo: null,
      featured: false
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Development' },
    { key: 'networking', label: 'Networking' },
    { key: 'security', label: 'Security Systems' },
    { key: 'infrastructure', label: 'Infrastructure' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const getCategoryIcon = (category) => {
    const icons = {
      web: 'fas fa-globe',
      security: 'fas fa-shield-alt',
      networking: 'fas fa-network-wired',
      infrastructure: 'fas fa-server'
    };
    return icons[category] || 'fas fa-code';
  };

  const getCategoryColor = (category) => {
    const colors = {
      web: '#0077b5',
      security: '#dc3545',
      networking: '#006241',
      infrastructure: '#6f42c1'
    };
    return colors[category] || '#333';
  };

  return (
    <section id="portfolio" className="portfolio-gallery">
      <CoffeeParticles count={2} />
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          Portfolio Gallery 🎨
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          viewport={{ once: true }}
        >
          Showcasing my projects and technical expertise
        </motion.p>

        {/* Filter Buttons */}
        <motion.div 
          className="portfolio-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.3 }}
          viewport={{ once: true }}
        >
          {filters.map((filterOption) => (
            <button
              key={filterOption.key}
              className={`filter-btn ${filter === filterOption.key ? 'active' : ''}`}
              onClick={() => setFilter(filterOption.key)}
            >
              {filterOption.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="portfolio-grid"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.3 }}
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`portfolio-item ${project.featured ? 'featured' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="portfolio-image">
                  <div className="image-placeholder" style={{ backgroundColor: getCategoryColor(project.category) }}>
                    <i className={getCategoryIcon(project.category)}></i>
                  </div>
                  {project.image && (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="portfolio-image-file"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                  )}
                  <div className="image-placeholder" style={{ backgroundColor: getCategoryColor(project.category), display: project.image ? 'none' : 'flex' }}>
                    <i className={getCategoryIcon(project.category)}></i>
                  </div>
                  {project.featured && (
                    <div className="featured-badge">
                      <i className="fas fa-star"></i>
                      Featured
                    </div>
                  )}
                  <div className="portfolio-overlay">
                    <div className="overlay-content">
                      <i className="fas fa-eye"></i>
                      <span>View Details</span>
                    </div>
                  </div>
                </div>
                
                <div className="portfolio-content">
                  <div className="portfolio-header">
                    <h3>{project.title}</h3>
                    <div className="category-tag" style={{ backgroundColor: getCategoryColor(project.category) }}>
                      <i className={getCategoryIcon(project.category)}></i>
                      {project.category}
                    </div>
                  </div>
                  
                  <p className="portfolio-description">{project.description}</p>
                  
                  <div className="portfolio-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="portfolio-actions">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="portfolio-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <i className="fab fa-github"></i>
                        View Code
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="portfolio-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <i className="fas fa-external-link-alt"></i>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="project-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.1 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="project-modal"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.1 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  className="modal-close"
                  onClick={() => setSelectedProject(null)}
                >
                  <i className="fas fa-times"></i>
                </button>
                
                <div className="modal-content">
                  <div className="modal-image">
                    {selectedProject.image && (
                      <img 
                        src={selectedProject.image} 
                        alt={selectedProject.title}
                        className="modal-image-file"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextElementSibling.style.display = 'flex';
                        }}
                      />
                    )}
                    <div className="image-placeholder" style={{ backgroundColor: getCategoryColor(selectedProject.category), display: selectedProject.image ? 'none' : 'flex' }}>
                      <i className={getCategoryIcon(selectedProject.category)}></i>
                    </div>
                  </div>
                  
                  <div className="modal-details">
                    <h2>{selectedProject.title}</h2>
                    <p className="modal-description">{selectedProject.description}</p>
                    
                    <div className="modal-technologies">
                      <h4>Technologies Used:</h4>
                      <div className="tech-grid">
                        {selectedProject.technologies.map((tech, index) => (
                          <span key={index} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="modal-actions">
                      {selectedProject.github && (
                        <a 
                          href={selectedProject.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="modal-link"
                        >
                          <i className="fab fa-github"></i>
                          View on GitHub
                        </a>
                      )}
                      {selectedProject.demo && (
                        <a 
                          href={selectedProject.demo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="modal-link"
                        >
                          <i className="fas fa-external-link-alt"></i>
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PortfolioGallery; 