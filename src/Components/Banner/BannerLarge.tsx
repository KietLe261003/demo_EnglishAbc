import banner from '../../Assets/Banner/Rectangle 162.svg';
import { IconArrowLeft, IconArrowRight } from '../../Common/Icon/Icon';

const BannerLarge = () => {
  return (
    <div className='relative w-full mx-auto rounded-[30px] overflow-hidden lg:rounded-[60px] max-w-7xl'>
      <img
        src={banner}
        alt='Banner'
        className='w-full h-full object-cover max-h-[300px] sm:max-h-[400px] lg:max-h-[478px]'
      />
      <div className='absolute top-[50%] left-[8%] transform -translate-x-0 -translate-y-[40%] bg-black bg-opacity-50 p-5 sm:p-8 lg:p-10 rounded-xl sm:rounded-2xl lg:rounded-3xl max-w-md sm:max-w-lg lg:max-w-lg text-white tracking-wider'>
        <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold'>G-Easy</h2>
        <p className='text-sm sm:text-base lg:text-lg'>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
        </p>
      </div>
      <button className='absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-opacity-50 hover:bg-opacity-75 rounded-full p-1 sm:p-2 focus:outline-none'>
        <IconArrowLeft />
      </button>
      <button className='absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-opacity-50 hover:bg-opacity-75 rounded-full p-1 sm:p-2 focus:outline-none'>
        <IconArrowRight />
      </button>
      <div className=' absolute mx-auto bottom-0 rounded-[30px] lg:rounded-[60px] w-full bg-orange-700 h-1 sm:h-2'></div>
    </div>
  );
};

export default BannerLarge;
