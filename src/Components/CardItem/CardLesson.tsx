import img1 from '../../Assets/Image/Rectangle 178.png';
import button_play from '../../Assets/Image/Button.svg';
import button_cart from '../../Assets/Image/Button_cart.svg';
const CardLesson = () => {
  return (
    <div className='flex items-center hover:border-2 border-[orange] rounded-xl relative mt-5'>
      <img
        src={img1}
        alt='Image Description'
        className='w-1/3 h-32 object-cover'
      />
      <img
        src={button_play}
        alt='button play'
        className='absolute inset-0 m-auto w-8 h-8 ml-10'
      />
      <div className='ml-4'>
        <div className='font-bold'>Grammar explanation</div>
        <div className='leading-5 text-gray-500 text-xs mt-2'>
          {`Conditionals describe the result of a certain condition. The if clause tells you the condition (If you study hard) and the main clause tells you the result (you will pass your exams). The order of the clauses does not change the meaning.`.substring(
            0,
            99,
          ) + '...'}
        </div>
      </div>

      <div className='absolute inset-0 bg-slate-950 bg-opacity-50 flex items-center justify-center rounded-xl'>
        <img src={button_cart} alt='Cart Icon' className='w-12 h-12 ml-5  hover:scale-105 cursor-pointer transition-transform duration-300' /> 
      </div>
    </div>
  );
};

export default CardLesson;
