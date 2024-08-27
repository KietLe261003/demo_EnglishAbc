import banner from "../../Assets/Banner/Rectangle 162.svg";
import { IconArrowLeft, IconArrowRight } from "../../Common/Icon/Icon";

const BannerLarge = () => {
  return (
    <div className="relative w-full mx-auto rounded-[60px] overflow-hidden">
      <img
        src={banner}
        alt="Banner"
        className="w-full h-full object-cover max-h-[478px]"
      />
      <div className="absolute top-[40%] left-[12%] transform -translate-x-[10%] -translate-y-[20%] bg-black bg-opacity-50 p-10 rounded-3xl max-w-lg text-white tracking-wider">
        <h2 className="text-4xl font-bold">G-Easy</h2>
        <p className="text-[16px]">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
        </p>
      </div>
      <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none">
        <IconArrowLeft />
      </button>
      <button className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none">
        <IconArrowRight />
      </button>
      <div className=" absolute mx-auto bottom-0 rounded-[60px] w-full bg-orange-700 h-2"></div>
    </div>
  );
};

export default BannerLarge;
