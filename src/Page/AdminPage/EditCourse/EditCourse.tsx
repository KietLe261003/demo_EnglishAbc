import React from 'react';
import { RiCloseLargeLine } from 'react-icons/ri';
const EditCourse: React.FC = () => {
  return (
    <div className='border mx-auto bg-white p-8 border-black rounded-xl w-full max-w-[800px] h-[880px]'>
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-2xl flex-1 text-center'>Edit Course</h2>
        <button className='ml-4'>
          <RiCloseLargeLine />
        </button>
      </div>

      <div className='mb-4 flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 items-center '>
        <p className='text-red-500 text-xl'>*</p>
        <input
          required
          type='text'
          className='flex-1 px-3 py-2 border border-black rounded-full bg-gray-100 placeholder:text-black'
          placeholder='Course Name'
        />
      </div>

      <div className='mb-4 flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 items-center'>
        <p className='text-red-500 text-xl'>*</p>
        <input
          required
          type='text'
          className='flex-1 px-3 py-2 border border-black rounded-full bg-gray-100 placeholder:text-black'
          placeholder='Date'
        />
        <p className='text-red-500 text-xl'>*</p>
        <input
          required
          type='text'
          className='flex-1 px-3 py-2 border border-black rounded-full bg-gray-100 placeholder:text-black'
          placeholder='Status'
        />
      </div>

      <div className='mb-4 flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 items-center'>
        <p className='text-red-500 text-xl'>*</p>
        <input
          required
          type='text'
          className='flex-1 px-3 py-2 border border-black rounded-full bg-gray-100 placeholder:text-black'
          placeholder='Start time'
        />
        <p className='text-red-500 text-xl'>*</p>
        <input
          required
          type='text'
          className='flex-1 px-3 py-2 border border-black rounded-full bg-gray-100 placeholder:text-black'
          placeholder='End time'
        />
      </div>

      <div className='flex justify-end mt-6 space-x-4'>
        <button className='bg-gray-600 text-white px-4 py-2 rounded-xl hover:bg-gray-400 transition duration-200'>
          Cancel
        </button>
        <button className='bg-green-700 text-black px-4 py-2 rounded-xl hover:bg-green-500 transition duration-200'>
          Save
        </button>
      </div>
    </div>
  );
};
export default EditCourse;
