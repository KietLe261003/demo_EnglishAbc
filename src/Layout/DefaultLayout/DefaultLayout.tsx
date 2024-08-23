import { Outlet } from "react-router-dom";
import Footer from "./Componets/Footer";
import Navbar from "./Componets/Navbar";
import Sidebar from "./Componets/Sidebar";

const DefaultLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar /> {/* Navbar ở trên cùng */}
      
      <div className="flex flex-1 w-full">
        <Sidebar /> {/* Sidebar ở bên trái */}
        
        <main className="flex-1 ml-64 p-6 mt-[100px]"> 
          <Outlet />
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default DefaultLayout;
