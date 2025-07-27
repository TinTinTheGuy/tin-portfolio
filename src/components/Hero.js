import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Hero.css';

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const stats = [
    { number: 50, label: 'Projects' },
    { number: 3, label: 'Years' },
    { number: 100, label: 'Cups of Coffee' }
  ];

  return (
    <section id="home" className="hero">
              <div className="hero-bg-elements">
          {['☕', '🏔️', '☕'].map((icon, index) => (
            <motion.div
              key={index}
              className={`floating-coffee-bean bean-${index + 1}`}
              animate={{ y: [-5, 5, -5] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: index * 1,
                ease: "easeInOut"
              }}
            >
              {icon}
            </motion.div>
          ))}
        </div>

      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="badge-text">Available for new projects</span>
            <motion.div 
              className="badge-dot"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <span className="coffee-text">Coffee</span>, 
            <span className="adventure-text">Adventure</span> & 
            <span className="network-text">Network</span>
          </motion.h1>

          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            IT Professional • Network Engineer • Coffee Enthusiast
          </motion.p>

          <motion.div 
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p>Building robust network infrastructures with the same precision I bring to every cup of coffee and every mountain trail.</p>
          </motion.div>

          <motion.div 
            className="hero-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="stat-item"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
          >
            <motion.a 
              href="#projects" 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View My Work</span>
              <i className="fas fa-arrow-right"></i>
            </motion.a>
            <motion.a 
              href="#about" 
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Learn More</span>
              <i className="fas fa-user"></i>
            </motion.a>
          </motion.div>

          <motion.div 
            className="hero-social"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
          >
            {['github', 'linkedin', 'twitter'].map((platform, index) => (
              <motion.a
                key={platform}
                href="#"
                className="social-link"
                title={platform.charAt(0).toUpperCase() + platform.slice(1)}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 + index * 0.1 }}
              >
                <i className={`fab fa-${platform}`}></i>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          className="coffee-cup-container"
          ref={ref}
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <CoffeeCup />
          <div className="coffee-particles">
            {[1, 2].map(i => (
              <motion.div
                key={i}
                className={`particle particle-${i}`}
                animate={{ 
                  y: [0, -20, -40],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  delay: i * 2,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
          <div className="hero-gradient"></div>
        </motion.div>
      </div>

      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="scroll-arrow"></div>
        <span className="scroll-text">Scroll to explore</span>
      </motion.div>
    </section>
  );
};

const CoffeeCup = React.memo(() => {
  return (
    <div className="coffee-cup">
      <motion.div 
        className="cup-body"
        animate={{ y: [-3, 3, -3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.div 
          className="coffee-liquid"
          animate={{ scaleY: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="coffee-foam"></div>
          <div className="coffee-bubbles">
            {[1, 2].map(i => (
              <motion.div
                key={i}
                className={`bubble bubble-${i}`}
                animate={{ 
                  y: [0, -20, -40],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  delay: i * 1,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>
        </motion.div>
        {[1, 2].map(i => (
          <motion.div
            key={i}
            className={`steam steam-${i}`}
            animate={{ 
              y: [0, -15, -30],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeOut"
            }}
          />
        ))}
      </motion.div>
      <div className="cup-handle"></div>
      <motion.div 
        className="coffee-tag"
        animate={{ rotate: [-2, 2, -2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="tag-content">
          <span className="tag-name">Tan Ton</span>
          <span className="tag-role">IT Professional</span>
        </div>
      </motion.div>
      <div className="cup-shadow"></div>
    </div>
  );
});

export default Hero; 