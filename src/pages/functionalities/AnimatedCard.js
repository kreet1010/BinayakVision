// src/components/AnimatedCard.js
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedCard = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,  
    threshold: 0.2,     
  });

  return (
    <motion.div
    ref={ref}
    initial={{ opacity: 0.5, x: -100 }}
    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0.5, x: -100 }}
    transition={{ duration: 1, delay: 0.45 }}
  >
    {children}
  </motion.div>
  
  );
};

export default AnimatedCard;
