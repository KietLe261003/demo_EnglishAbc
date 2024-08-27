import bag from "../../../../Assets/Image/world_book_fun_fb_06 [Converted]-04 1.png";

const CardTitleComponent = () => {
  return (
    <div>
      {/* Card Title */}
      <div className="bg-[#FB9400] min-w-[480px] min-h-[150px] border rounded-3xl relative">
        <div className="absolute top-1/2 transform -translate-y-1/2 left-64">
          <div className="text-white font-bold text-3xl">Good Morning!</div>
          <div className="text-white text-xl">
            Let’s learn English with <br />
            G-easy every day
          </div>
        </div>
        <img src={bag} alt="Bag" className="mt-2" />
      </div>
    </div>
  );
};

export default CardTitleComponent;
