import img1 from '../../Assets/Image/Rectangle 178.png';
import button_play from '../../Assets/Image/Button.svg';
import video_test from '../../Assets/hientaidon.mp4';
import CardLesson from '../CardItem/CardLesson';
import Button from '../Button/Button';

const ListProduct = () => {
  return (
    <div className='flex items-start'>
      <div className='flex-1'>
        <div className='bg-[#F9F9F9] container mx-auto py-4 flex justify-center h-screen'>
          <div className='w-96 h-full flex flex-col'>
            <div
              className='w-full h-full overflow-auto shadow rounded-xl bg-white'
              id='journal-scroll'
            >
              <div className='flex items-center rounded-xl relative border-2 border-[orange]'>
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
              </div>
              <CardLesson />
              <CardLesson />
              <CardLesson />
              <CardLesson />
              <CardLesson />
              <CardLesson />
            </div>
          </div>
        </div>
      </div>

      <div className='ml-4'>
        <div className='w-[600px] h-[315px] bg-black rounded-xl'>
          <video className='w-full h-full object-cover rounded-xl' controls>
            <source src={video_test} type='video/mp4' />
            Trình duyệt của bạn không hỗ trợ thẻ video.
          </video>
        </div>
        <div className='flex flex-grow'>
          <div className='font-bold text-2xl mt-8'>20$</div>
          <Button variant={'primary'} size='large'>
            Mua Ngay
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
