import { useEffect, useState } from 'react';
import { IconWindowClose } from '../../../../Common/Icon/Icon';
import InputTypeString from '../../../../Components/Input/InputTypeString';
import InputDescription from '../../../../Components/Input/InputDescription';
import { FeedBack } from '../../../../Type/FeedBack/FeedBack';
import InputTypeDateTime from '../../../../Components/Input/InputTypeDateTime';

interface CreateFormFeedBackProps {
  openForm: boolean;
  setOpenForm: React.Dispatch<React.SetStateAction<boolean>>;
  content?: string;
  feedBackChoose?: FeedBack | null;
}
const CreateFormFeedBack: React.FC<CreateFormFeedBackProps> = ({
  openForm,
  setOpenForm,
  content = 'ADD NEWS ACCOUNT',
  feedBackChoose,
}) => {
  const [nameUser, setNameUser] = useState<string>(
    feedBackChoose?.nameUser || '',
  );
  const [nameFeedBack, setNameFeedBack] = useState<string>(
    feedBackChoose?.name || '',
  );
  const [description, setDescription] = useState<string>(
    feedBackChoose?.description || '',
  );
  const [timeFeedBack, setTimeFeedBack] = useState<string>(
    feedBackChoose?.timeFeedBack || '',
  );

  const closeFormModal = () => {
    setOpenForm(false);
  };
  useEffect(() => {
    if (feedBackChoose) {
      setNameUser(feedBackChoose?.nameUser || '');
      setNameFeedBack(feedBackChoose?.name || '');
      setDescription(feedBackChoose?.description || '');
      setTimeFeedBack(feedBackChoose?.timeFeedBack || '');
    }
  }, [feedBackChoose]);
  return (
    <>
      {openForm && (
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
                    placeholder='Tên của người dùng gửi feedback'
                  />
                  <InputTypeString
                    title='Name FeedBack'
                    content={nameFeedBack}
                    setContent={setNameFeedBack}
                    placeholder='Nội dung chính của feedback'
                  />

                  <InputDescription
                    title='Mô tả chi tiết'
                    content={description}
                    setContent={setDescription}
                    placeholder='Mô tả về feedback'
                  />
                  <InputTypeDateTime
                    title='Thời gian gửi'
                    content={timeFeedBack}
                    setContent={setTimeFeedBack}
                    placeholder='Thời gian gửi'
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

export default CreateFormFeedBack;
