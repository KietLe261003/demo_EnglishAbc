import { useState } from 'react';
import BannerMedium from '../../../Components/Banner/BannerMedium';
import Fillter from '../../../Components/Filter/Fillter';
import ListDocument from '../../../Components/List/ListDocument';

function CourseOfflinePage() {
  const [checkAll, setCheckAll] = useState<boolean>(true);
  const listDocument = [
    {
      name: "Present simple",
      description: "Thì hiện tại đơn",
      buttonContent: "Xem chi tiết",
      percent: 10,
      price: 40,
      type: "course"
    },
    {
      name: "Present continuous",
      description: "Thì hiện tại tiếp diễn",
      buttonContent: "Xem chi tiết",
      percent: 30,
      price: 40,
      type: "course"
    },
    {
      name: "Present perfect",
      description: "Thì hiện tại hoàn thành",
      buttonContent: "Xem chi tiết",
      percent: 50,
      price: 20,
      type: "course"
    },
    {
      name: "Past simple",
      description: "Thì quá khứ đơn",
      buttonContent: "Xem chi tiết",
      percent: 70,
      price: 40,
      type: "course"
    },
    {
      name: "Past continuous",
      description: "Thì quá khứ tiếp diễn",
      buttonContent: "Xem chi tiết",
      percent: 100,
      price: 40,
      type: "course"
    },
    {
      name: "Past perfect",
      description: "Thì quá khứ hoàn thành",
      buttonContent: "Xem chi tiết",
      price: 40,
      type: "course"
    },
    {
      name: "Future simple",
      description: "Thì tương lai đơn",
      buttonContent: "Xem chi tiết",
      price: 40,
      type: "course"
    },
    {
      name: "Future continuous",
      description: "Thì tương lai hoàn thành",
      buttonContent: "Xem chi tiết",
      price: 40,
      type: "course"
    },
    {
      name: "Nouns",
      description: "Danh từ",
      buttonContent: "Xem chi tiết",
      price: 40,
      type: "course"
    },
    {
      name: "Verbs",
      description: "Động từ",
      buttonContent: "Xem chi tiết",
      price: 40,
      type: "course"
    },
  ];
  const [filterType, setFilterType] = useState<string>('');
  const [filterInProgess, setFilterInProgess] = useState<string>('');
  const [filterTeacher, setFilterTeacher] = useState<string>('');
  const [filterStatus, setFilterStatus] = useState<string>('');
  console.log(filterType); //Lọc dữ liệu loại tài liệu
  console.log(filterInProgess); //Lọc dữ liệu tiến độ hoàn thành
  console.log(filterTeacher); //Lọc dữ liệu giáo viên
  console.log(filterStatus); //Lọc dữ liệu trạng thái
  return (
    <div className='flex flex-col gap-3'>
      <BannerMedium
        title='Khóa học offline'
        description='Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. '
      />
      <div className='min-h-[45px]'></div>
      <Fillter
        checkAll={checkAll}
        setCheckAll={setCheckAll}
        setFilterType={setFilterType}
        setFilterTeacher={setFilterTeacher}
        setFilterInProgess={setFilterInProgess}
        setFilterStatus={setFilterStatus}
        contentFilterAll='Tất cả khóa học'
        contentFilterInProgess='Đã thanh toán'
      ></Fillter>
      <div className='min-h-[45px]'></div>
      <ListDocument checkAll={checkAll} listData={listDocument}></ListDocument>
    </div>
  );
}

export default CourseOfflinePage;
