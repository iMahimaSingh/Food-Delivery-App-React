import Header from "./components/Header";
import BodyPart from "./components/BodyPart";
import React from "react";
import ReactDOM from "react-dom/client";
import './App.css'
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import About from "./components/About";
import Help from "./components/Help";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";


export const AppLayout = ()=>{
  return(
      <div className="app">
          <Header/>
          <Outlet />

      </div>
  )
}

export const AppRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout />,
    children:[
      {
        path: "/",
        element:<BodyPart />
      },
      {
        path:"/about",
        element:<About />
        },
    
    {
       path:"/Help",
       element:<Help />
    },
    {
      path:"/restaurants/:resId",
      element:<RestaurantMenu />
    }
    ],
    errorElement:<Error />
    
  },
  
])

