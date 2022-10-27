import { createBrowserRouter } from "react-router-dom";
import CheckOutPage from "../pages/CheckOutPage";
import DetailsCourse from "../pages/DetailsCourse";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import SignIn from "../pages/SignIn";
import MainPage from "./MainPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
   
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>
      },

      {
        path: "/home",
        element: <HomePage></HomePage>
      },

      {
        path: "/detail/:id",
        loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`),
        element: <DetailsCourse></DetailsCourse>
      },
      {
        path: "/checkout/:id",
        loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`),
        element: <PrivateRoute>
          <CheckOutPage></CheckOutPage>
        </PrivateRoute>
      },
      {
        path: "/registration",
        element:<SignIn></SignIn>
      },
      {
        path: "/login",
        element:<Login></Login>
      },
     

    ]
  },
]);

export default router;