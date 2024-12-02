import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import HomePage from "../pages/Home/Home";
import MenuPage from "../pages/Menu";
import { Path } from "../types/Path";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Root layout component
    errorElement: <ErrorPage />, // Error boundary
    children: [
      { index: true, element: <HomePage /> }, // Default route
      { path: Path.Menu, element: <MenuPage /> },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
