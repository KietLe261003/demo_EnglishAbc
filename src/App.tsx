import { Route, Routes } from 'react-router-dom'
import './App.css'
import DefaultLayout from './Layout/DefaultLayout/DefaultLayout'
import { homeRoute, loginRoute, registerRoute } from './Routes'

function App() {
  
  return (
    <>
      <Routes>
          <Route path='/' element={<DefaultLayout/>}>
          {homeRoute.map((route, index) => {return <Route  key={index} path={route.path} element={<route.element></route.element>}/>})}
          {loginRoute.map((route, index) => {return <Route key={index} path={route.path} element={<route.element></route.element>}/>  })}
          {registerRoute.map((route, index) => {return <Route key={index} path={route.path} element={<route.element></route.element>}/>})}
          </Route>
      </Routes>
    </>
  )
}

export default App
