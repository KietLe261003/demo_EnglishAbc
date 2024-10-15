import rectangle from "../../Assets/Image/Rectangle 172.svg";
import Button from "../Button/Button";

const ContentSession = ({
  title = "Làm bài kiểm tra thử",
  content = "G-Easy helps you check your English level from there to have a good orientation for yourself",
  contentButton = "Xem chi tiết",
}) => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="flex flex-col md:flex-row justify-between rounded-lg w-full mx-auto min-h-[288px] gap-6 p-4 md:p-6 lg:p-8">
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-[20px] md:text-[24px] lg:text-[30px] mb-2 md:mb-4 lg:mb-6 font-bold">
            {title}
          </h2>
          <p className="text-black font-normal tracking-wider text-[14px] md:text-[16px] lg:text-[18px]">
            {content}
          </p>
        </div>
        <div className="flex items-center justify-end mt-4 md:mt-0">
          <Button
            onClick={handleClick}
            bg_color="bg-transparent"
            variant="outline"
            size="large"
          >
            {contentButton}
          </Button>
        </div>
      </div>
      <div className="w-full md:w-[40%] lg:w-[50%] rounded-3xl overflow-hidden flex-shrink-0">
        <img
          src={rectangle}
          alt=""
          className="rounded-3xl object-contain w-full h-auto"
        />
      </div>
    </div>
  );
};

export default ContentSession;