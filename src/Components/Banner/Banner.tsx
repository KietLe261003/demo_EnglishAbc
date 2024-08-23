import banner from "../../Assets/Image/Banner.png";
import left from "../../Assets/Image/Left.svg";
import right from "../../Assets/Image/Right.svg";

const Banner = () => {
  return (
    <div className="relative w-full max-w-[1024px] mx-auto h-[300px] sm:h-[400px] md:h-[478px] rounded-lg overflow-hidden">
      <img
        src={banner}
        alt="Banner"
        className="w-full h-full object-cover"
      />
      <button className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none">
        <img
          src={left}
          alt="Previous"
          className="w-6 h-6"
        />
      </button>

      <button className="absolute top-1/2 right-4 transform -translate-y-1/2bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none">
        <img
          src={right}
          alt="Next"
          className="w-6 h-6"
        />
      </button>
    </div>
  );
};

export default Banner;
