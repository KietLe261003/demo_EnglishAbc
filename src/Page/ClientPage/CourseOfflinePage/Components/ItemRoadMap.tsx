import { useState } from 'react';
import { IconArrowDown } from '../../../../Common/Icon/Icon';
interface ItemRoadMapProp {
    step: number,
    content: string,
    descript: string,
    isFinal?: boolean
}
const ItemRoadMap: React.FC<ItemRoadMapProp> = ({ isFinal = false,step,descript,content }) => {
    const [openDescript,setOpenDescript]=useState<boolean>(false);
    const tongleDescript = ()=>{
        setOpenDescript(!openDescript)
    }
  return (
    <>
      <div className='flex items-center gap-3'>
        <div className='w-12 h-12 bg-indigo-400 rounded-full flex items-center justify-center text-white text-xl'>
          {step}
        </div>
        <div className=' flex flex-col w-full'>
          <button onClick={tongleDescript} className='flex items-center justify-between flex-1 flex-shrink rounded-full text-white bg-orange-700 px-4 py-3 text-sm'>
            {content}
            <IconArrowDown />
          </button>
        </div>
      </div>
      <div className='flex items-center gap-3'>
        <div className='w-12 flex justify-center'>
          <div
            className={`h-16 w-1 ${
              !isFinal && 'bg-indigo-200 dark:bg-indigo-600'
            }`}
          ></div>
        </div>
        {
            openDescript && 
            <p className='px-4  block w-full'>
            {descript}
            </p>
        }
      </div>
    </>
  );
};

export default ItemRoadMap;
