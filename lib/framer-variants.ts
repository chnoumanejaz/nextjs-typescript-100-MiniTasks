// All the variants used for the animations using framer motion

export const sidebar = {
  open: {
    clipPath: `circle(2500px at 100% 0)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  },

  closed: {
    clipPath: 'circle(0px at 100% 0)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

export const ulVariants = {
  open: {
    transition: { staggerChildren: 0.02, delayChildren: 0.15 },
  },
  closed: {
    transition: { staggerChildren: 0.01, staggerDirection: -1 },
  },
};

export const MenuItemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: { y: { stiffness: 1000, velocity: -100 } },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
      duration: 0.02,
    },
  },
};
