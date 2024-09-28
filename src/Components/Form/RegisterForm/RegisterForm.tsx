import React, {useState } from 'react';
import { IconArrowRight, IconWindowClose } from '../../../Common/Icon/Icon';
import { UserLogup } from '../../../Type/UserLogup';
import CardTitleComponent from '../CardTitleComponent';
import { responseUser } from '../../../Type/ResponseUser';
import { userServices } from '../../../Services/UserService';
import Button from '../../Button/Button';
interface RegisterFormProps{
  openForm: number,
  setOpenForm: React.Dispatch<React.SetStateAction<number>>
}
const RegisterForm:React.FC<RegisterFormProps> = ({openForm,setOpenForm}) => {
  const [fullName,setFullName]=useState<string>("");
  const [userName,setUserName]=useState<string>("");
  const [email,setEmail]=useState<string>("");
  const [phone,setPhone]=useState<string>("");
  const [password,setPassword]=useState<string>("");
  const [description,setDescription]=useState<string>("");
  const closeForm = () => {
    setOpenForm(0);
  };
  const Register = async ()=>{
    const newUser:UserLogup={
      username: userName,
      fullname: fullName,
      email: email,
      phone: phone,
      password: password,
      description: description
    }
    const responuser:responseUser = await userServices.createUser(newUser);
    if(responuser.code===0)
      setOpenForm(3);
    else 
      alert("Đăng ký thất bại");
  }
  return (
    <>
      {openForm==2 && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-white max-h-full rounded-3xl shadow-md lg:shadow-lg p-6 sm:p-10 relative'>
            <button
              className='absolute top-3 right-4 text-slate-600 text-xl hover:text-gray-500 focus:outline-none'
              onClick={closeForm}
            >
              <IconWindowClose />
            </button>
            {/* Auth Card Container */}
            <div className='grid place-items-center mx-2 my-20 sm:my-auto'>
              {/* Auth Card */}
              <div>
                <CardTitleComponent
                  content='Để lại thông tin'
                  description='G-Easy sẽ liên hệ với bạn sớm nhất có thể'
                />
                <div>
                  <div className='mt-5 font-medium'>Họ và tên</div>
                  <form className='mt-2' method='POST'>
                    {/* Email Input */}
                    <label
                      htmlFor='email'
                      className='block text-xs font-semibold text-gray-600 uppercase'
                    ></label>
                    <input
                      id='account'
                      type='account'
                      name='account'
                      autoComplete='account'
                      onChange={(e) => {
                        setFullName(e.target.value);
                      }}
                      className='block w-full py-1.5 px-1 mt-2  text-gray-800 appearance-none border rounded-xl border-[#9E988F] focus:text-gray-500 focus:outline-none focus:border-[#9E988F]'
                      required
                    />
                  </form>
                </div>
                <div>
                  <div className='mt-3 font-medium'>Tên đăng nhập</div>
                  <form className='mt-2' method='POST'>
                    {/* Email Input */}
                    <label
                      htmlFor='email'
                      className='block text-xs font-semibold text-gray-600 uppercase'
                    ></label>
                    <input
                      id='account'
                      type='account'
                      name='account'
                      autoComplete='account'
                      onChange={(e) => {
                        setUserName(e.target.value);
                      }}
                      className='
                    block w-full py-1.5 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border rounded-xl border-[#9E988F]
                    focus:text-gray-500 focus:outline-none focus:border-[#9E988F]
                  '
                      required
                    />
                  </form>
                </div>
                <div>
                  <div className='mt-3 font-medium'>Mật khẩu</div>
                  <form className='mt-2' method='POST'>
                    {/* Email Input */}
                    <label
                      htmlFor='email'
                      className='block text-xs font-semibold text-gray-600 uppercase'
                    ></label>
                    <input
                      id='account'
                      type='account'
                      name='account'
                      autoComplete='account'
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      className='
                    block w-full py-1.5 px-1 mt-2 
                    text-gray-800 appearance-none 
                    border rounded-xl border-[#9E988F]
                    focus:text-gray-500 focus:outline-none focus:border-[#9E988F]
                  '
                      required
                    />
                  </form>
                </div>
                <div className='flex'>
                  <div>
                    <div className='mt-3 font-medium'>Email</div>
                    <div className='relative flex items-center'>
                      <input
                        id='email'
                        type='email'
                        name='email'
                        autoComplete='current-email'
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                        className='
                        block w-[260px] py-1.5 px-4 pr-10 mt-2
                        text-gray-800 appearance-none 
                        border rounded-xl border-[#9E988F]
                        focus:text-gray-500 focus:outline-none focus:border-[#9E988F]
                        '
                        required
                      />
                    </div>
                  </div>
                  <div className='ml-5 font-medium'>
                    <div className='mt-3 ml-'>Số điện thoại </div>
                    <div className='relative flex items-center'>
                      <input
                        id='tel'
                        type='tel'
                        name='tel'
                        autoComplete='current-number'
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                        className='
                        block w-[260px] py-1.5 px-4 pr-10 mt-2
                        text-gray-800 appearance-none 
                        border rounded-xl border-[#9E988F]
                        focus:text-gray-500 focus:outline-none focus:border-[#9E988F]
                        '
                        required
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className='mt-3 font-medium'>
                    Hãy cho G-Easy biết bạn cần gì nhé!
                  </div>
                  <div className='relative flex items-center'>
                    <input
                      id='mess'
                      type='mess'
                      name='mess'
                      autoComplete='current-mess'
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                      className='
                        block w-full py-8 px-4 pr-10 mt-2
                        text-gray-800 appearance-none 
                        border rounded-xl border-[#9E988F]
                        focus:text-gray-500 focus:outline-none focus:border-[#9E988F]
                        '
                      //  rows={4}
                      // autoComplete="off"
                      required
                    />
                  </div>
                </div>
                <div className='flex justify-end items-center mt-3 gap-3'>
                  <Button variant='secondary'>Đăng nhập</Button>
                  <Button 
                    onClick={Register}  
                  >
                    <div className='flex justify-center items-center'>
                      <div className='mt-1'>Gửi yêu cầu</div>
                      <IconArrowRight/>
                    </div>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RegisterForm;
