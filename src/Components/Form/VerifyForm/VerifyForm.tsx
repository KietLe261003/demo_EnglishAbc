import React, { useState } from "react";
import { IconWindowClose } from "../../../Common/Icon/Icon";
import CardTitleComponent from "../CardTitleComponent";
import InputOtp from "./Components/InputOtp";
import Button from "../../Button/Button";
import { UserLogup } from "../../../Type/User/UserLogup";
import { userServices } from "../../../Services/UserService";
interface VerifyFormProps{
  infoUser: UserLogup | null
}
const VerifyForm:React.FC<VerifyFormProps> = ({infoUser}) => {
  const [isFormVisible, setIsFormVisible] = useState(true);
  const closeForm = () => {
    setIsFormVisible(false);
  };
  const clickVerify = async ()=>{
    const response = await userServices.verifyUser(infoUser);
    console.log(response);
  }
  return (
    <>
      {isFormVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white max-h-full rounded-3xl shadow-md lg:shadow-lg p-6 sm:p-10 relative">
            <button
              className="absolute top-3 right-4 text-slate-600 text-xl hover:text-gray-500 focus:outline-none"
              onClick={closeForm}
            >
              <IconWindowClose />
            </button>
            {/* Auth Card Container */}
            <div className="grid place-items-center mx-2 my-20 sm:my-auto">
              {/* Auth Card */}
              <div>
                <CardTitleComponent content="Để lại thông tin" description="G-Easy sẽ liên hệ với bạn sớm nhất có thể"/>
                <form className="mt-10" method="POST">
                  <InputOtp></InputOtp>
                  <div className=" flex justify-center">
                    <Button onClick={clickVerify}>Xác nhận</Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VerifyForm;
