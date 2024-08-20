import bag from "../../../../../Assets/Image/chlopiec-czuta_Obszar-roboczy-1-removebg-preview (1).png";
const CardTitleComponent = () => {
  return (
    <div>
      {/* Card Title */}
      <div className="bg-[#FB9400] min-w-[480px] min-h-[150px] border rounded-3xl relative ml-">
        <div className="absolute top-1/2 transform -translate-y-1/2 left-64">
          <div className="text-white font-bold text-3xl">Để lại thông tin</div>
          <div className="text-white text-xl">
          G-Easy sẽ liên hệ với bạn <br/>
           sớm nhất có thể
          </div>
        </div>
        <img src={bag} alt="Bag" className="mt-2 ml-10" />
      </div>
    </div>
  );
};

export default CardTitleComponent;
