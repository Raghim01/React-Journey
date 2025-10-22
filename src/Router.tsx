import { createBrowserRouter } from "react-router";
import { MainLayout } from "./layouts/MainLayout";
import { NoNavLayout } from "./layouts/NoNavLayout";
import { DashboardPage } from "./pages/DashboardPage";
import { Tasks } from "./pages/Tasks";
import { Mentors } from "./pages/Mentors";
import { Messages } from "./pages/Messages";
import { Settings } from "./pages/Settings";
import { IndividualChatWrapper } from "./components/IndividualChat";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: "tasks", element: <Tasks /> },
      { path: "mentors", element: <Mentors /> },
      { path: "messages", element: <Messages /> },
      { path: "settings", element: <Settings /> },
    ],
  },
  {
    path: "/chats/:chatId",
    element: <NoNavLayout />,
    children: [
      {
        index: true,
        element: <IndividualChatWrapper />,
      },
    ],
  },
]);
