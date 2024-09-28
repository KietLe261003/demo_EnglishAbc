import { useState } from "react";
import LoginForm from "../../../Components/Form/LoginForm/LoginForm";
import RegisterForm from "../../../Components/Form/RegisterForm/RegisterForm";
import VerifyForm from "../../../Components/Form/VerifyForm/VerifyForm";
import Button from "../../../Components/Button/Button";

const ControllerForm = () => {
    const [typeForm,setTypeFrom]=useState<number>(0);
    const renderForm = ()=>{
        switch (typeForm) {
            case 1:
                return <LoginForm openForm={1} setOpenForm={setTypeFrom}/>
            case 2:
                return <RegisterForm openForm={2} setOpenForm={setTypeFrom}/>
            case 3:
                return <VerifyForm/>
            default:
                break;
        }
    }
    const openForm = ()=>{
        setTypeFrom(1);
    }

    return (
        <>
            <Button variant='primary' onClick={openForm}>Đăng nhập</Button>
            {renderForm()}
        </>
    );
};

export default ControllerForm;