import { request } from "../Common/Config/Request"
import { responseUser } from "../Type/ResponseUser";

export const userServices={
    getAllUser: async ()=>{
        const response = await request.get<responseUser>("user/getAll").then((response)=>{
            return response.data;
        }).catch((e)=>{
            console.log(e);
        });
        return response;
    }
}