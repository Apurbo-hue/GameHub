import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import { Children } from "react";
import Home from "../Pages/Home";
import Register from "./../Pages/Register"
import Login from "./../Pages/Login"
import AllGames from "./../Pages/AllGames"
import PrivateRouter from "../Provider/PrivateRouter";
import GameDetails from "../Pages/GameDetails";

const router = createBrowserRouter([
    {
        path: "/", element: <MainLayout></MainLayout>,
        children: [
            { path: "/", element: <Home></Home> },
            { path: "register", element: <Register></Register> },
            { path: "login", element: <Login></Login> },
            { path: "allGames",
                loader:()=>fetch('/public/games.json')
                , element: <AllGames></AllGames>
            },
            {
                path: "allGames/:id",
                loader: () => fetch('/public/games.json'),
                element:<PrivateRouter><GameDetails></GameDetails></PrivateRouter>
            }
            
    ]
    }

])

export default router;