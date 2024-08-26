import React from "react";
import logosvg from "../../../Assets/Image/Vector 8.svg";
import img from "../../../Assets/Image/BoyWithLaptop.svg";

const Sidebar: React.FC = () => {
  const menuItems = [
    {
      name: "Trang chủ",
      href: "#home",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 17v-5.548c0-.534 0-.801-.065-1.05a2 2 0 0 0-.28-.617c-.145-.213-.345-.39-.748-.741l-4.8-4.2c-.746-.653-1.12-.98-1.54-1.104c-.37-.11-.764-.11-1.135 0c-.42.124-.792.45-1.538 1.102L5.093 9.044c-.402.352-.603.528-.747.74a2 2 0 0 0-.281.618C4 10.65 4 10.918 4 11.452V17c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.082 1.083C5.602 20 6.068 20 7 20s1.398 0 1.766-.152a2 2 0 0 0 1.082-1.083C10 18.398 10 17.932 10 17v-1a2 2 0 1 1 4 0v1c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.082 1.083C15.602 20 16.068 20 17 20s1.398 0 1.766-.152a2 2 0 0 0 1.082-1.083C20 18.398 20 17.932 20 17"
          ></path>
        </svg>
      ),
    },
    {
      name: "Tài liệu miễn phí",
      href: "#about",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 256 256"
        >
          <path
            fill="currentColor"
            d="M223.45 40.07a8 8 0 0 0-7.52-7.52C139.8 28.08 78.82 51 52.82 94a87.1 87.1 0 0 0-12.76 49c.57 15.92 5.21 32 13.79 47.85l-19.51 19.5a8 8 0 0 0 11.32 11.32l19.5-19.51C81 210.73 97.09 215.37 113 215.94q1.67.06 3.33.06A86.93 86.93 0 0 0 162 203.18c43-26 65.93-86.97 61.45-163.11m-69.7 149.43c-22.75 13.78-49.68 14-76.71.77l88.63-88.62a8 8 0 0 0-11.32-11.32L65.73 179c-13.19-27-13-54 .77-76.71c22.09-36.47 74.6-56.44 141.31-54.06c2.39 66.66-17.59 119.18-54.06 141.27"
          ></path>
        </svg>
      ),
    },
    {
      name: "Tài liệu trả phí",
      href: "#contact",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M7.345 2.634q.136.069.268.145L8 3l.387-.221q.133-.076.268-.145a6.7 6.7 0 0 1 6.052-.03c.486.242.793.74.793 1.283v8.938c0 .65-.526 1.175-1.175 1.175h-.04c-.187 0-.37-.05-.529-.146a4.8 4.8 0 0 0-4.61-.177l-.199.1A2.1 2.1 0 0 1 8 14h-.117a1.6 1.6 0 0 1-.726-.171l-.233-.117a4.94 4.94 0 0 0-4.748.183a.74.74 0 0 1-.381.105h-.12A1.175 1.175 0 0 1 .5 12.825V3.887c0-.544.307-1.04.793-1.284a6.7 6.7 0 0 1 6.052.03m1.405 9.572V4.3l.382-.218A5.2 5.2 0 0 1 14 3.927v8.357a6.3 6.3 0 0 0-5.25-.078m-1.5.005V4.299l-.382-.218A5.2 5.2 0 0 0 2 3.927v8.365a6.44 6.44 0 0 1 5.25-.082"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
    },
    {
      name: "Khóa học offline",
      href: "#offline",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            d="M2 6.25A3.25 3.25 0 0 1 5.25 3h13.5A3.25 3.25 0 0 1 22 6.25v11.5A3.25 3.25 0 0 1 18.75 21H5.25A3.25 3.25 0 0 1 2 17.75zM5.25 4.5A1.75 1.75 0 0 0 3.5 6.25v11.5c0 .966.784 1.75 1.75 1.75h13.5a1.75 1.75 0 0 0 1.75-1.75V6.25a1.75 1.75 0 0 0-1.75-1.75zM9 9.25v5.5a1 1 0 0 0 1.482.876l5-2.75a1 1 0 0 0 0-1.752l-5-2.75A1 1 0 0 0 9 9.251"
          ></path>
        </svg>
      ),
    },
    {
      name: "Bài kiểm tra",
      href: "#test",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h9.961L20 8.423v9.962q0 .69-.462 1.153T18.384 20zm0-1h12.769q.269 0 .442-.173t.173-.442V9h-4V5H5.616q-.27 0-.443.173T5 5.616v12.769q0 .269.173.442t.443.173M7.5 16h9v-1h-9zm0-7H12V8H7.5zm0 3.5h9v-1h-9zM5 5v4zv14z"
          ></path>
        </svg>
      ),
    },
    {
      name: "Quản lý tài khoản",
      href: "#account",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 0 0-12 0zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4"
          ></path>
        </svg>
      ),
    },
  ];

  const additionalItems = [
    {
      name: "Chat",
      href: "#settings",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
        >
          <g fill="none" stroke="currentColor" strokeWidth={2}>
            <path d="M4 12a8 8 0 1 1 16 0v5.09c0 .848 0 1.27-.126 1.609a2 2 0 0 1-1.175 1.175C18.36 20 17.937 20 17.09 20H12a8 8 0 0 1-8-8Z"></path>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 11h6m-3 4h3"
            ></path>
          </g>
        </svg>
      ),
    },
    {
      name: "Cài đặt",
      href: "#logout",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5z"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              dur="10s"
              from="0 12 12"
              repeatCount="indefinite"
              to="360 12 12"
              type="rotate"
            ></animateTransform>
          </path>
        </svg>
      ),
    },
  ];

  return (
    <div className=" bg-[#FFF4E5] p-[40px] h-screen flex flex-col justify-between mx-auto">
      <div>
        <div className="flex items-center mb-4">
          <img
            src={logosvg}
            alt="G-EASY English Logo"
            className="h-100% mr-4"
          />
          <ul>
            <li className="text-[34px] font-bold">G-EASY</li>
            <li className="text-[16px] font-bold text-gray-600 mr-6">
              ENGLISH
            </li>
          </ul>
        </div>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} className="mb-2">
              <a
                href={item.href}
                className="py-2 px-4 gap-3 text-gray-700 flex items-center hover:bg-[#FB9400] hover:rounded-full hover:text-white"
              >
                <span className="mr-2 text-gray-700">{item.icon}</span>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <img src={img} alt="Handsome boy but not Minh Tri" />
        <ul>
          {additionalItems.map((item, index) => (
            <li key={index} className="mb-2">
              <a
                href={item.href}
                className="py-2 px-4 w-full gap-5 text-gray-700 flex items-center hover:bg-[#FB9400] hover:rounded-full hover:text-white"
              >
                <span className="text-gray-700">{item.icon}</span>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
