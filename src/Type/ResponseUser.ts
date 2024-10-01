import { User } from "ckeditor5-premium-features";

export interface responseUser{
    code: number,
    message: string,
    data: User[]
}