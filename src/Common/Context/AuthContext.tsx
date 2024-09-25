import { User } from 'ckeditor5-premium-features';
import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RouterLink } from '../../Util/RouterLink';
interface AuthContextType {
  user: User | null | undefined;
  login: (user: User) => void;
  logout: () => void;
}
const USER_KEY=import .meta.env.USER_KEY;
export const AuthConext = createContext<AuthContextType | null | undefined>(undefined);

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem(USER_KEY);
    return storedUser ? JSON.parse(storedUser) : undefined;
  });
  const login = (userData: User) => {
    localStorage.setItem('User', JSON.stringify(userData));
    setUser(userData);
    alert('Đăng nhập thành công');
    navigate(RouterLink.Home);
  };
  const logout = () => {};
  return (
    <AuthConext.Provider value={{ user, login, logout }}>
      {children}
    </AuthConext.Provider>
  );
};
export const useAuth = () => {
  const context = useContext(AuthConext);
  if (!context) throw new Error('User này bị rỗng');
  return context;
};
