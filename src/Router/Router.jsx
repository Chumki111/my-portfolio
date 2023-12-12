import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout/Layout";
import Home from "../Pages/Home/Home";
import About from "../Pages/Home/About";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path :'/about',
          element:<About/>
        }
      ]
    },
  ]);

  export default Router;