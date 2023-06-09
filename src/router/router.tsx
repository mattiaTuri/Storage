import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../components/pages/dashboard/Dashboard";
import Books from "../components/pages/books/Books";
import Schedule from "../components/pages/schedule/Schedule";
import Settings from "../components/pages/settings/Settings";
import Profile from "../components/pages/profile/Profile";
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
        path: "/books",
        element: <Books />,
      },
      {
        path: "/schedule",
        element: <Schedule />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);
