import img1 from '../../Assets/Image/Rectangle 178.png';
import button_play from '../../Assets/Image/Button.svg';
import video_test from '../../Assets/hientaidon.mp4';
import CardLesson from '../CardItem/CardLesson';
import Button from '../Button/Button';
import { IconArrowRight } from '../../Common/Icon/Icon';
import { useState } from 'react';
import cart from '../../Assets/Image/Button_cart.svg'

const ListProduct = () => {
  const [selectedCard, setSelectedCard] = useState<string | number | null>(null);
  const handleCardClick = (cardId :  string | number) => {
    // if (selectedCard === cardId) {
    //   setSelectedCard(null);
    // } else {
    //   setSelectedCard(cardId);
    // }
    setSelectedCard(cardId);
  };
  return (
    <div className='flex items-start'>
      <div className='flex-1'>
        <div className='bg-[#F9F9F9] container mx-auto py-4 flex justify-center h-screen'>
          <div className='w-96 h-full flex flex-col'>
            <div
              className='w-full h-full overflow-auto shadow rounded-xl bg-white'
              id='journal-scroll'
            >
              <div
                onClick={() => handleCardClick(0)}
                className='flex items-center rounded-xl relative border-2 border-[orange]'
              >
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
              <div onClick={() => handleCardClick(1)}>
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
      </div>

      <div className='ml-4'>
        <div className='relative'>
          <div
            className={`w-full max-w-[600px] h-auto rounded-xl ${
              selectedCard ? 'bg-black' : 'bg-white'
            }`}
          >
            <video
              className={`w-full h-auto object-cover rounded-xl ${
                selectedCard ? 'opacity-45 pointer-events-none' : ''
              }`}
              controls={!selectedCard}
            >
              <source src={video_test} type='video/mp4' />
            </video>
          </div>

          {selectedCard && (
            <div className='absolute inset-0 flex items-center justify-center'>
              <img
                src={cart} 
                alt='Cart Icon'
                className='w-20 h-20 hover: cursor-pointer'
              />
            </div>
          )}
        </div>

        <div className='flex flex-col sm:flex-row flex-grow items-center sm:items-start'>
          <div className='font-bold text-2xl mt-8'>20$</div>
          <div className='mt-4 sm:mt-7 ml-0 sm:ml-3'>
            <Button variant={'primary'} size='medium'>
              Mua Ngay
            </Button>
          </div>
          <div className='mt-4 sm:mt-7 ml-0 sm:ml-3'>
            <Button variant='secondary' size='medium'>
              Chọn tài liệu khác
            </Button>
          </div>
        </div>

        <div className='flex items-center flex-grow mt-5'>
          <div className='bg-[orange] w-3 h-10 rounded-md'></div>
          <div className='font-bold text-3xl ml-5'>Conditionals</div>
        </div>

        <div className='mt-5 text-sm sm:text-base'>
          The if clause tells you the condition (If you study hard) and the main
          clause tells you the result (you will pass your exams). The order of
          the clauses does not change the meaning.
        </div>

        <div className='flex flex-col sm:flex-row items-center sm:items-start hover:cursor-pointer sm:pl-[400px] pt-[50px] sm:pt-[100px]'>
          <div className='text-[orange] '>Xem thêm thông tin</div>
          <div>
            <IconArrowRight color='gray' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProduct;
