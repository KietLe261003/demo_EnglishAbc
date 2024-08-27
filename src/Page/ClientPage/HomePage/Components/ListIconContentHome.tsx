import { IconChat } from "../../../../Common/Icon/Icon";
import {
  IconBook,
  IconLeaf,
  IconUser,
  IconVideo,
} from "../../../../Common/Icon/IconSlideBar";

function ListIconContentHome() {
  const listIcon = [
    {
      content: "Tài liệu miễn phí",
      icon: <IconLeaf width="3em" height="3em" />,
    },
    {
      content: "Tài liệu trả phí",
      icon: <IconBook width="3em" height="3em" />,
    },
    {
      content: "Khóa học online",
      icon: <IconVideo width="3em" height="3em" />,
    },
    {
      content: "Quản lý tài khoản",
      icon: <IconUser width="3em" height="3em" />,
    },
    {
      content: "Tư vấn miễn phí",
      icon: <IconChat width="3em" height="3em" />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:lg:xl:grid-cols-5 group ">
      {listIcon.map((item, index) => (
        <div
          key={index}
          className="p-10 flex flex-col items-center text-center group  hover:bg-slate-50 cursor-pointer"
        >
          <span className="p-5 rounded-full h-[125px] w-[125px] flex items-center justify-center bg-slate-400 text-black ">
            {item.icon}
          </span>
          <p
            className="text-xl font-normal text-slate-700 mt-6 w-[90px]"
          >
            {item.content}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ListIconContentHome;
