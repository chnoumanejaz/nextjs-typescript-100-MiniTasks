import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

interface ButtonProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'danger';
  icon?: string;
  iconSide?: 'start' | 'end';
  showIcon?: boolean;
  onClick: () => void;
}

const BASE_CLASSNAMES: string =
  'px-4 py-2 border text-[0.95rem] flex gap-1 items-center rounded-md transition-all duration-300 hover:-translate-y-[2px] active:translate-y-0 hover:shadow-md';

interface ClassNames {
  primary: string;
  secondary: string;
  danger: string;
}

const classNames: ClassNames = {
  primary:
    BASE_CLASSNAMES +
    'border-violet-700 text-white bg-gradient-to-br from-violet-500 to-violet-400 hover:from-violet-600 hover:to-violet-400',
  secondary:
    BASE_CLASSNAMES +
    'border-gray-700 bg-gradient-to-br from-gray-200 to-white hover:from-gray-300 text-gray-700',
  danger:
    BASE_CLASSNAMES +
    'border-red-700 bg-gradient-to-br from-red-600 to-red-400 hover:from-red-700 hover:to-red-500 text-white',
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  title,
  icon = 'material-symbols:device-reset',
  iconSide,
  showIcon,
  variant = 'primary',
}) => {
  return (
    <button className={classNames[variant]} onClick={onClick}>
      {iconSide === 'start' && <Icon icon={icon} width={24} height={24} />}
      {showIcon && !iconSide && <Icon icon={icon} width={24} height={24} />}
      {title}
      {iconSide === 'end' && <Icon icon={icon} width={24} height={24} />}
    </button>
  );
};

export default Button;
