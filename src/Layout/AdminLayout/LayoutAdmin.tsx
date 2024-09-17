import { Outlet } from "react-router-dom";
import NavBarAdmin from "./Components/NavBarAdmin";

function LayoutAdmin() {
    return ( 
        <div className="antialiased bg-gray-200 min-h-screen text-slate-300 relative">
            <div className="grid grid-cols-12 gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-5 max-w-screen min-h-screen">
                <NavBarAdmin></NavBarAdmin>
                {/* Content */}
                <Outlet></Outlet>
            </div>
        </div>
     );
}

export default LayoutAdmin;