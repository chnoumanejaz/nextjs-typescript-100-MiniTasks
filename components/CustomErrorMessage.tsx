import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

import { motion } from 'framer-motion';
import { Button } from './ui/button';

interface CustomErrorMessageProps {
  message: string;
  subMessage?: string;
  query?: string;
  showResetBtn?: boolean;
  setQuery?: React.Dispatch<React.SetStateAction<string>>;
  resetMessage?: string;
}

const CustomErrorMessage: React.FC<CustomErrorMessageProps> = ({
  message,
  query,
  subMessage,
  setQuery,
  showResetBtn,
  resetMessage,
}) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-4 items-center mx-auto mt-8">
      <Icon icon="line-md:search" height={40} width={40} />

      <div className="flex flex-col gap-2 items-center mb-4">
        <h3 className="text-2xl">{message}</h3>
        <p className="text-sm text-gray-500">
          {subMessage} {query && `"${query}"`}
        </p>
      </div>

      {showResetBtn && (
        <Button onClick={() => setQuery?.('')}>
          {resetMessage ? resetMessage : 'Reset query'}
        </Button>
      )}
    </motion.div>
  );
};

export default CustomErrorMessage;
