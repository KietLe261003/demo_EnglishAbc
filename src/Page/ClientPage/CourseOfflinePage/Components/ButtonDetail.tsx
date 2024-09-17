import React from 'react';
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'outline' | 'icon' | 'border';
  bg_color?: string;
  isSmall?: boolean;
}

const ButtonDetail: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
  variant = 'primary',
  bg_color,
  isSmall=false
}) => {
  let className = `flex items-center justify-center rounded-full  ${ bg_color || 'bg-[#FB9400]'} `;
  // Apply variant-specific classes
  switch (variant) {
    case 'primary':
      className += 'text-white bg-[#FB9400] hover:bg-[#e68a00]';
      break;
    case 'secondary':
      className +=
        'text-gray-700 bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100';
      break;
    default:
      break;
  }
  switch (isSmall) {
    case true:
      className+=' w-[150px]'
      break;
    case false:
      className+=' w-[300px] 3xl:w-[400px]'
      break;
    default:
      break;
  }


  return (
    <button className={`${className} max-w-[400px] py-4 text-lg font-medium`} onClick={onClick} disabled={disabled}>
      <span className='flex-1 text-center'>{children}</span>
    </button>
  );
};

export default ButtonDetail;
