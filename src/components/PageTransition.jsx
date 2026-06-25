import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 8,
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 1, 0.5, 1], // Custom smooth easeOut
    }
  },
  out: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.3,
      ease: [0.25, 1, 0.5, 1],
    }
  }
};

export default function PageTransition({ children }) {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  );
}
