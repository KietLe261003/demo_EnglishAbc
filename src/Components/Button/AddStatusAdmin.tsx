interface AddStatusAdminProps {
  contentAdd: string;
  contentStatus: string[];
  setOpenForm: React.Dispatch<React.SetStateAction<boolean>>,
}
const AddStatusAdmin: React.FC<AddStatusAdminProps> = ({
  contentAdd,
  contentStatus,
  setOpenForm
}) => {
  const toggleCreateForm = () => {
    setOpenForm(true)
  };
  return (
    <div className='flex justify-end mx-auto'>
      <select
        className='m-2 middle none center rounded-lg text-[24px] text-white bg-orange-700 py-3 px-5 font-sans text-xs font-bold shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
        data-ripple-light='false'
      >
        {contentStatus.map((item, index) => {
          return (
            <option className=' bg-white text-black' key={index}>
              {item}
            </option>
          );
        })}
      </select>
      <button
        onClick={toggleCreateForm}
        className='m-2 middle none center rounded-lg text-[24px] text-white bg-orange-700 py-3 px-6 font-sans text-xs font-bold shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
        data-ripple-light='false'
      >
        {contentAdd}
      </button>
    </div>
  );
};

export default AddStatusAdmin;
