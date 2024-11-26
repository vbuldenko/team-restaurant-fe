import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Root layout component
    errorElement: <ErrorPage />, // Error boundary
    children: [
      { index: true, element: <HomePage /> }, // Default route
      // { path: "about", element: <About /> },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
