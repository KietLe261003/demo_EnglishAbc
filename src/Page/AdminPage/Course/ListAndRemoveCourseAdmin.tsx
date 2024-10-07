import React, { useState } from 'react';
import Confirm from './Components/Confirm';
import { FaAngleDown, FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';
import clsx from 'clsx';
import AddNewCourse from './Components/AddNewCourse';

interface Course {
  id: string;
  name: string;
  date: string;
  status: string;
}
const courses: Course[] = [
  {
    id: '#18933',
    name: 'Grammar explanation',
    date: '20/03/2003',
    status: 'Active',
  },
  {
    id: '#18933',
    name: 'Grammar explanation',
    date: '20/03/2003',
    status: 'Active',
  },
  {
    id: '#18933',
    name: 'Grammar explanation',
    date: '20/03/2003',
    status: 'Active',
  },
  {
    id: '#18933',
    name: 'Grammar explanation',
    date: '20/03/2003',
    status: 'Active',
  },
  // Repeat the data as needed
];

const ListAndRemoveCourseAdmin: React.FC = () => {
  const [detailForm, setDetailForm] = useState<boolean>(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const handleDelete = (course: Course) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  const confirmDelete = () => {
    console.log('Deleted:', selectedCourse);
    setShowModal(false);
  };

  return (
    <div className='p-4'>
      <div className='flex justify-between'>
        <h1 className='text-xl font-bold mb-4'>Course</h1>
        <div className='flex justify-end items-center mb-4 gap-6'>
          <button className='bg-orange-700 text-white py-2 px-4 rounded flex justify-start items-center'>
            Status
            <FaAngleDown className='ml-2' />
          </button>
          <button
            className='bg-orange-700 text-white py-2 px-4 rounded'
            onClick={() => {
              setDetailForm(true);
            }}
          >
            Add Course
          </button>
        </div>
      </div>
      <table className='w-full bg-white rounded shadow text-black'>
        <thead className='bg-orange-300'>
          <tr>
            <th className='p-2'>ID</th>
            <th className='p-2'>Name</th>
            <th className='p-2'>Date</th>
            <th className='p-2'>Status</th>
            <th className='p-2'>Action</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr
              key={index}
              className={clsx(
                'text-center',
                index % 2 === 0 ? 'bg-gray-500' : 'bg-white',
              )}
            >
              <td className='p-2'>{course.id}</td>
              <td className='p-2'>{course.name}</td>
              <td className='p-2'>{course.date}</td>
              <td className='p-2'>{course.status}</td>
              <td className='p-2'>
                <button className='text-blue-500 mx-2'>
                  <FaRegEdit />
                </button>
                <button
                  className='text-red-500 mx-2'
                  onClick={() => handleDelete(course)}
                >
                  <FaRegTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Sử dụng component Confirm */}
      <Confirm
        show={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={confirmDelete}
      />
      <AddNewCourse openForm={detailForm} setOpenForm={setDetailForm} />
    </div>
  );
};

export default ListAndRemoveCourseAdmin;
