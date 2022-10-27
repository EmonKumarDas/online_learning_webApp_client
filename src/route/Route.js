import { createBrowserRouter } from "react-router-dom";
import BlogPage from "../pages/BlogPage";
import CheckOutPage from "../pages/CheckOutPage";
import DetailsCourse from "../pages/DetailsCourse";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import SignIn from "../pages/SignIn";
import MainPage from "./MainPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
   errorElement:<ErrorPage></ErrorPage>,
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
        loader: ({ params }) => fetch(`https://online-courses-server-emonkumardas.vercel.app/Course/${params.id}`),
        element: <DetailsCourse></DetailsCourse>
      },
      {
        path: "/checkout/:id",
        loader: ({ params }) => fetch(`https://online-courses-server-emonkumardas.vercel.app/Course/${params.id}`),
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
      {
        path: "/blog",
        element:<BlogPage></BlogPage>
      },
     

    ]
  },
]);

export default router;