import TableAdmin from "../../../Components/Table/TableAdmin";
import { User } from "../../../Type/User";

function ManagementAccount() {
    const defaultItem:User = {
        id: "#1234",
        username: "John",
        email: "John@gmail.com",
        password: "20/03/2003",
        role: "Active",
      };
      const data = Array.from({ length: 10 }, () => ({ ...defaultItem }));
      const column = [
        "id",
        "username",
        "email",
        "password",
        "role",
        "Action",
      ];
    return (  
        <div className="w-full">
            <TableAdmin column={column} data={data}></TableAdmin>
        </div>
    );
}

export default ManagementAccount;