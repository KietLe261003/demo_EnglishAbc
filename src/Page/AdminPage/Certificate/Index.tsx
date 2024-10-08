import { useState } from 'react';
import AddStatusAdmin from '../../../Components/Button/AddStatusAdmin';
import { Certificate } from '../../../Type/Certificate/Certificate';
import TableAdmin from '../../../Components/Table/TableAdmin';
import ConvertDateTime from '../../../Util/ConvertTime';
import RemoveForm from '../../../Components/Form/RemoveForm';
import CreateForm from './Components/CreateForm';

function ManagementCertificate() {
  const [detailForm, setDetailForm] = useState<boolean>(false);
  const [removeForm, setRemoveForm] = useState<boolean>(false);
  const [certificateChoose, setCertificateChoose] =
    useState<Certificate | null>(null);
  const item: Certificate = {
    id: '1213',
    nameUser: 'Đặng Bá Quốc Trinh',
    date: ConvertDateTime(new Date()),
    gender: 'Girl',
    TimeOfReceipt: ConvertDateTime(new Date()),
    TypeofCertification: 'IELET',
  };
  const contentStatus = ['Ielts', 'Toeic', 'Cá nhân'];
  const column = [
    'id',
    'nameUser',
    'date',
    'gender',
    'TimeofReceipt',
    'TypeofCertification',
    'Action'
  ];
  const certificates = Array.from({ length: 10 }, () => ({
    ...item,
  }));
  const clickRemove = ()=>{
    console.log(certificateChoose);
    setRemoveForm(false);
  }
  return (
    <div>
      <AddStatusAdmin
        contentAdd='Add Certificate'
        contentStatus={contentStatus}
        setOpenForm={setDetailForm}
      />
      <TableAdmin
        column={column}
        data={certificates}
        setOpenFormDetail={setDetailForm}
        setOpenFormRemove={setRemoveForm}
        setItemChoose={setCertificateChoose}
      />
      <CreateForm openForm={detailForm} setOpenForm={setDetailForm} certificateChoose={certificateChoose} content='Certificate'/>
      <RemoveForm setOpenForm={setRemoveForm} openForm={removeForm} clickRemove={clickRemove}/>
    </div>
  );
}

export default ManagementCertificate;
