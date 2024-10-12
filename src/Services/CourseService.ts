import { request } from "../Common/Config/Request"

export const courseService={
    getAllCourse: async ()=>{
        try {
            const courses=await request.get("course");
            return courses.data;
        } catch (error) {
            console.log(error);
        }
    }
}