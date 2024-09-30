
import { IconDetail, IconTrash } from "../../Common/Icon/Icon";
import Pagination from "./Pagination";

interface TableAdminProps {
  column: string[];
  data: T[];
}
const TableAdmin: React.FC<TableAdminProps> = ({ data, column }) => {
  return (
    <>
      <table className='rounded-t-lg m-5 w-full  mx-auto bg-[#FFF4E5] text-gray-800'>
        <tr className=' border-b-2 border-gray-300'>
          {column.map((item, index) => {
            return (
              <th key={index} className='px-4 py-3'>
                {item}
              </th>
            );
          })}
        </tr>
        {data.map((item, index) => {
          return (
            <tr
              className={`${
                index % 2 === 0 ? 'bg-gray-100 border-gray-200' : 'bg-[#D6B2B2] '
              } border-b rounded-t-lg m-5 w-full  mx-auto`}
            >
              {column.map((field) => {
                return  field === 'Action' ? ( //Check if action render 2 button
                  <td className='px-4 py-3 text-center'>
                    <button className='m-[15px]'>
                      <IconDetail/>
                    </button>
                    <button className='m-[15px]'>
                      <IconTrash/>
                    </button>
                  </td>
                ) : (
                  <td className='px-4 py-3 text-center'>{item[field]}</td>
                );
              })}
            </tr>
          );
        })}
      </table>
      <Pagination/>
    </>
  );
};

export default TableAdmin;
