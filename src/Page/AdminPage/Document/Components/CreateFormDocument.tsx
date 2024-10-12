import { useEffect, useState } from "react";
import { IconWindowClose } from "../../../../Common/Icon/Icon";
import InputTypeString from "../../../../Components/Input/InputTypeString";
import InputDescription from "../../../../Components/Input/InputDescription";
import InputTypeBoolean from "../../../../Components/Input/InputSelectTrueFalse";
import { Document } from "../../../../Type/Document/Document";
import InputTypeNumber from "../../../../Components/Input/InputTypeNumber";
import InputTypeFile from "../../../../Components/Input/InputTypeFile";


interface CreateFormDocumentProps{
    openForm: boolean,
    setOpenForm: React.Dispatch<React.SetStateAction<boolean>>,
    content?: string,
    documentChoose?: Document | null
}
const CreateFormDocument:React.FC<CreateFormDocumentProps> = ({openForm,setOpenForm,content="ADD NEWS ACCOUNT",documentChoose}) => {
  const [nameDocument, setNameDocument] = useState<string>(documentChoose?.name|| "");
  const [contentDocument, setContentDocument] = useState<string>(documentChoose?.content || "");
  const [description,setDescription]=useState<string>(documentChoose?.description || "");
  const [status,setStatus]=useState<boolean>(documentChoose?.status || true);
  const [image,setImage]=useState<string>(documentChoose?.images || "");
  const [price,setPrice]=useState<number>(documentChoose?.price || 0);
  const [isFree,setIsFree]=useState<boolean>(documentChoose?.isFree || true);

  
  const closeFormModal = () => {
    console.log(price);
    setOpenForm(false);
  };
  useEffect(() => {
    if (documentChoose) {
      setNameDocument(documentChoose.name || "");
      setDescription(documentChoose.description || "");
      setContentDocument(documentChoose?.description || "");
      setImage(documentChoose?.images || "");
      setPrice(documentChoose?.price || 0);
      setIsFree(documentChoose?.isFree || true);
      setStatus(documentChoose?.status || true);
    }
  }, [documentChoose]);
  return (
    <>
      {openForm == true && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-white max-h-full rounded-3xl min-w-[800px] shadow-md lg:shadow-lg p-6 sm:p-10 relative'>
            <button
              className='absolute top-3 right-4 text-slate-600 text-xl hover:text-gray-500 focus:outline-none'
              onClick={closeFormModal}
            >
              <IconWindowClose />
            </button>
            <div className='grid place-items-center mx-2 my-20 max-h-[700px] sm:my-auto overflow-y-auto'>
              <div className='w-full'>
                <div className='flex justify-center text-black text-[30px] font-bold'>
                  {content}
                </div>
                <form className='mt-10' method='POST'>
                  <InputTypeString
                    title='Name Document'
                    content={nameDocument}
                    setContent={setNameDocument}
                    placeholder='Nhập tên của tài liệu'
                  />
                  <div className='flex gap-2'>
                    <InputTypeBoolean
                      title='Loại'
                      content={isFree}
                      setContent={setIsFree}
                    />
                    <InputTypeBoolean
                      title='Trạng thái'
                      content={status}
                      setContent={setStatus}
                    />
                  </div>
                  {
                    !isFree &&
                    <InputTypeNumber
                      title='Giá tiền'
                      setContent={setPrice}
                      placeholder='Nhập giá tiền của tài liệu'
                    />
                  }
                  <InputDescription
                    title='Mô tả của khóa học'
                    content={description}
                    setContent={setDescription}
                    placeholder='Mô tả về tài liệu học ngắn gọn'
                  />
                  <InputDescription
                    title='Nội dung của khóa học'
                    content={contentDocument}
                    setContent={setContentDocument}
                    placeholder='Mô tả về tài liệu học ngắn gọn'
                  />
                  <InputTypeFile image={image} setImage={setImage}/>
                  <div className='flex justify-end'>
                    <button
                      type='button'
                      className='
                          min-w-[110px] min-h-[26px] py-2 mt-3 mx-1 bg-[#ECEBE9] rounded-3xl
                          font-bold text-[#4F4B45] text-sm
                          focus:outline-none hover:bg-[#bdbcba] hover:shadow-none 
                      '
                    >
                      Cancel
                    </button>
                    <button
                      type='submit'
                      className='
                          min-w-[110px] min-h-[26px] py-2 mt-3 bg-[#FB9400] rounded-3xl
                          font-bold text-white text-sm
                          focus:outline-none
                          hover:bg-[#E07B00] hover:shadow-none shadow-lg
                          '
                    >
                      Add
                    </button>
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

export default CreateFormDocument;
