import {
    createBrowserRouter,
    Navigate,
   
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import ContactUs from "../Pages/ContactUs/ContactUs";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import Dashboard from "../LayOut/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import PrivateRoutes from "./PrivateRoutes";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../Pages/Dashboard/AddItems/ManageItems/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistoy from "../Pages/Dashboard/PaymentHistoy";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
           path:'/' ,
           element:<Home></Home>

        },
        {
          path:'menu',
          element:<Menu></Menu>,
        },
        {
          path:'order',
          element:<Navigate to="/order/salad" />
        },
       
        {
          path:'order/:category',//:category
          element:<Order></Order>
        },
        {
          path:'contact',
          element:<ContactUs></ContactUs>,
        },
        {
          path:'login',
          element:<LogIn></LogIn>,
        },
        {
          path:'signup',
          element:<SignUp></SignUp>,
        },
       

      ]
    },
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'userHome',
          element:<UserHome></UserHome>,
        },

        {
          path:'cart',
          element:<MyCart></MyCart>,
        },
        {
        path:'payment',
        element:<Payment></Payment>,
        },
        {
          path: 'paymentHistory',
          element: <PaymentHistoy></PaymentHistoy>,
        },

        //admin routes
        {
         path:'adminHome',
         element:<AdminHome></AdminHome>
        },
        {
          path:'users',
          element:<AllUsers></AllUsers>,
        },
        {
          path:'updateItem/:id',
          element:<UpdateItem></UpdateItem>,
          loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
        },
        {
          path:'addItems',
          element:<AddItems></AddItems>,
        },
        {
          path:'manageItems',
          element:<ManageItems></ManageItems>
        }
      
      ]
    },
  ]);