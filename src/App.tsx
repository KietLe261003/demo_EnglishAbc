import { Route, Routes } from "react-router-dom";
import "./App.css";
import DefaultLayout from "./Layout/DefaultLayout/DefaultLayout";
import { homeRoute } from "./Routes";

function App() {
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
      </Routes>
    </>
  );
}

export default App;
