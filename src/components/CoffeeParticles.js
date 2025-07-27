import React from 'react';
import { motion } from 'framer-motion';
import './CoffeeParticles.css';

const CoffeeParticles = ({ count = 3, className = "" }) => {
  const particles = ['☕', '🏔️', '☕', '🌿', '☕'];
  
  return (
    <div className={`coffee-particles-container ${className}`}>
      {particles.slice(0, count).map((icon, index) => (
        <motion.div
          key={index}
          className={`floating-particle particle-${index + 1}`}
          animate={{ 
            y: [-8, 8, -8],
            x: [-3, 3, -3],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 10 + index * 2,
            repeat: Infinity,
            delay: index * 1.5,
            ease: "easeInOut"
          }}
        >
          {icon}
        </motion.div>
      ))}
    </div>
  );
};

export default CoffeeParticles; 