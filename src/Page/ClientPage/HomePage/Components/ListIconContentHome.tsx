import { IconChat } from '../../../../Common/Icon/Icon';
import {
  IconBook,
  IconLeaf,
  IconUser,
  IconVideo,
} from '../../../../Common/Icon/IconSlideBar';

function ListIconContentHome() {
  const listIcon = [
    {
      content: 'Tài liệu miễn phí',
      icon: <IconLeaf width='3em' height='3em' />,
    },
    {
      content: 'Tài liệu trả phí',
      icon: <IconBook width='3em' height='3em' />,
    },
    {
      content: 'Khóa học online',
      icon: <IconVideo width='3em' height='3em' />,
    },
    {
      content: 'Quản lý tài khoản',
      icon: <IconUser width='3em' height='3em' />,
    },
    {
      content: 'Tư vấn miễn phí',
      icon: <IconChat width='3em' height='3em' />,
    },
  ];

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mx-auto'>
      {listIcon.map((item, index) => (
        <div
          key={index}
          className='p-5 flex flex-col items-center text-center hover:bg-slate-50 cursor-pointer transition duration-200'
        >
          <span className='p-5 rounded-full h-[100px] w-[100px] flex items-center justify-center bg-slate-400 text-black'>
            {item.icon}
          </span>
          <p className='text-base sm:text-lg font-normal text-slate-700 mt-4'>
            {item.content}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ListIconContentHome;
