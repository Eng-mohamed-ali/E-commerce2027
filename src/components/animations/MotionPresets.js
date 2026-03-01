// Spring physics for premium feel
export const springConfig = {
  type: 'spring',
  stiffness: 100,
  damping: 20,
  mass: 1,
};

export const softSpring = {
  type: 'spring',
  stiffness: 80,
  damping: 15,
};

export const bouncySpring = {
  type: 'spring',
  stiffness: 150,
  damping: 12,
};

// Fade animations
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.3, ease: 'easeIn' }
  }
};

// Slide up animations
export const slideUp = {
  hidden: { 
    opacity: 0, 
    y: 20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: 'spring',
      stiffness: 80,
      damping: 15,
      mass: 1
    }
  }
};

export const slideDown = {
  hidden: { 
    opacity: 0, 
    y: -20 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: springConfig
  }
};

export const slideInLeft = {
  hidden: { 
    opacity: 0, 
    x: -30 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: springConfig
  }
};

export const slideInRight = {
  hidden: { 
    opacity: 0, 
    x: 30 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: springConfig
  }
};

// Scale animations
export const scaleIn = {
  hidden: { 
    opacity: 0, 
    scale: 0.95 
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: springConfig
  }
};

// Hover effects - THESE ARE THE ONES YOU NEED
export const scaleHover = {
  whileHover: { 
    scale: 1.05,
    transition: springConfig
  },
  whileTap: { 
    scale: 0.95,
    transition: springConfig
  }
};

export const buttonHover = {
  whileHover: { 
    scale: 1.05,
    transition: springConfig
  },
  whileTap: { 
    scale: 0.95,
    transition: springConfig
  }
};

export const iconHover = {
  whileHover: { 
    scale: 1.2,
    rotate: 5,
    transition: springConfig
  },
  whileTap: { 
    scale: 0.9,
    transition: springConfig
  }
};

export const cardHover = {
  whileHover: { 
    y: -8,
    boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.15)',
    transition: springConfig
  }
};

export const navLinkHover = {
  whileHover: { 
    x: 4,
    transition: springConfig
  }
};

// Stagger container
export const staggerContainer = (staggerTime = 0.1) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: staggerTime,
      delayChildren: 0.2,
    },
  },
});

// Page transition
export const pageTransition = {
  initial: { 
    opacity: 0,
    y: 20 
  },
  animate: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut'
    }
  },
  exit: { 
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: 'easeIn'
    }
  }
};

// Floating animation
export const floatAnimation = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

// Pulse animation
export const pulseAnimation = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.6, 0.8, 0.6],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
};

// Mobile menu animation
export const mobileMenu = {
  hidden: { 
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: 'easeInOut'
    }
  },
  visible: { 
    opacity: 1,
    height: 'auto',
    transition: {
      duration: 0.4,
      ease: 'easeOut',
      staggerChildren: 0.1
    }
  }
};

// List item animation
export const listItem = {
  hidden: { 
    opacity: 0, 
    x: -10 
  },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.1,
      ...springConfig
    }
  })
};

// Modal animations
export const modalOverlay = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.2 }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.2 }
  }
};

export const modalContent = {
  hidden: { 
    opacity: 0,
    scale: 0.95,
    y: 20
  },
  visible: { 
    opacity: 1,
    scale: 1,
    y: 0,
    transition: springConfig
  },
  exit: { 
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: { duration: 0.2 }
  }
};

// Gradient animation
export const gradientMove = {
  animate: {
    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: 'linear'
    }
  }
};