import { createBrowserRouter } from "react-router-dom";
import DetailsCourse from "../pages/DetailsCourse";
import HomePage from "../pages/HomePage";
import LeftSide from "../pages/LeftSide";
import MainPage from "./MainPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage></MainPage>,
      children: [
       { 
        path: "/",
        element:<HomePage></HomePage>
    },
       { 
        path: "/home",
        element:<HomePage></HomePage>
    },
       { 
        path: "/detail/:id",
        loader:({params})=>fetch(`http://localhost:5000/course/${params.id}`),
        element:<DetailsCourse></DetailsCourse>
    },
     
      ]
    },
  ]);

  export default router;