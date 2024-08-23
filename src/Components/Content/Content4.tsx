import rectangle from "../../Assets/Image/Rectangle 172.png";
import Button from "../Button/Button";
const Content4 = () => {
    const handleClick = () => {
        alert('Button clicked!');
      };
    return (
        <div className="flex flex-col md:flex-row items-center bg-white pl-12 pb-12 rounded-lg  max-w-[1022px] mx-auto min-h-[288px]">
        <div className=" mb-4 md:mb-0 md:pr-6 ">
          <h2 className="text-[28px] font-bold mb-4 ">Làm bài kiểm tra thử</h2>
          <p className="text-gray-700 mb-4 tracking-tight text-16px">
          G-Easy helps you check your English level from there to have a good orientation for yourself
          </p>
          <div className="flex items-center justify-end">
          <Button onClick={handleClick} bg_color="bg-transparent" variant="outline" >
             Làm bài ngay
            </Button> 
          </div>
      
        </div>
        <div className="w-full max-w-[408px] mx-auto h-[246px] relative">
          <img
            src={rectangle}
            alt=""
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
      </div>
    );
  }

  export default Content4;