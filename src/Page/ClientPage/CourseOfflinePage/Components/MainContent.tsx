import ContentCalender from './Content/ContentCalender';
import ContentInformation from './Content/ContentInfomation';
import ContentRoadMap from './Content/ContentRoadMap';

interface MainContentProps {
  currentContent: number;
}
const MainContent: React.FC<MainContentProps> = ({ currentContent = 1 }) => {
  const renderContent = () => {
    switch (currentContent) {
      case 1:
      case 4:
        return <ContentInformation />;
      case 3:
        return <ContentRoadMap />;
      case 2: 
        return <ContentCalender />
      default:
        <ContentCalender />;
    }
  };
  return <>{renderContent()}</>;
};

export default MainContent;
