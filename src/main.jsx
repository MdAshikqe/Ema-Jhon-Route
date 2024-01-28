import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop.jsx';
import Home from './components/leyout/Home.jsx';
import Order from './components/Order/Order.jsx';
import Inventory from './components/Inventory/Inventory.jsx';
import Login from './components/Login/Login.jsx';
import CartLoader from './CartToLoader/CartToLoader.js';
import ProcedureCheckOut from './components/ProdcuderCheckOut/ProcedureCheckOut.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:"/",
        element: <Shop></Shop>
      },
      {
        path:"order",
        element:<Order></Order>,
        loader: CartLoader,
        
      },
      {
        path:"procedure",
        element:<ProcedureCheckOut></ProcedureCheckOut>
      },
      {
        path:"inventory",
        element: <Inventory></Inventory>
      },
      {
        path:"login",
        element: <Login></Login>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
