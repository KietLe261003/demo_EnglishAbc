import ContentCalender from "./Content/ContentCalender";
import ContentInformation from "./Content/ContentInfomation";

interface MainContentProps {
    currentContent: number
}
const MainContent:React.FC<MainContentProps> =({currentContent=1})=> {
  return (
    <>
        {
            currentContent===1 || currentContent===4 ? 
            <ContentInformation/>:
            <ContentCalender/>
        }
    </>
  );
}

export default MainContent;
