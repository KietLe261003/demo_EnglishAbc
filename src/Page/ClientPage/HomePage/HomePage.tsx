import Button from "../../../Components/Button/Button";
import { FaArrowRight } from 'react-icons/fa';

const HomePage = () => {
  return (
    <div>
      
      <div className="space-y-4 p-4">
      <Button variant="primary" onClick={() => alert('Primary Button Clicked!')}>Xem chi tiết</Button>
      <Button variant="secondary" onClick={() => alert('Secondary Button Clicked!')}>Secondary Button</Button>
      <Button variant="icon" icon={<FaArrowRight />} onClick={() => alert('Icon Button Clicked!')}>
        Xem chi tiết
      </Button>
      <Button variant="outline" onClick={() => alert('Outline Button Clicked!')}>Outline Button</Button>
    </div>
    </div>
  );
};

export default HomePage;

