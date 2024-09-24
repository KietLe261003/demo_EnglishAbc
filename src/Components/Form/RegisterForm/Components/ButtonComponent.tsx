import React from "react";

interface Buttonprop extends React.ButtonHTMLAttributes<HTMLElement>{
  onClick: ()=>void
}
const ButtonComponent:React.FC<Buttonprop> = ({onClick}) => {
  return (
    <div>
      {/* Auth Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          onClick={onClick}
          className="
                        min-w-[180px] min-h-[26px] py-3 mt-3 bg-[#FB9400] rounded-3xl
                        font-bold text-white text-base
                        focus:outline-none
                         hover:bg-[#E07B00] hover:shadow-none shadow-lg
                        "
        >
          <div className="flex justify-center">
            <div className="mt-1">Gửi yêu cầu</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="2em"
              height="2 em"
              viewBox="0 0 24 24"
            >
              <path
                fill="black"
                d="M9.29 15.88L13.17 12L9.29 8.12a.996.996 0 1 1 1.41-1.41l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3a.996.996 0 0 1-1.41 0c-.38-.39-.39-1.03 0-1.42"
              ></path>
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ButtonComponent;
