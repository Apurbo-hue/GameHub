import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import { Children } from "react";
import Home from "../Pages/Home";
import Register from "./../Pages/Register"
import Login from "./../Pages/Login"

const router = createBrowserRouter([
    {
        path: "/", element: <MainLayout></MainLayout>,
        children: [
            { path: "/", element: <Home></Home> },
            { path: "register", element: <Register></Register> },
            {path:"login",element:<Login></Login>}
            
    ]
    }

])

export default router;