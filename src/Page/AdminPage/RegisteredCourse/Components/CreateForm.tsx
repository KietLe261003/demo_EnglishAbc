import { useEffect, useState } from 'react';
import { IconWindowClose } from '../../../../Common/Icon/Icon';
import InputTypeString from '../../../../Components/Input/InputTypeString';
import InputDescription from '../../../../Components/Input/InputDescription';
import InputTypeDateTime from '../../../../Components/Input/InputTypeDateTime';
import { ResgiterCourse } from '../../../../Type/RegisteredCourse/RegisteredCourse';
import InputTypeSelect from '../../../../Components/Input/InputTypeSelect';

interface CreateFormResgiterCourseProps {
  openForm: boolean;
  setOpenForm: React.Dispatch<React.SetStateAction<boolean>>;
  content?: string;
  resgiterCourseChoose?: ResgiterCourse | null;
}
const CreateFormResgiterCourse: React.FC<CreateFormResgiterCourseProps> = ({
  openForm,
  setOpenForm,
  content = 'ADD NEWS ACCOUNT',
  resgiterCourseChoose,
}) => {
  const [nameUser, setNameUser] = useState<string>(
    resgiterCourseChoose?.nameUser || '',
  );
  const [phoneNumber, setPhoneNumber] = useState<string>(
    resgiterCourseChoose?.phoneNumber || '',
  );
  const [dayOfBirth, setDayOfBirth] = useState<string>(
    resgiterCourseChoose?.dayOfBirth || '',
  );
  const [gender, setGender] = useState<string>(
    resgiterCourseChoose?.gender || '',
  );
  const [email, setEmail] = useState<string>(resgiterCourseChoose?.email || '');
  const [note, setNote] = useState<string>(resgiterCourseChoose?.note || '');

  const closeFormModal = () => {
    setOpenForm(false);
  };
  const genderSelect = ['Nam', 'Nữ'];
  useEffect(() => {
    if (resgiterCourseChoose) {
      setNameUser(resgiterCourseChoose?.nameUser || '');
      setPhoneNumber(resgiterCourseChoose?.phoneNumber || '');
      setDayOfBirth(resgiterCourseChoose?.dayOfBirth || '');
      setGender(resgiterCourseChoose?.gender || '');
      setEmail(resgiterCourseChoose?.email || '');
      setNote(resgiterCourseChoose?.note || '');
    }
  }, [resgiterCourseChoose]);
  return (
    <>
      {openForm == true && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-white max-h-full rounded-3xl min-w-[800px] shadow-md lg:shadow-lg p-6 sm:p-10 relative'>
            <button
              className='absolute top-3 right-4 text-slate-600 text-xl hover:text-gray-500 focus:outline-none'
              onClick={closeFormModal}
            >
              <IconWindowClose />
            </button>
            <div className='grid place-items-center mx-2 my-20 max-h-[700px] sm:my-auto overflow-y-auto'>
              <div className='w-full'>
                <div className='flex justify-center text-black text-[30px] font-bold'>
                  {content}
                </div>
                <form className='mt-10' method='POST'>
                  <InputTypeString
                    title='Name User'
                    content={nameUser}
                    setContent={setNameUser}
                    placeholder='Tên của người dùng'
                  />
                  <InputTypeString
                    title='Số điện thoại'
                    content={phoneNumber}
                    setContent={setPhoneNumber}
                    placeholder='Số điện thoại người dùng'
                  />
                  <div className='flex gap-2'>
                    <InputTypeDateTime
                      title='Ngày sinh'
                      content={dayOfBirth}
                      setContent={setDayOfBirth}
                      placeholder='Ngày sinh của người dùng'
                    />
                    <InputTypeSelect
                      title='Giới tính'
                      content={gender}
                      setContent={setGender}
                      titleOption={genderSelect}
                    />
                  </div>
                  <InputTypeString
                    title='email'
                    content={email}
                    setContent={setEmail}
                    placeholder='email liên hệ'
                  />
                  <InputDescription
                    title='Mô tả chi tiết'
                    content={note}
                    setContent={setNote}
                    placeholder='Mô tả về feedback'
                  />
                  <div className='flex justify-end'>
                    <button
                      type='button'
                      className='
                          min-w-[110px] min-h-[26px] py-2 mt-3 mx-1 bg-[#ECEBE9] rounded-3xl
                          font-bold text-[#4F4B45] text-sm
                          focus:outline-none hover:bg-[#bdbcba] hover:shadow-none 
                      '
                    >
                      Cancel
                    </button>
                    <button
                      type='submit'
                      className='
                          min-w-[110px] min-h-[26px] py-2 mt-3 bg-[#FB9400] rounded-3xl
                          font-bold text-white text-sm
                          focus:outline-none
                          hover:bg-[#E07B00] hover:shadow-none shadow-lg
                          '
                    >
                      Add
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateFormResgiterCourse;
