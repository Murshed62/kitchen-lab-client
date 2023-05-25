import { createBrowserRouter } from "react-router-dom";
import LoginLayout from "../layout/LoginLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import Blog from "../Pages/Blog/Blog";
import Main from "../Pages/Main/Main";
import SingleRecipe from "../Pages/SingleRecipe/SingleRecipe";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginLayout></LoginLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path: 'login',
                element: <Login></Login>
              },
              {
                path: 'register',
                element: <Register></Register>
              },
              {
                path: '/',
                element: <Home></Home>
              },
              {
                path: '/blog',
                element: <Blog></Blog>
              },
        ]
    },
    {
      path:'recipe',
      element:<Main></Main>,
      children:[
        {
          path:':id',
          element:<PrivateRoute><SingleRecipe></SingleRecipe></PrivateRoute>,
          loader:({params}) =>fetch(`https://shishir-recipe-server.vercel.app/recipe/${params.id}`)
        }
      ]
    }

])

export default router;