import React from "react";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
  return (
    <div className="mx-auto flex flex-col items-center min-h-[100vh] bg-gradient-to-b from-white to-[#EADBD7] ">
      <p>header</p>
      <Outlet />    
      <p>footer</p>
    </div>
  );
};

export default DefaultLayout;
