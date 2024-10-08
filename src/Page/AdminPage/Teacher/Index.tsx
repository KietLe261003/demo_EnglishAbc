import { useState } from "react";
import { Teacher } from "../../../Type/Teacher/Teacher";
import AddStatusAdmin from "../../../Components/Button/AddStatusAdmin";
import TableAdmin from "../../../Components/Table/TableAdmin";
import CreateTeacherForm from "./Components/CreateForm";
import RemoveForm from "../../../Components/Form/RemoveForm";

function ManagementTeacher() {
    const [detailForm,setDetailForm]=useState<boolean>(false);
    const [removeForm,setRemoveForm]=useState<boolean>(false);
    const [teacherChoose,setTeacherChoose]=useState<Teacher|null>(null);
    const defaultItem: Teacher = {
        id: "#1234",
        fullname: "John wick",
        username: "John",
        email: "John@gmail.com",
        phone: "0214214124",
        password: "12345678",
        role: "Teacher"
      };
      const teachers=Array.from({ length: 10 }, () => ({ ...defaultItem }));
      const column = [
        "id",
        "username",
        "email",
        "password",
        "role",
        "Action",
      ];
      const status=[
        "Status",
        "Online",
        "Offline"
      ]
      const removeTeacher = ()=>{
          if(teacherChoose)
          {
            console.log(teacherChoose);
          }
      }
    return ( 
        <div>
            <AddStatusAdmin contentAdd="Create Resgiter" contentStatus={status} setOpenForm={setDetailForm}/>
            <TableAdmin setOpenFormDetail={setDetailForm} setOpenFormRemove={setRemoveForm} setItemChoose={setTeacherChoose} data={teachers} column={column}/>
            <CreateTeacherForm setOpenForm={setDetailForm} openForm={detailForm} teacherChoose={teacherChoose} content="Infomation Teacher"/>
            <RemoveForm setOpenForm={setRemoveForm} clickRemove={removeTeacher} openForm={removeForm}/>
        </div>
     );
}

export default ManagementTeacher;