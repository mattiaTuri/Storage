import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../components/pages/dashboard/Dashboard";
import Books from "../components/pages/books/Books";
import Diary from "../components/pages/diary/Diary";
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
        path: "/diary",
        element: <Diary />,
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
