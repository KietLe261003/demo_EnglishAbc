import rectangle from "../../Assets/Image/Rectangle 172.svg";
import Button from "../Button/Button";

const Content4 = ({
  title = "Làm bài kiểm tra thử",
  content = "G-Easy helps you check your English level from there to have a good orientation for yourself",
  contentButton ="Xem chi tiết"
}) => {
  const handleClick = () => {
    alert("Button clicked!");
  };
  return (
    <div className="flex justify-between rounded-lg w-full mx-auto min-h-[288px] gap-8">
      <div className="flex-[0.6] flex flex-col justify-between">
        <div>
          <h2 className="text-[43px] mb-[40px] font-bold">{title}</h2>
          <p className="text-black font-normal tracking-wider text-[25px]">
            {content}
          </p>
        </div>
        <div className="flex items-center justify-end">
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
      <div className="w-full flex-[0.4] rounded-3xl h-auto relative self-end">
        <img
          src={rectangle}
          alt=""
          className="rounded-3xl object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Content4;
