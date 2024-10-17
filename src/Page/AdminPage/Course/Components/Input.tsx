import React from 'react';

interface InputProps {
  label: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  type = 'text',
  onChange,
  required = false,
  className = '',
}) => {
  return (
    <div className={`mb-4 ${className}`}>
      <label className='block mb-1'>
        {label} {required && <span className='text-red-500 text-xl'>*</span>}
      </label>
      <input
        type={type}
        onChange={onChange}
        required={required}
        className='w-full px-3 py-2 border border-black rounded-2xl bg-gray-100'
      />
    </div>
  );
};

export default Input;
