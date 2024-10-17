import { Route, Routes } from "react-router-dom";
import "./App.css";
import DefaultLayout from "./Layout/DefaultLayout/DefaultLayout";
import { homeRoute } from "./Routes";
import LayoutAdmin from "./Layout/AdminLayout/LayoutAdmin";
import { adminRoute } from "./Routes/adminRoute";

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          {homeRoute.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={<route.element></route.element>}
              />
            );
          })}
        </Route>
        <Route path="admin" element={<LayoutAdmin/>}>
          {
            adminRoute.map((route,index)=>{
              return (
                <Route key={index} path={route.path} element={<route.element/>}/>
              )
            })
          }
        </Route>
      </Routes>
    </>
  );
}

export default App;
