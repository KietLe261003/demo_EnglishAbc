import React, { useState } from "react";
import { IconFilter, IconSearch } from "../../Common/Icon/Icon";
import Button from "../Button/Button";
import Dropdown from "../Button/Dropdown";
const filterType = ["Miễn phí", "Trả phí"];

const filterFinal = [
  "10%",
  "20%",
  "30%",
  "40%",
  "50%",
  "60%",
  "70%",
  "80%",
  "90%",
  "100%",
];
const filterTeacher = ["Công nghệ thông tin", "Tiếng anh"];

const filterStatus = ["Đầy đủ", "Chưa đầy đủ"];

interface FillterProps {
  checkAll: boolean,
  setCheckAll: React.Dispatch<React.SetStateAction<boolean>>;
}
const Fillter:React.FC<FillterProps> =({checkAll,setCheckAll})=> {
  const [openFilter,setOpenFilter]=useState<boolean>(false);
  const clickCheckAll=()=>{
    setCheckAll(true);
  }
  const clickNotCheckAll = ()=>{
    setCheckAll(false);
  }
  const tongleFilter = ()=>{
    setOpenFilter(!openFilter);
  }
  return (
    <div>
      <div className="flex gap-3 font-bold">
        <Button variant={checkAll===true ? "primary": "secondary"}  onClick={clickCheckAll}  size="large">
          Tất cả tài liệu
        </Button>
        <Button variant={checkAll===false ? "primary": "secondary"} onClick={clickNotCheckAll} textColor="#FFFFFF" size="large">
          Tài liệu đang học
        </Button>
        <button
          type="button"
          className={`group text-gray-700 font-medium flex items-center px-3 py-3 rounded-full ${openFilter === true ? 'bg-orange-700' : 'bg-gray-300'}`}
          aria-controls="disclosure-1"
          aria-expanded="false"
          onClick={tongleFilter}
        >
          <IconFilter width="1.75em" height="1.75em" />
        </button>
        <div className="flex items-center flex-grow">
          <label htmlFor="voice-search" className="sr-only">
            Search
          </label>
          <div className="flex w-full rounded-full bg-gray-300">
            <div className="flex items-center pointer-events-none py-3 pl-7 justify-center">
              <IconSearch width="2em" height="2em" />
            </div>
            <input
              type="text"
              id="voice-search"
              className="bg-gray-300 text-[14px] font-medium border border-transparent focus:outline-none flex-grow border-gray-300 rounded-r-full  text-gray-900 text-sm pl-3 p-2.5"
              placeholder="Tìm kiếm..."
            />
          </div>
        </div>
      </div>
      <div className={`mt-[30px] ${openFilter===false && 'hidden'}`} id="disclosure-1">
        <div className="max-w-5xl flex gap-[40px]">
          <Dropdown title="Loại tài liệu" options={filterType}></Dropdown>
          <Dropdown title="Tiến độ hoàn thành" options={filterFinal}></Dropdown>
          <Dropdown title="Giảng viên" options={filterTeacher}></Dropdown>
          <Dropdown title="Trạng thái" options={filterStatus}></Dropdown>
        </div>
      </div>
    </div>
  );
}

export default Fillter;
