import React, { useRef } from 'react';
import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion';

export default function TiltCard({ children, className = "", style = {} }) {
  const cardRef = useRef(null);
  
  // Motion values for mouse coordinates
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Sophisticated, heavily-damped luxury springs (max 6 degrees tilt)
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 100, damping: 25 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 100, damping: 25 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    // Normalize coordinates to range [-0.5, 0.5]
    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1200,
        ...style
      }}
      className={`glass-card glass-card-hover ${className}`}
    >
      <div style={{ transform: "translateZ(8px)", transformStyle: "preserve-3d" }}>
        {children}
      </div>
    </motion.div>
  );
}
