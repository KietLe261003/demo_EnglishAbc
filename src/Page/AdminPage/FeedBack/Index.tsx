import { useState } from "react";
import { FeedBack } from "../../../Type/FeedBack/FeedBack";
import TableAdmin from "../../../Components/Table/TableAdmin";
import CreateFormFeedBack from "./Components/CreateForm";
import RemoveForm from "../../../Components/Form/RemoveForm";

function ManagementFeedBack() {
    const [detailForm,setDetailForm]=useState<boolean>(false);
    const [removeForm,setRemoveForm]=useState<boolean>(false);
    const [feedBackChoose,setFeedBackChoose]=useState<FeedBack | null>(null);
    const item:FeedBack={
        id: "1212",
        nameUser: "Quốc Trung",
        name: "Vấn đề về lớp học",
        description: "Lớp học quá tuyệt vời giáo viên quá giỏi",
        timeFeedBack: "2024/10/26"
    }
    const feedBacks=Array.from({length: 10},()=>({...item}));
    const columns=[
        "id",
        "nameUser",
        "name",
        "description",
        "timeFeedBack",
        "Action"
    ]
    const clickRemove = ()=>{
        console.log(feedBackChoose);
    }
    return ( 
        <div>
            <TableAdmin data={feedBacks} column={columns} setOpenFormDetail={setDetailForm} setOpenFormRemove={setRemoveForm} setItemChoose={setFeedBackChoose}/>
            <CreateFormFeedBack openForm={detailForm} setOpenForm={setDetailForm} content="FeedBack" feedBackChoose={feedBackChoose}/>
            <RemoveForm openForm={removeForm} setOpenForm={setRemoveForm} clickRemove={clickRemove}/>
        </div>
     );
}

export default ManagementFeedBack;