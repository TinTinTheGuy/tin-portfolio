import React from 'react';
import { motion } from 'framer-motion';
import CoffeeParticles from './CoffeeParticles';
import './Drinks.css';

const Drinks = () => {
  return (
    <section id="drinks" className="drinks-section">
      <CoffeeParticles count={2} />
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Starbucks Favorites ☕
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          Fueling creativity one cup at a time
        </motion.p>
        
        <div className="drinks-grid">
          <motion.div 
            className="drink-card featured"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="drink-icon">
              <i className="fas fa-bolt"></i>
            </div>
            <h3>Triple Espresso</h3>
            <p>With salted caramel foam and classic syrup - my power drink for intense coding marathons</p>
            <div className="drink-tags">
              <span>Strong</span>
              <span>Caramel</span>
              <span>Power</span>
            </div>
            <div className="drink-rating">
              <span className="stars">⭐⭐⭐⭐⭐</span>
              <span className="featured-badge">FAVORITE</span>
            </div>
          </motion.div>

          <motion.div 
            className="drink-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="drink-icon">
              <i className="fas fa-leaf"></i>
            </div>
            <h3>Matcha Latte</h3>
            <p>Smooth and creamy with a perfect balance of sweetness and earthy matcha flavor</p>
            <div className="drink-tags">
              <span>Green</span>
              <span>Creamy</span>
              <span>Healthy</span>
            </div>
            <div className="drink-rating">
              <span className="stars">⭐⭐⭐⭐⭐</span>
            </div>
          </motion.div>

          <motion.div 
            className="drink-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="drink-icon">
              <i className="fas fa-heart"></i>
            </div>
            <h3>Pink Drink</h3>
            <p>Refreshing coconut milk with strawberry acai and a splash of passion fruit</p>
            <div className="drink-tags">
              <span>Refreshing</span>
              <span>Pink</span>
              <span>Summer</span>
            </div>
            <div className="drink-rating">
              <span className="stars">⭐⭐⭐⭐⭐</span>
            </div>
          </motion.div>

          <motion.div 
            className="drink-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="drink-icon">
              <i className="fas fa-star"></i>
            </div>
            <h3>Caramel Macchiato</h3>
            <p>Rich espresso with steamed milk and caramel drizzle - a classic favorite</p>
            <div className="drink-tags">
              <span>Classic</span>
              <span>Caramel</span>
              <span>Smooth</span>
            </div>
            <div className="drink-rating">
              <span className="stars">⭐⭐⭐⭐⭐</span>
            </div>
          </motion.div>

          <motion.div 
            className="drink-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="drink-icon">
              <i className="fas fa-snowflake"></i>
            </div>
            <h3>Iced White Mocha</h3>
            <p>Cool and creamy with white chocolate and espresso - perfect for hot days</p>
            <div className="drink-tags">
              <span>Iced</span>
              <span>Chocolate</span>
              <span>Creamy</span>
            </div>
            <div className="drink-rating">
              <span className="stars">⭐⭐⭐⭐⭐</span>
            </div>
          </motion.div>

          <motion.div 
            className="drink-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="drink-icon">
              <i className="fas fa-tint"></i>
            </div>
            <h3>Nitro Cold Brew</h3>
            <p>Smooth and creamy cold brew with nitrogen for a velvety texture</p>
            <div className="drink-tags">
              <span>Nitro</span>
              <span>Smooth</span>
              <span>Strong</span>
            </div>
            <div className="drink-rating">
              <span className="stars">⭐⭐⭐⭐⭐</span>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="drinks-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p>"Life is short, make it sweet with the perfect cup of coffee" ☕</p>
          <div className="drink-stats">
            <div className="drink-stat">
              <span className="stat-number">6</span>
              <span className="stat-label">Favorite Drinks</span>
            </div>
            <div className="drink-stat">
              <span className="stat-number">365</span>
              <span className="stat-label">Cups Per Year</span>
            </div>
            <div className="drink-stat">
              <span className="stat-number">5</span>
              <span className="stat-label">Star Ratings</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Drinks; 