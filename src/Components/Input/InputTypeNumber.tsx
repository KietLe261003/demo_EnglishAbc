interface InputTypeNumberProps {
    title: string,
    content: number,
    setContent: React.Dispatch<React.SetStateAction<number>>,
    placeholder: string
}

const InputTypeNumber: React.FC<InputTypeNumberProps> = ({ title, content, setContent, placeholder }) => {
  return (
    <div className='w-full min-w-[200px] mb-5'>
      <label className='block mb-1 text-lg text-black font-medium'>
        {title}
      </label>
      <input
        id='contactNumber'
        type="number"
        className='w-full h-10 bg-gray-200 text-black text-sm border border-black rounded-3xl px-3 py-2 transition duration-300 ease focus:outline-none shadow-sm focus:shadow-md'
        value={content}
        onChange={(e) => setContent(Number(e.target.value))} // Convert string to number
        placeholder={placeholder}
      />
    </div>
  );
}

export default InputTypeNumber;
