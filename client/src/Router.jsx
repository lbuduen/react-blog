import { createBrowserRouter } from "react-router-dom";

import App from "./App"
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import AuthLayout from "./pages/AuthLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "settings", element: <Settings />, },
      { path: "post/:postId", element: <Single />, },
      { path: "write", element: <Write />, },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      { path: "register", element: <Register />, },
    ],
  },
]);

export default router;