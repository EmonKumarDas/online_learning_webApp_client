import { createBrowserRouter } from "react-router-dom";
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
        path: "/leftSide",
        loader:()=>fetch("http://localhost:5000/Course"),
        element:<LeftSide></LeftSide>
    }
      ]
    },
  ]);

  export default router;