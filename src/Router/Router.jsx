import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout/Layout";
import Home from "../Pages/Home/Home";
import About from "../Pages/Home/About";
import Contact from "../Pages/Contact/Contact";
import Skills from "../Pages/Home/Skills";
import Projects from "../Pages/Home/Projects";

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
        },
        {
        path :'/skills',
        element:<Skills/>
        },
        {
         path:'/projects',
         element:<Projects/>
        },
        {
          path:'/contact',
          element:<Contact/>
        }
      ]
    },
  ]);

  export default Router;