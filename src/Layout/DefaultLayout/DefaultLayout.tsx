import React from "react";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    // <div className=" bg-gradient-to-b from-white to-[#EADBD7] ">
    //   <Outlet />
    // </div>
    
    <div className="">
      <Outlet />
    </div>
  );
};

export default DefaultLayout;
