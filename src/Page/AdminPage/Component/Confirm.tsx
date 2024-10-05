import React from 'react';
import { FiX } from 'react-icons/fi';
import Button from '../../../Components/Button/Button';

interface ConfirmProps {
  show: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const Confirm: React.FC<ConfirmProps> = ({ show, onClose, onConfirm }) => {
  if (!show) return null;
  return (
    <div className='fixed inset-0 flex items-center justify-center'>
      <div className='bg-orange-200 p-6 rounded-3xl shadow-md text-center w-full max-w-[500px] h-auto md:h-[400px] flex justify-center'>
        <div className='w-full max-w-[400px]'>
          <div className='flex justify-end mb-4'>
            <button onClick={onClose}>
              <FiX />
            </button>
          </div>
          <div className='flex justify-center mb-4 bg-orange-300 rounded-xl font-bold'>
            <p className='text-xl md:text-2xl m-4 md:m-8'>
              Bạn có thật sự muốn xóa chứng chỉ này không?
            </p>
          </div>
          <div className='flex justify-end space-x-4'>
            <Button onClick={onConfirm} size='large' variant='secondary'>
              Hủy
            </Button>
            <Button onClick={onConfirm} size='large' variant='primary'>
              Xóa
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
