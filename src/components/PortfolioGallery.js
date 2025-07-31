import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CoffeeParticles from './CoffeeParticles';
import './PortfolioGallery.css';

const PortfolioGallery = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'Cardinal IT Website',
      category: 'web',
      description: 'Developed a modern IT services website with professional design, responsive layout, and call-to-action features for Cardinal IT.',
      images: [
        process.env.PUBLIC_URL + '/portfolio/cardinal-it-website.png'
      ],
      technologies: ['React', 'JavaScript', 'HTML/CSS', 'Web Development'],
      github: null,
      demo: 'https://cardit.us',
      featured: true
    },
    {
      id: 2,
      title: 'Cable Management Excellence',
      category: 'cable-management',
      description: 'Professional cable management and organization for network infrastructure. Implemented proper cable routing, labeling, and management systems.',
      images: [
        process.env.PUBLIC_URL + '/portfolio/cable-management/IMG_4225.jpg',
        process.env.PUBLIC_URL + '/portfolio/cable-management/IMG_4227.jpg',
        process.env.PUBLIC_URL + '/portfolio/cable-management/IMG_4228.jpg',
        process.env.PUBLIC_URL + '/portfolio/cable-management/IMG_4364.jpg',
        process.env.PUBLIC_URL + '/portfolio/cable-management/IMG_4365.jpg',
        process.env.PUBLIC_URL + '/portfolio/cable-management/IMG_4366.jpg'
      ],
      technologies: ['Cable Management', 'Network Infrastructure', 'Organization', 'Labeling'],
      github: null,
      demo: null,
      featured: true
    },
    {
      id: 3,
      title: 'Server Room Setup',
      category: 'server-setup',
      description: 'Complete server room installation and configuration. Set up enterprise-grade servers with proper cooling, power management, and security.',
      images: [
        process.env.PUBLIC_URL + '/portfolio/server-setup/IMG_4415.jpg',
        process.env.PUBLIC_URL + '/portfolio/server-setup/IMG_4406.jpg',
        process.env.PUBLIC_URL + '/portfolio/server-setup/IMG_4407.jpg',
        process.env.PUBLIC_URL + '/portfolio/server-setup/IMG_4410.jpg',
        process.env.PUBLIC_URL + '/portfolio/server-setup/IMG_4411.jpg',
        process.env.PUBLIC_URL + '/portfolio/server-setup/IMG_4414.jpg',
        process.env.PUBLIC_URL + '/portfolio/server-setup/IMG_4419.jpg',
        process.env.PUBLIC_URL + '/portfolio/server-setup/IMG_4425.jpg',
        process.env.PUBLIC_URL + '/portfolio/server-setup/IMG_4426.jpg'
      ],
      technologies: ['Server Installation', 'Enterprise Hardware', 'Power Management', 'Cooling Systems'],
      github: null,
      demo: null,
      featured: true
    },
    {
      id: 4,
      title: 'Network Infrastructure Design',
      category: 'network-infrastructure',
      description: 'Comprehensive network infrastructure design and implementation. Configured switches, routers, and wireless access points for optimal performance.',
      images: [
        process.env.PUBLIC_URL + '/portfolio/network-infrastructure/IMG_4751.jpg',
        process.env.PUBLIC_URL + '/portfolio/network-infrastructure/IMG_4752.jpg',
        process.env.PUBLIC_URL + '/portfolio/network-infrastructure/IMG_4753.jpg',
        process.env.PUBLIC_URL + '/portfolio/network-infrastructure/IMG_5134.jpg',
        process.env.PUBLIC_URL + '/portfolio/network-infrastructure/IMG_5135.jpg'
      ],
      technologies: ['Network Design', 'Cisco Equipment', 'Wireless Networks', 'Infrastructure'],
      github: null,
      demo: null,
      featured: false
    },
    {
      id: 5,
      title: 'Security Camera Installation',
      category: 'security-systems',
      description: 'Professional security camera system installation and configuration. Set up IP cameras with monitoring software and remote access capabilities.',
      images: [
        process.env.PUBLIC_URL + '/portfolio/security-systems/IMG_5458.jpg',
        process.env.PUBLIC_URL + '/portfolio/security-systems/IMG_5459.jpg',
        process.env.PUBLIC_URL + '/portfolio/security-systems/IMG_5719.jpg',
        process.env.PUBLIC_URL + '/portfolio/security-systems/IMG_5721.jpg'
      ],
      technologies: ['IP Cameras', 'Security Systems', 'Monitoring', 'Remote Access'],
      github: null,
      demo: null,
      featured: false
    },
    {
      id: 6,
      title: 'Network Equipment Configuration',
      category: 'equipment-config',
      description: 'Advanced network equipment configuration and optimization. Configured enterprise switches and routers for maximum performance and security.',
      images: [
        process.env.PUBLIC_URL + '/portfolio/equipment-config/IMG_4406.jpg',
        process.env.PUBLIC_URL + '/portfolio/equipment-config/IMG_4407.jpg',
        process.env.PUBLIC_URL + '/portfolio/equipment-config/IMG_4414.jpg',
        process.env.PUBLIC_URL + '/portfolio/equipment-config/IMG_4419.jpg',
        process.env.PUBLIC_URL + '/portfolio/equipment-config/IMG_4425.jpg',
        process.env.PUBLIC_URL + '/portfolio/equipment-config/IMG_4426.jpg',
        process.env.PUBLIC_URL + '/portfolio/equipment-config/IMG_4751.jpg',
        process.env.PUBLIC_URL + '/portfolio/equipment-config/IMG_4752.jpg',
        process.env.PUBLIC_URL + '/portfolio/equipment-config/IMG_4753.jpg',
        process.env.PUBLIC_URL + '/portfolio/equipment-config/IMG_5134.jpg',
        process.env.PUBLIC_URL + '/portfolio/equipment-config/IMG_5135.jpg'
      ],
      technologies: ['Network Equipment', 'Configuration', 'Optimization', 'Troubleshooting'],
      github: null,
      demo: null,
      featured: false
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Development' },
    { key: 'cable-management', label: 'Cable Management' },
    { key: 'server-setup', label: 'Server Setup' },
    { key: 'network-infrastructure', label: 'Network Infrastructure' },
    { key: 'security-systems', label: 'Security Systems' },
    { key: 'equipment-config', label: 'Equipment Config' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const getCategoryIcon = (category) => {
    const icons = {
      web: 'fas fa-globe',
      'cable-management': 'fas fa-plug',
      'server-setup': 'fas fa-server',
      'network-infrastructure': 'fas fa-network-wired',
      'security-systems': 'fas fa-shield-alt',
      'equipment-config': 'fas fa-cogs'
    };
    return icons[category] || 'fas fa-code';
  };

  const getCategoryColor = (category) => {
    const colors = {
      web: '#0077b5',
      'cable-management': '#28a745',
      'server-setup': '#6f42c1',
      'network-infrastructure': '#006241',
      'security-systems': '#dc3545',
      'equipment-config': '#fd7e14'
    };
    return colors[category] || '#333';
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
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
                onClick={() => handleProjectClick(project)}
              >
                <div className="portfolio-image">
                  <div className="image-placeholder" style={{ backgroundColor: getCategoryColor(project.category) }}>
                    <i className={getCategoryIcon(project.category)}></i>
                  </div>
                  {project.images && project.images.length > 0 && (
                    <img 
                      src={project.images[0]} 
                      alt={project.title}
                      className="portfolio-image-file"
                      onLoad={(e) => {
                        console.log('Image loaded successfully:', project.images[0]);
                        e.target.style.display = 'block';
                        e.target.nextElementSibling.style.display = 'none';
                      }}
                      onError={(e) => {
                        console.error('Image failed to load:', project.images[0]);
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                  )}
                  <div className="image-placeholder" style={{ backgroundColor: getCategoryColor(project.category), display: project.images && project.images.length > 0 ? 'none' : 'flex' }}>
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
              onClick={closeModal}
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
                  onClick={closeModal}
                >
                  <i className="fas fa-times"></i>
                </button>
                
                <div className="modal-content">
                  <div className="modal-image">
                    {selectedProject.images && selectedProject.images.length > 0 && (
                      <>
                        <img 
                          src={selectedProject.images[currentImageIndex]} 
                          alt={selectedProject.title}
                          className="modal-image-file"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextElementSibling.style.display = 'flex';
                          }}
                        />
                        
                        {/* Image Navigation Controls */}
                        {selectedProject.images.length > 1 && (
                          <>
                            <button className="image-nav-btn prev-btn" onClick={prevImage}>
                              <i className="fas fa-chevron-left"></i>
                            </button>
                            <button className="image-nav-btn next-btn" onClick={nextImage}>
                              <i className="fas fa-chevron-right"></i>
                            </button>
                            
                            {/* Image Counter */}
                            <div className="image-counter">
                              {currentImageIndex + 1} / {selectedProject.images.length}
                            </div>
                            
                            {/* Image Thumbnails */}
                            <div className="image-thumbnails">
                              {selectedProject.images.map((image, index) => (
                                <img
                                  key={index}
                                  src={image}
                                  alt={`${selectedProject.title} ${index + 1}`}
                                  className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                                  onClick={() => setCurrentImageIndex(index)}
                                />
                              ))}
                            </div>
                          </>
                        )}
                      </>
                    )}
                    <div className="image-placeholder" style={{ backgroundColor: getCategoryColor(selectedProject.category), display: selectedProject.images && selectedProject.images.length > 0 ? 'none' : 'flex' }}>
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