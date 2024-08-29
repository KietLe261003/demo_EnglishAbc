import banner from "../../Assets/Image/Rectangle 162.png";

const BannerMedium = ({  title = "Default Title", description = "Default Description" }) => {
    return (
      <div className="relative w-full mx-auto rounded-[36px] overflow-hidden">
        <img
          src={banner}
          alt="Banner"
          className="w-full h-full object-cover max-h-[266px]"
        />
        <div className="absolute top-[30%] left-[5%] transform -translate-x-[10%] -translate-y-[20%]  bg-opacity-50 p-8 rounded-3xl max-w-3xl text-white tracking-wider">
          <h2 className="text-3xl sm:text-4xl font-bold">{title}</h2>
          <p className="text-sm sm:text-base mt-5">
            {description}
          </p>
        </div>
        <div className=" absolute mx-auto bottom-0 rounded-[36px] w-full bg-orange-700 h-2"></div>
      </div>
    );
  };
  
  export default BannerMedium;
