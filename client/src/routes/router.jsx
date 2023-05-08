import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../components/authentication/Login";

import ErrorPage from "../components/error-page";
import Dashboard from "../components/dashboard/Dashboard";
import PrivateRoute from "../components/authentication/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <PrivateRoute />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
