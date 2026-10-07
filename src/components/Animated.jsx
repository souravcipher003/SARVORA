import React from 'react'
import { motion } from 'motion/react'

const Animated = ({
  children,
  className = '',
  delay = 0,
  y = 0,
  scale = 1,
  onMouseEnter,
}) => {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y,
        scale,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay,
        ease: 'easeOut',
      }}
      onMouseEnter={onMouseEnter}
    >
      {children}
    </motion.div>
  )
}

export default Animated
