import { useEffect, useState } from "react";
import { IconWindowClose } from "../../../../Common/Icon/Icon";
import InputTypeString from "../../../../Components/Input/InputTypeString";
import { Certificate } from "../../../../Type/Certificate/Certificate";
import InputTypeSelect from "../../../../Components/Input/InputTypeSelect";
import InputTypeDateTime from "../../../../Components/Input/InputTypeDateTime";


interface CreateFormProps{
    openForm: boolean,
    setOpenForm: React.Dispatch<React.SetStateAction<boolean>>,
    content?: string,
    certificateChoose?: Certificate | null
}
const CreateForm:React.FC<CreateFormProps> = ({openForm,setOpenForm,content="ADD NEWS ACCOUNT",certificateChoose}) => {
  const [nameAccount, setNameAccount] = useState<string>(certificateChoose?.nameUser || "");
  const [date, setDate] = useState<string>(certificateChoose?.date || "");
  const [gender, setGender] = useState<string>(certificateChoose?.gender || "");
  const [TimeOfReceipt, setTimeofReceipt] = useState<string>(certificateChoose?.TimeOfReceipt || "");
  const [TypeofCertification, setTypeofCertification] = useState<string>(certificateChoose?.TypeofCertification || "");
  const genders=[
    "Nam",
    "Nữ",
    "Khác"
  ]
  const typeCertificate=[
    "Ielts",
    "Toeic",
    "Chứng chỉ tin học"
  ]

  const closeFormModal = () => {
    setOpenForm(false);
  };
  useEffect(() => {
    if (certificateChoose) {
      setNameAccount(certificateChoose.nameUser || "");
      setDate(certificateChoose.date || "");
      setGender(certificateChoose.gender || "");
      setTimeofReceipt(certificateChoose.TimeOfReceipt || "");
      setTypeofCertification(certificateChoose.TypeofCertification || "");
    }
  }, [certificateChoose]);
  return (
    <>
    {openForm && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
       <div className="bg-white w-full max-w-[70%] sm:max-w-[600px] lg:max-w-[800px] rounded-3xl shadow-md lg:shadow-lg p-6 sm:p-10 relative">
          <button
            className="absolute top-3 right-4 text-slate-600 text-xl hover:text-gray-500 focus:outline-none"
            onClick={closeFormModal}
          >
            <IconWindowClose />
          </button>
          <div className="grid place-items-center mx-2 my-5 sm:my-auto">
            <div className="w-full">
              <div className="flex justify-center text-black text-[24px] sm:text-[30px] font-bold">
                {content}
              </div>
              <form className="mt-6 sm:mt-10 space-y-4" method="POST">
                <InputTypeString
                  title="Full Name"
                  content={nameAccount}
                  setContent={setNameAccount}
                  placeholder="Nhập tên người dùng"
                />
                <InputTypeSelect
                  title="Giới tính"
                  content={gender}
                  setContent={setGender}
                  titleOption={genders}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InputTypeDateTime
                    title="Ngày cấp chứng chỉ"
                    content={date}
                    setContent={setDate}
                    placeholder="Nhập ngày cấp chứng chỉ"
                  />
                  <InputTypeDateTime
                    title="Thời gian nhận"
                    content={TimeOfReceipt}
                    setContent={setTimeofReceipt}
                    placeholder="Nhập thời gian nhận chứng chỉ"
                  />
                </div>
                <InputTypeSelect
                  title="Loại chứng chỉ"
                  content={TypeofCertification}
                  setContent={setTypeofCertification}
                  titleOption={typeCertificate}
                />
                <div className="flex justify-end space-x-2">
                  <button
                    type="button"
                    className="
                      min-w-[90px] py-2 mt-3 bg-[#ECEBE9] rounded-3xl
                      font-bold text-[#4F4B45] text-sm
                      focus:outline-none hover:bg-[#bdbcba]
                    "
                    onClick={closeFormModal}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="
                      min-w-[90px] py-2 mt-3 bg-[#FB9400] rounded-3xl
                      font-bold text-white text-sm
                      focus:outline-none hover:bg-[#E07B00]
                    "
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

export default CreateForm;
