import { useState } from 'react';
import AddStatusAdmin from '../../../Components/Button/AddStatusAdmin';
import { Document } from '../../../Type/Document/Document';
import TableAdmin from '../../../Components/Table/TableAdmin';
import RemoveForm from '../../../Components/Form/RemoveForm';
import CreateFormDocument from './Components/CreateFormDocument';

function ManagementDocument() {
  const [detailForm, setDetailForm] = useState<boolean>(false);
  const [removeForm, setRemoveForm] = useState<boolean>(false);
  const [documentChoose, setDocumentChoose] = useState<Document | null>(null);

  const items: Document = {
    id: '12412',
    nameDocument: 'Thì hiện tại đơn',
    description: 'Cách dùng, dấu hiện nhận biết',
    imagess: 'urlll',
    status: true,
    price: 12000,
    isFree: true,
  };
  const documents=Array.from({ length: 10 }, () => ({ ...items }));

  const column = ['id', 'nameDocument', 'status', 'isFree', 'price',"Action"];
  const status = ['Status', 'Miễn Phí', 'Trả phí'];
  const removeDocument = ()=>{
    if(documentChoose)
    {
      console.log(documentChoose);
    }
}
  return (
    <div>
      <AddStatusAdmin contentAdd='Add Document' contentStatus={status} setOpenForm={setDetailForm} />
      <TableAdmin
        data={documents}
        column={column}
        setOpenFormDetail={setDetailForm}
        setOpenFormRemove={setRemoveForm}
        setItemChoose={setDocumentChoose}
      />
      <RemoveForm openForm={removeForm} setOpenForm={setRemoveForm} clickRemove={removeDocument} />
      <CreateFormDocument openForm={detailForm} setOpenForm={setDetailForm} content='Add new document' documentChoose={documentChoose} />
    </div>
  );
}

export default ManagementDocument;
