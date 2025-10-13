import { createBrowserRouter } from "react-router";
import { DashboardPage } from "./pages/DashboardPage";
import App from "./App";
import { Tasks } from "./pages/Tasks";
import { Mentors } from "./pages/Mentors";
import { Messages } from "./pages/Messages";
import { Settings } from "./pages/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: DashboardPage,
      },
      {
        path: "tasks",
        Component: Tasks,
      },
      {
        path: "mentors",
        Component: Mentors,
      },
      {
        path: "messages",
        Component: Messages,
      },
      {
        path: "settings",
        Component: Settings,
      },
    ],
  },
]);
