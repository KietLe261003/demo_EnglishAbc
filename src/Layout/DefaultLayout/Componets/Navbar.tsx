import React from "react";
import Button from "../../../Components/Button/Button";
import { IconCart, IconChat, IconRing } from "../../../Common/Icon/Icon";

const Navbar: React.FC = () => {
  return (
    <header className="  text-black border-none p-4 fixed top-0 left-[355px] right-0 z-10 shadow-md">
        <div className="flex flex-1 space-x-4 items-center justify-end">
          <div>
            <IconCart/>
          </div>
          <div>
            <IconChat/>
          </div>
          <div>
            <IconRing/>
          </div>
          <div className="ml-3 flex-shrink-0">
          <Button variant="primary">Đăng nhập</Button>
        </div>
        </div>
    </header> 
  );
};

export default Navbar;
