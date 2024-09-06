function ContentRoadMap() {
  return (
    <div className='flex flex-col justify-start text-base text-gray-600 dark:text-gray-400'>
      <div className='flex items-center'>
        <div className='w-12 h-12 bg-indigo-400 rounded-full flex items-center justify-center text-white text-xl'>
          1
        </div>
        <span className='ml-4 font-medium'>Step One</span>
      </div>
      <div className='h-16 w-1 bg-indigo-200 dark:bg-indigo-600'></div>
      <div className='flex items-center'>
        <div className='w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white text-xl'>
          2
        </div>
        <span className='ml-4 font-medium'>Step Two</span>
      </div>
      <div className='h-16 w-1 bg-blue-200 dark:bg-blue-600'></div>
      <div className='flex items-center'>
        <div className='w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-white text-xl'>
          3
        </div>
        <span className='ml-4 font-medium'>Step Three</span>
      </div>
    </div>
  );
}

export default ContentRoadMap;
