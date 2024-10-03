import { useEffect, useState } from "react";
import { IconWindowClose } from "../../../../Common/Icon/Icon";
import InputTypeString from "../../../../Components/Input/InputTypeString";
import InputDescription from "../../../../Components/Input/InputDescription";
import { User } from "../../../../Type/User/User";


interface CreateFormDocumentProps{
    openForm: boolean,
    setOpenForm: React.Dispatch<React.SetStateAction<boolean>>,
    content?: string,
    documentChoose?: User | null
}
const CreateFormDocument:React.FC<CreateFormDocumentProps> = ({openForm,setOpenForm,content="ADD NEWS ACCOUNT",documentChoose}) => {
  const [nameAccount, setNameAccount] = useState<string>(documentChoose?.fullname || "");
  const [email, setEmail] = useState<string>(documentChoose?.email || "");
  const [userName, setUserName] = useState<string>(documentChoose?.username || "");
  const [phoneNumber, setPhoneNumber] = useState<string>(documentChoose?.phone || "");
  const [password, setPassword] = useState<string>(documentChoose?.password || "");
  const [description,setDescription]=useState<string>(documentChoose?.desciption || "");
  
  const closeFormModal = () => {
    setOpenForm(false);
  };
  useEffect(() => {
    if (documentChoose) {
      setNameAccount(documentChoose.fullname || "");
      setEmail(documentChoose.email || "");
      setUserName(documentChoose.username || "");
      setPhoneNumber(documentChoose.phone || "");
      setPassword(documentChoose.password || "");
      setDescription(documentChoose.desciption || "");
    }
  }, [documentChoose]);
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
            <div className='grid place-items-center mx-2 my-20 sm:my-auto'>
              <div className='w-full'>
                <div className='flex justify-center text-black text-[30px] font-bold'>
                  {content}
                </div>
                <form className='mt-10' method='POST'>
                  <InputTypeString
                    title='Full Name'
                    content={nameAccount}
                    setContent={setNameAccount}
                    placeholder='Nhập tên người dùng'
                  />
                  <InputTypeString
                    title='Email'
                    content={email}
                    setContent={setEmail}
                    placeholder='Nhập email người dùng'
                  />
                  <div className='flex gap-2'>
                    <InputTypeString
                      title='Tên đăng nhập'
                      content={userName}
                      setContent={setUserName}
                      placeholder='Nhập tên Đăng nhập'
                    />
                    <InputTypeString
                      title='Phone Number'
                      content={phoneNumber}
                      setContent={setPhoneNumber}
                      placeholder='Nhập số điện thoại người dùng'
                    />
                  </div>
                  <InputTypeString
                    title='Mật khẩu'
                    content={password}
                    setContent={setPassword}
                    placeholder='Nhập mật khẩu'
                  />
                  <InputDescription
                    title='Mô tả mong muốn nếu có'
                    content={description}
                    setContent={setDescription}
                    placeholder='Mô tả về bản thân'
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

export default CreateFormDocument;
