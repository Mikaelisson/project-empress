import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../components/error-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
]);
