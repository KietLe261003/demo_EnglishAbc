import React, {useState } from 'react';
import AddStatusAdmin from '../../../Components/Button/AddStatusAdmin';
import TableAdmin from '../../../Components/Table/TableAdmin';
import RemoveForm from '../../../Components/Form/RemoveForm';
import AddNewCourse from './Components/AddNewCourse';
import { Course } from '../../../Type/Course/Course';

const ListAndRemoveCourseAdmin: React.FC = () => {
  const [detailForm, setDetailForm] = useState<boolean>(false);
  const [removeForm, setRemoveForm] = useState<boolean>(false);
  const [courseChoose, setCourseChoose] = useState<Course | null>(null);
  const courseItem: Course= {
    teacher: 1,
    creator: 1,
    courseId: 1,
    name: 'Khóa học Tiếng Anh Cơ Bản 2',
    description: 'Khóa học dành cho người mới bắt đầu 2',
    image: 'course_image2.png',
    type: "IELTS",
    status: true,
    fee: 150,
    quantitySession: 20,
    startDatetime: '2024-09-15T10:00:00Z',
    endDatetime: '2024-09-30T10:00:00Z',
    createdAt: '2024-09-14T10:00:00Z',
    updatedAt: '2024-09-14T10:00:00Z',
  };
  const courses = Array.from({ length: 10 }, () => ({ ...courseItem }));
  const column = [
    'courseId',
    'name',
    'status',
    'fee',
    'quantitySession',
    'Action',
  ];
  const status = ['Status', 'Miễn Phí', 'Học phí', 'Số lượng'];
  const removeDocument = () => {
    if (courseChoose) {
      console.log(courseChoose);
    }
  };
 
  return (
    <div>
      <AddStatusAdmin
        contentAdd='Add Course'
        contentStatus={status}
        setOpenForm={setDetailForm}
      />
      {
        courses &&
        <TableAdmin
          data={courses}
          column={column}
          setOpenFormDetail={setDetailForm}
          setOpenFormRemove={setRemoveForm}
          setItemChoose={setCourseChoose}
        />
      }
      <RemoveForm
        openForm={removeForm}
        setOpenForm={setRemoveForm}
        clickRemove={removeDocument}
      />
      <AddNewCourse
        openForm={detailForm}
        setOpenForm={setDetailForm}
        content='Add new document'
        courseChoose={courseChoose}
      />
    </div>
  );
};

export default ListAndRemoveCourseAdmin;
