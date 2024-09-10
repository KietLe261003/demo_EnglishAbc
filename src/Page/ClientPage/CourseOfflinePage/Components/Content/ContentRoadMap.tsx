import ItemRoadMap from "../ItemRoadMap";

function ContentRoadMap() {
  const RoadMap = [
    {
      step: 1,
      content: 'Mở đầu khóa học',
      descript: 'Chào hỏi múa quạt các kiểu',
    },
    {
      step: 2,
      content: 'Mở đầu khóa học',
      descript: 'Chào hỏi múa quạt các kiểu',
    },
    {
      step: 3,
      content: 'Mở đầu khóa học',
      descript: 'Chào hỏi múa quạt các kiểu',
    },
  ]
  return (
    <div className='flex flex-col justify-start text-base text-gray-600 dark:text-gray-400'>
      {
        RoadMap.map((item,index)=>(
          <ItemRoadMap key={index} step={item.step} content={item.content} descript={item.descript}></ItemRoadMap>
        ))
      }
    </div>
  );
}

export default ContentRoadMap;
