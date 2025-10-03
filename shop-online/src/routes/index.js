
import PrivateRoutes from "../component/PrivateRoutes";
import LayoutDefautl from "../layout/LayoutDefautl";
import Home from "../Page/Home";
import Login from "../Page/Login";
import Register from "../Page/Register";
import Answers from "../Page/Answers";
import Quiz from "../Page/Quiz";
import Result from "../Page/Result";
import Topic from "../Page/Topic";
import Logout from "../Page/Logout";

export const routesconfig = [
    {
        path: "/",
        element: <LayoutDefautl />,
        children: [
            {
                path: "/",
                element: <Home />
            },

            {
                path: "Login",
                element: <Login />

            },
            {
                path: "Register",
                element: <Register />
            },
            {
                path: "Logout",
                element: <Logout />
            },
            {
                element: <PrivateRoutes />,
                children: [
                    {
                        path: "Answers",
                        element: <Answers />
                    },

                    {
                        path: "Quiz/:id",
                        element: <Quiz />
                    },
                    {
                    path:"Result/:id",
                    element:<Result/>
                    },

                    {
                    path:"Topic",
                    element:<Topic/>
                    },
                    

                ]
            }
        ]
    }
]