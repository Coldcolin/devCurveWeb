import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SlideInWhenInViewRight = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: false, // Only trigger the animation once
    threshold: 0.2, // Adjust this value based on your needs
  });

  const variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: 100 }, // Adjust the initial position as needed
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.5 }} // Adjust the duration as needed
    >
      {children}
    </motion.div>
  );
};

export default SlideInWhenInViewRight;