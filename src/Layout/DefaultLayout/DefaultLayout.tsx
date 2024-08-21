import { Outlet } from "react-router-dom";
import Footer from "./Componets/Footer";

const DefaultLayout = () => {
  return (
    <div className="max-w-[100vw] flex flex-col items-center justify-center mx-auto">
      header
      <Outlet/>
      <Footer></Footer>
    </div>
  );
};

export default DefaultLayout;
