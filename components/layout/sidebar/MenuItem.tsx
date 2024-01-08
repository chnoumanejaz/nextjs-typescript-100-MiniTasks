import React from 'react';
import { motion } from 'framer-motion';
import { MenuItemVariants } from '@/lib/framer-variants';

interface MenuItemProps {
  className?: string;
  children?: React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({ children, className }) => {
  return (
    <motion.li variants={MenuItemVariants} className={className}>
      {children}
    </motion.li>
  );
};

export default MenuItem;
