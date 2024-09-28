import bag from "../../Assets/Image/chlopiec-czuta_Obszar-roboczy-1-removebg-preview (1).png";
interface CardTitleComponentProps {
  content: string,
  description: string
}

const CardTitleComponent:React.FC<CardTitleComponentProps> = ({content,description}) => {
  return (
    <div>
      {/* Card Title */}
      <div className="bg-[#FB9400] min-w-[480px] min-h-[150px] border rounded-3xl relative ml-">
        <div className="absolute top-1/2 transform -translate-y-1/2 left-64">
          <div className="text-white font-bold text-3xl">{content}</div>
          <div className="text-white text-xl">
            {description}
          </div>
        </div>
        <img src={bag} alt="Bag" className="mt-2 ml-10" />
      </div>
    </div>
  );
};

export default CardTitleComponent;
