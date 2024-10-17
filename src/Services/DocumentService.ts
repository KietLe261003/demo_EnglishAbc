import { request } from "../Common/Config/Request"

export const documentService = {
    getAllDocument: async ()=>{
        try {
            const res= await request.get("http://localhost:8080/api/v1/document");
            return res.data;
        } catch (error) {
            return error
        }
    }
}
