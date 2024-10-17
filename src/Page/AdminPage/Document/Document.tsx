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
    docId: '12412',
    course: 'Toeic',
    creator: 1,
    name: 'Thì hiện tại đơn',
    description: 'Cách dùng, dấu hiện nhận biết',
    url: '123124',
    images: 'urlll',
    type: 'Video',
    status: true,
    isFree: true,
    createdAt: '12312',
    updateAt: '12312',
  };
  const documents = Array.from({ length: 10 }, () => ({ ...items }));

  const column = ['docId', 'name', 'status', 'isFree', 'type', 'Action'];
  const status = ['Status', 'Miễn Phí', 'Trả phí'];
  const removeDocument = () => {
    if (documentChoose) {
      console.log(documentChoose);
    }
  };
  // const getAllDocument = async ()=>{
  //   const tmp:DocumentResponse = await documentService.getAllDocument();
  //   setDocuments(tmp.content);
  // }
  // useEffect(()=>{
  //   getAllDocument();
  // },[])
  return (
    <div>
      <AddStatusAdmin
        contentAdd='Add Document'
        contentStatus={status}
        setOpenForm={setDetailForm}
      />
      {
        documents &&
        <TableAdmin
          data={documents}
          column={column}
          setOpenFormDetail={setDetailForm}
          setOpenFormRemove={setRemoveForm}
          setItemChoose={setDocumentChoose}
        />
      }
      <RemoveForm
        openForm={removeForm}
        setOpenForm={setRemoveForm}
        clickRemove={removeDocument}
      />
      <CreateFormDocument
        openForm={detailForm}
        setOpenForm={setDetailForm}
        content='Add new document'
        documentChoose={documentChoose}
      />
    </div>
  );
}

export default ManagementDocument;
