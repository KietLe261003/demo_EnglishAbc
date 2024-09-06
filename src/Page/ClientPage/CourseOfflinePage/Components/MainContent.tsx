import ContentCalender from "./Content/ContentCalender";
import ContentInformation from "./Content/ContentInfomation";
import ContentRoadMap from "./Content/ContentRoadMap";

interface MainContentProps {
    currentContent: number
}
const MainContent:React.FC<MainContentProps> =({currentContent=1})=> {
  return (
    <>
        {
            currentContent===1 || currentContent===4 ? 
            <ContentInformation/>:
            currentContent==3 ? 
            <ContentRoadMap/> :
            <ContentCalender/>
        }
    </>
  );
}

export default MainContent;
