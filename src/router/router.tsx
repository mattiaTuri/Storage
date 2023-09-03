import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../components/pages/dashboard/Dashboard";
import Storage from "../components/pages/storage/Storage";
import Settings from "../components/pages/settings/Settings";
import App from "../App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/storage",
        element: <Storage />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
    ],
  },
]);
