
import LessonCard from "../../../Components/CardItem/LessonCard";
const HomePage = () => {
  return (
    <div className="flex gap-3">
    <div className="flex flex-col gap-3">
      <LessonCard
        name="Tài Liệu"
        buttonContent="Xem chi tiết"
        description="Lorem ipsum dolor sit amet, ipsum consectetuer adipiscing elit...."
      />
      <LessonCard
        name="Tài Liệu"
        description="Lorem ipsum dolor sit amet, ipsum consectetuer adipiscing elit...."
      />
      <LessonCard
        name="Tài Liệu"
        description="Lorem ipsum dolor sit amet, ipsum consectetuer adipiscing elit...."
        border={true}
      />
    </div>
    <div className="flex flex-col gap-3">
      <LessonCard
        name="Tài Liệu"
        price={20}
        description="Lorem ipsum dolor sit amet, ipsum consectetuer adipiscing elit...."
      />
    </div>
    <div className="flex flex-col gap-3">
      <LessonCard
        name="Tài Liệu"
        buttonContent="Làm bài"
        description="Lorem ipsum dolor sit amet, ipsum consectetuer adipiscing elit...."
      />
      <LessonCard
        name="Tài Liệu"
        buttonContent="Làm bài"
        state="Pass"
        description="Lorem ipsum dolor sit amet, ipsum consectetuer adipiscing elit...."
      />
      <LessonCard
        name="Tài Liệu"
        buttonContent="Làm bài"
        state="Faill"
        description="Lorem ipsum dolor sit amet, ipsum consectetuer adipiscing elit...."
      />
      <LessonCard
        name="Tài Liệu"
        buttonContent="Làm bài"
        state="Cần làm"
        description="Lorem ipsum dolor sit amet, ipsum consectetuer adipiscing elit...."
      />
    </div>
    <div className="flex flex-col gap-3">
      <LessonCard
        name="Tài Liệu"
        price={20}
        description="Lorem ipsum dolor sit amet, ipsum consectetuer adipiscing elit...."
        type={false}
      />
    </div>
  </div>
  );
};

export default HomePage;
