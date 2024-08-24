{/* <Banner
        title="Tài liệu miễn phí" 
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
      />
      <Banner 
        title="Khuyến mãi đặc biệt" 
        description="Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
      /> */}

import banner from "../../Assets/Image/Rectangle 162.png";

const BannerMedium = ({  title = "Default Title", description = "Default Description" }) => {
    return (
      <div className="relative w-full max-w-[1024px] mx-auto h-[266px] sm:h-[400px] md:h-[478px] rounded-3xl overflow-hidden">
        <img
          src={banner}
          alt="Banner"
          className="w-full object-cover"
        />
        <div className="absolute top-[20%] left-[12%] transform -translate-x-[10%] -translate-y-[20%]  bg-opacity-50 p-8 rounded-3xl max-w-3xl text-white tracking-wider">
          <h2 className="text-3xl sm:text-4xl font-bold">{title}</h2>
          <p className="text-sm sm:text-base mt-5">
            {description}
          </p>
        </div>
      </div>
    );
  };
  
  export default BannerMedium;
