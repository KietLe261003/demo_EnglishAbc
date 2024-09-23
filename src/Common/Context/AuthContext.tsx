import { User } from "ckeditor5-premium-features";
import { createContext, PropsWithChildren, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RouterLink } from "../../Util/RouterLink";
interface AuthContextType{
    user: User | undefined,
    login: (user:User)=>void,
    logout: ()=>void
}
export const AuthConext = createContext<AuthContextType | undefined>(undefined)

export const AuthContextProvider = ({children}:PropsWithChildren)=>{
    const navigate=useNavigate();
    const [user,setUser]=useState<User | undefined>(undefined);
    const login = (userData:User)=>{
        localStorage.setItem("User",JSON.stringify(userData));
        setUser(userData);
        alert("Đăng nhập thành công")
        navigate(RouterLink.Home)
    }
    const logout = ()=>{

    }
    return (
        <AuthConext.Provider value={{user,login,logout}}>
            {children}
        </AuthConext.Provider>
    )
}
export const useAuth = ()=>{
    const context=useContext(AuthConext);
    if(!context)
        throw new Error("User này bị rỗng");
    return context;
} 