import { useState } from "react";
import LoginForm from "../../../Components/Form/LoginForm/LoginForm";
import RegisterForm from "../../../Components/Form/RegisterForm/RegisterForm";
import VerifyForm from "../../../Components/Form/VerifyForm/VerifyForm";
import Button from "../../../Components/Button/Button";
import { UserLogup } from "../../../Type/User/UserLogup";
import { useAppDispatch, useAppSelector } from "../../../Hooks/Store";
import { setOpenModal } from "../../../Redux/Slice/HomeSlice";

const ControllerForm = () => {
    const {openModal}=useAppSelector(state=>state.counter);
    const dispath=useAppDispatch();
    const [infoUser,setInforUser]=useState<UserLogup|null>(null);
    const openForm = ()=>{
        dispath(setOpenModal(1));
        console.log(openModal);
    }
    return (
        <>
            <Button variant='primary' onClick={openForm}>Đăng nhập</Button>
            <LoginForm/>
            <RegisterForm setInfoUser={setInforUser}/>
            {
                infoUser && <VerifyForm infoUser={infoUser}/>
            }
        </>
    );
};

export default ControllerForm;