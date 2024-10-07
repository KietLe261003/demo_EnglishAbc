import { RiCloseLargeLine } from 'react-icons/ri';
import { Course } from '../../../../Type/Course/Course';
interface CreateFormProps{
  openForm: boolean,
  setOpenForm: React.Dispatch<React.SetStateAction<boolean>>,
  content?: string,
  certificateChoose?: Course | null
}
const AddNewCourse: React.FC<CreateFormProps> = ({openForm,setOpenForm}) => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    openForm &&
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
      <div className='border mx-auto bg-white p-8 border-black rounded-xl w-full max-w-[900px] h-auto'>
        <div className='flex justify-between items-center mb-6'>
          <h2 className='text-2xl flex-1 text-center'>ADD NEWS COURSE</h2>
          <button className='ml-4' onClick={()=>{setOpenForm(false)}}>
            <RiCloseLargeLine />
          </button>
        </div>
        <div className='space-y-10'>
          <div className='mb-4'>
            <div className='flex space-x-3'>
              <label>
                News name <span className='text-red-500 text-xl'>*</span>
              </label>
            </div>
            <input
              required
              type='text'
              className='w-full px-3 py-2 border border-black rounded-full bg-gray-100'
            />
          </div>
          <div className='mb-4'>
            <div className='flex space-x-3'>
              <label>
                News detail <span className='text-red-500 text-xl'>*</span>
              </label>
            </div>
            <textarea
              required
              className='w-full px-3 py-2 border border-black rounded-xl resize-none bg-gray-100'
              rows={8}
            />
          </div>
          <div className='flex space-x-6 mb-4'>
            <div className='w-1/2 pr-4'>
              <label className='block mb-1'>
                Time start <span className='text-red-500 text-xl'>*</span>
              </label>
              <input
                required
                type='text'
                className='w-full px-3 py-2 border border-black rounded-2xl bg-gray-100'
              />
            </div>
            <div className='w-1/2 pr-4'>
              <label className='block mb-1'>
                Time end <span className='text-red-500 text-xl'>*</span>
              </label>
              <input
                required
                type='text'
                className='w-full px-3 py-2 border border-black rounded-2xl bg-gray-100'
              />
            </div>
          </div>
          <div className='flex justify-between mb-6'>
            <div className='w-1/2 pr-4'>
              <label className='block mb-1'>Author</label>
              <input
                required
                type='text'
                className='w-full px-3 py-2 border border-black rounded-2xl bg-gray-100'
              />
            </div>
            <div className='flex flex-col justify-between space-y-2'>
              <button
                onClick={handleClick}
                className='bg-orange-700 font-bold text-white px-10 py-2 rounded-full shadow-md hover:bg-orange-500 transition duration-200'
              >
                Add
              </button>
              <button
                onClick={handleClick}
                className='bg-gray-600 font-bold text-white px-14 py-2 rounded-full shadow-md hover:bg-gray-400 transition duration-200'
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewCourse;
