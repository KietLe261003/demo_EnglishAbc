import React, { useState } from "react";
import { IconTriagle } from "../../Common/Icon/Icon";
interface DropdownProps {
    title: string,
    options: Array<string>
}
const Dropdown: React.FC<DropdownProps> = ({title,options}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string>("");

  const toggle = () => {
    setOpen(!open);
  };

  const setLang = (val: string) => {
    setValue(val);
    setOpen(false);
  };

  return (
    <div className="relative min-w-[140px]">
      <button
        onClick={toggle}
        className="flex w-full items-center justify-between border-b-[3px] border-[#D9D9D9] p-2"
      >
        <span>{value === "" ? title : value}</span>
        <IconTriagle></IconTriagle>
      </button>

      {open && (
        <ul className="z-10 absolute mt-1 w-full bg-gray-50 ring-1 ring-gray-300">
          {options.map((item, index) => (
            <li
              key={index}
              className="cursor-pointer select-none p-2 hover:bg-gray-200"
              onClick={() => setLang(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
