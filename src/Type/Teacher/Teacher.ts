export interface Teacher{
    id?: string,
    fullname: string,
    username: string,
    email: string,
    password: string,
    phone?: string,
    dob?: string,
    gender?: string,
    address?: string,
    desciption?: string,
    role: "Teacher"
}