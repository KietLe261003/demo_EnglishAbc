import { useEffect, useMemo, useState } from "react";
import LessonCard from "../CardItem/LessonCard";
interface ListDocumentProps {
    checkAll: boolean,
    listData: ListDocumentObject[]
}
interface ListDocumentObject {
    name: string,
    description: string,
    buttonContent?: string,
    percent?: number,
    price?: number
}
const ListDocument:React.FC<ListDocumentProps>=({checkAll,listData})=> {
    const listDocumentTmp: ListDocumentObject[] = useMemo(
        () => listData,
        [listData] 
      );
    const [listDocument,setListDocument]=useState(listDocumentTmp);
    useEffect(()=>{
        if (!checkAll) {
            setListDocument(listDocumentTmp.filter((item) => item.percent !== undefined));
          } else {
            setListDocument(listDocumentTmp);
          }
    },[checkAll,listDocumentTmp])
   
    return ( 
        <div className=" grid grid-cols-4 gap-y-6 gap-x-5 justify-items-center">
            {
                listDocument.map((item,index)=>(
                    item.price && item.percent || !item.price ?
                    <LessonCard key={index} name={item.name} description={item.description} buttonContent={item.buttonContent} percent={item.percent}/>:
                    <LessonCard key={index} name={item.name} description={item.description} percent={item.percent} price={item.price}/>
                ))
            }
        </div>
     );
}

export default ListDocument;