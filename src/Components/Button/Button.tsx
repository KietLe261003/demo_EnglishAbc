import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'outline' | 'icon';
  icon?: React.ReactNode;
  bg_color?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, disabled, variant = 'primary', icon, bg_color }) => {
  let className = `px-4 py-2 rounded-[30px] ${bg_color || 'bg-[#FB9400]'} space-x-4 flex items-center `;

  switch (variant) {
    case 'primary':
      className += 'text-white ';
      break;
    case 'secondary':
      className += 'text-gray-700 bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 ';
      break;
    case 'outline':
      className += 'text-[#FB9400] border border-[#FB9400] hover:bg-[#FB9400] hover:text-white disabled:border-gray-300 disabled:text-gray-300 ';
      break;
    case 'icon':
      className += 'p-2 text-gray-700 bg-transparent hover:bg-gray-200 disabled:text-gray-400 ';
      break;
    default:
      break;
  }

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
      {icon && <span className="ml-2">{icon}</span>} {}
    </button>
  );
};

export default Button;
