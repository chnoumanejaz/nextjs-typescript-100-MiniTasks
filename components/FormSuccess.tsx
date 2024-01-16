import { CheckCircledIcon } from '@radix-ui/react-icons';

import React from 'react';
interface FormSuccessProps {
  message?: string;
}

const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) return null;

  return (
    <div className="bg-emerald-500/20 p-3 rounded-md flex items-center gap-x-2 text-sm text-emerald-700">
      <CheckCircledIcon className="h-4 w-4" />
      <p>{message}</p>{' '}
    </div>
  );
};

export default FormSuccess;
