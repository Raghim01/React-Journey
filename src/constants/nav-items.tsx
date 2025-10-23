import ImportContactsIcon from "@mui/icons-material/ImportContactsOutlined";
import GridViewIcon from "@mui/icons-material/GridViewOutlined";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendarOutlined";
import MessageIcon from "@mui/icons-material/MessageOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export const routes = [
  {
    icon: <ImportContactsIcon />,
    label: "Overview",
    path: "/",
  },
  {
    icon: <GridViewIcon />,
    label: "Task",
    path: "/tasks",
  },
  {
    icon: <PermContactCalendarIcon />,
    label: "Mentors",
    path: "/mentors",
  },
  {
    icon: <MessageIcon />,
    label: "Message",
    path: "/messages",
  },
  {
    icon: <SettingsOutlinedIcon />,
    label: "Settings",
    path: "/settings",
  },
];
